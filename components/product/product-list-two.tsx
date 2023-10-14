import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

interface SpriteType {
    front_default: string; // Assuming 'front_default' is the image URL
}

interface AbilitiesType {
    ability: {
        name: string;
    };
}


interface ProductListProps {
    name: string;
    types: string[];
    sprites: SpriteType;
    abilities: AbilitiesType[];
}

const ProductListTwo = ({ name, types, sprites, abilities }: ProductListProps) => {

    const router = useRouter();

    const handleDetail = () => {

        router.push(`/detail/${name}`,
        );

    }

    return (
        <div className='flex'>
            <div className='h-full'>
                <div onClick={handleDetail}
                    className="flex items-center justify-center  rounded-xl bg-gray-100 hover:cursor-pointer  ">
                    <Image
                        alt='poke'
                        src={sprites.front_default}
                        width={120}
                        height={120}
                        className="object-cover rounded-md"
                    />
                </div>
            </div>
            <div className='space-y-3 px-4  font-bold'>
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
                <div className='flex'>
                    <p className='font-light'>Abilities: </p>
                    {abilities.map((item, index) => (
                        <div key={index} className='  mr-2'>
                            <p className='font-light ml-2 '>
                                {index === 0 ?
                                    item.ability.name
                                    : `, ${item.ability.name}`}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default ProductListTwo;