import * as React from "react"
import { FaStar } from "react-icons/fa6";
import { Textarea } from "@/components/ui/textarea"



export const Rate = () => {

 
    return (
        <div className="flex flex-col items-start w-full p-8 rounded-2xl">
            <div className=" flex flex-col gap-2 py-8 border-gray-500 border-b-2 border-dotted">
                <div className="flex gap-2">
                <p>Saraa</p>
                <p><FaStar fill="yellow" size={24} /></p>
                <p><FaStar fill="yellow" size={24} /></p>
                <p><FaStar fill="yellow" size={24} /></p>
                </div>

                <div>
                    <p>Ваав материал ёстой гоё  байна 😍</p>
                </div>
            </div>
            <div className="my-8 flex font-bold flex-col gap-4 bg-gray-200 rounded-2xl p-4 w-full">
                <p>Одоор үнэлэх:</p>
                <p><FaStar fill="yellow" size={24} /></p>
                <p>Сэтгэгдэл үлдээх:</p>
                <Textarea className="bg-white p-4 rounded-2xl" placeholder="Энд бичнэ үү" />
                <button className="w-[160px] h-12 bg-blue-500 rounded-3xl text-white ">Үнэлэх</button>

            </div>
            



        </div>

    )
}