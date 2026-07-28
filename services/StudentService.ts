import type { IStudent } from "../interfaces/IStudent.js";
import type { IStudentRepository } from "../interfaces/IStudentRepository.js";
import type { IStudentService } from "../interfaces/IStudentService.js";


export class StudentService implements IStudentService{

    constructor(private repository:IStudentRepository){}

    async createStudent(student: IStudent): Promise<IStudent> {
        try{

            const existingStudent = await this.repository.findOne(student.email)
            const studentData =  await this.repository.create(student);
            if (existingStudent) {
                throw new Error("Student with this email already exists.");
            }
            return studentData;

        }catch(error){

            if (error instanceof Error) {
                throw new Error(error.message);
            }

            throw new Error("Failed to create student.");

        }
    }
    async findAll(): Promise<IStudent[]> {
        try{

            return await this.repository.findAll()

        }catch(error){

            throw new Error("Failed to fetch students.");

        }
    }
    
    async findById(id: string): Promise<IStudent | null> {
        try{

            const student = await this.repository.findById(id)
            if (!student) {
                throw new Error("Student not found.");
            }

            return student;

        }catch(error){

            if (error instanceof Error) {
                throw new Error(error.message);
            }

            throw new Error("Failed to fetch student.");
        }
    }
    async updateById(id: string, data: Partial<IStudent>): Promise<IStudent | null> {
        try{

            const student = await this.repository.update(id,data)
            if (!student) {
                throw new Error("Student not found.");
            }

            return student;

        }catch(error){

            if (error instanceof Error) {
                throw new Error(error.message);
            }

            throw new Error("Failed to update student.");
        }
    }
    async deleteById(id: string): Promise<IStudent | null> {
        try{
            
            const student = await this.repository.delete(id)
            if (!student) {
                throw new Error("Student not found.");
            }

            return student;
            
        }catch(error){

            if (error instanceof Error) {
                throw new Error(error.message);
            }

            throw new Error("Failed to delete student.");
        }
    }
}