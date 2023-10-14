import React, { useState, useEffect } from 'react'

import useCart from '@/hook/use-cart';
import { Trash2 } from 'lucide-react';
import axios from 'axios';
import Image from 'next/image';
import EmptyCart from './empty-cart';



interface SpriteType {
    front_default: string;
}

interface AbilitiesType {
    ability: {
        name: string;
    };
}

interface PokemonType {
    name: string;
    sprites: SpriteType;
    types: {
        type: {
            name: string;
        };
    }[];
    abilities: AbilitiesType[];
    stats: {
        stat: {
            name: string;
        };
    }[];
}

const CartList = () => {

    // list name poke
    const [pokeData, setPokeData] = useState<PokemonType[]>([]);

    // get zutand
    const items = useCart((state) => state.items);
    const { removeItem } = useCart();


    useEffect(() => {
        const fetchDataForPokemon = async () => {

            // list name items poke
            const uniqueNames = Array.from(new Set(items));
            // ประการศตัวแปร key key , pokemon ,count 
            const data: { [key: string]: { pokemon: PokemonType; count: number } } = {};

            // loop namepoke => axios ${name}
            // res.data => pokemon
            // if dataname ถ้ามี name แล้วให้เพิ่ม
            // else ยังไม่มี ให้เป็น 1
            for (const name of uniqueNames) {
                try {
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                    const pokemon = response.data;

                    if (data[name]) {
                        data[name].count++;
                    } else {
                        data[name] = {
                            pokemon,
                            count: 1,
                        };
                    }
                } catch (error) {
                    console.error('Error fetching data for', name, ':', error);
                }
            }

            // รวมข้อมูล data ที่ได้ไปที่ ข้าถึงข้อมูล Pokemon แต่ละตัว: .map(({ pokemon }) => pokemon)
            // ใช้ map เพื่อดึงข้อมูล Pokemon (pokemon)
            // ออกจากแต่ละตัวใน array โดยใช้ destructuring ในพารามิเตอร์ของ map ทำให้เข้าถึงเฉพาะ pokemon ที่เป็นค่าของแต่ละอ็อบเจ็กต์.
            // mergedPokemonData => setStatepokedata
            const mergedPokemonData: PokemonType[] = Object.values(data).map(({ pokemon }) => pokemon);
            setPokeData(mergedPokemonData);
        };

        fetchDataForPokemon();
    }, [items]);


    // รับ pokename  === +1 , !== count
    const countPoke = (pokeName: string) => {
        return items.reduce((count, poke) => (poke === pokeName ? count + 1 : count), 0);
    };

    // console.log(pokeData)


    return (

        <div className=' space-y-5 text-sm'>
            <div className='flex justify-between  items-center border-b-2 pb-5'>
                <div>
                    Product name
                </div>
                <div className='ml-auto mr-20'>
                    <div className='lg:mr-16 '>
                        Quantity
                    </div>
                </div>
            </div>
            <div>
                {items.length === 0 ? (
                    <div className='flex'><EmptyCart /></div>
                ) : (
                    pokeData.map((item, key) => (
                        <div key={key}>
                            <div className='flex justify-between border-b-2 pb-5'>
                                <div className='flex gap-5'>
                                    <div>
                                        <Image
                                            alt='poke'
                                            src={item.sprites.front_default}
                                            width={150}
                                            height={150}
                                            className="object-cover rounded-md"
                                        />
                                    </div>
                                    <div className=''>
                                        <div className='hidden lg:block'>
                                            {item.name}
                                        </div>
                                        <div className='flex mt-5 '>
                                            {item.types.map((type, index) => (
                                                <div key={index} className='bg-orange-500/20 p-2 rounded-xl hidden lg:block mr-2'>
                                                    <p className='text-orange-500 text-sm capitalize'>
                                                        {type.type.name}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center lg:mt-10 gap-16 ml-auto mr-20  lg:block'>
                                    <div className='flex items-center lg:space-x-20 space-x-10'>
                                        <p>
                                            {countPoke(item.name || '')}
                                        </p>
                                        <div>
                                            <button onClick={() => removeItem(item.name)}>
                                                <Trash2
                                                    size={15}
                                                    className='text-gray-600'
                                                />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div >
    )
}

export default CartList;