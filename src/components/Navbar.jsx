"use client"
import { logoFont } from '@/app/layout'
import { useEffect, useState } from 'react'
import ResNavbar from './ResNavbar';

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
            <nav className={`${scrolling && "shadow-[0px_2px_15px_#ffffff80] bg-[#000000cc]"}`}>
                <div className="container">
                    <div className='hidden lg:flex justify-between items-center'>
                        <h2 className={`${logoFont.className} text-[35px] text-white`}>Bean Scene</h2>
                        <ul className="navItems">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Menu</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>

                        <div className='flex gap-[35px]'>
                            <a href="#">
                                <button className='navButtons'>Log In</button>
                            </a>
                            <a href="#">
                                <button className='navButtons'>Sign Up</button>
                            </a>
                        </div>
                    </div>

                    <ResNavbar/>
                </div>
            </nav>
        </>
    )
}

export default Navbar