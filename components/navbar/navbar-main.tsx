import React from 'react'
import NavbarSearch from './navbar-search'
import NavbarNavigator from './navbar-navigator'



const NavbarMain = () => {
    return (
        <div className='w-full relative  '>
            <div className='text-sm font-semibold'>
                <NavbarNavigator />
            </div>
        </div>
    )
}

export default NavbarMain