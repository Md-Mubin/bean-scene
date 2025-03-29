import { logoFont } from '@/app/layout'
import React, { useState } from 'react'
import { HiBarsArrowDown } from "react-icons/hi2"

const ResNavbar = () => {

    const [show,setShow] = useState(false)

    return (
        <>
            <div>
                <div className="container">
                    <div className='flex justify-between items-center lg:hidden'>
                        <h2 className={`${logoFont.className} text-[35px] text-white`}>Bean Scene</h2>
                        <button onClick={()=>setShow(!show)} className='text-[48px] text-[#fff]'><HiBarsArrowDown /></button>

                        <ul className={`pt-10 pb-4 absolute left-0 w-full bg-[#000000cc] duration-300 flex flex-col items-center gap-4 ${show ? " top-[100%] " : " top-[-350%] opacity-0"}`}>
                            <li className='py-2 text-[#f9c06a]'>
                                <a href="#">Home</a>
                            </li>
                            <li className='py-2 text-[#f9c06a]'>
                                <a href="#">Menu</a>
                            </li>
                            <li className='py-2 text-[#f9c06a]'>
                                <a href="#">About Us</a>
                            </li>
                            <li className='py-2 text-[#f9c06a]'>
                                <a href="#">Contact Us</a>
                            </li>

                            <div className='flex gap-[35px]'>
                                <a href="#">
                                    <button className='navButtons'>Log In</button>
                                </a>
                                <a href="#">
                                    <button className='navButtons'>Sign Up</button>
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResNavbar