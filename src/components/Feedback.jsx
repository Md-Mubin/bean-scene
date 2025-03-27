import CommonHead from '@/commons/CommonHead'
import React from 'react'

const Feedback = () => {
    return (
        <>
            <section className='feedbackSection'>
                <div className="container">
                    <div className="feedbackHead">
                        <CommonHead headName={"Our coffee perfection feedback"} />
                        <p>Our customers has amazing things to say about us</p>
                    </div>

                    <ul className='pt-[129px] pb-[101px] px-[100px] text-center bg-[#fff9f1] border border-[#ffeed8]'>
                        <li className='font-semibold text-lg text-[#707070] leading-[36px]'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....
                        </li>

                        <li className='mt-[28px] font-bold text-[32px] text-[#603809]'>
                            Jonny Thomas
                        </li>

                        <li className='font-normal text-xl text-[#707070] leading-[36px]'>
                            Project Manager
                        </li>

                        <li className='mb-[-13%] mt-[45px]'>
                            <img className='m-auto' src="/images/reviewer.png" alt="reviewer image" />
                        </li>
                    </ul>
                </div>

                <div className='absolute scale-y-[-1] left-0 bottom-0'>
                    <img src="/images/coffee_blast.png" alt="coffee blast image" />
                </div>

                <div className='absolute scale-x-[-1] right-0 top-40'>
                    <img src="/images/coffee_blast.png" alt="coffee blast image" />
                </div>
            </section>
        </>
    )
}

export default Feedback