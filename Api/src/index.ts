import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";
import { productRouter } from "./routes/product.router";
import { categoryRouter } from "./routes/category.router";
import { reviewRouter } from "./routes/review.router";
import { orderRouter } from "./routes/order.router";
import { userRouter } from "./routes/user.router";
import { login, register } from "./controllers";
import { authRouter } from "./routes";
import { authMiddleware } from "./middlewares/auth.middleware"



connectToDatabase()
const app = express();
app.use(cors());
app.use(express.json());
app.use(authMiddleware)


app.get("/", (_req, res) => {
    res.json({ message: "HelloWorld" });
});

app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/review", reviewRouter);
app.use("/order", orderRouter);
app.use("/", userRouter);
app.use("/user", authRouter)
app.post("/", login)
app.post("/", register)

app.listen(() => {
    console.log("Server is running on http://localhost:3001");
});