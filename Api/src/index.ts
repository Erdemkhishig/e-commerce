import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";


connectToDatabase()
const app = express();

app.get("/", (_req, res) => {
    res.json({ message: "HelloWorld" });
});

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});