import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenu = () => {
        setIsMenuOpen((pre) => !pre)
    }
    return (
        <>
            <header className='relative'>
                <div className='container absolute top-0 left-0 right-0  z-10'>
                    <div className="flex items-center justify-between md:py-5">
                        <div className='w-16 md:w-[108px]'>
                            <img src="/images/logo.png" alt="logo" className='h-auto w-full' />
                        </div>
                        <ul className='max-md:hidden flex items-center gap-6 capitalize text-base font-medium font-montserrat text-white'>
                            <li className='hover:text-orange transition-all duration-300 font-bold'> <a href="/">Home</a> </li>
                            <li className='hover:text-orange transition-all duration-300'><a href="/">Admissions</a></li>
                            <li className='hover:text-orange transition-all duration-300'><a href="/">Corporate Training</a></li>
                            <li className='hover:text-orange transition-all duration-300'><a href="/">Program & Courses</a></li>
                            <li className='hover:text-orange transition-all duration-300'><a href="/">About US</a></li>
                            <li className='hover:text-orange transition-all duration-300'><a href="/">Blog</a></li>
                        </ul>
                        <div className='max-md:hidden text-base font-semibold uppercase font-montserrat'>
                            <button className='bg-white text-orange px-10 py-2.5 rounded-xl text-base font-semibold  hover:bg-orange hover:text-white transition-all duration-300'> Apply</button>
                        </div>
                        <div className='md:hidden text-white' onClick={handleMenu}>
                            <GiHamburgerMenu />
                        </div>
                    </div>
                </div>
                {
                    isMenuOpen &&
                    <div className={`${isMenuOpen ? 'scale-x-100': ''} w-full h-screen  backdrop-blur-md fixed top-0 left-0 right-0 z-10 transition-all duration-1000`}>
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-10">
                            <div className='w-16 md:w-[180px] '>
                                <img src="/images/logo.png" alt="logo" className='h-auto w-full' />
                            </div>
                             <div className='md:hidden text-white' onClick={handleMenu}>
                                <RxCross2 />
                            </div>
                            </div>
                            <ul className=' text-orange flex flex-col items-start gap-6 capitalize text-base font-medium font-montserrat'>
                                <li className='hover:text-orange transition-all duration-300 font-bold'> <a href="/">Home</a> </li>
                                <li className='hover:text-orange transition-all duration-300'><a href="/">Admissions</a></li>
                                <li className='hover:text-orange transition-all duration-300'><a href="/">Corporate Training</a></li>
                                <li className='hover:text-orange transition-all duration-300'><a href="/">Program & Courses</a></li>
                                <li className='hover:text-orange transition-all duration-300'><a href="/">About US</a></li>
                                <li className='hover:text-orange transition-all duration-300'><a href="/">Blog</a></li>
                            </ul>
                            <div className='max-md:hidden text-base font-semibold uppercase font-montserrat'>
                                <button className='bg-white text-orange px-10 py-2.5 rounded-xl text-base font-semibold  hover:bg-orange hover:text-white transition-all duration-300'> Apply</button>
                            </div>
                           
                        </div>
                    </div>
                }
            </header>
        </>
    )
}

export default Header