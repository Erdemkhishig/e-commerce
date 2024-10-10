"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface LikedProductsContextType {
    likedProducts: string[];
    setLikedProducts: React.Dispatch<React.SetStateAction<string[]>>;
}

const LikedProductsContext = createContext<LikedProductsContextType | undefined>(undefined);

export const useLikedProducts = () => {
    const context = useContext(LikedProductsContext);
    if (!context) {
        throw new Error("useLikedProducts must be used within a LikedProductsProvider");
    }
    return context;
};

export const LikedProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [likedProducts, setLikedProducts] = useState<string[]>(() => {
        if (typeof window !== 'undefined') { // Check if we are in the browser
            const storedLikedProducts = localStorage.getItem('likedProducts');
            return storedLikedProducts ? JSON.parse(storedLikedProducts) : [];
        }
        return [];
    });

    useEffect(() => {
        if (typeof window !== 'undefined') { // Check if we are in the browser
            localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
        }
    }, [likedProducts]);

    return (
        <LikedProductsContext.Provider value={{ likedProducts, setLikedProducts }}>
            {children}
        </LikedProductsContext.Provider>
    );
};
