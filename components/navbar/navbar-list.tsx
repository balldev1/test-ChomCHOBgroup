import React from 'react'

import { MapPin } from "lucide-react";
import { Car } from "lucide-react";
import { BadgePercent } from "lucide-react";

const NavbarList = () => {
    return (
        <div className='flex items-center space-x-5  py-2 font-medium'>
            <div className='flex space-x-2 items-center'>
                <MapPin
                    size={20}
                />
                <p className=''>
                    Contact 123456
                </p>
            </div>
            <div className='border border-black md:h-4 h-9' />
            <div className='flex space-x-2 items-center'>
                <Car
                    size={20}
                />
                <p>
                    Track your order
                </p>
            </div>
            <div className='border border-black md:h-4 h-9' />
            <div className='flex space-x-2 items-center'>
                <BadgePercent
                    size={20}
                />
                <p>
                    All Offers
                </p>
            </div>
        </div>
    )
}

export default NavbarList;