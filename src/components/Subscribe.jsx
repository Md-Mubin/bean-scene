"use client"
import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const Subscribe = () => {
    return (
        <>
            <ParallaxProvider>
                <section className='subcribeSection'>
                    <Parallax speed={-10}>
                        <div className="container">
                            <ul className="text-center">
                                <li className='font-bold text-4xl lg:text-[54px] text-[#fff]'>
                                    Subscribe to get the Latest News
                                </li>

                                <li className='mt-4 mb-[26px] font-normal text-lg lg:text-2xl text-[#fff] leading-[34px]'>
                                    Don't miss out on our latest news, updates, tips and special offers
                                </li>

                                <li className='w-full lg:w-[642px] m-auto rounded-sm relative overflow-hidden'>
                                    <input
                                        type="email"
                                        className='w-full py-4 pl-[26px] bg-[#FFF9F1]'
                                        placeholder='Enter Your Email' />
                                    <button className='absolute h-full px-6 bg-[#F9C06A] font-bold text-sm lg:text-[22px] text-[#603809] right-0 top-0 cursor-pointer'>Subscribe</button>
                                </li>
                            </ul>
                        </div>
                    </Parallax>

                    <Parallax className='hidden lg:block' speed={-50}>

                        <div className='absolute bottom-[-30%] right-0'>
                            <img src="/images/side_coffee.png" alt="side coffee images" />
                        </div>
                        <div className='absolute bottom-[-30%] left-0 scale-x-[-1]'>
                            <img src="/images/side_coffee.png" alt="side coffee images" />
                        </div>
                    </Parallax>
                </section>
            </ParallaxProvider>
        </>
    )
}

export default Subscribe