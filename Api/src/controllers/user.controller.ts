import { Request, Response } from 'express';

interface CustomRequest extends Request {
    user?: any;
}

const getMe = async (req: CustomRequest, res: Response): Promise<void> => {
    try {
        const user = req.user;

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export { getMe };


