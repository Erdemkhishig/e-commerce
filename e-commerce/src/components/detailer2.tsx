"use client";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { TbSum } from "react-icons/tb";

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

export const Detailer2 = () => {
    const { id } = useParams();

    const [product, setProduct] = useState<Product | null>(null);
    const [selectedQty, setSelectedQty] = useState<number>(1);
    const [isRateVisible, setIsRateVisible] = useState<boolean>(false);

    useEffect(() => {
        const getProductById = async () => {
            try {
                const response = await api.get(`/product/${id}`);
                setProduct(response.data.product);
                setSelectedQty(1); // Reset quantity when product loads
            } catch (err: any) {
                console.error(err);
            }
        };
        getProductById();
    }, [id]);

    const toggleRateVisibility = () => {
        setIsRateVisible(!isRateVisible);
    };

    const incrementQty = () => {
        if (selectedQty < (product?.totalQty || 0)) {
            setSelectedQty(prev => prev + 1);
        }
    };

    const decrementQty = () => {
        if (selectedQty > 1) {
            setSelectedQty(prev => prev - 1);
        }
    };

    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [isLiked, setIsLiked] = useState(false); // State to track if the heart is liked

    const handleHeartClick = () => {
        setIsLiked(prev => !prev); // Toggle the liked state
    };

    return (
        <div className="w-1/2 flex flex-col justify-center gap-4">
            <p className="w-16 h-8 border-2 border-blue-500 rounded-2xl flex items-center justify-center">шинэ</p>
            <div className="flex gap-4 items-center">
                <p className="font-bold text-2xl">{product?.name}</p>
                <button onClick={handleHeartClick}>
                    {isLiked ? (
                        <FaHeart color="red" size={20} /> // Filled heart when liked
                    ) : (
                        <FaRegHeart color="black" size={20} /> // Regular heart when not liked
                    )}
                </button>
            </div>
            <p className="text-lg">{product?.title}</p>
            <p>{product?.category}</p>
            <button className="underline flex justify-start">Хэмжээний заавар</button>
            <div className="flex gap-2">
                {product?.size.map((item, id) => (
                    <div key={id}>
                        <button
                            className={`text-md w-8 h-8 rounded-full border-2 border-black flex items-center justify-center p-6 
                            ${selectedSize === item ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
                            onClick={() => setSelectedSize(item)}
                        >
                            {item}
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex gap-4 items-center">
                <button className="text-2xl w-8 h-8 rounded-full border-2 border-black flex items-center justify-center hover:text-white p-6 hover:bg-black " onClick={decrementQty}>-</button>
                <span>{selectedQty}</span>
                <button className="text-2xl w-8 h-8 rounded-full border-2 border-black flex items-center justify-center hover:text-white p-6 hover:bg-black" onClick={incrementQty}>+</button>
            </div>
            <p className="font-bold text-2xl">{product?.price}</p>
            <p className="flex text-xl items-center"><TbSum /> = {product?.totalQty}</p>
            <button className="w-44 text-white bg-blue-500 h-8 border-2 border-blue-500 rounded-2xl flex items-center justify-center">Сагсанд нэмэх</button>
            <div className="flex gap-2">
                <p>Үнэлгээ</p>
                <button onClick={toggleRateVisibility} className="underline text-blue-400">
                    {isRateVisible ? "бүгдийг хураах" : "бүгдийг харах"}
                </button>
            </div>
            <div className="flex gap-3 items-center">
                <FaStar fill="yellow" size={24} /><FaStar fill="yellow" size={24} /><FaStar fill="yellow" size={24} /><FaStar fill="yellow" size={24} /><FaStarHalfStroke fill="yellow" size={24} />
                <p>4.6(24)</p>
            </div>
        </div>
    );
};
