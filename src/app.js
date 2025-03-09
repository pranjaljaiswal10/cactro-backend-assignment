import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import gitRouter from "./routes/user.route.js";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use("/github", gitRouter);

app.use("*", (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "something wen't wrong" });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("server running on port:", port);
});
