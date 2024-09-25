import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import { Buffer } from "buffer";

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// Define a custom type for the upload response
interface CustomUploadResponse {
    secure_url: string;
    // You can add other properties if needed, e.g., public_id, url, etc.
}

async function handleUpload(file: string): Promise<CustomUploadResponse> {
    const res = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });

    // Return only the secure_url as per your custom interface
    return { secure_url: res.secure_url };
}

export const uploadFile = async (req: Request, res: Response): Promise<void> => {
    if (!req.file) {
        res.status(400).send("No file uploaded.");
        return;
    }

    try {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        const dataURI = `data:${req.file.mimetype};base64,${b64}`;
        const cldRes = await handleUpload(dataURI);

        // Return only the secure_url
        res.json(cldRes);
    } catch (error) {
        console.error(error);
        res.status(500).send("File upload failed.");
    }
};
