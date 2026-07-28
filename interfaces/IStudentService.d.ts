import type { IStudent } from "./IStudent.js";
export interface IStudentService {
    createStudent(student: IStudent): Promise<IStudent>;
    findAll(): Promise<IStudent[]>;
    findById(id: string): Promise<IStudent | null>;
    updateById(id: string, data: Partial<IStudent>): Promise<IStudent | null>;
    deleteById(id: string): Promise<IStudent | null>;
}
//# sourceMappingURL=IStudentService.d.ts.map