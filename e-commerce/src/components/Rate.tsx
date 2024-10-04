import * as React from "react"
import { FaStar } from "react-icons/fa6";
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from "@/components/provider/Auth.provider";


export const Rate = () => {
    const { user, logout } = useAuth()
    return (
        <div className="flex flex-col items-start w-[400px] rounded-2xl">

            <div className="flex font-bold flex-col gap-4 bg-gray-200 rounded-2xl px-8 w-full py-4">
                <div className=" flex flex-col gap-2 border-gray-500 border-b-2 border-dotted">
                    <div className="flex gap-2 w-full py-2">
                        <p>{user?.name}</p>
                        <p><FaStar fill="yellow" size={24} /></p>
                        <p><FaStar fill="yellow" size={24} /></p>
                        <p><FaStar fill="yellow" size={24} /></p>
                    </div>
                </div>
                <p>Одоор үнэлэх:</p>
                <p><FaStar fill="yellow" size={24} /></p>
                <p>Сэтгэгдэл үлдээх:</p>
                <Textarea className="bg-white p-4 rounded-2xl" placeholder="Энд бичнэ үү" />
                <button className="w-[160px] h-12 bg-blue-500 rounded-3xl text-white ">Үнэлэх</button>

            </div>
        </div>

    )
}