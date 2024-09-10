import { Input } from "@/components/ui/input"
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import Link from "next/link";
const images = [
    {
        img: "/image0.png",
        title: "Wildflower Hoodie",
        price: "120'000₮"
    },
    {
        img: "/image (1).png",
        title: "All Smiles Nalgene",
        price: "120'000₮"
    },
    {
        img: "/image (2).png",
        title: "Chunky Glyph Tee",
        price: "120'000₮"
    },


]






export const Header = () => {



    return (
        <div className="w-full h-[68px] bg-black ">
            <div className="m-auto flex items-center justify-between h-full px-48">

                <div className="flex items-center gap-4 justify-center text-white">
                    <Link href="/">
                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.11038 2.76864L0.806264 10.8247C0.269142 11.833 0 12.9395 0 14.0476C0 15.1557 0.269142 16.2621 0.806264 17.2704L5.11038 25.3266C5.9037 26.8147 7.45516 27.744 9.14352 27.744H13.7153V25.4619H13.7138C12.8704 25.4619 12.0946 24.9978 11.6979 24.2539L7.39543 16.1961C7.03585 15.5245 6.85665 14.7868 6.85665 14.0476C6.85665 13.3083 7.03585 12.5706 7.39543 11.8991L11.6979 3.84136C12.0946 3.09726 12.8704 2.63341 13.7138 2.63341H13.7153V0.351074H9.14352C7.45516 0.351074 5.9037 1.28061 5.11038 2.76864Z" fill="white" />
                            <path d="M31.1937 10.8248L26.8898 2.7687C26.0963 1.28051 24.545 0.351133 22.8567 0.351133H18.2847V2.6333H18.2864C19.1298 2.6333 19.9055 3.09732 20.3021 3.84125L24.6046 11.899C24.9643 12.5707 25.1432 13.3083 25.1432 14.0476C25.1432 14.7869 24.9643 15.5245 24.6046 16.1962L20.3021 24.2538C19.9055 24.9979 19.1298 25.4618 18.2864 25.4618H18.2847V27.7441H22.8567C24.545 27.7441 26.0963 26.8147 26.8898 25.3265L31.1937 17.2704C31.7307 16.2622 32 15.1556 32 14.0476C32 12.9396 31.7307 11.8331 31.1937 10.8248Z" fill="white" />
                        </svg>
                    </Link>
                    <Link href="/">
                        <p>ECOMMERCE</p>
                    </Link>

                    <Link href="/category"> <p className="text-white px-8" >Ангилал</p> </Link>

                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="relative flex items-center w-full max-w-md ml-48 ">
                            <FaSearch size={20} className="absolute left-3 text-gray-500" />
                            <input

                                type="text"
                                placeholder="Бүтээгдэхүүн хайх"
                                className="pl-12 py-2 w-72 rounded-md focus:outline-none focus:ring-2 bg-[#18181B]"

                            />

                        </div>

                    </DialogTrigger>


                    <DialogContent className="w-[600px] h-[425px] bg-white">
                        {images.map((image, index) => (
                            <div className='flex  items-center' key={index}>
                                <div className=' rounded-2xl flex items-center'>
                                    <Image
                                        className='w-24 h-24 rounded-xl'
                                        src={image.img}
                                        width={80}
                                        height={80}
                                        alt={`Image ${index}`}
                                    />
                                </div>

                                <div className='flex flex-col justify-start items-start px-2 w-[40%]'>
                                    <p className="">{image.title}</p>
                                    <p className='font-bold'>{image.price}</p>

                                </div>
                            
                            </div>
                             ))}

                       
                        
                    </DialogContent>
                </Dialog>


                <div className="flex gap-4 items-center">
                    <Link href="/save"><div><FaRegHeart color="white" size={20} />
                    </div></Link>
                    <Link href="/purchase"><div><MdOutlineShoppingCart color="white" size={20} />
                    </div></Link>
                    <Link href="/register"><Button className="border-blue-700  rounded-2xl border-2 hover:bg-blue-700">Бүртгүүлэх</Button></Link>
                    <Link href="/login"><Button className="border-blue-700  rounded-2xl border-2 hover:bg-blue-700">Нэвтрэх</Button></Link>
                </div>
            </div>





        </div>
    )
}