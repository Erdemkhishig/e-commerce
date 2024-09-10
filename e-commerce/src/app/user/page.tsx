"use client"
import * as React from "react"




import { Order } from "@/components/Order";
import { Info } from "@/components/Info";


export default function User() {

    const [isOpen, setIsOpen] = React.useState(true)


    return (

        <div className="max-w-screen-xl m-auto flex flex-col items-center justify-center gap-12 py-32 text-lg">
            <div className="flex gap-12">
                <div className="w-full px-8 flex flex-col  items-start">
                    <button
                        onClick={() => setIsOpen(true)}
                        className={`p-2 rounded-2xl w-full flex justify-center  ${isOpen ? 'bg-white' : 'bg-transparent'}`}
                    >
                        Хэрэглэгчийн хэсэг
                    </button>
                    <button
                        onClick={() => setIsOpen(false)}
                        className={`p-2 rounded-2xl w-full flex justify-center  ${!isOpen ? 'bg-white' : 'bg-transparent'}`}
                    >
                        Захиалгын түүх
                    </button>
                </div>
                <div className="w-full">
                    {isOpen ? <Info /> : <Order />}
                </div>

            </div>
        </div>

    )
}
