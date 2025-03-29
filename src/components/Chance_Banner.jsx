"use client"
import CommonButton from '@/commons/CommonButton'
import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const Chance_Banner = () => {
    return (
        <>
            <ParallaxProvider>
                <section className='chanceSection'>
                    <div className="container">
                        <Parallax speed={-30}>
                            <div className="chanceSectionRow">
                                <ul>
                                    <li className=' lg:w-[600px] font-bold text-4xl lg:text-[54px] text-[#fff]'>
                                        Get a chance to have an Amazing morning
                                    </li>

                                    <li className='my-[22px] lg:w-[409px] font-normal text-xl text-[#fff] leading-[34px]'>
                                        We are giving you are one time opportunity to
                                        experience a better life with coffee.
                                    </li>

                                    <li>
                                        <CommonButton buttonName={"Order Now"} />
                                    </li>
                                </ul>
                                <ul>
                                    <img src="/images/coffe_cup.png" alt="coffe cuo image" />
                                </ul>
                            </div>
                        </Parallax>
                    </div>

                    <div>
                        <img className='absolute h-full right-0 top-0' src="/images/coffee_bean.png" alt="" />
                    </div>
                </section>
            </ParallaxProvider>
        </>
    )
}

export default Chance_Banner