import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black py-8 md:py-8 font-sourceSans text-white font-semibold'>
      <div className="container">
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-[#DCE0E8]'>
          <div className='w-20 md:w-[132px] md:h-[53px]'>
            <img src="/images/logo.png" alt="footer-logo" className='w-full h-auto ' />
          </div>
          <ul className='text-sm font-normal text-white flex flex-wrap justify-center gap-4 md:gap-14 font-montserrat'>
            <li className='hover:text-accentLightYellow transition-all duration-300 text-base font-bold'><a href='/'>Quick Links</a> </li>
            <li className='hover:text-accentLightYellow transition-all duration-300'><a href='/'>Home</a> </li>
            <li className='hover:text-accentLightYellow transition-all duration-300'><a href='/'>Admission</a> </li>
            <li className='hover:text-accentLightYellow transition-all duration-300'><a href='/'>Program Courses</a> </li>
            <li className='hover:text-accentLightYellow transition-all duration-300'><a href="/">FAQ</a></li>
            <li className='hover:text-accentLightYellow transition-all duration-300'><a href="/">Blog</a></li>
            <li className='hover:text-accentLightYellow transition-all duration-300'><a href="/"> Careers</a></li>
          </ul>
        </div>
        <div className="grid md:grid-cols-4 gap-6 py-6 md:py-12">
          <div className="max-w-[193px] text-base font-semibold text-start  whitespace-pre-line">
            Canada
            {"\n"}Chemin D’aigremont
            {"\n"}Lorraine Quebec
            {"\n"}Republic Of Benin - Lot 29
            {"\n"}PK Cotonou
          </div>
          <div className="flex gap-6 items-center">
            <img src="/images/whatsapp.png" alt="whatsapp icon" className='h-7 w-7' />
            <span>P+229-54335532</span>
          </div>
          <div className="flex gap-6 items-center">
            <img src="/images/mail.png" alt="mail icon" className='h-7 w-7' />
            <span>info@email.com</span>
          </div>
          <div className='md:text-end font-bold'>
            <div className='mb-3.5 '>Subscribe </div>
            <div className='p-0.5 rounded-full bg-white overflow-hidden items-center w-full md:max-w-[298px] ms-auto'>
              <input type="text" className='w-[calc(100%_-_106px)] outline-none text-dark px-2' />
              <button className='py-1.5 px-6 bg-orange rounded-full max-w-[106px] w-full'>Subscribe </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row max-md:gap-4 justify-between items-center">
          <div className=''>loremipsum© 2023. All Rights Reserved.</div>
          <div className="flex gap-4 md:gap-16 items-center font-normal text-sm">
            <span>Privacy Policy</span>
            <span>Terms & Condition </span>
            <span>Site Map</span>
          </div>
          <div className="flex gap-6 items-center">
            <img src="/images/facebook.png" alt="facebook icon" className='h-11 w-11' />
            <img src="/images/twitter.png" alt="twitter icon" className='h-11 w-11' />
            <img src="/images/instagram.png" alt="instagram icon" className='h-11 w-11' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer