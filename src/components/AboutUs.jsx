import CommonAbouCards from '@/commons/CommonAbouCards'
import CommonHead from '@/commons/CommonHead'
import React from 'react'

const AboutUs = () => {
    return (
        <>
            <section className='mt-[82px]'>
                <div className="container">
                    <div className="aboutHead">
                        <CommonHead headName={"Why are we different?"}/>
                        <p>We don't just make your coffee, we make your day!</p>
                    </div>

                    <div className="aboutSectionRow">
                        <CommonAbouCards aboutCardImage={""} aboutCardName={"Supreme Beans"} aboutCardInfos={"Beans that provides great taste"}/>
                        <CommonAbouCards aboutCardImage={""} aboutCardName={"High Quality"} aboutCardInfos={"We provide the highest quality"}/>
                        <CommonAbouCards aboutCardImage={""} aboutCardName={"Extraordinary "} aboutCardInfos={"Coffee like you have never tasted"}/>
                        <CommonAbouCards aboutCardImage={""} aboutCardName={"Affordable Price"} aboutCardInfos={"Our Coffee prices are easy to afford"}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs