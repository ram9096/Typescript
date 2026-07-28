import type { IStudentService } from "../interfaces/IStudentService.js";
import type { Request,Response } from "express";
export class StudentController{
    constructor(
        private StudentService:IStudentService
    ){}

    async createStudent(req:Request,res:Response):Promise<void>{
        try{

            const student = await this.StudentService.createStudent(req.body)
            res.status(201).json({
                success: true,
                message: "Student created successfully",
                data: student,
            });

        }catch(error){

            console.error(error)
            res.status(500).json({
                success: false,
                message: "Failed to create student",
            });

        }
    }

    async getAllStudent(req:Request,res:Response):Promise<void>{
        try{

            const student = await this.StudentService.findAll()
            if(!student){
                res.status(404).json({
                    success:false,
                    message:"Student not found"
                })
                return ;
            }

            res.status(200).json({
                success: true,
                data: student,
            });

        }catch(error){

            res.status(500).json({
                success: false,
                message: "Something went wrong",
            });
        }
    }

    async updateStudent(req:Request,res:Response):Promise<void>{
        try{

            const student = await this.StudentService.updateById(req.params.id as string,req.body)

            if(!student){
                res.status(404).json({
                    success:false,
                    message:"Student not found"
                })
                return ;
            }

            res.status(200).json({
                success: true,
                data: student,  
            });

        }catch(error){

            res.status(500).json({
                success: false,
                message: "Something went wrong",
            });
        }
    }
    async deleteStudent(req:Request,res:Response):Promise<void>{
        try{

            const student = await this.StudentService.deleteById(req.params.id as string)
            if(!student){
                res.status(404).json({
                    success:false,
                    message:"Student not found"
                })
                return ;
            }

            res.status(200).json({
                success: true,
                data: student,  
            });

        }catch(error){

            res.status(500).json({
                success: false,
                message: "Something went wrong",
            });

        }
    }
    async getIdStudent(req:Request,res:Response):Promise<void>{
        try{

            const student = await this.StudentService.findById(req.params.id as string)
            if(!student){
                res.status(404).json({
                    success:false,
                    message:"Student not found"
                })
                return ;
            }

            res.status(200).json({
                success: true,
                data: student,  
            });

        }catch(error){

            res.status(500).json({
                success: false,
                message: "Something went wrong",
            });

        }
    }
}
