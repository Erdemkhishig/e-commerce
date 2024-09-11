
import Image from 'next/image'
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";


const images = [
    {
        id: "1",
        img: "/image0.png",
        title: "Wildflower Hoodie",
        price: "120'000₮"
    },
    {
        id: "2",
        img: "/image (1).png",
        title: "All Smiles Nalgene",
        price: "120'000₮"
    },
    {
        id: "3",
        img: "/image (2).png",
        title: "Chunky Glyph Tee",
        price: "120'000₮"
    },
    {
        id: "4",
        img: "/image (3).png",
        title: "The Prompt Magazine",
        price: "120'000₮"
    },

    {
        id: "5",
        img: "/image00.png",
        title: "Wildflower Hoodie",
        price: "120'000₮"
    },
    {
        id: "6",
        img: "/image (5).png",
        title: "All Smiles Nalgene",
        price: "120'000₮"
    },
    {
        id: "7",
        img: "/image (7).png",
        title: "Chunky Glyph Tee",
        price: "120'000₮"
    },
    {
        id: "8",
        img: "/image (6).png",
        title: "The Prompt Magazine",
        price: "120'000₮"
    },
    {
        id: "9",
        img: "/image7.png",
        title: "Chunky Glyph Tee",
        price: "120'000₮"
    },
    {
        id: "10",
        img: "/image8.png",
        title: "The Prompt Magazine",
        price: "120'000₮"
    },
    {
        id: "11",
        img: "/image7.png",
        title: "Chunky Glyph Tee",
        price: "120'000₮"
    },
    {
        id: "12",
        img: "/image8.png",
        title: "The Prompt Magazine",
        price: "120'000₮"
    },

    {
        id: "13",
        img: "/image0.png",
        title: "Wildflower Hoodie",
        price: "120'000₮"
    },
    {
        id: "14",
        img: "/image (1).png",
        title: "All Smiles Nalgene",
        price: "120'000₮"
    },
    {
        id: "15",
        img: "/image (2).png",
        title: "Chunky Glyph Tee",
        price: "120'000₮"
    },
    {
        id: "16",
        img: "/image (3).png",
        title: "The Prompt Magazine",
        price: "120'000₮"
    },
    {
        id: "17",
        img: "/image (5).png",
        title: "Chunky Glyph Tee",
        price: "120'000₮"
    },
    {
        id: "18",
        img: "/image (6).png",
        title: "The Prompt Magazine",
        price: "120'000₮"
    }
];


export const Main = () => {

    return (
        <div className="max-w-screen-xl m-auto pb-24">
            <Link href="/product/id" >
                <div className='relative'>
                    <Image
                        className='rounded-2xl my-8'
                        src="/img.png"
                        width={1280}
                        height={500}
                        alt="Picture of the author"
                    />
                    <div className='py-2 absolute top-[26rem] left-10 text-4xl'>
                        <p>Wildflower Hoodie</p>
                        <p className='font-bold'>120'000₮</p>
                    </div>
                </div>
            </Link>
            <Link href="/product/id" >
                <div className="grid grid-cols-4 grid-rows-auto gap-4  py-8">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`relative ${index === 2 || index === 3 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}
                        >
                            <div>
                                <div className='w-full h-full overflow-hidden rounded-xl'>
                                    <Image
                                        src={image.img}
                                        alt={`Image ${index}`}
                                        width={index === 2 || index === 3 ? 800 : 400}
                                        height={index === 2 || index === 3 ? 400 : 400}
                                        className='object-cover duration-500 hover:scale-110'
                                    />
                                </div>
                            </div>
                            <button className='absolute top-4 right-8'>
                                <FaRegHeart color="white" size={28} />
                            </button>
                            <div className='py-2'>
                                <p className='text-sm font-medium'>{image.title}</p>
                                <p className='font-bold'>{image.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Link>
        </div>

    )
}