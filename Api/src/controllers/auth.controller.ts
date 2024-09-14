import { RequestHandler } from 'express';

export const someProtectedRoute: RequestHandler = (req, res) => {
    const user = req.body

    if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    res.json({
        message: "Access granted",
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
        },
    });
};
