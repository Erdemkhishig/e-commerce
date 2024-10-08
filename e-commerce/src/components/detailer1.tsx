"use client";
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

export const Detailer1 = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getProductById = async () => {
            try {
                const response = await api.get(`/product/${id}`);
                setProduct(response.data.product);
            } catch (err: unknown) {
                // Improved error handling
                if (err instanceof Error) {
                    setError(err.message); // Use error message for more context
                } else {
                    setError("Failed to load product");
                }
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        getProductById();
    }, [id]);

    if (loading) return (
        <div className="flex justify-center items-center h-full">
            <div className="loader" />
        </div>
    );

    if (error) return <p>{error}</p>;

    return (
        <div className="w-2/5 flex flex-col justify-center items-center">
            {product && (
                <>
                    <Image
                        className="rounded-2xl"
                        src={product.image[0]}
                        width={400}
                        height={400}
                        alt={`item ${id}`}
                    />
                </>
            )}
        </div>
    );
};

// CSS for the loader
const styles = `
.loader {
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;

// Injecting the styles into the document head
if (typeof window !== "undefined") {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}
