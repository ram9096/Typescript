import type { IStudent } from "./IStudent.js";

export interface IStudentRepository{
    create(student:IStudent):Promise<IStudent>;
    findById(id:string):Promise<IStudent|null>;
    findAll():Promise<IStudent[]>;
    update(id:string,data:Partial<IStudent>):Promise<IStudent|null>
    delete(id:string):Promise<IStudent|null>;

}

