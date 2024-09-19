"use client"
import * as React from "react"
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect } from "react";






export default function Signup() {
    useEffect(() => {

    }, [])

    return (
        <div className="max-w-screen-2xl m-auto flex flex-col items-center justify-center gap-12 pb-80">
            <div className="w-full flex justify-start py-8">
                <svg width="194" height="32" viewBox="0 0 194 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.4582 18.1169C56.4582 20.1941 54.7743 21.878 52.6971 21.878H47.0572V12.0089H52.6971C54.7743 12.0089 56.4582 13.6928 56.4582 15.77V18.1169ZM61.1352 16.0002C60.9271 11.5197 57.2672 7.94035 52.7502 7.86434L42.3512 7.86133V32H47.0572V26.0225H52.7502C57.2702 25.9469 60.9323 22.3623 61.1355 17.8776C61.1416 17.7474 61.1641 17.3707 61.1641 16.9421C61.1641 16.5451 61.1416 16.1335 61.1352 16.0002Z" fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M69.164 2.82335C69.164 4.38273 67.9001 5.64708 66.3407 5.64708C64.7813 5.64708 63.5173 4.38273 63.5173 2.82335C63.5173 1.26398 64.7813 0 66.3407 0C67.9001 0 69.164 1.26398 69.164 2.82335ZM68.6936 26.0247H63.9876V7.86312H68.6936V26.0247Z" fill="black" />
                    <path d="M82.5013 7.86357H72.4591V26.0229H77.1651V12.0088H84.8566V26.0251H89.5625V14.9244C89.5625 11.0248 86.4009 7.86357 82.5013 7.86357Z" fill="black" />
                    <path d="M97.1599 15.0965C97.4335 12.6065 99.0681 11.2834 101.622 11.2172C104.18 11.2834 105.739 12.526 105.916 15.0965H97.1599ZM110.667 16.9407C110.667 16.3014 110.624 15.685 110.535 15.0965C109.845 10.3051 106.402 7.29883 101.525 7.29883C96.0506 7.29883 92.3855 11.0885 92.3855 16.9407C92.3855 22.7928 96.0506 26.5822 101.525 26.5822C105.412 26.5822 108.593 24.7729 109.988 21.5718L105.844 20.067C105.185 21.6967 103.781 22.4576 101.622 22.4576C98.9944 22.3913 97.4561 20.9196 97.2006 18.3405H110.593C110.644 17.8882 110.667 17.4201 110.667 16.9407Z" fill="black" />
                    <path d="M122.662 22.0675C119.352 21.9933 117.804 20.3169 117.804 16.8471C117.804 13.4006 119.336 11.6851 122.662 11.6072C124.81 11.6576 126.206 12.3906 126.931 13.8292L131.286 12.2465C129.785 9.14281 126.685 7.29895 122.658 7.29895C116.884 7.29895 113.02 11.0886 113.02 16.9404C113.02 22.7926 116.884 26.5823 122.658 26.5823C126.685 26.5823 129.785 24.7384 131.286 21.6347L126.849 20.0208C126.097 21.354 124.721 22.0208 122.662 22.0675Z" fill="black" />
                    <path d="M142.494 22.068C139.186 21.9931 137.637 20.3174 137.637 16.8469C137.637 13.3988 139.168 11.6829 142.494 11.6065C145.82 11.6829 147.352 13.3988 147.352 16.8469C147.352 20.3174 145.802 21.9931 142.494 22.068ZM142.492 7.2987C136.718 7.2987 132.855 11.0884 132.855 16.9405C132.855 22.7927 136.718 26.5824 142.492 26.5824C148.267 26.5824 152.131 22.7927 152.131 16.9405C152.131 11.0884 148.267 7.2987 142.492 7.2987Z" fill="black" />
                    <path d="M164.996 7.8588H154.954V26.0181H159.66V12.0041H167.352V26.0204H172.058V14.92C172.058 11.0201 168.896 7.8588 164.996 7.8588Z" fill="black" />
                    <path d="M179.655 15.0965C179.929 12.6065 181.563 11.2834 184.117 11.2172C186.675 11.2834 188.234 12.526 188.411 15.0965H179.655ZM193.162 16.9407C193.162 16.3014 193.119 15.685 193.03 15.0965C192.34 10.3051 188.897 7.29883 184.02 7.29883C178.546 7.29883 174.881 11.0885 174.881 16.9407C174.881 22.7928 178.546 26.5822 184.02 26.5822C187.907 26.5822 191.088 24.7729 192.484 21.5718L188.339 20.067C187.68 21.6967 186.276 22.4576 184.117 22.4576C181.49 22.3913 179.951 20.9196 179.696 18.3405H193.088C193.139 17.8882 193.162 17.4201 193.162 16.9407Z" fill="black" />
                    <path d="M5.26025 5.31679L0.83011 13.6198C0.277331 14.6591 0 15.7993 0 16.9413C0 18.0834 0.277331 19.224 0.83011 20.2629L5.26025 28.5659C6.07681 30.0997 7.67382 31.0574 9.41193 31.0574H14.1179V28.7051H14.116C13.2479 28.7051 12.4494 28.2272 12.0411 27.4603L7.61248 19.1558C7.2422 18.4635 7.05782 17.7033 7.05782 16.9413C7.05782 16.1793 7.2422 15.4192 7.61248 14.7268L12.0411 6.42235C12.4494 5.65546 13.2479 5.17718 14.116 5.17718H14.1179V2.82495H9.41193C7.67382 2.82495 6.07681 3.783 5.26025 5.31679Z" fill="black" />
                    <path d="M32.1089 13.6198L27.6788 5.31679C26.8618 3.783 25.2652 2.82495 23.5271 2.82495H18.8211V5.17718H18.823C19.6911 5.17718 20.4896 5.65545 20.8979 6.42235L25.3265 14.7268C25.6964 15.4192 25.8808 16.1793 25.8808 16.9413C25.8808 17.7033 25.6964 18.4635 25.3265 19.1558L20.8979 27.4603C20.4896 28.2272 19.6911 28.7051 18.823 28.7051H18.8211V31.0574H23.5271C25.2652 31.0574 26.8618 30.0997 27.6788 28.5659L32.1089 20.2629C32.6617 19.224 32.939 18.0834 32.939 16.9413C32.939 15.7993 32.6617 14.6591 32.1089 13.6198Z" fill="black" />
                </svg>
            </div>
            <div className="w-[35%] flex justify-center items-center flex-col gap-8 border-2 p-12 rounded-xl bg-white">
                <p className="text-2xl font-black">Бүртгүүлэх</p>
                <div className="flex flex-col items-start w-full"> <p>Таны имэйл</p>
                    <Input className="bg-white rounded-2xl" type="text" placeholder="Имэйл хаяг" />
                </div>
                <div className="flex flex-col items-start w-full"> <p>Таны нэр </p>
                    <Input className="bg-white rounded-2xl" type="text" placeholder="Нэр" />
                </div>

                <button className="w-[430px] h-8 gap-2 bg-black py-8 flex items-center justify-center text-white rounded-xl">
                    Дараах <p ><FaArrowRightLong /></p>
                </button>

                <div className="border-b-2 border-t-2">
                    <button className="w-[454px] gap-2 bg-gray-300 h-8 py-5 flex items-center my-8 justify-center text-black">
                        <FcGoogle />
                        Google-ээр нэвтрэх
                    </button>
                    <button className="w-[454px] gap-2 bg-gray-300 h-8 py-5 flex items-center my-8 justify-center text-black ">
                        <FaMicrosoft color="white" />
                        Microsoft-оор нэвтрэх
                    </button>
                    <button className="w-[454px] gap-2 bg-gray-300 h-8 py-5 flex items-center my-8 justify-center text-black">
                        <IoLogoApple />
                        Apple-аар нэвтрэх
                    </button>
                </div>
                <div className="flex">
                    <p>Бүртгэлтэй юу?</p>
                    <button className="underline px-2">Нэвтрэх</button>

                </div>
            </div>



        </div>
    )
}
