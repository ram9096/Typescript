import mongoose, { Schema } from "mongoose";
const studentSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    age: {
        type: Number,
        required: true
    },
    contact: {
        type: Number,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true
});
export const Student = mongoose.model("Student", studentSchema);
//# sourceMappingURL=studentModel.js.map