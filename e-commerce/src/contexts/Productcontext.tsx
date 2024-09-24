
"use client"
import React, { createContext, useContext, useState } from 'react';
import { api } from "@/lib/axios";

interface ProductContextType {
    createProduct: (productData: any) => Promise<void>;
}

const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [error, setError] = useState<string | null>(null);

    const createProduct = async (productData: any) => {
        try {
            const response = await api.post('/product', productData);
            console.log('Product created:', response.data.newProduct);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to create product');
            console.error(err);
        }
    };

    return (
        <ProductContext.Provider value={{ createProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProduct must be used within a ProductProvider');
    }
    return context;
};
