import React from 'react'
import Image from 'next/image'
import logo from '@/public/icons/logo.svg'

function Footer() {
  return (
    <>
    <div className='flex flex-col overflow-hidden md:justify-start md:flex-row md:gap-x-50 md:my-8 '>

    <div className='flex flex-col mb-12 mt-16 px-2 md:flex-col md:px-4 md:mt-2 '>

    <div className='md:w-60 w-60 ml-2'>
      <Image
      src={logo}
      alt='LogoImage'
      />
    </div>


    <div className='flex md:flex-col md:gap-y-1 md:p-2 text-[14px] flex-col gap-y-1 p-4'>

    <p className='md:text-start md:text-sm text-indigo-200'>Exclusive Experiences.</p>
    <p className='md:text-start md:text-sm text-indigo-200'>Verified Results.</p>

    </div>

    <div className='flex md:justify-start md:gap-x-4 md:p-2 md:pt-4 gap-x-5 px-4 pt-2'>
      <a 
      href="https://luminarypass.com/#"
      target='_blank'
      rel='noopener noreferrer'
      className='text-[#5B4D27] md:text-sm md:hover:brightness-200 transition text-[13px] brightness-125 tracking-wider'
      >
        Instagram
      </a>

      <a 
      href="https://luminarypass.com/#"
      target='_blank'
      rel='noopener noreferrer'
      className='text-[#5B4D27] md:text-sm hover:brightness-200 transition text-[13px] brightness-125 tracking-wider'
      >
        Tiktok
      </a>

      <a 
      href="https://luminarypass.com/#"
      target='_blank'
      rel='noopener noreferrer'
      className='text-[#5B4D27] md:text-sm hover:brightness-200 transition text-[13px] brightness-125 tracking-wider'
      >
        LinkedIn
      </a>
    </div>

    </div>

    <div className='flex md:justify-between md:gap-x-30 gap-x-20 flex-wrap gap-y-10 mb-12 p-2'>

    <div className='flex md:flex-col md:space-y-2 md:px-8 flex-col gap-y-2 px-4'>
      <h2 className='md:text-[10px] text-[#967E40] tracking-[0.2em] text-[10px] brightness-150'>PLATFORM</h2>
      <ul className='md:text-sm flex md:flex-col md:gap-y-2 text-gray-400 flex-col text-sm gap-y-2'>
        <li className='hover:brightness-150 transition hover:cursor-pointer'>Home</li>
        <li className='hover:brightness-150 transition hover:cursor-pointer'>For Influencers</li>
        <li className='hover:brightness-150 transition hover:cursor-pointer'>For Businesses</li>
        <li className='hover:brightness-150 transition hover:cursor-pointer'>How It Works</li>
      </ul>
    </div>

    <div className='flex md:flex-col md:space-y-2 md:px-8 flex-col gap-y-2 px-4'>
      <h2 className='md:text-[10px] text-[#967E40] tracking-[0.2em] text-[10px] brightness-150'>COMPANY</h2>
      <ul className='md:text-sm flex md:flex-col md:gap-y-2 text-gray-400 flex-col text-sm gap-y-2'>
        <li className='hover:brightness-150 transition hover:cursor-pointer'>About</li>
        <li className='hover:brightness-150 transition hover:cursor-pointer'>Contact</li>
        <li className='hover:brightness-150 transition hover:cursor-pointer'>Apply Now</li>

      </ul>
    </div>

    <div className='flex md:flex-col md:space-y-2 md:px-8 flex-col gap-y-2 px-4'>
      <h2 className='md:text-[10px] text-[#967E40] tracking-[0.2em] text-[10px] brightness-150'>LEGAL</h2>
      <ul className='md:text-sm flex md:flex-col md:gap-y-2 text-gray-400 flex-col text-sm gap-y-2'>
        <li className='hover:brightness-150 transition hover:cursor-pointer'>Privacy Policy</li>
        <li className='hover:brightness-150 transition hover:cursor-pointer'>Terms of Service</li>

      </ul>
    </div>

    </div>

    </div>

    <div className='border-[#917A3E]/15 border-b'></div>

    <div className='md:mt-2 md:mb-12 flex md:justify-between mt-3 mb-14 flex-col md:flex-row'>
      <p className='text-xs md:p-6 px-6 py-3'>© 2026 Luminary Pass · All rights reserved · Developed & Powered By <a href='https://blynkio.com/' target='_blank' rel='noopener noreferrer' className='text-[#917A3E] brightness-125 hover:cursor-pointer hover:brightness-200'>Blynkio</a></p>

      <p className='text-xs text-[#5B4D27] brightness-125 tracking-[0.3em] md:p-5 px-5'>✦ Exclusive Experiences. Verified Results. ✦</p>
    </div>

    </>
  )
}

export default Footer
