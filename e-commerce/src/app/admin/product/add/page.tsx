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
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "@/components/ui/button"
import { FaAngleDown } from "react-icons/fa";


export default function Add() {


    return (

        <div >
            <div className="flex bg-white p-2 items-center justify-start gap-4 py-4">
                <p><IoIosArrowBack />
                </p>
                <p>Бүтээгдэхүүн нэмэх</p>
            </div>

            <div className="flex gap-8 w-full m-auto pl-12">

                <div className="w-1/2 flex flex-col gap-4" >
                    <div className="w-full h-fit my-8 border-black rounded-xl bg-white flex flex-col gap-6 p-8">
                        <div className="flex flex-col gap-4"><p className="font-semibold">Бүтээгдэхүүний нэр</p><input placeholder="Нэр" className="bg-gray-100 border-2 w-full h-10 rounded-xl px-4" type="text" /></div>
                        <div className="flex flex-col gap-4"><p className="font-semibold">Нэмэлт мэдээлэл</p><input placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар." className="bg-gray-100 border-2 w-full h-10 rounded-xl px-4" type="text" /></div>
                        <div className="flex flex-col gap-4"><p className="font-semibold">Барааны код</p><input placeholder="#12345678" className="bg-gray-100 border-2 w-full h-10 rounded-xl px-4" type="text" /></div>

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
                        <div className="flex flex-col gap-4 w-full"><p className="font-semibold">Үндсэн үнэ</p><input placeholder="Үндсэн үнэ" className="bg-gray-100 w-full h-10 rounded-xl px-4" type="text" /></div>
                        <div className="flex flex-col gap-4 w-full"><p className="font-semibold">Үлдэгдэл тоо ширхэг</p><input placeholder="Үлдэгдэл тоо ширхэг" className="bg-gray-100 w-full h-10 rounded-xl px-4" type="text" /></div>

                    </div>
                </div>

                <div className="w-1/2 flex flex-col gap-4 mr-8">
                    <div className="w-full h-fit my-8 border-black rounded-xl bg-white flex flex-col gap-2 p-8">
                        <p>Ерөнхий ангилал</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="flex justify-between bg-white" variant="outline">
                                    Сонгох <FaAngleDown size={20} /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <span>Past month</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span>This month</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span>Next month</span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <p className="pt-4">Дэд ангилал</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="flex justify-between bg-white" variant="outline">
                                    Сонгох <FaAngleDown size={20} /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <span>Past month</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span>This month</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span>Next month</span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                    <div className="w-full border-black rounded-xl bg-white p-8 flex flex-col">
                        <p className="text-xl font-semibold">Төрөл</p>
                        <div className="space-y-6 py-8">
                            <div className="flex gap-8 items-center">
                                <p>Өнгө</p>
                                <button><FaPlusCircle size={24} /></button>
                            </div>
                            <div className="flex gap-8 items-center">
                                <p>Хэмжээ</p>
                                <button><FaPlusCircle size={24} /></button>
                            </div>
                            <button>
                                <p className="h-8 border-2 rounded-lg w-fit p-4 flex items-center">Төрөл нэмэх</p>
                            </button>
                        </div>

                    </div>
                    <div className="w-full h-fit my-8 border-black rounded-xl bg-white flex flex-col gap-6 p-8 py-20">

                        <div className="flex flex-col gap-4"><p className="font-semibold">Таг</p><input placeholder="Таг нэмэх..." className="bg-gray-100 w-full h-16 border-2 rounded-xl px-4" type="text" /></div>
                        <p className="text-gray-300">Санал болгох: Гутал , Цүнх , Эмэгтэй </p>
                    </div>

                </div>
            </div>

        </div>


    )
}
