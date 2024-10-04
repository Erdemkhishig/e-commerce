"use client";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { TbSum } from "react-icons/tb";
import { useLikedProducts } from '@/contexts/Likedcontext';
import { useCartProducts } from "@/contexts/Cartcontext";
import { Rate } from "@/components/Rate";

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

export const Detailer2: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [product, setProduct] = useState<Product | null>(null);
    const [selectedQty, setSelectedQty] = useState<number>(1);
    const [isRateVisible, setIsRateVisible] = useState<boolean>(false);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const { likedProducts, setLikedProducts } = useLikedProducts();
    const { cartProducts, setCartProducts } = useCartProducts();

    useEffect(() => {
        const getProductById = async () => {
            try {
                const response = await api.get(`/product/${id}`);
                setProduct(response.data.product);
                setSelectedQty(1); // Reset quantity when product loads
            } catch (err) {
                console.error(err);
            }
        };
        getProductById();
    }, [id]);

    const toggleRateVisibility = () => {
        setIsRateVisible(prev => {
            console.log("Toggling Rate Visibility: Current State:", prev);
            return !prev;
        });
    };

    const incrementQty = () => {
        if (product && selectedQty < product.totalQty) {
            setSelectedQty(prev => prev + 1);
        }
    };

    const decrementQty = () => {
        if (selectedQty > 1) {
            setSelectedQty(prev => prev - 1);
        }
    };

    const handleHeartClick = () => {
        if (product) {
            setLikedProducts(prev => {
                if (prev.includes(product._id)) {
                    return prev.filter(id => id !== product._id);
                } else {
                    return [...prev, product._id];
                }
            });
        }
    };

    const handleCartClick = (productId: string) => {
        setCartProducts(prev => {
            if (Array.isArray(prev)) {
                return prev.includes(productId) ? prev : [...prev, productId];
            }
            return [productId];
        });
    };

    return (
        <div className="w-1/2 flex flex-col justify-center gap-4">
            <p className="w-16 h-8 border-2 border-blue-500 rounded-2xl flex items-center justify-center">шинэ</p>
            <div className="flex gap-4 items-center">
                <p className="font-bold text-2xl">{product?.name}</p>
                <button onClick={handleHeartClick}>
                    {likedProducts.includes(product?._id || '') ? (
                        <FaHeart color="red" size={20} />
                    ) : (
                        <FaRegHeart color="black" size={20} />
                    )}
                </button>
            </div>
            <p className="text-lg">{product?.title}</p>
            <p>{product?.category.join(", ")}</p>
            <button className="underline flex justify-start">Хэмжээний заавар</button>
            <div className="flex gap-2">
                {product?.size.map((item, id) => (
                    <div key={id}>
                        <button
                            className={`text-md w-8 h-8 p-6 rounded-full border-2 border-black flex items-center justify-center 
                            ${selectedSize === item ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
                            onClick={() => setSelectedSize(item)}
                        >
                            {item}
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex gap-4 items-center">
                <button className="text-2xl w-8 h-8 rounded-full border-2 border-black flex items-center justify-center hover:text-white p-6 hover:bg-black" onClick={decrementQty}>-</button>
                <span>{selectedQty}</span>
                <button className="text-2xl w-8 h-8 rounded-full border-2 border-black flex items-center justify-center hover:text-white p-6 hover:bg-black" onClick={incrementQty}>+</button>
            </div>
            <p className="font-bold text-2xl">{product?.price}</p>
            <p className="flex text-xl items-center"><TbSum /> = {product?.totalQty}</p>
            <button
                onClick={() => product && handleCartClick(product._id)}
                className="p-2 rounded-2xl border-2 border-blue-600 bg-blue-600 text-white w-40">
                Сагсанд хийх
            </button>

            <div className="flex gap-2">
                <p>Үнэлгээ</p>
                <button onClick={toggleRateVisibility} className="underline text-blue-400">
                    {isRateVisible ? "бүгдийг хураах" : "бүгдийг харах"}
                </button>
            </div>
            <div className="flex gap-3 items-center relative">
                <FaStar fill="yellow" size={24} /><FaStar fill="yellow" size={24} /><FaStar fill="yellow" size={24} /><FaStar fill="yellow" size={24} />
                <p>4.6(24)</p>
            </div>
            <div className="flex flex-col justify-end top-[39rem] ml-[13rem] absolute">
                <div className="w-full py-12">
                    {isRateVisible && <Rate />}
                </div>
            </div>
        </div>
    );
};
