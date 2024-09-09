import * as React from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link";



export default function Login() {
    return (
        <div className="max-w-screen-xl m-auto flex flex-col items-center justify-center gap-12 pb-96">
            <button className="pl-64 text-xl font-bold">Бүртгүүлэх</button>
            <div className="w-[35%] flex justify-center items-center flex-col gap-8">

                <p className="text-2xl font-black">Нэвтрэх</p>
                <Input type="text" placeholder="Нэр" />

                <Input type="text" placeholder="Нууц үг" />



                <button className="w-[454px] h-8 bg-black rounded-md text-white">Нэвтрэх</button>
                <Link href="forget" className="underline">Нууц үг мартсан</Link>
            </div>
        </div>
    )
}
