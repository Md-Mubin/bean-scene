import React from 'react'

const CommonButton = ({buttonName}) => {
    return (
        <>
            <button className='px-[27px] py-[15px] rounded-3xl bg-[#F9C06A] shadow-[2px_2px_10px_#F9C06A] cursor-pointer hover:ring-2 ring-[#F9C06A] hover:bg-transparent hover:text-[#fff] duration-200'>
                {buttonName}
            </button>
        </>
    )
}

export default CommonButton