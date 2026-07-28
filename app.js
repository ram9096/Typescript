import express from "express";
import router from "./routes/StudentRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
await connectDB();
dotenv.config();
let app = express();
app.use(express.json());
app.use('/', router);
app.listen(process.env.PORT, () => {
    console.log("Server running on http://localhost:5000");
});
//# sourceMappingURL=app.js.map