"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from "@/lib/axios";
import axios from 'axios';

interface Product {
    _id: string;
    name: string;
    title: string;
    price: number;
    image: string[];
    category: string;
    qty: Record<string, number>;
    totalQty: number;
    size: string;
    rating: number;
}

interface ProductData {
    name: string;
    price: number;
}

interface ApiError {
    message: string;
}

interface ProductContextType {
    products: Product[];
    loading: boolean;
    error: string | null;
    createProduct: (productData: ProductData) => Promise<void>;
    getAllProducts: () => Promise<void>;
}

const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([] as Product[]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


    const createProduct = async (productData: ProductData) => {
        try {
            const response = await api.post('/product', productData);
            console.log('Product created:', response.data.newProduct);
            await getAllProducts();
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                const apiError: ApiError = err.response?.data;
                setError(apiError.message || 'Failed to create product');
            } else {
                setError('Failed to create product');
            }
            console.error(err);
        }
    };

    const getAllProducts = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await api.get('/product');
            setProducts(response.data.products);
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                const apiError: ApiError = err.response?.data;
                setError(apiError.message || 'Failed to fetch products');
            } else {
                setError('Failed to fetch products');
            }
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, loading, error, createProduct, getAllProducts }}>
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