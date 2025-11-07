import React from 'react'
import TestimonialSlider from './TestimonialSlider'
import HeadingComp from './headingComp'

const CampusLife = () => {
    return (
        <section className='relative py-6 md:py-16 overflow-hidden'>
            <div className="absolute inset-0 -z-10 flex justify-between">
                <div className='w-[300px] h-[600px] blur-[50px] rounded-r-full bg-[#FF74261A]'></div>
                <div className='w-[300px] h-[600px] blur-[50px] rounded-l-full bg-[#FF74261A]'></div>
            </div>
            <HeadingComp title={'What Our Student’s Say'} description={"L'ITTIQ ne forme pas seulement des experts en technologie, mais également les futurs leaders de l'industrie technologique"} />
            <TestimonialSlider />
            <div className="container">
                <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center">
                    <div className="max-md:p-4 max-md:ps-0 md:pe-[58px] relative">
                        <div className='max-w-[520px] w-full '>
                            <img src="/images/students.png" alt="students-image" className='w-full h-auto object-cover' />
                            <div className='text-base md:text-3xl font-semibold font-inter p-4 lg:p-12 bg-[#1F242E] text-white h-[116px] md:h-[216px] w-[160px] md:w-[361px] absolute bottom-0 right-0'>From Unemployable
                                to a skill worker </div>
                        </div >
                    </div>
                    <div className="md:w-1/2">
                        <div>
                            <span className='text-sm md:text-bsae font-semibold font-sourceSans text-orange mb-4'>High rated</span>
                            <h2 className='text-4xl md:text-[54px] md:leading-[60px] font-inter font-semibold mb-2 md:mb-4'>Student Campus <br />
                                Life</h2>
                            <p className='text-lg md:text-2xl font-semibold font-sourseSans mb-2 md:mb-5'>BE AMBITIOUS. BE VULNERABLE. BE YOU</p>
                            <p className='font-light font-sourceSans text-sm md:text-base text-[#797C7F] mb-6 md:mb-12'>In addition to its training programs, ITTIQ offers a rich and varied social experience and other support systems where you’ll find outlets for creative expression and be your true self.</p>
                            <div className="flex gap-4">

                                <button className='text-sm md:text-base font-openSanse  bg-orange hover:bg-[#d63e3f] text-white px-4 md:px-16 py-2 md:py-3.5 font-semibold transition rounded-xl'> How We Work</button>
                                <div className="flex gap-3 items-center">
                                    <img src="/images/call-button.png" alt="whatsapp icon" className='h-10 w-10 md:h-14 md:w-14' />
                                    <span className='font-semibold font-inter text-base'>+229-54335532</span>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default CampusLife