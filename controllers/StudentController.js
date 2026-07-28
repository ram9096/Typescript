export class StudentController {
    StudentService;
    constructor(StudentService) {
        this.StudentService = StudentService;
    }
    async createStudent(req, res) {
        try {
            const student = await this.StudentService.createStudent(req.body);
            res.status(201).json({
                success: true,
                message: "Student created successfully",
                data: student,
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: "Failed to create student",
            });
        }
    }
    async getAllStudent(req, res) {
        try {
            const student = await this.StudentService.findAll();
            if (!student) {
                res.status(404).json({
                    success: false,
                    message: "Student not found"
                });
                return;
            }
            res.status(200).json({
                success: true,
                data: student,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Something went wrong",
            });
        }
    }
    async updateStudent(req, res) {
        try {
            const student = await this.StudentService.updateById(req.params.id, req.body);
            if (!student) {
                res.status(404).json({
                    success: false,
                    message: "Student not found"
                });
                return;
            }
            res.status(200).json({
                success: true,
                data: student,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Something went wrong",
            });
        }
    }
    async deleteStudent(req, res) {
        try {
            const student = await this.StudentService.deleteById(req.params.id);
            if (!student) {
                res.status(404).json({
                    success: false,
                    message: "Student not found"
                });
                return;
            }
            res.status(200).json({
                success: true,
                data: student,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Something went wrong",
            });
        }
    }
    async getIdStudent(req, res) {
        try {
            const student = await this.StudentService.findById(req.params.id);
            if (!student) {
                res.status(404).json({
                    success: false,
                    message: "Student not found"
                });
                return;
            }
            res.status(200).json({
                success: true,
                data: student,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Something went wrong",
            });
        }
    }
}
//# sourceMappingURL=StudentController.js.map