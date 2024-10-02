
"use client"
import Image from "next/image";
import Link from "next/link";
import { useProduct } from '@/contexts/Productcontext';
import { Rate } from "@/components/Rate";
import { Detailer } from "@/components/detailer";
import { Detailer1 } from "@/components/detailer1";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Detailer2 } from "@/components/detailer2";


export default function Product() {


    const { products, loading, error } = useProduct();
    const image = Array.from({ length: 8 }, (_, index) => (
        products[index % products.length]
    ));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading products!</p>;

    const [isRateVisible, setIsRateVisible] = useState<boolean>(false);


    return (
        <div className="max-w-screen-xl m-auto pb-24 ">
            <div className="flex gap-4 py-16">
                <Detailer />
                <Detailer1 />
                <Detailer2 />
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