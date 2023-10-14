import React from 'react'

import { SearchX } from 'lucide-react'

export const EmptyProduct = () => {
    return (
        <div className='flex flex-col items-center justify-center 
        min-h-screen text-gray-500/50'>
            <div className='mb-2'>
                <SearchX
                    size={40}
                    className='text-gray-500'
                />
            </div>
            <div>
                <p>Oop! Nothing was found for `Aoooooo`</p>
            </div>
            <div>
                Please try to search for something else.
            </div>
        </div>
    )
}

