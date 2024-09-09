"use client"
import * as React from "react"


import { Input } from "@/components/ui/input"
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea"



export const User = () => {



    return (
        <div>
            <div >



                <p className="text-2xl font-black h-10 border-b-2 pb-20  ">Хэрэглэгчийн хэсэг</p>
                <div className="py-16">
                    Овог:
                    <Input type="text" placeholder="" />
                    Нэр:
                    <Input type="text" placeholder="" />
                    Утасны дугаар:
                    <Input type="text" placeholder="" />
                    Имэйл хаяг:
                    <Input type="text" placeholder="" />
                    Хаяг
                    <Textarea placeholder="" />
                </div>

                <div className="w-full flex justify-end">
                    <button className="w-[250px] h-12 bg-blue-500 rounded-3xl text-white ">Мэдээлэл шинэчлэх</button>
                </div>
            </div>





        </div>
    )
}
