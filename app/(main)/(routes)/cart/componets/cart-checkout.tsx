import useCart from '@/hook/use-cart';
import React from 'react'
import toast from 'react-hot-toast';

const CartCheckOut = () => {

    // {zutand}
    const items = useCart((state) => state.items);

    // เอาชื่อที่ซ้ำกันออก
    const uniquePokemonNames = Array.from(new Set(items));
    // เอา count.length มาใช้
    const uniquePokemonCount = uniquePokemonNames.length;

    // console.log(items)

    const handleCheckOut = () => {
        toast.success('Checkout Success');
    }

    return (

        <div className='bg-white rounded-xl shadow-md pb-7 text-sm'>
            <div className='space-y-5 '>
                <div className='rounded-t-xl p-3 bg-yellow-100/50'>
                    <h1 className='font-bold'>Order Summary</h1>
                </div>
                <div className='flex justify-between mx-3'>
                    <div>
                        Subtotal
                    </div>
                    <div>
                        <p className='font-bold'>{uniquePokemonCount} product</p>
                    </div>
                </div>
                <div className='flex justify-between mx-3'>
                    <div>
                        Quantity
                    </div>
                    <div>
                        <p className='font-bold'>{items.length} Quantity</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center  p-3  border
                     text-white bg-rose-500/80 rounded-xl mt-10 mx-5 
                     hover:cursor-pointer hover:scale-105 transition'>
                <button onClick={handleCheckOut}
                    className='flex flex-row gap-2'>
                    Proceed To Checkout
                </button>
            </div>
        </div>
    )
}

export default CartCheckOut