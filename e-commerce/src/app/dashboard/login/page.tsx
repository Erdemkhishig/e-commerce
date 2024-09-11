import * as React from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link";



export default function Dashlogin() {
    return (
        <div className="max-w-screen-xl m-auto flex flex-col items-center justify-end gap-12">

            <div className="w-[35%] flex justify-center items-center flex-col gap-8 border-2 p-12 rounded-xl">
                <p className="text-2xl font-black">Бүртгүүлэх</p>
                <div className="flex flex-col items-start w-full"> <p>Таны имэйл</p>
                    <Input className="bg-white rounded-2xl" type="text" placeholder="Имэйл хаяг" />
                </div>
                <div className="flex flex-col items-start w-full"> <p>Нууц үг </p>
                    <Input className="bg-white rounded-2xl" type="text" placeholder="Нууц үг" />
                </div>
                <button className="w-[340px] h-8 gap-2 bg-black py-8 flex items-center justify-center text-white rounded-xl">
                    Нэвтрэх
                </button>


            </div>

        </div>
    )
}
