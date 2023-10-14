'use client'
import React from 'react'

import Image from 'next/image';
import pokeapi_256 from '@/public/pokeapi_256.png';

import NavbarInput from './navbar-input';
import NavbarUser from './navbar-user';
import { useRouter } from 'next/navigation';

interface NavbarSearchProps {
    value?: string;
    onChange?: (e: any) => void;
}

const NavbarSearch = ({ value, onChange }: NavbarSearchProps) => {

    const router = useRouter();

    const handleSearch = (searchTerm: string) => {
        // ทำการค้นหาตาม searchTerm ตรงนี้
        console.log('Searching for:', searchTerm);
    };


    return (
        <div className=' flex items-center justify-between
      p-2 border-b w-full  shadow-md md:px-20 '>
            <div
                onClick={() => router.push('/')}
            >
                <Image
                    alt='poke'
                    src={pokeapi_256}
                    className='md:w-40 md:h-10 
                    w-20 hover:cursor-pointer'
                />
            </div>
            <div>
                <NavbarInput value={value} onChange={onChange} />
            </div>
            <div>
                <NavbarUser />
            </div>
        </div>
    )
}

export default NavbarSearch;