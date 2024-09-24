"use client"

import { Checkbox } from "@/components/ui/checkbox"
import * as React from "react"
import { GiPerspectiveDiceFive } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import { CgDollar } from "react-icons/cg";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { FaSearch } from 'react-icons/fa';
import Link from "next/link";









export default function Product() {

    return (
        <div>
            <div className="flex gap-4 border-b-2 w-full h-16 items-center px-4">
                <p className="">Бүтээгдэхүүн</p>
                <p className="">Ангилал</p>

            </div>

            <div className="w-full m-auto flex pl-12">


                <div className="w-full">

                    <div className=" pt-6">
                        <Link href="/admin/product/add"> <button className="px-12 py-3 bg-black text-white rounded-xl"> + Бүтээгдэхүүн нэмэх</button></Link>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 py-8" >
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button className="flex gap-4 bg-white" variant="outline"> <GiPerspectiveDiceFive size={20} />
                                            Ангилал <FaAngleDown size={20} />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem>
                                                <span>Малгай</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Усны сав</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>T-shirt</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Hoodie</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Tee</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Цүнх</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button className="flex gap-4 bg-white" variant="outline"><CgDollar size={20} />
                                            Үнэ <FaAngleDown size={20} /></Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem>
                                                <span>less than 300.000</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>300.000 to 600.000</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>more than 600.000</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
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
                                <FaSearch size={20} className="absolute left-[60rem] text-gray-500" />
                                <input

                                    type="text"
                                    placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
                                    className="px-12 py-2 w-[21rem] rounded-md focus:outline-none focus:ring-2"

                                />

                            </div>

                        </div>
                    </div>
                    <div className="w-[95%] h-[810px] mb-8 border-black rounded-xl bg-white">
                        <div className="w-full h-16 flex items-center border-b-2 font-semibold">
                            <div className="w-[5%] "></div>
                            <div className="w-[15%]  px-8">Бүтээгдэхүүн</div>
                            <div className="w-[15%]  px-8">Ангилал</div>
                            <div className="w-[15%]  px-8">Үнэ</div>
                            <div className="w-[10%]  px-8">Үлдэгдэл</div>
                            <div className="w-[15%]  px-8">Зарагдсан</div>
                            <div className="w-[15%]  px-8"> Нэмсэн огноо</div>
                            <div className="w-[10%] "></div>
                        </div>
                        <div className="w-full h-[80px] flex border-b-2 py-10">
                            <div className="w-[5%]  flex items-center justify-center"> <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />

                            </div></div>
                            <div className="w-[15%]  flex items-center pl-8 gap-4">
                                <Image
                                    className='w-12 h-12 rounded-full'
                                    src="/imag.png"
                                    width={80}
                                    height={80}
                                    alt=""
                                />
                                <div className="flex flex-col">
                                    <p className="font-semibold">
                                        Усны сав
                                    </p>
                                    <p className="text-gray-500">
                                        0001
                                    </p>
                                </div>
                            </div>
                            <div className="w-[15%] pl-8 flex items-center">
                                <p>
                                    Усны сав
                                </p>
                            </div>
                            <div className="w-[15%] pl-8 flex items-center">
                                <p>
                                    100.000₮
                                </p>
                            </div>
                            <div className="w-[10%] pl-8 flex items-center">
                                <p>
                                    9
                                </p>
                            </div>
                            <div className="w-[15%] pl-8 flex items-center">
                                <p>
                                    9
                                </p>
                            </div>
                            <div className="w-[15%] pl-8 flex items-center">
                                <p>
                                    2024-09-20
                                </p>
                            </div>
                            <div className="w-[10%] flex items-center gap-12 justify-center">
                                <button>
                                    <MdDeleteOutline size={24} color="gray" />
                                </button>
                                <button>
                                    <FiEdit2 size={20} color="gray" />

                                </button>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}

