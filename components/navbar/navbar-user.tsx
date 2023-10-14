import React from 'react'

import { User } from "lucide-react";
import { ShoppingBag } from "lucide-react";

import useCart from '@/hook/use-cart';
import { useRouter } from 'next/navigation';


const NavbarUser = () => {

    const router = useRouter();
    //zutand

    const { items } = useCart();

    return (
        <div className='flex items-center space-x-5  py-2 font-medium  '>
            <div className='flex space-x-2 items-center hover:cursor-pointer'>
                <User
                    size={30}
                    className='text-yellow-500/90'
                />
                <p>
                    Username
                </p>
            </div>
            <div className='border border-black md:h-4 h-9' />
            <div
                onClick={() => router.push('/cart')}
                className='flex  space-x-2 items-center hover:cursor-pointer'>
                <div className='relative '>
                    <div className='h-5 w-5 absolute  bg-black top-0 right-0 border rounded-full'>
                        <p className='text-white text-sm flex justify-center'>
                            {items.length}
                        </p>
                    </div>
                    <ShoppingBag
                        size={30}
                        className='text-yellow-500/90'
                    />
                </div>
                <p>
                    Pocket
                </p>
            </div>
        </div>
    )
}

export default NavbarUser;


