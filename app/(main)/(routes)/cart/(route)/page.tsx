import Container from '@/components/container';
import React from 'react'
import CartMain from '../componets/cart-main';

const CartPage = () => {
    return (
        <div className='h-full w-full min-h-screen'>
            <Container>
                <CartMain />
            </Container>
        </div>
    )
}

export default CartPage;