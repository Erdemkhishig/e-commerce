"use client"

import { Bar, BarChart } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import * as React from "react"
import Image from 'next/image'
import { MdKeyboardArrowRight } from "react-icons/md";


const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
    { month: "July", desktop: 200 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "black",
    }
} satisfies ChartConfig


export default function Dashboard() {


    return (

        <div className="w-full m-auto flex gap-8 pl-12">

            <div className="w-1/2" >
                <div className="w-full h-fit my-8 border-black rounded-xl bg-white flex flex-col gap-6 p-8">
                    <div className="flex flex-col gap-4">
                        <p className="text-lg">$ Орлого</p>
                        <p className="font-bold text-2xl">888.888₮</p></div>
                    <div>
                        <p className="text-gray-400">Today</p>
                    </div>

                </div>
                <div className="w-full h-[82%] mb-8 border-black rounded-xl bg-white p-8">
                    <div className="flex justify-between">
                        <p className="text-xl font-semibold">Шилдэг бүтээгдэхүүн</p>
                        <p><MdKeyboardArrowRight size={32} /></p>
                    </div>
                    <div className="h-14 w-full bg-gray-200 flex mt-8">
                        <div className="w-[10%] flex items-center justify-center">№</div>
                        <div className="w-[40%] flex items-center justify-center">Бүтээгдэхүүн</div>
                        <div className="w-[25%] flex items-center justify-center">Зарагдсан</div>
                        <div className="w-[25%] flex items-center justify-center">Үнэ</div>
                    </div>
                    <div className="h-14 w-full flex py-10 border-b-2 ">
                        <div className="w-[10%] flex items-center justify-center">1</div>
                        <div className="w-[40%] flex items-center justify-start px-8 gap-4">
                            <Image
                                className='w-12 h-12 rounded-full'
                                src="/imag.png"
                                width={80}
                                height={80}
                                alt=""
                            />
                            <div className="flex flex-col">
                                <p className="font-semibold">
                                    Усны сав
                                </p>
                                <p className="text-gray-500">
                                    0001
                                </p>
                            </div></div>
                        <div className="w-[25%] flex items-center justify-center"><p>200</p></div>
                        <div className="w-[25%] flex items-center justify-center"><p>100.000₮</p></div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 mr-8">
                <div className="w-full h-fit my-8 border-black rounded-xl bg-white flex flex-col gap-6 p-8">
                    <div className="flex flex-col gap-4">
                        <p className="text-lg">$ Орлого</p>
                        <p className="font-bold text-2xl">888.888₮</p></div>
                    <div>
                        <p className="text-gray-400">Today</p>
                    </div>

                </div>
                <div className="w-full h-[82%] mb-8 border-black rounded-xl bg-white p-8">
                    <div className="flex flex-col">
                        <div className="flex justify-between"><p className="text-xl font-semibold">Борлуулалт</p>
                            <p><MdKeyboardArrowRight size={32} /></p>
                        </div>
                        <div className="flex gap-8 mt-8">
                            <div className="flex flex-col gap-20">
                                <p>400k</p>
                                <p>300k</p>
                                <p>200k</p>
                                <p>100k</p>
                                <p>0</p>
                            </div>
                            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                                <BarChart accessibilityLayer data={chartData}>
                                    <Bar className="w-10" dataKey="desktop" fill="var(--color-desktop)" radius={4} />

                                </BarChart>
                                <div className="flex gap-24 p-6">
                                    <p>Jan</p>
                                    <p>Feb</p>
                                    <p>Mar</p>
                                    <p>Apr</p>
                                    <p>May</p>
                                    <p>Jun</p>
                                    <p>Jul</p>
                                </div>

                            </ChartContainer>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}
