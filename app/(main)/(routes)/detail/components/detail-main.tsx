'use client'

import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { ChevronLeft, ShoppingBag } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import useCart from '@/hook/use-cart';

interface ProductPageProps {
    name: string;
}

interface SpriteType {
    front_default: string;
}

interface AbilitiesType {
    ability: {
        name: string;
    };
}

interface PokemonType {
    name?: string;
    sprites: SpriteType;
    types: string[];
    abilities: AbilitiesType[];
    stats: {

        stat: {
            name: string;
        };
    }[];
}

const DetailMain: React.FC<PokemonType> = () => {


    const [pokeData, setPokeData] = useState<PokemonType[]>([]);

    const router = useRouter();

    const routeName = useParams();

    // const items = useCart((state) => state.items);


    // zutand
    const { addItem, removeItem } = useCart();

    useEffect(() => {
        const fetchPokemonData = async () => {

            try {
                const pokemonData = [];

                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${routeName.detail}`);
                const { name, types, sprites, abilities, stats } = response.data;

                const pokemon = {
                    name,
                    // แปลงข้อมูลจาก Array object => ดึงออกมาจาก type ให้เป็น name : string 
                    // => แล้วส่งกลับเป็น Array ใหม่ type เป็น string
                    types: types.map((type: { type: { name: string } }) => type.type.name),
                    sprites,
                    abilities,
                    stats
                };

                pokemonData.push(pokemon);
                setPokeData(pokemonData);


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPokemonData();

    }, [routeName.detail]);

    // console.log(items)



    return (

        pokeData.length === 0 ? (
            <div className='p-5'>กำลังโหลดข้อมูล (Loading data)...</div>
        ) : (

            <div className='h-full w-full space-y-5 mt-10 pb-20 lg:text-xl'>
                <div onClick={() => router.push('/')} className='flex hover:cursor-pointer'>
                    <ChevronLeft />
                    <p className='font-bold'>Back</p>
                </div>
                <div className='grid grid-cols-2 bg-white rounded-xl shadow-md p-10'>
                    <div className="flex items-center justify-center  rounded-xl   ">
                        <Image
                            alt='poke'
                            src={pokeData[0].sprites.front_default}
                            width={200}
                            height={200}
                        /></div>
                    <div className='space-y-5'>
                        <p className='font-bold capitalize '>
                            {pokeData[0].name}
                        </p>
                        <div className='flex gap-1 '>
                            {
                                pokeData[0].types.map((item, key) => (
                                    <div key={key} className=' bg-orange-500/20 p-2 rounded-xl flex  mr-2'>
                                        <p className=' text-orange-500 font-bold capitalize '>
                                            {item}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='flex gap-2 flex-wrap'>
                            <p>
                                Stats:
                            </p>
                            {pokeData[0].stats.map((item, key) => (
                                <div key={key} className=''>
                                    <p>
                                        {key === pokeData[0].stats.length - 1 ? item.stat.name : `${item.stat.name},`}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <p>
                                Ablilities:
                            </p>

                            {pokeData[0].abilities.map((item, key) => (
                                <div key={key}>
                                    <p>
                                        {key === pokeData[0].abilities.length - 1 ? item.ability.name : `${item.ability.name},`}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className='flex items-center gap-2'>
                            <p> Quantitiy: </p>
                            <div className='flex justify-between border-2 w-[150px] p-2 rounded-xl border-black text-bold cursor-pointer'>
                                <button className='text-xl'
                                    onClick={() => { }} >-</button>
                                <p>1</p>
                                <button className='text-xl'
                                    onClick={() => { }} >+</button>
                            </div>
                        </div>
                        <div onClick={() => addItem(routeName.detail)}
                            className='flex items-center justify-center p-3 lg:w-[250px] border text-white
                         bg-rose-500/80 rounded-xl hover:cursor-pointer hover:scale-105 transition'>
                            <button className='flex flex-row gap-2'>
                                <ShoppingBag />
                                Add to pocket
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    );
}

export default DetailMain