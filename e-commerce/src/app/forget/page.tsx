import * as React from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"



export default function Forget() {
    return (
        <div className="max-w-screen-xl m-auto flex flex-col items-center justify-center gap-12 pb-96">

            <div className="w-[35%] flex justify-center items-center flex-col gap-8">

                <p className="text-2xl font-black">Нууц үг сэргээх</p>
                <Input className="rounded-2xl bg-white" type="text" placeholder="Имэйл хаяг оруулах" />




                <button className="w-[454px] h-8 bg-blue-700 rounded-2xl text-white flex justify-center items-center">Илгээх</button>

            </div>

            <div>
                LOADING...
            </div>

            <div className="w-[35%] flex justify-center items-center flex-col gap-8 pt-20">
                <div><svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.23" d="M0.129883 85.4987V34.9676L8 29.501H79L85.8698 34.9676V85.4987H0.129883Z" fill="black" />
                    <rect x="7.5" y="0.501953" width="72" height="76" fill="#F4F4F4" />
                    <path d="M85.8698 85.4979H0.129883L85.8698 34.9668V85.4979Z" fill="#DEDEDE" />
                    <path d="M0.129883 85.4979V34.9668L85.8698 85.4979H0.129883Z" fill="#EAEAEA" />
                </svg>
                </div>

                <p className="text-2xl font-black">Баталгаажуулах</p>
                <p>“mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу</p>
                <InputOTP className="bg-gray-400 " maxLength={4}>
                    <InputOTPGroup className="bg-white rounded-2xl" >
                        <InputOTPSlot className="p-8 space-x-12" index={0} />
                        <InputOTPSlot index={1} className="p-8 space-x-12" />
                        <InputOTPSlot index={2} className="p-8 space-x-12" />
                        <InputOTPSlot index={3} className="p-8 space-x-12" />
                    </InputOTPGroup>

                </InputOTP>


           <button>Оруулах</button>
                <button className="">Дахин илгээх (30)</button>

            </div>
            <div>
                LOADING...
            </div>
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


                <Link href="/login" className="w-[454px] h-8 bg-blue-700 rounded-2xl text-white flex justify-center items-center">Үүсгэх</Link>
            </div>
        </div>
    )
}
