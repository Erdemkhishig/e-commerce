"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CartProductsContextType {
    cartProducts: string[];
    setCartProducts: React.Dispatch<React.SetStateAction<string[]>>;
}

const CartProductsContext = createContext<CartProductsContextType | undefined>(undefined);

export const useCartProducts = () => {
    const context = useContext(CartProductsContext);
    if (!context) {
        throw new Error("useCartProducts must be used within a CartProductsProvider");
    }
    return context;
};

export const CartProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartProducts, setCartProducts] = useState<string[]>([]);

    useEffect(() => {
        const storedCartProducts = localStorage.getItem('cartProducts');
        if (storedCartProducts) {
            setCartProducts(JSON.parse(storedCartProducts));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }, [cartProducts]);

    return (
        <CartProductsContext.Provider value={{ cartProducts, setCartProducts }}>
            {children}
        </CartProductsContext.Provider>
    );
};
