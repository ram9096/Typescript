import type { IStudentService } from "../interfaces/IStudentService.js";
import type { Request, Response } from "express";
export declare class StudentController {
    private StudentService;
    constructor(StudentService: IStudentService);
    createStudent(req: Request, res: Response): Promise<void>;
    getAllStudent(req: Request, res: Response): Promise<void>;
    updateStudent(req: Request, res: Response): Promise<void>;
    deleteStudent(req: Request, res: Response): Promise<void>;
    getIdStudent(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=StudentController.d.ts.map