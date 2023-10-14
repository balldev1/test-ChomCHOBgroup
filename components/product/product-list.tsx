import { Search } from 'lucide-react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import NavbarInput from '../navbar/navbar-input';

interface SpriteType {
    front_default: string; // Assuming 'front_default' is the image URL
}

interface ProductListProps {
    name: string;
    types: string[];
    sprites: SpriteType;
}

const ProductList = ({ name, types, sprites }: ProductListProps) => {
    // console.log([types])
    const router = useRouter();

    const handleDetail = () => {

        router.push(`/detail/${name}`,
        );

    }

    return (
        <div>
            <div className='w-full' >
                <div className="flex items-center justify-center  rounded-xl bg-gray-100 relative ">
                    <Image
                        alt='poke'
                        src={sprites.front_default}
                        width={120}
                        height={120}
                        className="object-cover rounded-md"
                    />
                </div>
                <div className='px-4 space-y-3  font-bold'>
                    <div>
                        <p >{name}</p>
                    </div>
                    <div className='flex'>
                        {types.map((item, index) => (
                            <div key={index} className='bg-orange-500/20 p-2 rounded-xl flex  mr-2'>
                                <p className=' text-orange-500 text-sm capitalize '>
                                    {item}
                                </p>
                            </div>

                        ))}
                    </div>
                    <div onClick={() => handleDetail()}>
                        <button className='w-full bg-zinc-900/90 p-2 rounded-xl mt-2 mb-1
                    hover:cursor-pointer hover:bg-yellow-500/90 
                    '>
                            <p
                                className='text-white hover:text-black'>Detail</p>
                        </button>
                    </div>
                </div>
            </div >
        </div>

    )
}

export default ProductList