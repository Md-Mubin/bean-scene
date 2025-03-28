"use client"
import { logoFont } from '@/app/layout'
import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const Footer = () => {
    return (
        <>
            <ParallaxProvider>
                <footer>
                    <Parallax speed={-20}>
                        <div className="container">
                            <div className='flex items-center gap-[66px] justify-between'>
                                <ul className='w-[450px]'>
                                    <li className={`${logoFont.className} font-normal text-[54px] text-[#fff] mb-4`}>Bean Scene</li>
                                    <li className='py-5 font-normal text-sm text-[#fff] leading-[22px]'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </li>
                                    <li className='mt-5'>
                                        <ul className='flex items-center gap-6 text-3xl'>
                                            <li>
                                                <a href="#"><FaFacebook /></a>
                                            </li>
                                            <li>
                                                <a href="#"><RiInstagramFill /></a>
                                            </li>
                                            <li>
                                                <a href="#"><FaYoutube /></a>
                                            </li>
                                            <li>
                                                <a href="#"><FaTwitter /></a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                                <ul className='footerItems'>
                                    <li className='font-bold! text-[26px]! mb-[55px] leading-0!'>About</li>
                                    <li>Menu</li>
                                    <li>Features</li>
                                    <li>News & Blogs</li>
                                    <li>Help & Supports</li>
                                </ul>

                                <ul className='footerItems'>
                                    <li className='font-bold! text-[26px]! mb-[55px] leading-0!'>Company</li>
                                    <li>How We Work</li>
                                    <li>Terms of Service</li>
                                    <li>Pricing</li>
                                    <li>FAQ</li>
                                </ul>

                                <ul className='w-[332px] footerItems'>
                                    <li className='font-bold! text-[26px]! mb-[30px] leading-0!'>Contact Us</li>
                                    <li>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</li>
                                    <li>+1 202-918-2132</li>
                                    <li>beanscene@mail.com</li>
                                    <li>www.beanscene.com</li>
                                </ul>
                            </div>
                        </div>
                    </Parallax>
                </footer>
            </ParallaxProvider>
        </>
    )
}

export default Footer