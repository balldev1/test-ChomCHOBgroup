'use client'
import React, { useState, useEffect } from 'react'

import CartList from './cart-list';
import CartCheckOut from './cart-checkout';
import NavbarSearch from '@/components/navbar/navbar-search';
import useCart from '@/hook/use-cart';


const CartMain = () => {

    const items = useCart((state) => state.items);

    return (
        <div>
            <div className='h-full w-full space-y-5 mt-10 pb-20'>
                <div className='grid grid-cols-3'>
                    <div className='col-span-2 space-y-5 font-bold
                bg-white rounded-xl shadow-md p-5 mr-10 
                '>
                        <div>

                            <p>Pocket list ({items.length})</p>
                        </div>
                        <div>
                            <CartList />
                        </div>
                    </div>
                    <div>
                        <CartCheckOut />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartMain;