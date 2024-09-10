



import * as React from "react"

import Image from 'next/image'


const payments = [
    {
        pic: "/qr.png"
    },
    {
        pic: "/khan.png"
    },
    {
        pic: "/qr.png"
    },
    {
        pic: "/khan.png"
    },
    {
        pic: "/qr.png"
    },
    {
        pic: "/khan.png"
    },
    {
        pic: "/qr.png"
    },
    {
        pic: "/khan.png"
    },
    {
        pic: "/qr.png"
    },
    {
        pic: "/khan.png"
    },
    {
        pic: "/qr.png"
    },
    {
        pic: "/khan.png"
    },
    {
        pic: "/qr.png"
    }
]



export const Step3 = () => {
    return (
        <div className="w-full flex flex-col items-center gap-8 my-8">
        <div>

                <div className="flex items-center justify-between relative w-96 py-12">
                    <div className="flex flex-col">
                        <div className="rounded-full bg-blue-700 p-6 w-8 h-8 flex justify-center items-center text-xl text-white">✓ </div>

                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="rounded-full bg-blue-700 p-6 w-8 h-8 flex justify-center items-center text-white text-xl">✓</div>

                    </div> <div className="flex flex-col">
                        <div className="rounded-full bg-blue-700 text-white
                         p-6 w-8 h-8 flex justify-center items-center text-xl">3</div>

                    </div>
                    <div className="top-15 left-[3rem] h-0.5 w-[120px] bg-black absolute"></div>
                    <div className="top-15 left-[13.5rem] h-0.5 w-[120px] bg-black absolute"></div>
                </div>


            </div>
        
        <div className="w-[700px] h-[700px] border-2 bg-white ">
        <p className="p-6 text-xl font-bold"> 3. Төлбөр төлөлт</p>
        <div className="flex flex-col  items-center justify-center gap-8">
            <p className="rounded-2xl border-2 bg-gray-200 p-1 px-4">14:59</p>
            <Image
                src="/mask.svg"
                width={200}
                height={200}
                alt=""
            />
            <p className="font-bold">Төлөх боломжтой банкууд:</p>
            <div className="grid grid-cols-8 grid-rows-2 gap-4 py-6">
                {payments.map((item, index,) => (
                    <button key={index}
                    >
                        <Image
                            src={item.pic}
                            width={50}
                            height={50}
                            alt=""
                        />


                    </button>

                ))}
            </div>
            <div className="w-full flex px-8">
                <button className="w-[120px] h-12 bg-white rounded-3xl border-2 font-bold">Буцах</button>

            </div>
        </div>



    </div>
    </div>
       
    )
}