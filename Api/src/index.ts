import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";
import { productRouter } from "./routes/product.router";
import { categoryRouter } from "./routes/category.router";
import { reviewRouter } from "./routes/review.router";
import { orderRouter } from "./routes/order.router";
import { userRouter } from "./routes/user.router";
import { authRouter } from "./routes";
import { authMiddleware } from "./middlewares/auth.middleware";
import { v2 as cloudinary } from "cloudinary";
import Multer, { memoryStorage } from "multer";




connectToDatabase()
const app = express();
app.use(cors());
app.use(express.json());
// app.use(authMiddleware)


app.get("/", (_req, res) => {
    res.json({ message: "HelloWorld" });
});

app.use("/", userRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/review", reviewRouter);
app.use("/order", orderRouter);
app.use("/user", authRouter)

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const storage = memoryStorage();

const upload = Multer({
    storage,
});

async function handleUpload(file: string) {
    const res = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });

    return res;
}

app.post("/upload", upload.single("image"), async (req, res) => {
    if (!req.file) return res.status(400).send("No file uploaded.");

    try {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cldRes = await handleUpload(dataURI);
        res.json(cldRes);
    } catch (error) {
        console.log(error);
    }
});

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});