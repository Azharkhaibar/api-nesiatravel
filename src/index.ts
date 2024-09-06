import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/users";
import destinasiRouter from './routes/destinasi'
import pembimbingRouter from './routes/pembimbing'
dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use("/api", userRouter);

app.use('/api', pembimbingRouter);

app.use("/api", destinasiRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
