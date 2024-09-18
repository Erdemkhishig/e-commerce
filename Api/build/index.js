"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const product_router_1 = require("./routes/product.router");
const category_router_1 = require("./routes/category.router");
const review_router_1 = require("./routes/review.router");
const order_router_1 = require("./routes/order.router");
const user_router_1 = require("./routes/user.router");
const controllers_1 = require("./controllers");
const routes_1 = require("./routes");
const auth_middleware_1 = require("./middlewares/auth.middleware");
(0, database_1.connectToDatabase)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(auth_middleware_1.authMiddleware);
app.get("/", (_req, res) => {
    res.json({ message: "HelloWorld" });
});
app.use("/product", product_router_1.productRouter);
app.use("/category", category_router_1.categoryRouter);
app.use("/review", review_router_1.reviewRouter);
app.use("/order", order_router_1.orderRouter);
app.use("/", user_router_1.userRouter);
app.use("/user", routes_1.authRouter);
app.post("/", controllers_1.login);
app.post("/", controllers_1.register);
app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
