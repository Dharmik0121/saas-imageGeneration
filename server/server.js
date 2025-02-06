import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/connection.js";
import userRouter from "./routes/userRoute.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());
await connectDB();

//Routes
app.use("/api/users", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => res.send("API Working"));

app.listen(PORT, () => console.log(`Server running at port number: ${PORT}`));
