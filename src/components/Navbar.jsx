"use client"
import { logoFont } from '@/app/layout'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={` ${scrolling && "shadow-[0px_2px_15px_#ffffff80] bg-[rgba(0,0,0,0.8)]"}`}>
                <div className="container">
                    <div className='flex justify-between items-center'>
                        <h2 className={`${logoFont.className} text-[35px] text-white`}>Bean Scene</h2>
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