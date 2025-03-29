import CommonAboutCards from '@/commons/CommonAboutCards'
import CommonButton from '@/commons/CommonButton'
import CommonHead from '@/commons/CommonHead'
import React from 'react'

const AboutUs = () => {
    return (
        <>
            <section className='py-[82px] relative'>
                <div className="container">
                    <div className="aboutHead">
                        <CommonHead headName={"Why are we different?"} />
                        <p>We don't just make your coffee, we make your day!</p>
                    </div>

                    <div className="aboutSectionRow">
                        <CommonAboutCards aboutCardImage={"/images/coffe_logo.png"} aboutCardName={"Supreme Beans"} aboutCardInfos={"Beans that provides great taste"} />
                        <CommonAboutCards aboutCardImage={"/images/badge_logo.png"} aboutCardName={"High Quality"} aboutCardInfos={"We provide the highest quality"} />
                        <CommonAboutCards aboutCardImage={"/images/ordinary_logo.png"} aboutCardName={"Extraordinary "} aboutCardInfos={"Coffee like you have never tasted"} />
                        <CommonAboutCards aboutCardImage={"/images/price_logo.png"} aboutCardName={"Affordable Price"} aboutCardInfos={"Our Coffee prices are easy to afford"} />
                    </div>

                    <div className="aboutSectionEnd">
                        <p>Great ideas start with great coffee, Lets help you achieve that</p>
                    </div>

                    <h4 className='font-bold text-[30px] text-[#707070] leading-[34px] text-center'>Get Started Today</h4>

                    <div className='text-center mt-6'>
                        <CommonButton buttonName={"Join Us"} />
                    </div>
                </div>

                <div className='hidden lg:block absolute top-0 right-0 scale-x-[-1]'>
                    <img src="/images/coffee_blast.png" alt="coffe image" />
                </div>
            </section>
        </>
    )
}

export default AboutUs