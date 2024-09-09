


"use client"
import * as React from "react"


import { Input } from "@/components/ui/input"
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea"
import { PiCaretUpDownBold } from "react-icons/pi";
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";




import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

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


export const Order = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const [isOpened, setIsOpened] = React.useState(false)
    const [isOpens, setIsOpens] = React.useState(false)

    return (
        <div>


            <div>

                <div className="w-[70%] pl-8">Захиалгын түүх
                    <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className=" space-y-2"
                    >
                        <div className="flex items-center justify-between space-x-4 px-4">
                            <div className="flex gap-4">
                                <p> 2024-09-03 15:34</p>
                            </div>
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="sm" className="w-9 p-0">
                                    <PiCaretUpDownBold
                                        className="h-4 w-4" />
                                    <span className="sr-only">Toggle</span>
                                </Button>
                            </CollapsibleTrigger>
                        </div>
                        <div className="rounded-md border px-4 py-3">
                            <p className="border-blue-600 bg-blue-600 p-1 rounded-xl w-40 text-white flex justify-center">Xүргэлтэнд гарсан</p>
                        </div>
                        <CollapsibleContent className="space-y-2">
                            <div className='flex gap-4 flex-col w-full '>
                                {images.map((image, index) => (
                                    <div className='flex w-full border-2 p-4 rounded-2xl bg-white' key={index}>
                                        <div className='overflow-hidden rounded-2xl'>
                                            <Image
                                                className='w-36 h-24 '
                                                src={image.img}
                                                width={20}
                                                height={20}
                                                alt={`Image ${index}`}
                                            />
                                        </div>

                                        <div className='flex gap-4 flex-col justify-center items-center px-2 w-[40%]'>
                                            <p>{image.title}</p>
                                            <div className="flex gap-2">
                                                <p>1</p>
                                                <p>x</p>
                                                <p className='font-bold'>{image.price}</p>
                                            </div>
                                        </div>
                                        <div className=" w-full flex items-center justify-end px-8">
                                            <p className='font-bold'>{image.price}</p>

                                        </div>
                                    </div>

                                ))}

                            </div>
                            <div className='px-12 font-bold flex justify-between w-full border-2 p-4 rounded-2xl bg-white'>
                                <p>Үнийн дүн:</p>
                                <p>480’000₮</p>

                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                    <Collapsible
                        open={isOpened}
                        onOpenChange={setIsOpened}
                        className=" space-y-2"
                    >
                        <div className="flex items-center justify-between space-x-4 px-4">
                            <div className="flex gap-4">
                                <p> 2024-08-23 15:34</p>
                            </div>
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="sm" className="w-9 p-0">
                                    <PiCaretUpDownBold
                                        className="h-4 w-4" />
                                    <span className="sr-only">Toggle</span>
                                </Button>
                            </CollapsibleTrigger>
                        </div>
                        <div className="rounded-md border px-4 py-3">
                            <p className="border-blue-600 bg-blue-600 p-1 rounded-xl w-40 text-white flex justify-center">дууссан</p>
                        </div>
                        <CollapsibleContent className="space-y-2">

                            <div className='px-12 font-bold flex justify-between w-full border-2 p-4 rounded-2xl bg-white'>
                                <p>Үнийн дүн:</p>
                                <p>120’000₮</p>

                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                    <Collapsible
                        open={isOpens}
                        onOpenChange={setIsOpens}
                        className=" space-y-2"
                    >
                        <div className="flex items-center justify-between space-x-4 px-4">
                            <div className="flex gap-4">
                                <p> 2024-08-23 15:34</p>
                            </div>
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="sm" className="w-9 p-0">
                                    <PiCaretUpDownBold
                                        className="h-4 w-4" />
                                    <span className="sr-only">Toggle</span>
                                </Button>
                            </CollapsibleTrigger>
                        </div>
                        <div className="rounded-md border px-4 py-3">
                            <p className="border-blue-600 bg-blue-600 p-1 rounded-xl w-40 text-white flex justify-center">дууссан</p>
                        </div>
                        <CollapsibleContent className="space-y-2">

                            <div className='px-12 font-bold flex justify-between w-full border-2 p-4 rounded-2xl bg-white'>
                                <p>Үнийн дүн:</p>
                                <p>120’000₮</p>

                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                </div>

            </div>
        </div>

    )
}
