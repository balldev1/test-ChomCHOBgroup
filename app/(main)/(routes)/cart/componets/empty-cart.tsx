import { ShoppingCart } from 'lucide-react'
import React from 'react'

const EmptyCart = () => {
    return (
        <div className='flex items-center  gap-5 font-bold text-xl mt-5 text-rose-500'>
            <ShoppingCart />
            <p>no products in the cart.</p>
        </div>
    )
}

export default EmptyCart