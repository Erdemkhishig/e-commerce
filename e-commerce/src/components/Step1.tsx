"use client";
import * as React from "react";
import Image from 'next/image';
import { useLikedProducts } from '@/contexts/Likedcontext';
import { useProduct } from '@/contexts/Productcontext';
import { useCartProducts } from "@/contexts/Cartcontext";
import { RiDeleteBin6Line } from "react-icons/ri";
import Link from "next/link";

interface Product {
    _id: string;
    name: string;
    title: string;
    price: number | string;
    image: string[];
    category: string[];
    qty: Record<string, number>;
    totalQty: number;
    size: string[];
    rating: number;
}

export const Step1 = () => {
    const { products } = useProduct();
    const { cartProducts, setCartProducts } = useCartProducts(); // Ensure setCartProducts is available

    const chosenProducts = products.filter(product => Array.isArray(cartProducts) && cartProducts.includes(product._id));

    const totalPrice = chosenProducts.reduce((total, product) => {
        const price = typeof product.price === 'string' ? parseFloat(product.price) : product.price;
        return total + price;
    }, 0);

    const handleDelete = (productId: string) => {
        setCartProducts(prev => prev.filter(id => id !== productId));
    };

    return (
        <div className="w-full flex flex-col items-center">
            <p className="py-8 px-12 text-2xl font-black">1. Сагс ({chosenProducts.length})</p>
            <div className='flex gap-4 flex-col w-full px-8'>
                {chosenProducts.map(product => (
                    <div key={product._id} className='flex w-full border-2 border-gray-100 p-4 rounded-2xl bg-white'>
                        <div className='overflow-hidden rounded-2xl'>
                            <Image
                                className='w-48 h-36'
                                src={product.image[0]}
                                width={120}
                                height={80}
                                alt={product.name}
                            />
                        </div>

                        <div className='flex gap-4 flex-col justify-center items-center px-2 w-[40%]'>
                            <p className="text-2xl">{product.name}</p>
                            <p className='font-bold text-2xl'>{product.price}₮</p>
                        </div>
                        <button className="w-full flex items-center justify-end px-8" onClick={() => handleDelete(product._id)}>
                            <RiDeleteBin6Line size={36} />
                        </button>
                    </div>
                ))}
            </div>
            <div className='px-12 flex flex-col p-4 rounded-2xl bg-white mt-4'>
                <div className='flex justify-between font-bold'>
                    <p>Нийт үнэ:</p>
                    <p>{totalPrice}₮</p>
                </div>
            </div>

            <div className="w-full flex justify-end">
                <Link href="/order" className="w-[254px] h-8 bg-blue-700 py-5 rounded-3xl flex items-center justify-center text-white mb-6">
                    Худалдан авах
                </Link>
            </div>
        </div>
    );
};
