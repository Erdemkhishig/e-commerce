
import Image from 'next/image'
import { FaRegHeart } from "react-icons/fa";

const images = [
    {
        img: "/image0.png",
        title: "Wildflower Hoodie",
        price: "120'000₮"
    },
    {
        img: "/image (1).png",
        title: "All Smiles Nalgene",
        price: "120'000₮"
    },
    {
        img: "/image (2).png",
        title: "Chunky Glyph Tee",
        price: "120'000₮"
    },
    {
        img: "/image (3).png",
        title: "The Prompt Magazine",
        price: "120'000₮"
    },

]

const image = [
    {
        img: "/image00.png",
        title: "Wildflower Hoodie",
        price: "120'000₮"
    },
    {
        img: "/image (5).png",
        title: "All Smiles Nalgene",
        price: "120'000₮"
    },
    {
        img: "/image (7).png",
        title: "Chunky Glyph Tee",
        price: "120'000₮"
    },
    {
        img: "/image (6).png",
        title: "The Prompt Magazine",
        price: "120'000₮"
    },
    {
        img: "/image7.png",
        title: "Chunky Glyph Tee",
        price: "120'000₮"
    },
    {
        img: "/image8.png",
        title: "The Prompt Magazine",
        price: "120'000₮"
    },
    {
        img: "/image7.png",
        title: "Chunky Glyph Tee",
        price: "120'000₮"
    },
    {
        img: "/image8.png",
        title: "The Prompt Magazine",
        price: "120'000₮"
    },

]



export const Main = () => {
    return (
        <div className="max-w-screen-xl m-auto pb-24 ">

            <div className='relative'>
                <Image className=' rounded-2xl my-8 '
                    src="/img.png"
                    width={1280}
                    height={500}
                    alt="Picture of the author"
                />
                <div className='py-2 absolute top-[26rem] left-10 text-4xl'>
                    <p>Wildflower Hoodie</p>
                    <p className='font-bold'>120'000₮</p> </div>
            </div>
            <div className='flex gap-4'>
                {images.map((image, index) => (
                    <div className='relative  ' key={index}>
                        <div className='overflow-hidden rounded-2xl'>
                            <Image
                                className='duration-500 hover:scale-110 '
                                src={image.img}
                                width={310}
                                height={360}
                                alt={`Image ${index}`}
                            />
                        </div>
                        <div className='py-2 absolute top-4 right-8'><FaRegHeart color="white" size={28} /></div>
                        <div className='flex gap-2 flex-col  py-2'>
                            <p>{image.title}</p>
                            <p className='font-bold'>{image.price}</p>
                        </div>
                    </div>

                ))}

            </div>

            <div className="grid grid-cols-4 grid-rows-3 gap-4">

                <div className="col-span-1 row-span-1 ">
                    <div className='w-full h-full relative'> <Image src="/image00.png" alt="Image 1" width={400} height={400} className="object-cover rounded-xl" />
                        <div className='py-2 absolute top-4 right-8'><FaRegHeart color="white" size={28} /></div>
                        <div className='py-2'>  <p>Wildflower Hoodie</p>
                            <p className='font-bold'>120.000</p> </div>
                    </div>

                </div>

                <div className="col-span-1 row-span-1 ">
                    <div className='relative'> <Image src="/image (5).png" alt="Image 2" width={400} height={400} className="object-cover rounded-xl" />
                        <div className='py-2 absolute top-4 right-8'><FaRegHeart color="white" size={28} /></div>
                        <div className='py-2'>  <p>Wildflower Hoodie</p>
                            <p className='font-bold'>120.000</p> </div>
                    </div> </div>
                <div className="col-span-2 row-span-2 ">
                    <div className='relative'> <Image src="/image (7).png" alt="Image 3" width={800} height={0} className="rounedn-xl" />
                        <div className='py-2 absolute top-4 right-8'><FaRegHeart color="white" size={28} /></div>
                        <div className='py-2'>  <p>Wildflower Hoodie</p>
                            <p className='font-bold'>120.000</p> </div>
                    </div>
                </div>

                <div className="col-span-2 row-span-2  flex flex-col items-end justify-end">
                    <div className='flex flex-col justify-between relative'> <Image src="/image (6).png" alt="Image 4" width={800} height={0} className="" />
                        <div className='py-2 absolute top-4 right-8'><FaRegHeart color="white" size={28} /></div>
                        <div className='py-2'>  <p>Wildflower Hoodie</p>
                            <p className='font-bold'>120.000</p> </div>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 ">
                    <div className='relative'><Image src="/image7.png" alt="Image 5" width={400} height={400} className="object-cover rounded-xl" />
                        <div className='py-2 absolute top-4 right-8'><FaRegHeart color="white" size={28} /></div>
                        <div className='py-2'>  <p>Wildflower Hoodie</p>
                            <p className='font-bold'>120.000</p> </div>
                    </div> </div>
                <div className="col-span-1 row-span-1 ">
                    <div className='relative'> <Image src="/image8.png" alt="Image 6" width={400} height={400} className="object-cover rounded-xl" />
                        <div className='py-2 absolute top-4 right-8'><FaRegHeart color="white" size={28} /></div>
                        <div className='py-2'>  <p>Wildflower Hoodie</p>
                            <p className='font-bold'>120.000</p> </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 grid-rows-2 gap-4">
                {image.map((item, index) => (
                    <div key={index} className="col-span-1 row-span-1 relative">
                        <div className='w-full h-full'>
                            <Image src={item.img}
                                alt={`item ${index}`}
                                width={400} height={400}
                                className="object-cover rounded-xl" />
                            <div className='py-2 absolute top-4 right-8'><FaRegHeart color="white" size={28} /></div>
                            <div className='py-2'>
                                <p>{item.title}</p>
                                <p className='font-bold'>{item.price}</p>
                            </div>
                        </div>

                    </div>
                ))}




            </div >
        </div >




    )
}