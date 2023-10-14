import React from 'react'
import NavbarList from './navbar-list';

const NavbarNavigator = () => {
    return (
        <div className='  md:text-md md:px-20  bg-yellow-500/90  w-full
        px-1'>
            <div className='flex  items-center justify-between '>
                <div >
                    <p>
                        Welcome to Pokemon shop!
                    </p>
                </div>
                <div >
                    <NavbarList />
                </div>
            </div>
        </div>
    )
}

export default NavbarNavigator
