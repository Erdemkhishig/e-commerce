
"use client"
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import Link from "next/link";
import { useProduct } from '@/contexts/Productcontext';
import { Rate } from "@/components/Rate";
import { useParams } from "next/navigation";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import { Detailer } from "@/components/detailer";

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
export default function Product() {


    const { products, loading, error, getAllProducts } = useProduct();
    const { id } = useParams()
    const image = Array.from({ length: 8 }, (_, index) => (
        products[index % products.length]
    ));
    const [product, setProduct] = useState<Product>()
    const [isRateVisible, setIsRateVisible] = useState<boolean>(false);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading products!</p>;

    const toggleRateVisibility = () => {
        setIsRateVisible(!isRateVisible);
    }


    return (
        <div className="max-w-screen-xl m-auto pb-24 ">
            <div className="flex gap-4 py-16">
                <Detailer />
                <div className="w-2/5 flex justify-center h-fit">
                    {product?.image.map((item, id) => (
                        <div key={id}>
                            <Image
                                className="flex justify-center items-center rounded-2xl"
                                src={item} // Assuming each product has an image array
                                width={80}
                                height={80}
                                alt={`item ${id}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="w-1/2 flex flex-col justify-center gap-4">
                    <p className="w-16 h-8 border-2 border-blue-500 rounded-2xl flex items-center justify-center">шинэ</p>
                    <div className="flex gap-4 items-center ">
                        <p className="font-bold text-2xl">{product?.name} </p>
                        <button> <FaRegHeart size={20} /></button>
                    </div>
                    <p className="text-lg">Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</p>
                    <p className="underline">Хэмжээний заавар</p>
                    <div className="flex gap-2">
                        <button className="bg-black text-white text-md w-8 h-8 rounded-full border-2 border-black flex items-center justify-center p-4 ">S</button>
                        <button className="text-md w-8 h-8 rounded-full border-2 border-black flex items-center justify-center p-4 ">M</button>
                        <button className="text-md w-8 h-8 rounded-full border-2 border-black flex items-center justify-center p-4 ">L</button>
                        <button className="text-md w-8 h-8 rounded-full border-2 border-black flex items-center justify-center p-4 ">XL</button>
                        <button className="text-md w-8 h-8 rounded-full border-2 border-black flex items-center justify-center p-4 ">2XL</button>
                    </div>
                    <div className="flex gap-4 items-center">
                        <button className="text-2xl w-8 h-8 rounded-full border-2 border-black flex items-center justify-center p-4 ">-</button>
                        <button>1</button>
                        <button className="text-2xl w-8 h-8 rounded-full border-2 border-black flex items-center justify-center p-4 ">+</button>
                    </div>
                    <p className="font-bold text-xl">120.000₮</p>
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
            </div>
            <div className="flex justify-end -mt-40 -ml-8">
                <div className="w-1/2">
                    {isRateVisible && <Rate />}
                </div>
            </div>
            <div className="py-16">
                <p className="text-3xl font-bold py-16">Холбоотой бараа</p>
                <div className="grid grid-cols-4 grid-rows-2 gap-4">
                    {image.map((image, index) => (
                        <Link key={image._id} href={`/product/${image._id}`} className="relative">
                            <div className="overflow-hidden rounded-2xl"><Image
                                className="object-cover duration-500 hover:scale-110"
                                src={image.image[0]}
                                width={310}
                                height={360}
                                alt={`Image ${index}`}
                            />
                            </div>
                            <button className="py-2 absolute top-4 right-8"><FaRegHeart color="white" size={28} /></button>
                            <div className="flex gap-2 flex-col  py-2">
                                <p>{image.name}</p>
                                <p className="font-bold">{image.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}