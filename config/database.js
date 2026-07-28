import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDB = async () => {
    try {
        console.log(process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected Successfully");
    }
    catch (error) {
        console.error("MongoDB Connection Failed\n", error);
        process.exit(1);
    }
};
//# sourceMappingURL=database.js.map