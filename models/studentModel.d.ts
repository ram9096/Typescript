import mongoose from "mongoose";
import type { IStudent } from "../interfaces/IStudent.js";
export declare const Student: mongoose.Model<IStudent, {}, {}, {}, mongoose.Document<unknown, {}, IStudent, {}, mongoose.DefaultSchemaOptions> & IStudent & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IStudent>;
//# sourceMappingURL=studentModel.d.ts.map