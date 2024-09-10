import * as React from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link";



export default function Register() {
    return (
        <div className="max-w-screen-xl m-auto flex flex-col items-center justify-center gap-12 py-24">

            <div className="w-[35%] flex justify-center items-center flex-col gap-8">

                <p className="text-2xl font-black">Бүртгүүлэх</p>
                <Input className="bg-white rounded-2xl " type="text" placeholder="Нэр" />
                <Input className="bg-white rounded-2xl" type="text" placeholder="Имэйл хаяг" />
                <Input className="bg-white rounded-2xl" type="text" placeholder="Нууц үг" />
                <Input className="bg-white rounded-2xl" type="text" placeholder="Нууц үг давтах " />
                <div className=" w-full">
                    <li>Том үсэг орсон байх</li>
                    <li>Жижиг үсэг орсон байх</li>
                    <li>Тоо орсон байх</li>
                    <li className="text-red-400">Тэмдэгт орсон байх</li>
                </div>


                <button className="w-[454px] h-8 bg-blue-700 py-5 rounded-2xl flex items-center justify-center text-white">Үүсгэх</button>
                <Link href="/login"><button className="w-[454px] h-8 bg-white py-5 flex items-center my-8 justify-center text-black  rounded-2xl">Нэвтрэх</button></Link>
            </div>
        </div>
    )
}
