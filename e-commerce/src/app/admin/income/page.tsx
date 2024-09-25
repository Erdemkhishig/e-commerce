"use client"
import React, { useState } from 'react';
import { useFileUpload } from '@/contexts/Uploadcontext';

const FileUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const { uploadFile, uploadUrl, error } = useFileUpload();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setFile(files[0]);
        }
        console.log(setFile)
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        await uploadFile(file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {uploadUrl && <p>File uploaded successfully! {uploadUrl}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default FileUpload;
