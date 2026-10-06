
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from "./routes/userRoute.js"


dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

app.use("/api/v1/users",userRoutes)


const PORT=process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});