"use client"
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

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
export const Detailer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<Product>()
    useEffect(() => {
        const getProductById = async () => {
            try {
                const response = await api.get(`/product/${id}`);
                setProduct(response.data.product);
            } catch (err: any) {
                console.error(err);
            }
        };
        getProductById()
    }, [])

    return (

        <div className="w-[10%] flex flex-col justify-between py-2 items-center gap-4">
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







    )
}

