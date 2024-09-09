import * as React from "react"
import { Input } from "@/components/ui/input"

import Link from "next/link";


export default function Register() {
    return (
        <div className="max-w-screen-xl m-auto flex flex-col items-center justify-center gap-12 pb-96 pt-28">

            <div className="w-[35%] flex justify-center items-center flex-col gap-8">

                <p className="text-2xl font-black">Нууц үг сэргээх</p>

                <Input type="text" placeholder="Шинэ нууц үг" />
                <Input type="text" placeholder="Шинэ нууц үг давтах" />
                <div className=" w-full">
                    <li>Том үсэг орсон байх</li>
                    <li>Жижиг үсэг орсон байх</li>
                    <li>Тоо орсон байх</li>
                    <li className="text-red-400">Тэмдэгт орсон байх</li>
                </div>


                <Link href="/login"><button className="w-[454px] h-8 bg-black rounded-md text-white">Үүсгэх</button></Link>
            </div>
        </div>
    )
}
