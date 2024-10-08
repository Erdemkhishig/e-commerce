"use client";
import { MdDelete } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as React from "react";
import { CiImageOn } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { FaAngleDown } from "react-icons/fa";
import { useProduct } from '@/contexts/Productcontext';
import { useFileUpload } from '@/contexts/Uploadcontext';
import { useState, useEffect } from "react";
import Image from 'next/image';

interface Category {
    _id: string;
    name: string;
}

interface FormData {
    name: string;
    title: string;
    price: number; // Change this to number
    image: string[];
    category: string[];
    qty: { [key: string]: number };
    size: string[];
    rating: string;
}

export default function Add() {
    const { createProduct } = useProduct();
    const { uploadFile, error } = useFileUpload();

    const [formData, setFormData] = useState<FormData>({
        name: '',
        title: '',
        price: 0, // Initialize as a number
        image: [],
        category: [],
        qty: { S: 0, M: 0, L: 0, XL: 0, Free: 0 },
        size: [],
        rating: '',
    });

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'price' ? parseFloat(value) : value, // Convert price to a number
        }));
    };

    const handleDeleteImage = (index: number) => {
        setFormData((prevData) => ({
            ...prevData,
            image: prevData.image.filter((_, i) => i !== index),
        }));
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const uploadedImages: string[] = [];

            if (formData.image.length >= 4) {
                alert("You can only upload up to 4 images.");
                return;
            }

            setIsUploading(true);

            for (const file of Array.from(files)) {
                if (uploadedImages.length + formData.image.length >= 4) {
                    alert("You can only upload up to 4 images.");
                    break;
                }

                try {
                    const url = await uploadFile(file);
                    uploadedImages.push(url as string);
                } catch (error) {
                    console.error('Error uploading file:', error);
                }
            }

            const newImages = [...formData.image, ...uploadedImages].slice(0, 4);
            setFormData((prevData) => ({
                ...prevData,
                image: newImages,
            }));

            setIsUploading(false);
        }
    };

    const calculateTotalQuantity = (): number => {
        return Object.values(formData.qty).reduce((sum, qty) => sum + qty, 0);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const productData = {
            ...formData,
            qty: Object.entries(formData.qty)
                .filter(([, value]) => value > 0)
                .reduce((acc, [size, value]) => ({ ...acc, [size]: value }), {}),
        };

        try {
            await createProduct(productData); // Ensure this function expects price as a number
            alert("Product added successfully.");
            window.location.reload();
        } catch (err) {
            console.error("Failed to create product:", err);
        }
    };



    const handleCategorySelect = (category: Category) => {
        setSelectedCategory(category.name); // Assuming category is of type Category and has a name property
        setFormData((prevData) => ({
            ...prevData,
            category: [category._id], // Store the category ID in the formData
        }));
    };


    const handleSizeSelect = (size: string) => {
        setFormData((prevData) => {
            const newSizes = prevData.size.includes(size)
                ? prevData.size.filter((s) => s !== size)
                : [...prevData.size, size];

            const newQty = { ...prevData.qty };
            // Set quantity for the size to 0 or update as necessary
            if (prevData.size.includes(size)) {
                delete newQty[size]; // Remove size from qty if unchecked
            } else {
                newQty[size] = 0; // Initialize quantity for new size
            }

            return { ...prevData, size: newSizes, qty: newQty };
        });
    };
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



    return (
        <form onSubmit={handleSubmit}>
            <div className="flex bg-white p-2 items-center justify-start gap-4 py-4">
                <p><IoIosArrowBack /></p>
                <p>Бүтээгдэхүүн нэмэх</p>
            </div>

            <div className="flex gap-8 w-full m-auto pl-12">
                <div className="w-1/2 flex flex-col gap-4">
                    <div className="w-full h-fit my-8 border-black rounded-xl bg-white flex flex-col gap-6 p-8">
                        <div className="flex flex-col gap-4">
                            <p className="font-semibold">Бүтээгдэхүүний нэр</p>
                            <input
                                name="name"
                                placeholder="Нэр"
                                className="bg-gray-100 border-2 w-full h-10 rounded-xl px-4"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="font-semibold">Нэмэлт мэдээлэл</p>
                            <input
                                name="title"
                                placeholder="Гол онцлог"
                                className="bg-gray-100 border-2 w-full h-10 rounded-xl px-4"
                                type="text"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="w-full rounded-xl bg-white flex flex-col gap-4 py-8">
                        <p className="px-8 font-semibold text-xl">Бүтээгдэхүүний зураг</p>
                        <div className="w-full rounded-xl bg-white px-8 flex gap-4  justify-between">
                            <div className="h-[200px] flex items-center gap-2">
                                {formData.image.length === 0 ? (
                                    <CiImageOn size={128} /> // Show icon when no images are uploaded
                                ) : (
                                    formData.image.map((url, index) => (
                                        <div
                                            key={index}
                                            className="relative w-[200px] h-[200px]"
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            <Image
                                                src={url}
                                                alt={`Uploaded file ${index + 1}`}
                                                fill
                                                className="object-cover rounded-2xl"
                                            />
                                            {hoveredIndex === index && (
                                                <button
                                                    type="button"
                                                    onClick={() => handleDeleteImage(index)}
                                                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full transition-opacity duration-200"
                                                    aria-label="Delete image"
                                                >
                                                    <MdDelete size={20} />
                                                </button>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>
                            <div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="file-upload"
                                    multiple
                                />
                                <label htmlFor="file-upload" className="cursor-pointer flex justify-center items-center h-full w-full">
                                    {isUploading ? (
                                        <span>Uploading...</span>
                                    ) : (
                                        "Upload"
                                    )}
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className="w-full h-fit my-8 border-black rounded-xl bg-white flex gap-6 p-8 py-10">
                        <div className="flex flex-col gap-4 w-full">
                            <p className="font-semibold">Үндсэн үнэ</p>
                            <input
                                name="price"
                                placeholder="Үндсэн үнэ"
                                className="bg-gray-100 border-2 w-full h-10 rounded-xl px-4"
                                type="text"
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <p className="font-semibold">Үлдэгдэл тоо ширхэг</p>
                            <input
                                name="totalQty"
                                placeholder="Үлдэгдэл тоо ширхэг"
                                className="bg-gray-100 border-2 w-full h-10 rounded-xl px-4"
                                type="text"
                                value={calculateTotalQuantity()} // Use calculated total
                                readOnly // Make read-only
                            />
                        </div>

                    </div>
                </div>

                <div className="w-1/2 flex flex-col gap-4 mr-8">
                    <div className="w-full h-fit my-8 border-black rounded-xl bg-white flex flex-col gap-2 p-8">
                        <p>Ерөнхий ангилал</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="flex justify-between bg-white" variant="outline">
                                    {selectedCategory || 'Сонгох'} <FaAngleDown size={20} />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuGroup>
                                    {categories.map((category) => (
                                        <DropdownMenuItem key={category._id} onClick={() => handleCategorySelect(category)}>
                                            <span>{category.name}</span>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="w-full border-black rounded-xl bg-white p-8 flex flex-col">
                        <p className="text-xl font-semibold">Хэмжээ</p>
                        <div className="space-y-6 py-8">
                            {['S', 'M', 'L', 'XL', 'Free'].map((size) => (
                                <div key={size} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={size}
                                        checked={formData.size.includes(size)}
                                        onChange={() => handleSizeSelect(size)}
                                        className="mr-2"
                                    />
                                    <label htmlFor={size}>{size}</label>
                                    {formData.size.includes(size) && (
                                        <input
                                            type="number"
                                            min="0"
                                            value={formData.qty[size] || 0} // Get the quantity for the size
                                            onChange={(e) => {
                                                const value = Math.max(0, parseInt(e.target.value, 10)); // Ensure non-negative
                                                setFormData((prevData) => ({
                                                    ...prevData,
                                                    qty: { ...prevData.qty, [size]: value }, // Update the specific size quantity
                                                }));
                                            }}
                                            className="ml-2 w-16 border border-gray-300 rounded px-2"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="flex justify-start items-center py-8">
                        <button type="submit" className="h-fit w-fit border-2 bg-black text-white p-4 rounded-xl">
                            Бүтээгдэхүүн нэмэх
                        </button>
                    </div>
                </div>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form >
    );
}
