import * as React from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link";



export default function Register() {
    return (
        <div className="max-w-screen-xl m-auto flex flex-col items-center justify-center gap-12 pb-96">
            <Link href="/login" className="pl-64 text-xl font-bold">Нэвтрэх</Link>
            <div className="w-[35%] flex justify-center items-center flex-col gap-8">

                <p className="text-2xl font-black">Бүртгүүлэх</p>
                <Input type="text" placeholder="Нэр" />
                <Input type="text" placeholder="Имэйл хаяг" />
                <Input type="text" placeholder="Нууц үг" />
                <Input type="text" placeholder="Нууц үг давтах " />


                <button className="w-[454px] h-8 bg-black rounded-md text-white">Үүсгэх</button>
            </div>
        </div>
    )
}
