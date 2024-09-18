import * as React from "react"
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";

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


export default function Save() {
    return (
        <div className="bg-gray-100">
            <div className="max-w-screen-xl m-auto flex flex-col items-center justify-center gap-12 pb-96">

                <div className="w-full flex justify-start items-start flex-col gap-8 mt-32">

                    <p className="text-2xl font-black">Хадгалсан бараа (3)</p>
                    <div className='flex gap-4 flex-col w-full '>
                        {images.map((image, index) => (
                            <div className='flex w-full border-2 p-4 rounded-2xl bg-white' key={index}>
                                <div className='overflow-hidden rounded-2xl'>
                                    <Image
                                        className='w-96 h-48 '
                                        src={image.img}
                                        width={120}
                                        height={80}
                                        alt={`Image ${index}`}
                                    />
                                </div>

                                <div className='flex gap-4 flex-col justify-center items-center px-2 w-[40%]'>
                                    <p>{image.title}</p>
                                    <p className='font-bold'>{image.price}</p>
                                    <button className="p-2 rounded-2xl border-2 border-blue-600 bg-blue-600 text-white w-28">Сагслах</button>
                                </div>
                                <div className=" w-full flex items-center justify-end px-8">
                                    <FaHeart
                                        size={36} />

                                </div>
                            </div>

                        ))}

                    </div>





                </div>
            </div>
        </div>
    )
}
