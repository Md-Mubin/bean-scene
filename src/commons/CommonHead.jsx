import React from 'react'

const CommonHead = ({ headName }) => {
    return (
        <>
            <h2 className='text-center mt-[68px] mb-[29px] font-bold text-[54px] text-[#603809]'>
                {headName}
            </h2>
        </>
    )
}

export default CommonHead