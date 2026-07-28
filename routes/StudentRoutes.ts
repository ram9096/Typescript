import { Router } from "express";
import { StudentRepository } from "../repositories/StudentRepository.js";
import { StudentService } from "../services/StudentService.js";
import { StudentController } from "../controllers/StudentController.js";

const router = Router()

const studentRepo = new StudentRepository()
const studentService = new StudentService(studentRepo)
const studentController = new StudentController(studentService)

router.get('/',(req,res)=>studentController.getAllStudent(req,res,))
router.get('/:id',(req,res)=>studentController.getIdStudent(req,res))
router.post('/add-student',(req,res)=>studentController.createStudent(req,res))
router.put('/edit-student/:id',(req,res)=>studentController.updateStudent(req,res))
router.delete('/delete-student/:id',(req,res)=>studentController.deleteStudent(req,res))

export default router