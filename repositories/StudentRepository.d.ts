import type { IStudentRepository } from "../interfaces/IStudentRepository.js";
import type { IStudent } from "../interfaces/IStudent.js";
export declare class StudentRepository implements IStudentRepository {
    create(student: IStudent): Promise<IStudent>;
    findById(id: string): Promise<IStudent | null>;
    findAll(): Promise<IStudent[]>;
    update(id: string, data: Partial<IStudent>): Promise<IStudent | null>;
    delete(id: string): Promise<IStudent | null>;
    findOne(email: string): Promise<IStudent | null>;
}
//# sourceMappingURL=StudentRepository.d.ts.map