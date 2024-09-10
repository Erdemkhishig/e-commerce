import * as React from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Textarea } from "@/components/ui/textarea"

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


export default function Purchase() {
    return (

        <div className="max-w-screen-xl m-auto flex flex-col items-center justify-center gap-12 pb-96">
            <div>

                <div className="flex items-center justify-between relative w-96 py-12">
                    <div className="flex flex-col">
                        <div className="rounded-full bg-blue-600 text-white p-6 w-8 h-8 flex justify-center items-center text-xl">1</div>

                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="rounded-full bg-white p-6 w-8 h-8 flex justify-center items-center text-xl">2</div>

                    </div> <div className="flex flex-col">
                        <div className="rounded-full bg-white text-black p-6 w-8 h-8 flex justify-center items-center text-xl">3</div>

                    </div>
                    <div className="top-15 left-[3rem] h-0.5 w-[120px] bg-black absolute"></div>
                    <div className="top-15 left-[13.5rem] h-0.5 w-[120px] bg-black absolute"></div>
                </div>


            </div>

            <div className="w-full flex justify-start items-start flex-col rounded-2xl bg-white pb-4">

                <p className="py-8 px-12 text-2xl font-black">1.Сагс (4)</p>
                <div className='flex gap-4 flex-col w-full px-12'>
                    {images.map((image, index) => (
                        <div className='flex w-full border-2 border-gray-100 p-4 rounded-2xl bg-white' key={index}>
                            <div className='overflow-hidden rounded-2xl'>
                                <Image
                                    className='w-48 h-36 '
                                    src={image.img}
                                    width={120}
                                    height={80}
                                    alt={`Image ${index}`}
                                />
                            </div>

                            <div className='flex gap-4 flex-col justify-center items-center px-2 w-[40%]'>
                                <p className="text-2xl">{image.title}</p>
                                <div className="flex gap-4 items-center">
                                    <p className="text-2xl w-8 h-8 rounded-full border-2 border-black flex items-center justify-center p-4 ">-</p>
                                    <p>1</p>
                                    <p className="text-2xl w-8 h-8 rounded-full border-2 border-black flex items-center justify-center p-4 ">+</p>
                                </div>
                                <p className='font-bold text-2xl'>{image.price}</p>

                            </div>
                            <div className=" w-full flex items-center justify-end px-8">
                                <RiDeleteBin6Line

                                    size={36} />

                            </div>
                        </div>


                    ))}
                    <div className='px-12 fo text-2xl flex justify-between p-4 rounded-2xl bg-white'>
                        <p>Үнийн дүн:</p>
                        <p className="font-bold">360’000₮</p>

                    </div>
                    <div className="w-full flex justify-end">
                        <button className="w-[254px] h-8 bg-blue-700 py-5 rounded-3xl flex items-center justify-center text-white">Худалдан авах</button>
                    </div>

                </div>





            </div>

            <p> ADDRESS</p>
            <div className="w-full flex gap-8">
                <div className="w-[35%] h-full flex justify-start items-start flex-col rounded-2xl bg-white pb-4">

                    <p className="py-8 px-12  font-black">1.Сагс (3)</p>
                    <div className='flex gap-4 flex-col w-full h-1/2 px-12'>
                        {images.map((image, index) => (
                            <div className='flex w-full border-2 border-gray-100 p-4 rounded-2xl bg-white h-[120px]' key={index}>
                                <div className='overflow-hidden rounded-2xl'>
                                    <Image
                                        className='w-36 h-48'
                                        src={image.img}
                                        width={120}
                                        height={130}
                                        alt={`Image ${index}`}
                                    />
                                </div>

                                <div className='flex gap-2 flex-col justify-center items-center px-2'>
                                    <p className=" pl-4">{image.title}</p>
                                    <div className="flex gap-2">
                                        <p>1</p>
                                        <p>x</p>
                                        <p className='font-bold'>{image.price}</p>
                                    </div>
                                    <p className='font-bold'>{image.price}</p>

                                </div>

                            </div>


                        ))}
                        <div className='px-12 fo text-2xl flex justify-between p-4  bg-white py-16 border-t-2 border-dotted mt-8'>
                            <p>Нийт төлөх дүн:</p>
                            <p className="font-bold">360’000₮</p>

                        </div>


                    </div>
                </div>
                <div className="w-[65%] text-lg pb-4 bg-white rounded-2xl p-8">
                    <p className="text-2xl font-bold  border-gray-300 h-16 mb-8">2.Хүргэлтийн мэдээлэл оруулах</p>
                    <div className="pb-8">
                        Овог:
                        <Input className="bg-white rounded-2xl" type="text" placeholder="" />
                        Нэр:
                        <Input className="bg-white rounded-2xl" type="text" placeholder="" />
                        Утасны дугаар:
                        <Input className="bg-white rounded-2xl" type="text" placeholder="" />
                        Хаяг:
                        <Textarea className="bg-white rounded-2xl py-16" placeholder="" />
                        Нэмэлт мэдээлэл:
                        <Textarea className="bg-white rounded-2xl" placeholder="" />
                        <p className="text-gray-400">Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй</p>
                    </div>

                    <div className="w-full flex justify-between py-8">
                        <button className="w-[120px] h-12 bg-white rounded-3xl border-2 text-text ">Буцах</button>
                        <button className="w-[250px] h-12 bg-blue-700 rounded-3xl text-white ">Төлбөр төлөх</button>
                    </div>
                </div>



            </div>
            <p> PAYMENT</p>
            <div className="w-[700px] h-[700px] border-2 bg-white">
                <p> 3. Төлбөр төлөлт</p>
                Time
                <Image
                    className='w-36 h-48'
                    src="/info.png"
                    width={120}
                    height={130}
                    alt=""
                />




            </div>





        </div>

    )
}
