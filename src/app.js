import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB()
  .then(() => {
    const port = process.env.PORT || 4000;
  })
  .catch((err) => {
    console.log("MONOGODN connection FAILED", err);
  });
