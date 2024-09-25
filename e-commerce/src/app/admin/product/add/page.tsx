"use client"
import { IoIosArrowBack } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import * as React from "react"
import { CiImageOn } from "react-icons/ci";
import { Button } from "@/components/ui/button"
import { FaAngleDown } from "react-icons/fa";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useProduct } from '@/contexts/Productcontext';
import { useState } from "react";
import { log } from "console";

export default function Add() {
    const { createProduct } = useProduct();
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        price: '',
        image: '',
        category: '',
        qty: '',
        size: '',
        rating: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        console.log(formData)
        e.preventDefault();
        await createProduct(formData);

    };

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        setFormData((prevData) => ({
            ...prevData,
            category: category,
        }));
    };

    const handleSizeSelect = (size: string) => {
        setSelectedSize(size);
        setFormData((prevData) => ({
            ...prevData,
            size: size,
        }));
    };


    return (

        <form onSubmit={handleSubmit}>
            <div className="flex bg-white p-2 items-center justify-start gap-4 py-4">
                <p><IoIosArrowBack />
                </p>
                <p>Бүтээгдэхүүн нэмэх</p>
            </div>

            <div className="flex gap-8 w-full m-auto pl-12">

                <div className="w-1/2 flex flex-col gap-4" >
                    <div className="w-full h-fit my-8 border-black rounded-xl bg-white flex flex-col gap-6 p-8">
                        <div className="flex flex-col gap-4"><p className="font-semibold">Бүтээгдэхүүний нэр</p><input
                            name="name"
                            placeholder="Нэр"
                            className="bg-gray-100 border-2 w-full h-10 rounded-xl px-4"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                        /></div>
                        <div className="flex flex-col gap-4"><p className="font-semibold">Нэмэлт мэдээлэл</p> <input
                            name="title"
                            placeholder="Гол онцлог"
                            className="bg-gray-100 border-2 w-full h-10 rounded-xl px-4"
                            type="text"
                            value={formData.title}
                            onChange={handleChange}
                        /></div>

                    </div>
                    <div className="w-full rounded-xl bg-white flex flex-col gap-4 py-8">
                        <p className="px-8 font-semibold text-xl">Бүтээгдэхүүний зураг</p>
                        <div className="w-full rounded-xl bg-white px-8 flex gap-4">
                            <div className="h-52 w-60 border-dashed border-2 rounded-xl flex justify-center items-center">
                                <CiImageOn size={32} />
                            </div>
                            <div className="h-52 w-60 border-dashed border-2 rounded-xl flex justify-center items-center">
                                <CiImageOn size={32} />
                            </div>
                            <div className="h-52 w-60 border-dashed border-2 rounded-xl flex justify-center items-center">
                                <CiImageOn size={32} />
                            </div>
                            <button className="h-52 w-60  rounded-xl flex justify-center items-center">
                                <FaPlusCircle size={32} />
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-fit my-8 border-black rounded-xl bg-white flex gap-6 p-8 py-10">
                        <div className="flex flex-col gap-4 w-full"><p className="font-semibold">Үндсэн үнэ</p><input
                            name="price"
                            placeholder="Үндсэн үнэ"
                            className="bg-gray-100 border-2 w-full h-10 rounded-xl px-4"
                            type="text"
                            value={formData.price}
                            onChange={handleChange}
                        /></div>
                        <div className="flex flex-col gap-4 w-full"><p className="font-semibold">Үлдэгдэл тоо ширхэг</p><input
                            name="qty"
                            placeholder="Үлдэгдэл тоо ширхэг"
                            className="bg-gray-100 border-2 w-full h-10 rounded-xl px-4"
                            type="text"
                            value={formData.qty}
                            onChange={handleChange}
                        /></div>

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
                                    {['Малгай', 'T-shirt', 'Hoodie', 'Цүнх', 'Гутал', 'Усны сав', 'Өмд'].map((category) => (
                                        <DropdownMenuItem key={category} onClick={() => handleCategorySelect(category)}>
                                            <span>{category}</span>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>


                    </div>
                    <div className="w-full border-black rounded-xl bg-white p-8 flex flex-col">
                        <p className="text-xl font-semibold">Хэмжээ</p>
                        <div className="space-y-6 py-8">

                            <div className="flex gap-8 items-center">

                                <Select onValueChange={handleSizeSelect}>
                                    <SelectTrigger className="w-[72px]">
                                        <SelectValue placeholder={selectedSize || <FaPlusCircle size={24} />} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Хэмжээ</SelectLabel>
                                            {['S', 'M', 'L', 'XL', 'Free'].map((size) => (
                                                <SelectItem key={size} value={size}>{size}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                        </div>

                    </div>
                    <div className="flex justify-start items-center py-8">
                        <button type="submit" className="h-fit w-fit border-2 bg-black text-white p-4 rounded-xl">
                            Бүтээгдэхүүн нэмэх
                        </button>
                    </div>

                </div>
            </div>

        </form>


    )
}
