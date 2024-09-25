"use client"
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

interface FileUploadContextType {
    uploadFile: (ProductImage: File) => Promise<string | null>;
    uploadUrl: string | null;
    error: string | null;
}

const FileUploadContext = createContext<FileUploadContextType | undefined>(undefined);

export const useFileUpload = () => {
    const context = useContext(FileUploadContext);
    if (!context) {
        throw new Error('useFileUpload must be used within a FileUploadProvider');
    }
    return context;
};

export const FileUploadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [uploadUrl, setUploadUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const uploadFile = async (file: File): Promise<string | null> => {
        const formData = new FormData();
        formData.append('ProductImage', file);

        try {
            const response = await axios.post('http://localhost:3001/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setUploadUrl(response.data.secure_url);
            setError(null);
            return response.data.secure_url;
        } catch (err) {
            setError('File upload failed.');
            console.error(err);
            return null;
        }
    };

    return (
        <FileUploadContext.Provider value={{ uploadFile, uploadUrl, error }}>
            {children}
        </FileUploadContext.Provider>
    );
};
