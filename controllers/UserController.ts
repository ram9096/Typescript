import type { IUserService } from "../interfaces/IUserService.js";

class UserController{
    constructor(
        private userService:IUserService
    ){}

    getStudents(req:Request,res:Response){
        const students = this.userService.getStudent();
         
    }
}