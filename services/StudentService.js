export class StudentService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async createStudent(student) {
        try {
            const existingStudent = await this.repository.findOne(student.email);
            const studentData = await this.repository.create(student);
            if (existingStudent) {
                throw new Error("Student with this email already exists.");
            }
            return studentData;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            throw new Error("Failed to create student.");
        }
    }
    async findAll() {
        try {
            return await this.repository.findAll();
        }
        catch (error) {
            throw new Error("Failed to fetch students.");
        }
    }
    async findById(id) {
        try {
            const student = await this.repository.findById(id);
            if (!student) {
                throw new Error("Student not found.");
            }
            return student;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            throw new Error("Failed to fetch student.");
        }
    }
    async updateById(id, data) {
        try {
            const student = await this.repository.update(id, data);
            if (!student) {
                throw new Error("Student not found.");
            }
            return student;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            throw new Error("Failed to update student.");
        }
    }
    async deleteById(id) {
        try {
            const student = await this.repository.delete(id);
            if (!student) {
                throw new Error("Student not found.");
            }
            return student;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            throw new Error("Failed to delete student.");
        }
    }
}
//# sourceMappingURL=StudentService.js.map