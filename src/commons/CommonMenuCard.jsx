import React from 'react'
import CommonButton from './CommonButton'

const CommonMenuCard = ({menuImages,menuName,menuPrice}) => {
    return (
        <>
            <ul className='w-[280px] text-center bg-[#fdf7ef]'>
                <li>
                    <img src={menuImages} alt="images" />
                </li>

                <li className='mt-[14px] font-bold text-[22px] text-[#603809]'>
                    <h4>{menuName}</h4>
                </li>

                <li className='my-[6px] font-normal text-[16px] text-[#1E1E1E]'>
                    <p>Coffee 50% | Milk 50%</p>
                </li>

                <li className='font-bold text-lg text-[#603809]'>
                    <p>${menuPrice}</p>
                </li>

                <li className='mt-[18px] mb-[-26px]'>
                    <CommonButton buttonName={"Order Now"}/>
                </li>
            </ul>
        </>
    )
}

export default CommonMenuCard