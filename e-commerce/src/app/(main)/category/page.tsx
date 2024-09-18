
import Image from "next/image";
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

];

export default function Category() {
    return (

        <div className="max-w-screen-xl m-auto pb-24 flex">
            <div className="w-1/4  flex flex-col gap-8">
                < div className="flex flex-col items-start gap-2">
                    <p className="font-bold py-4">Ангилал  </p>
                    <button>Малгай
                    </button>
                    <button>Усны сав
                    </button>
                    <button>T-shirt
                    </button>
                    <button>Hoodie
                    </button>
                    <button>Tee
                    </button>
                    <button>Цүнх
                    </button>
                </ div>
                < div className="flex flex-col items-start gap-2 ">
                    <p className="font-bold py-4">Хэмжээ  </p>

                    <button>Free
                    </button>
                    <button>XS
                    </button>
                    <button>S
                    </button>
                    <button>M
                    </button>
                    <button>L
                    </button>
                    <button>XL
                    </button>
                    <button>2XL
                    </button>
                    <button>3XL
                    </button>
                </div>
            </div>
            <Link href="/product/id" className="w-3/4">
                <div className="grid grid-cols-3 grid-rows-5 gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <Image
                                className='rounded-2xl'
                                src={image.img}
                                width={310}
                                height={360}
                                alt={`Image ${index}`}
                            />
                            <button className='py-2 absolute top-4 right-8'><FaRegHeart color="white" size={28} /></button>
                            <div className='flex gap-2 flex-col  py-2'>
                                <p>{image.title}</p>
                                <p className='font-bold'>{image.price}</p>
                            </div>
                        </div>

                    ))}

                </div>
            </Link>




        </div>



    )
}