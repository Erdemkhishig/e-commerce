
"use client"
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { useProduct } from '@/contexts/Productcontext';
import { useState, useEffect } from "react";


interface Category {
    _id: string;
    name: string;
}

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

export default function Category() {


    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:3001/category'); // Adjust the endpoint as necessary
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCategories(data.category);
            } catch (error) {
                (error instanceof Error ? error.message : 'An unknown error occurred');
            }
        };

        fetchCategories();
    }, []);



    const { products, loading, error, } = useProduct();
    const image = Array.from({ length: 15 }, (_, index) => (
        products[index % products.length]
    ));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading products!</p>;

    return (

        <div className="max-w-screen-xl m-auto pb-24 flex">
            <div className="w-1/4  flex flex-col gap-8">
                < div className="flex flex-col items-start gap-2">
                    <p className="font-bold py-4">Ангилал  </p>
                    {categories.map(category => (
                        <button><li key={category._id}>{category.name}</li></button>
                    ))}
                </ div>
                < div className="flex flex-col items-start gap-2 ">
                    <p className="font-bold py-4">Хэмжээ  </p>

                    <div className="flex flex-col gap-4">
                        {Array.from(new Set(products.flatMap(product => product.size))).map((size, index) => (
                            <button key={index} className="mr-2">
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-3/4">
                <div className="grid grid-cols-3 grid-rows-5 gap-4">
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