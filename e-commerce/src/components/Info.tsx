"use client"
import * as React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from "@/components/provider/Auth.provider";



export const Info = () => {
    const { user } = useAuth()


    return (

        <div className="w-[600px] text-lg pb-4">
            <p className="text-2xl font-bold border-b-2 border-gray-300 h-16 mb-8">Хэрэглэгчийн хэсэг</p>
            <div className="pb-8 flex flex-col gap-4">
                Овог:
                <Input className="bg-white mx-2 rounded-2xl my-2" type="text" placeholder="" value={user?.firstname} />
                Нэр:
                <Input className="bg-white mx-2 rounded-2xl my-2" type="text" placeholder="" value={user?.lastname} />
                Утасны дугаар:
                <Input className="bg-white mx-2 rounded-2xl my-2" type="text" placeholder="" />
                Имэйл хаяг:
                <Input className="bg-white mx-2 rounded-2xl my-2" type="text" placeholder="" value={user?.email} />
                Хаяг
                <Textarea className="bg-white mx-2 rounded-2xl my-2" placeholder="" />
            </div>

            <div className="w-full flex justify-end">
                <button className="w-[250px] h-12 bg-blue-500 rounded-3xl text-white ">Мэдээлэл шинэчлэх</button>
            </div>
        </div>







    )
}
