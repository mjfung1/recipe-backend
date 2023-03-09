import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config()


import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", express.static("/build"))

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(process.env.MONGO_URI);

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
}); 