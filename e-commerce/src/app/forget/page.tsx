import * as React from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link";



export default function Forget() {
    return (
        <div className="max-w-screen-xl m-auto flex flex-col items-center justify-center gap-12 pb-96">

            <div className="w-[35%] flex justify-center items-center flex-col gap-8">

                <p className="text-2xl font-black">Нууц үг сэргээх</p>
                <Input type="text" placeholder="Имэйл хаяг оруулах" />




                <Link href="opt" className="w-[454px] h-8 bg-black rounded-md text-white flex justify-center items-center">Илгээх</Link>

            </div>
        </div>
    )
}
