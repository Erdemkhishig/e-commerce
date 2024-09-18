"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authMiddleware = (req, res, next) => {
    if (req.path.startsWith('/login'))
        return next();
    if (req.path.startsWith('/register'))
        return next();
    const auth = req.headers.authorization;
    const token = auth === null || auth === void 0 ? void 0 : auth.split(' ')[1];
    if (!token)
        return res.status(401).json({ error: 'Нэвтрэнэ үү! invalid token' });
    try {
        const user = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        console.log(user, "user=====");
        // res.json(user)
        req.user = user;
        next();
    }
    catch (err) {
        return res.status(401).json({ error: 'Нэвтрэнэ үү! medehguie' });
    }
};
exports.authMiddleware = authMiddleware;
