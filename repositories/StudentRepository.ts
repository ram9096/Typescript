import type { IStudentRepository } from "../interfaces/IStudentRepository.js";
import type { IStudent } from "../interfaces/IStudent.js";
import { Student } from "../models/studentModel.js";

export class StudentRepository implements IStudentRepository{
    async create(student: IStudent): Promise<IStudent> {
        return await Student.create(student)
    }

    async findById(id: string): Promise<IStudent | null> {
        return await Student.findById(id)
    }
    async findAll(): Promise<IStudent[]> {
        return await Student.find()
    }
    async update(id: string, data: Partial<IStudent>): Promise<IStudent | null> {
        return await Student.findByIdAndUpdate(id,data,{
            new:true
        })
    }
    async delete(id: string): Promise<IStudent|null> {
        return await Student.findByIdAndDelete(id)
    }
    async findOne(email: string): Promise<IStudent | null> {
        return await Student.findOne({email:email})
    }
}