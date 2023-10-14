import React from 'react';
import Container from '@/components/container';
import DetailMain from '../../components/detail-main';

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

const DetailPage: React.FC<PokemonType> = ({ name, sprites, types, abilities, stats }) => {
    return (
        <div className='h-full w-full min-h-screen'>
            <Container>
                <DetailMain name={name} sprites={sprites} types={types} abilities={abilities} stats={stats} />
            </Container>
        </div>
    );
}

export default DetailPage;
