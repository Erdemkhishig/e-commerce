"use client"
import React, { createContext, useContext, useState } from 'react';
import { api } from "@/lib/axios";

interface ProductContextType {
    createProduct: (productData: any) => Promise<void>;
    getProducts: () => Promise<void>;
    products: any[]; // You might want to define a more specific type for products
    error: string | null;
}

const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    const createProduct = async (productData: any) => {
        try {
            const response = await api.post('/product', productData);
            console.log('Product created:', response.data.newProduct);
            // Optionally refetch products after creating a new one
            await getProducts();
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to create product');
            console.error(err);
        }
    };

    const getProducts = async () => {
        try {
            const response = await api.get('/product');
            setProducts(response.data.product);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to fetch products');
            console.error(err);
        }
    };

    return (
        <ProductContext.Provider value={{ createProduct, getProducts, products, error }}>
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
