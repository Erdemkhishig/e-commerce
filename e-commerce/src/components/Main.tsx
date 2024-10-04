
"use client"
import Image from 'next/image'
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import React, { createContext, useContext, useState } from 'react';
import { useProduct } from '@/contexts/Productcontext';


export const Main = () => {
    const { products, loading, error, getAllProducts } = useProduct();


    const images = Array.from({ length: 18 }, (_, index) => (
        products[index % products.length]
    ));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading products!</p>;

    return (
        <div className="max-w-screen-xl m-auto pb-24">
            <Link href="/product/66fa1f9b4791be9478267ec4">
                <div className="relative">
                    <Image
                        className="rounded-2xl my-8"
                        src="/img.png"
                        width={1280}
                        height={500}
                        alt="Picture of the author"
                    />
                    <div className="py-2 absolute top-[26rem] left-10 text-4xl">
                        <p>Wildflower Hoodie</p>
                        <p className="font-bold">120.000₮</p>
                    </div>
                </div>
            </Link>

            <div className="grid grid-cols-4 grid-rows-auto gap-4 py-8">
                {images.map((image, index) => {
                    const id = image._id
                    return (
                        <Link key={image._id} href={`/product/${id}`}
                            className={`relative ${index === 2 || index === 3 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}`}
                        >
                            <div>
                                <div className="w-full h-full overflow-hidden rounded-xl">
                                    <Image
                                        src={image.image[0]}
                                        alt={`Image ${index}`}
                                        width={index === 2 || index === 3 ? 800 : 400}
                                        height={index === 2 || index === 3 ? 400 : 400}
                                        className="object-cover duration-500 hover:scale-110"
                                    />
                                </div>
                            </div>
                            <button className="absolute top-4 right-8">
                                <FaRegHeart color="white" size={28} />
                            </button>
                            <div className="py-2">
                                <p className="text-sm font-medium">{image.name}</p>
                                <p className="font-bold">{image.price}₮</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}
