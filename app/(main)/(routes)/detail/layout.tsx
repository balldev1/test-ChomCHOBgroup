'use client'
import { useState, useEffect } from 'react'

import NavbarSearch from '@/components/navbar/navbar-search'
import Container from '@/components/container';
import DetailMain from './components/detail-main';

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
    name: string;
    sprites: SpriteType;
    types: string[];
    abilities: AbilitiesType[];
    stats: {

        stat: {
            name: string;
        };
    }[];
}

const useIsMounted = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted;
};

export default function DetailLayout() {
    // Use the custom hook
    const isMounted = useIsMounted();

    if (!isMounted) {
        return null;
    }

    const pokemonData: PokemonType = {
        name: '',
        sprites: { front_default: '' },
        types: [''],
        abilities: [{ ability: { name: '' } }],
        stats: [{ stat: { name: '' } }]
    };

    return (
        <div>
            <NavbarSearch />
            <Container>
                <DetailMain {...pokemonData} />
            </Container>
        </div>
    );
}