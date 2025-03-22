import { brandFont, logoFont } from '@/app/layout'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='pt-5 absolute w-full'>
                <div className="container m-auto">
                    <div className='flex justify-between items-center'>
                        <h2 className={`${logoFont.className} text-[35px] text-[#fff]`}>Bean Scene</h2>
                        <ul className="navItems">
                            <li>Home</li>
                            <li>Menu</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>

                        <div className='flex gap-[35px]'>
                            <button className='navButtons'>Log In</button>
                            <button className='navButtons'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar