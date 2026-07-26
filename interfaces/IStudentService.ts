import type { IStudent } from "./IStudent.js";

export interface IStudentService{
    register(student:IStudent):Promise<IStudent>;
    getStudents():Promise<IStudent>
}