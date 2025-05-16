import React from 'react'

const CommonAboutCards = ({aboutCardImage, aboutCardInfos, aboutCardName}) => {
    return (
        <>
            <ul className='py-9 px-10 bg-[#fff9f1] hover:bg-[#FFEED8] text-center duration-200 border-2 xl:hover:grow rounded-[10px] border-[#FFEED8]'>
                <li className='w-[88px] m-auto'>
                    <img src={aboutCardImage} alt="logos" />
                </li>

                <li className='font-bold text-[#603809] mt-[25px] mb-2' style={{fontSize : `calc(1vw + 16px)`}}>
                    {aboutCardName}
                </li>

                <li className=' sm:w-[250px] m-auto font-normal text-[#707070]' style={{fontSize : `calc(0.5vw + 14px)`}}>
                    {aboutCardInfos}
                </li>
            </ul>
        </>
    )
}

export default CommonAboutCards