import * as React from "react"
import { MdBorderAll } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { HiTag } from "react-icons/hi2";
import { PiListDashesFill } from "react-icons/pi";
import { RiSettings5Fill } from "react-icons/ri";
import Link from "next/link";







export default function Dasoboard() {
    return (

        <div className="w-full m-auto flex gap-8">
            <div className="w-[15%] h-screen bg-white" >
                <div className="p-8 flex flex-col justify-center gap-8 my-4">
                    <Link href="" className="flex gap-2 items-center justify-start"><MdBorderAll size={28} />Хяналтын самбар      </Link>
                    <Link href="" className="flex gap-2 items-center justify-start"><SlNotebook size={28} />Захиалга</Link>
                    <Link href="" className="flex gap-2 items-center justify-start"><HiTag size={28} />Орлого</Link>
                    <Link href="/admin/product" className="flex gap-2 items-center justify-start"><PiListDashesFill size={28} />Бүтээгдэхүүн</Link>
                    <Link href="" className="flex gap-2 items-center justify-start"><RiSettings5Fill size={28} />Тохиргоо</Link>
                </div>
            </div>
            <div className="w-[45%] " >
                <div className="w-full h-[10%] my-8 border-black rounded-xl bg-white py-4 px-12 gap-8">
                    <div>
                        <p className="">Орлого</p>
                        <p className="font-bold text-2xl">888.888₮</p></div>
                    <div>
                        <p className="text-gray-400">Today</p>
                    </div>

                </div>
                <div className="w-full h-[82%] mb-8 border-black rounded-xl bg-white"></div>
            </div>
            <div className="w-[30%] mr-8">
                <div className="w-full h-[10%] my-8 border-black rounded-xl bg-white py-4 px-12 gap-8">
                    <div>
                        <button className="flex gap-2 items-center justify-start"><SlNotebook size={20} />Захиалга</button>
                        <p className="font-bold text-2xl">88</p></div>
                    <div>
                        <p className="text-gray-400">Yesteday</p>
                    </div>
                </div>
                <div className="w-full h-[42%] mb-8 border-black rounded-xl bg-white"></div>


            </div>

        </div>

    )
}
