'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios';


import { Grid2X2 } from 'lucide-react';
import { Columns } from 'lucide-react';

import Container from '@/components/container'
import ProductList from './product-list';
import ProductListTwo from './product-list-two';
import { EmptyProduct } from './empty-product';
import NavbarSearch from '../navbar/navbar-search';


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
    types: string[];
    abilities: AbilitiesType[];
}

const ProductMain = () => {

    const [pokeData, setPokeData] = useState<PokemonType[]>([]);
    const [gridlist, setGridlist] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // search => รับ pokeData => filter => ใช้ name ในการค้นหาข้อมูล
    const [searchValue, setSearchValue] = useState<string>('');
    const filteredProducts = pokeData.filter((product: any) =>
        product.name.toLowerCase().startsWith(searchValue.toLowerCase())
    );

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {

                // โปเกมอลที่ต้องการ
                const numberOfPokemon = 16;

                // pokemonData []
                const pokemonData = [];

                // ลูป  
                for (let i = 1; i <= numberOfPokemon; i++) {
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
                    const { name, types, sprites, abilities } = response.data;


                    const pokemon = {
                        name,
                        // แปลงข้อมูลจาก Array object => ดึงออกมาจาก type ให้เป็น name : string 
                        // => แล้วส่งกลับเป็น Array ใหม่ type เป็น string
                        types: types.map((type: { type: { name: string } }) => type.type.name),
                        sprites,
                        abilities
                    };

                    pokemonData.push(pokemon);
                    setIsLoading(false);
                }

                setPokeData(pokemonData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPokemonData();

    }, []);

    // console.log({ name })

    return (
        <div >
            {/* {ส่งค่า} */}
            <NavbarSearch value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <Container>
                <div className='flex justify-between mb-10'>
                    <div>
                        <p className='font-bold'>Products ({pokeData.length})</p>
                    </div>
                    <div className='flex items-center justify-center '>
                        <div>
                            <button
                                onClick={() => setGridlist(false)}
                                className=' bg-gray-300/60 p-1 rounded-l-md
                        focus:bg-yellow-500/90
                        '>
                                <Grid2X2 />
                            </button>
                        </div>
                        <div >
                            <button
                                onClick={() => setGridlist(true)}
                                className='  bg-gray-300/50 
                     focus:bg-yellow-500/90  p-1 rounded-r-md'>
                                <Columns />
                            </button>
                        </div>
                    </div>
                </div>

                {
                    gridlist ?
                        <div className='space-y-5 '>
                            {
                                isLoading ?
                                    (<div>กำลังโหลดข้อมูล (Loading data)...</div>)
                                    :
                                    (
                                        filteredProducts.map((item) => (
                                            <div key={item.name} className='border-2 shadow-md rounded-xl '>
                                                < ProductListTwo
                                                    name={item.name}
                                                    types={item.types}
                                                    sprites={item.sprites}
                                                    abilities={item.abilities}
                                                />
                                            </div>
                                        ))
                                    )
                            }
                        </div>
                        :
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 '>
                            {
                                isLoading ?
                                    (<div>กำลังโหลดข้อมูล (Loading data)...</div>)
                                    :
                                    (

                                        filteredProducts.map((item) => (

                                            <div key={item.name} className='border-2 shadow-2xl rounded-xl'>
                                                <ProductList
                                                    name={item.name}
                                                    types={item.types}
                                                    sprites={item.sprites}
                                                />
                                            </div>

                                        ))
                                    )
                            }
                        </div>
                }

                {/* ถ้าข้อมูลไม่มี */}
                {filteredProducts.length === 0 &&
                    <div>
                        <EmptyProduct />
                    </div>
                }
            </Container>
        </div>

    )
}

export default ProductMain