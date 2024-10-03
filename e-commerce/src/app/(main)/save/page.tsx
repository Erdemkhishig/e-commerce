"use client";
import * as React from "react";
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
import { useLikedProducts } from '@/contexts/Likedcontext';
import { useProduct } from '@/contexts/Productcontext';
import { useCartProducts } from "@/contexts/Cartcontext";
import { useParams } from "next/navigation";

interface Product {
    _id: string;
    name: string;
    title: string;
    price: number;
    image: string[];
    category: string[];
    qty: Record<string, number>;
    totalQty: number;
    size: string[];
    rating: number;
}

export default function Save() {
    const { id } = useParams();
    const { likedProducts, setLikedProducts } = useLikedProducts();
    const { products } = useProduct();
    const { cartProducts, setCartProducts } = useCartProducts();

    const savedProducts = React.useMemo(
        () => products.filter(product => Array.isArray(likedProducts) && likedProducts.includes(product._id)),
        [products, likedProducts]
    );

    const handleHeartClick = (productId: string) => {
        setLikedProducts(prev => Array.isArray(prev) ? prev.filter(id => id !== productId) : []);
    };

    const handleCartClick = (productId: string) => {
        setCartProducts(prev => {
            if (Array.isArray(prev)) {
                return prev.includes(productId) ? prev : [...prev, productId];
            }
            return [productId]; // Default case if not an array
        });
    };


    return (
        <div className="bg-gray-100">
            <div className="max-w-screen-xl m-auto flex flex-col items-center justify-center gap-12 pb-96">
                <div className="w-2/3 flex justify-start items-start flex-col gap-8 mt-32">
                    <p className="text-2xl font-black">Хадгалсан бараа ({savedProducts.length})</p>
                    <div className='flex gap-4 flex-col w-full'>
                        {savedProducts.map((product) => (
                            <div className='flex w-full border-2 p-4 rounded-2xl bg-white' key={product._id}>
                                <div className='overflow-hidden p-4'>
                                    <Image
                                        className='w-96 h-48 rounded-2xl'
                                        src={product.image[0]}
                                        width={80}
                                        height={40}
                                        alt={product.name}
                                    />
                                </div>
                                <div className='flex gap-4 flex-col justify-center items-center px-2 w-[40%]'>
                                    <p>{product.name}</p>
                                    <p className='font-bold'>{product.price}₮</p>
                                    <button
                                        onClick={() => handleCartClick(product._id)}
                                        className="p-2 rounded-2xl border-2 border-blue-600 bg-blue-600 text-white w-28">
                                        Сагслах
                                    </button>
                                </div>
                                <div className="w-full flex items-center justify-end px-8">
                                    <button
                                        onClick={() => handleHeartClick(product._id)}
                                        aria-label={`Remove ${product.name} from saved items`}>
                                        <FaHeart size={36} color="red" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
