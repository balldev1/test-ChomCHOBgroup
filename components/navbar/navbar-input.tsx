import React, { useState } from 'react'

import { Search } from 'lucide-react';

interface NavbarInputProps {
    value?: string;
    onChange?: (e: any) => void;
}

const NavbarInput = ({ value, onChange }: NavbarInputProps) => {

    return (
        <div className='relative '>
            <div className='absolute left-2 top-2'>
                <Search className='text-yellow-500/90 focus:opacity-0' />
            </div>
            <div >
                <input
                    className='border-none rounded-xl bg-gray-200/50 p-2 shadow-sm
                     lg:w-[400px] w-[150px] focus:outline-none px-10'
                    placeholder='Search name Pokemon ...'
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>

    )
}

export default NavbarInput;