"use client"
import React, { useState } from 'react';
import { useFileUpload } from '@/contexts/Uploadcontext';
import Image from 'next/image';

const FileUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const { uploadFile, uploadUrl, error } = useFileUpload();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setFile(files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        setIsUploading(true); // Set uploading state to true
        await uploadFile(file);
        setIsUploading(false); // Reset uploading state after upload
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={isUploading}>
                {isUploading ? 'Uploading...' : 'Upload'}
            </button>
            {uploadUrl && (
                <div>
                    <p>File uploaded successfully!</p>
                    <Image
                        src={uploadUrl}
                        alt="Uploaded file"
                        width={500}
                        height={400}
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default FileUpload;
