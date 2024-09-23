"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdBorderAll } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { HiTag } from "react-icons/hi2";
import { PiListDashesFill } from "react-icons/pi";
import { RiSettings5Fill } from "react-icons/ri";

export default function Aside() {
    const pathname = usePathname();

    return (
        <div className="w-[15%] h-screen bg-white">
            <div className="flex flex-col justify-center gap-4 my-4">
                <Link href="/admin" className={`p-4 flex gap-2 items-center justify-start ${pathname === '/admin' ? 'bg-gray-300' : ''}`}>
                    <MdBorderAll size={28} />Хяналтын самбар
                </Link>
                <Link href="/admin/orders" className={`p-4 flex gap-2 items-center justify-start ${pathname === '/admin/orders' ? 'bg-gray-300' : ''}`}>
                    <SlNotebook size={28} />Захиалга
                </Link>
                <Link href="/income" className={`p-4 flex gap-2 items-center justify-start ${pathname === '/income' ? 'bg-gray-300' : ''}`}>
                    <HiTag size={28} />Орлого
                </Link>
                <Link href="/admin/product" className={`p-4 flex gap-2 items-center justify-start ${pathname.startsWith('/admin/product') ? 'bg-gray-300' : ''}`}>
                    <PiListDashesFill size={28} />Бүтээгдэхүүн
                </Link>
                <Link href="/settings" className={`p-4 flex gap-2 items-center justify-start ${pathname === '/settings' ? 'bg-gray-300' : ''}`}>
                    <RiSettings5Fill size={28} />Тохиргоо
                </Link>
            </div>
        </div>
    );
}
