import React from 'react'

const CommonAbouCards = ({aboutCardImage, aboutCardInfos, aboutCardName}) => {
    return (
        <>
            <ul className='py-9 px-10 bg-[#fff9f1] hover:bg-[#FFEED8] text-center duration-200'>
                <li className='w-[88px] h-[88px]'>
                    <img src={aboutCardImage} alt="" />
                </li>

                <li className='font-bold text-[28px] text-[#603809] mt-[25px] mb-2'>
                    {aboutCardName}
                </li>

                <li className='font-normal text-2xl text-[#707070]'>
                    {aboutCardInfos}
                </li>
            </ul>
        </>
    )
}

export default CommonAbouCards