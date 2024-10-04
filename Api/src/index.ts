import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";
import { productRouter } from "./routes/product.router";
import { categoryRouter } from "./routes/category.router";
import { reviewRouter } from "./routes/review.router";
import { orderRouter } from "./routes/order.router";
import { userRouter } from "./routes/user.router";
import { authMiddleware } from "./middlewares/auth.middleware";
import { authRouter, uploadRouter } from "./routes";





connectToDatabase()
const app = express();
app.use(cors());
app.use(express.json());
// app.use(authMiddleware)


app.get("/", (_req, res) => {
    res.json({ message: "HelloWorld" });
});

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/review", reviewRouter);
app.use("/order", orderRouter);
app.use("/auth", authRouter)
app.use("/", uploadRouter);


app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});