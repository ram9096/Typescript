import { Student } from "../models/studentModel.js";
export class StudentRepository {
    async create(student) {
        return await Student.create(student);
    }
    async findById(id) {
        return await Student.findById(id);
    }
    async findAll() {
        return await Student.find();
    }
    async update(id, data) {
        return await Student.findByIdAndUpdate(id, data, {
            new: true
        });
    }
    async delete(id) {
        return await Student.findByIdAndDelete(id);
    }
    async findOne(email) {
        return await Student.findOne({ email: email });
    }
}
//# sourceMappingURL=StudentRepository.js.map