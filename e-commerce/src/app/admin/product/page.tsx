import * as React from "react"
import { MdBorderAll } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { HiTag } from "react-icons/hi2";
import { PiListDashesFill } from "react-icons/pi";
import { RiSettings5Fill } from "react-icons/ri";
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








export default function Product() {
    return (

        <div className="w-full m-auto flex">
            <div className="w-[15%] h-screen bg-white" >
                <div className="p-8 flex flex-col justify-center gap-8 my-4">
                    <button className="flex gap-2 items-center justify-start"><MdBorderAll size={28} />Хяналтын самбар      </button>
                    <button className="flex gap-2 items-center justify-start"><SlNotebook size={28} />Захиалга</button>
                    <button className="flex gap-2 items-center justify-start"><HiTag size={28} />Орлого</button>
                    <button className="flex gap-2 items-center justify-start"><PiListDashesFill size={28} />Бүтээгдэхүүн</button>
                    <button className="flex gap-2 items-center justify-start"><RiSettings5Fill size={28} />Тохиргоо</button>
                </div>
            </div>
            <div className="w-full" >
                <div className="w-full h-[10%]">
                    <div className="flex gap-4 border-b-2 w-full h-16 items-center">
                        <p className="">Бүтээгдэхүүн</p>
                        <p className="">Ангилал</p>

                    </div>
                    <div className="px-12 pt-6">
                        <button className="px-12 py-3 border-2 bg-black text-white rounded-xl"> + Бүтээгдэхүүн нэмэх</button>
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
                                                <span>Profile</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Billing</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Settings</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Keyboard shortcuts</span>
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
                                                <span>Profile</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Billing</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Settings</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Keyboard shortcuts</span>
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
                                                <span>Profile</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Billing</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Settings</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <span>Keyboard shortcuts</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div>
                                <input className="w-60 h-8 rounded-lg" type="text" />
                            </div>

                        </div>
                    </div>
                    <div className="w-[95%] h-[82%] mb-8 border-black rounded-xl bg-white mx-12"></div>
                </div>


            </div>

        </div>

    )
}
