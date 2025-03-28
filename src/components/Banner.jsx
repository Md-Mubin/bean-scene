"use client"
import { logoFont } from '@/app/layout'
import CommonButton from '@/commons/CommonButton'
import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const Banner = () => {
    return (
        <>
            <ParallaxProvider>
                <section className='bannerSection overflow-hidden'>
                    <div className="container">
                        <Parallax speed={-50}>
                            <ul>
                                <li className='mt-[200px] font-medium text-[22px] text-[#fff]'>
                                    <p>We've got your morning covered with</p>
                                </li>
                                <li className={`${logoFont.className} text-[220px] text-[#fff]`}>
                                    <h1>Coffee</h1>
                                </li>
                                <li className='w-[527px] font-normal text-xl text-[#fff] leading-[34px] mb-10'>
                                    <p>It is best to start your day with a cup of coffee. Discover the
                                        best flavours coffee you will ever have. We provide the best
                                        for our customers.</p>
                                </li>
                                <li className='hover:bg-[#ffffff80] w-fit rounded-3xl'>
                                    <CommonButton buttonName={"Order Now"} />
                                </li>
                            </ul>
                        </Parallax>
                    </div>
                </section>
            </ParallaxProvider>
        </>
    )
}

export default Banner