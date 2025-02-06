import mongoose from "mongoose";
import "dotenv/config";

//monogdb connection

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database Connected");
  });
  await mongoose.connect(`${process.env.MONOG_URI}/dreamai`);
};

export default connectDB;
