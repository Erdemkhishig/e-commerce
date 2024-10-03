import * as React from "react"
import { FaStar } from "react-icons/fa6";
import { Textarea } from "@/components/ui/textarea"



export const Rate = () => {


    return (
        <div className="flex flex-col items-start w-full rounded-2xl h-[200px]">
            <div className=" flex flex-col gap-2 border-gray-500 border-b-2 border-dotted">
                <div className="flex gap-2 p-1">
                    <p>Saraa</p>
                    <p><FaStar fill="yellow" size={24} /></p>
                    <p><FaStar fill="yellow" size={24} /></p>
                    <p><FaStar fill="yellow" size={24} /></p>
                </div>
            </div>
            <div className="flex font-bold flex-col gap-4 bg-gray-200 rounded-2xl p-1 w-full py-8">
                <p>Одоор үнэлэх:</p>
                <p><FaStar fill="yellow" size={24} /></p>
                <p>Сэтгэгдэл үлдээх:</p>
                <Textarea className="bg-white p-4 rounded-2xl" placeholder="Энд бичнэ үү" />
                <button className="w-[160px] h-12 bg-blue-500 rounded-3xl text-white ">Үнэлэх</button>

            </div>
        </div>

    )
}