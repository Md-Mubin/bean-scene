import React from 'react'

const CommonAboutCards = ({aboutCardImage, aboutCardInfos, aboutCardName}) => {
    return (
        <>
            <ul className='py-9 px-10 bg-[#fff9f1] hover:bg-[#FFEED8] text-center duration-200 border-2 rounded-[10px] border-[#FFEED8]'>
                <li className='w-[88px] m-auto'>
                    <img src={aboutCardImage} alt="logos" />
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

export default CommonAboutCards