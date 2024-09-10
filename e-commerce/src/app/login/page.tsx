import * as React from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link";



export default function Login() {
    return (
        <div className="max-w-screen-xl m-auto flex flex-col items-center justify-center gap-12 pb-80">

            <div className="w-[35%] flex justify-center items-center flex-col gap-8 mt-20">

                <p className="text-2xl font-black">Нэвтрэх</p>
                <Input className=" rounded-2xl bg-white" type="text" placeholder="Имэйл хаяг" />

                <Input className=" rounded-2xl bg-white" type="text" placeholder="Нууц үг" />



                <button className="w-[454px] h-8 bg-blue-700 py-5 flex items-center justify-center text-white  rounded-2xl">Нэвтрэх</button>
                <Link href="forget" className="underline">Нууц үг мартсан</Link>

                <Link href="/register"><button className="w-[454px] h-8 bg-white py-5 flex items-center my-8 justify-center text-blue-700  rounded-2xl">Бүртгүүлэх</button></Link>
            </div>
        </div>
    )
}
