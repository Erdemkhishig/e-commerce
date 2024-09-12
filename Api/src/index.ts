import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";
import { productRouter } from "./routes/product.router";
import { categoryRouter } from "./routes/category.router";


connectToDatabase()
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
    res.json({ message: "HelloWorld" });
});

app.use("/product", productRouter);
app.use("/category", categoryRouter);

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});