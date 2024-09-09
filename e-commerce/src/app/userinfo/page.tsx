"use client"
import * as React from "react"


import Link from "next/link";

import { Order } from "@/components/order";
import { User } from "@/components/user";


export default function Userinfo() {

    const [isOpen, setIsOpen] = React.useState(false)


    return (
        <div>
            <div className="max-w-screen-xl m-auto flex flex-col items-center justify-center gap-12 py-32">
                <div className="w-[100%] flex">
                    <div className="w-[20%] flex flex-col  items-start">
                        <button className=" p-1 rounded-xl w-full flex justify-start bg-gray-200 pl-4">Хэрэглэгчийн хэсэг</button>
                        <button className="pl-4">Захиалгын түүх</button>
                    </div>
                    <div className="w-full">
                        <User />

                    </div>

                </div>
            </div>
        </div>
    )
}
