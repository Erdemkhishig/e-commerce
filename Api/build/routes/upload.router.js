"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadRouter = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const upload_controller_1 = require("../controllers/upload.controller");
const uploadRouter = express_1.default.Router();
exports.uploadRouter = uploadRouter;
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage });
uploadRouter.post("/upload", upload.single("ProductImage"), upload_controller_1.uploadFile);
