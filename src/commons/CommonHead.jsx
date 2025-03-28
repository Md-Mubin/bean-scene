import React from 'react'

const CommonHead = ({ headName }) => {
    return (
        <>
            <h2 className='text-center mt-[68px] mb-[29px] font-bold text-3xl text-[#603809]' style={{fontSize : "calc(1vw + 40px)"}}>
                {headName}
            </h2>
        </>
    )
}

export default CommonHead