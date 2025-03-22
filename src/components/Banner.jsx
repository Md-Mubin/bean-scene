import { logoFont } from '@/app/layout'
import React from 'react'

const Banner = () => {
    return (
        <>
            <section className='bannerSection'>
                <div className="container">
                    <ul className='pt-[250px]'>
                        <li className='font-medium text-[22px] text-[#fff]'>
                            <p>We've got your morning covered with</p>
                        </li>
                        <li className={`${logoFont.className} text-[220px] text-[#fff]`}>
                            <h1>Coffee</h1>
                        </li>
                        <li className='w-[527px] font-normal text-xl text-[#fff] leading-[34px]'>
                            <p>It is best to start your day with a cup of coffee. Discover the
                                best flavours coffee you will ever have. We provide the best
                                for our customers.</p>
                        </li>
                        <li>
                            <button className='banner_btn'>Order Now</button>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Banner