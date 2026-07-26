import type { IStudentService } from "../interfaces/IStudentService.js";

class UserController{
    constructor(
        private userService:IStudentService
    ){}

    getStudents(req:Request,res:Response){
        const students = this.userService.getStudents();
         
    }
}