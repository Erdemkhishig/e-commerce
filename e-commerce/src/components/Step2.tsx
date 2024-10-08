"use client";
import { useProduct } from '@/contexts/Productcontext';
import { useCartProducts } from "@/contexts/Cartcontext";
import * as React from "react"
import { Input } from "@/components/ui/input"
import Image from 'next/image'


import { Textarea } from "@/components/ui/textarea"


export const Step2 = () => {

    const { products } = useProduct();
    const { cartProducts } = useCartProducts(); // Ensure setCartProducts is available

    const chosenProducts = products.filter(product => Array.isArray(cartProducts) && cartProducts.includes(product._id));

    const totalPrice = chosenProducts.reduce((total, product) => {
        const price = typeof product.price === 'string' ? parseFloat(product.price) : product.price;
        return total + price;
    }, 0);

    return (
        <div className="w-full flex flex-col items-center gap-8 my-8">
            <div>

                <div className="flex items-center justify-between relative w-96 py-12">
                    <div className="flex flex-col">
                        <div className="rounded-full bg-blue-700 p-6 w-8 h-8 flex justify-center items-center text-xl text-white">✓ </div>

                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="rounded-full bg-blue-700 p-6 w-8 h-8 flex justify-center items-center text-white text-xl">2</div>

                    </div> <div className="flex flex-col">
                        <div className="rounded-full bg-white text-black p-6 w-8 h-8 flex justify-center items-center text-xl">3</div>

                    </div>
                    <div className="top-15 left-[3rem] h-0.5 w-[120px] bg-black absolute"></div>
                    <div className="top-15 left-[13.5rem] h-0.5 w-[120px] bg-black absolute"></div>
                </div>


            </div>
            <div className="w-full flex gap-8">
                <div className="w-1/2 flex flex-col items-center">

                    <div className='flex gap-4 flex-col w-full px-8 border-2 border-gray-100 p-4 rounded-2xl bg-white'>
                        <p className="py-8 px-12 text-2xl font-black">1. Сагс ({chosenProducts.length})</p>
                        {chosenProducts.map(product => (
                            <div key={product._id} className='flex w-full gap-16'>
                                <div className='overflow-hidden rounded-2xl'>
                                    <Image
                                        className='w-48 h-48'
                                        src={product.image[0]}
                                        width={200}
                                        height={200}
                                        alt={product.name}
                                    />
                                </div>

                                <div className='flex gap-4 flex-col justify-center items-start px-2'>
                                    <p>{product.name}</p>
                                    <p>1 x {product.price}₮</p>
                                    <p className='font-bold text-2xl'>{product.price}₮</p>
                                </div>
                            </div>
                        ))}
                        <div className="px-12 flex flex-col p-4 rounded-2xl bg-white">
                            <div className='flex justify-between font-bold'>
                                <p>Нийт үнэ:</p>
                                <p>{totalPrice}₮</p>
                            </div>
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
                        <p className="text-gray-400">Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй </p>
                    </div>

                    <div className="w-full flex justify-between py-8">
                        <button className="w-[120px] h-12 bg-white rounded-3xl border-2 text-text ">Буцах</button>
                        <button className="w-[250px] h-12 bg-blue-700 rounded-3xl text-white ">Төлбөр төлөх</button>
                    </div>
                </div>


            </div>
        </div>

    )
}