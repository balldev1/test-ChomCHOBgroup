'use client'
import { useState, useEffect } from 'react'

import NavbarSearch from '@/components/navbar/navbar-search'
import Container from '@/components/container';
import CartMain from './componets/cart-main';

const useIsMounted = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted;
};

export default function CartLayout() {
    // Use the custom hook
    const isMounted = useIsMounted();

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            <NavbarSearch />
            <Container>
                <CartMain />
            </Container>
        </div>
    );
}