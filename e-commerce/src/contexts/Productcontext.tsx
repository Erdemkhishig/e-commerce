"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from "@/lib/axios";

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

interface ProductContextType {
    products: Product[];
    loading: boolean;
    error: string | null;
    createProduct: (productData: any) => Promise<void>;
    getAllProducts: () => Promise<void>;

}

const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


    const createProduct = async (productData: any) => {
        try {
            const response = await api.post('/product', productData);
            console.log('Product created:', response.data.newProduct);
            // Optionally fetch all products again to update the list
            await getAllProducts();
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to create product');
            console.error(err);
        }
    };

    const getAllProducts = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await api.get('/product'); // Adjust the endpoint if needed
            setProducts(response.data.products);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to fetch products');
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