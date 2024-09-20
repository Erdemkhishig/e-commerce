
import Link from "next/link";
import { MdBorderAll } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { HiTag } from "react-icons/hi2";
import { PiListDashesFill } from "react-icons/pi";
import { RiSettings5Fill } from "react-icons/ri";


export default function Aside() {
    return (
        <div className="w-[15%] h-screen bg-white" >
            <div className="p-8 flex flex-col justify-center gap-8 my-4">
                <Link href="/admin" className="flex gap-2 items-center justify-start"><MdBorderAll size={28} />Хяналтын самбар      </Link>
                <Link href="" className="flex gap-2 items-center justify-start"><SlNotebook size={28} />Захиалга</Link>
                <Link href="" className="flex gap-2 items-center justify-start"><HiTag size={28} />Орлого</Link>
                <Link href="/admin/product" className="flex gap-2 items-center justify-start"><PiListDashesFill size={28} />Бүтээгдэхүүн</Link>
                <Link href="" className="flex gap-2 items-center justify-start"><RiSettings5Fill size={28} />Тохиргоо</Link>
            </div>
        </div>
    )
}