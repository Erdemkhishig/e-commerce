import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

interface CustomRequest extends Request {
  user?: any;
}

const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
  if (req.path.startsWith('/auth')) return next();
  if (req.path.startsWith('/product')) return next();
  if (req.path.startsWith('/category')) return next();

  const auth = req.headers.authorization;
  const token = auth?.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Нэвтрэнэ үү! invalid token' });

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload;
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Нэвтрэнэ үү! medehguie' });
  }
};

export { authMiddleware };


