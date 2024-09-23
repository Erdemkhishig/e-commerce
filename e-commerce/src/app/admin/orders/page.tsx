"use client"
import * as React from "react"

import { FaAngleDown } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosArrowForward } from "react-icons/io";

import { FaSearch } from 'react-icons/fa';










export default function Orders() {
    return (

        <div className="w-full m-auto pl-12">
            <div className="flex gap-8 border-b-2 w-full h-16 items-center">
                <p className="w-16%">Бүгд</p>
                <p className="w-16%">Шинэ захиалага</p>
                <p className="w-16%">Бэлтгэгдэж байна</p>
                <p className="w-16%">Хүргэлтэнд гарсан</p>
                <p className="w-16%">Хүргэгдсэн</p>
                <p className="w-16%">Цуцлагдсан</p>

            </div>


            <div className="w-full">
                <div className="flex items-center justify-between">
                    <div className="flex gap-4 py-8" >

                        <Button className="flex gap-4 bg-green-600 text-white" variant="outline">
                            Өнөөдөр
                        </Button>



                        <Button className="flex gap-4 bg-white" variant="outline">
                            7 хоног</Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="flex gap-4 bg-white" variant="outline"><MdOutlineCalendarMonth size={20} />
                                    Сараар<FaAngleDown size={20} /></Button>
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
                    <div className="relative flex items-center w-full justify-end pr-24">
                        <FaSearch size={20} className="absolute left-[67.5rem] text-gray-500" />
                        <input

                            type="text"
                            placeholder="Дугаар, Имэйл"
                            className="px-12 py-2 w-[21rem] rounded-md focus:outline-none focus:ring-2"

                        />

                    </div>

                </div>
            </div>
            <div className="w-[95%] h-[810px] mb-8 border-black rounded-xl bg-white">
                <div className="w-full h-16 flex items-center font-semibold">
                    <div className="w-[15%] text-2xl  px-8">Захиалга</div>

                </div>
                <div className="w-full h-16 flex items-center border-b-[1px] font-semibold bg-gray-100">
                    <div className="w-[15%] px-8">Захиалгын ID дугаар</div>
                    <div className="w-[15%]  px-8">Үйлчлүүлэгч</div>
                    <div className="w-[15%]  px-8">Огноо</div>
                    <div className="w-[10%]  px-8">Цаг</div>
                    <div className="w-[15%]  px-8">Төлбөр</div>
                    <div className="w-[15%]  px-8">Статус</div>
                    <div className="w-[15%]  px-8"> Дэлгэрэнгүй</div>

                </div>
                <div className="w-full h-16 flex items-center border-b-[1px]">
                    <div className="w-[15%] px-8 font-semibold">#12345678</div>
                    <div className="w-[15%]  px-8 flex flex-col"><p className="font-semibold">Zoloo soko</p><p>Zoloosoko@gmail.com</p></div>
                    <div className="w-[15%]  px-8">2024-02-04</div>
                    <div className="w-[10%]  px-8">20:24</div>
                    <div className="w-[15%]  px-8">188.000₮</div>
                    <div className="w-[15%]  px-8 "><p className="w-fit px-6 border rounded-full">Хүргэгдсэн</p></div>
                    <button className="w-[15%]  px-20"><IoIosArrowForward />                    </button>

                </div>
            </div>
        </div>


    )
}
