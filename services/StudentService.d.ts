import type { IStudent } from "../interfaces/IStudent.js";
import type { IStudentRepository } from "../interfaces/IStudentRepository.js";
import type { IStudentService } from "../interfaces/IStudentService.js";
export declare class StudentService implements IStudentService {
    private repository;
    constructor(repository: IStudentRepository);
    createStudent(student: IStudent): Promise<IStudent>;
    findAll(): Promise<IStudent[]>;
    findById(id: string): Promise<IStudent | null>;
    updateById(id: string, data: Partial<IStudent>): Promise<IStudent | null>;
    deleteById(id: string): Promise<IStudent | null>;
}
//# sourceMappingURL=StudentService.d.ts.map