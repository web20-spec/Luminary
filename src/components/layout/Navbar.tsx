'use client'

import React from 'react'
import Image from 'next/image'
import logo from '@/public/icons/logo.svg'
import Button from '../ui/Button'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import ApplyNow from '../ui/ApplyNow'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname()
  const [open, setOpen] = useState(false);

  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-black">

    <div className="relative flex items-center justify-between md:gap-x-12 md:px-5 px-4 bg-transparent">

      <div className="w-62 md:w-78">
        <Image src={logo} alt="logo"/>
      </div>

      <ul className="hidden md:flex md:gap-x-10 md:items-center md:text-sm text-[#AFAFAF]">

        <Link href="/"><li className={` cursor-pointer ${
          pathname === "/" ? ( "text-[#957D40] brightness-125") : ("text-[#AFAFAF] hover:brightness-150")
        }`}>Home</li></Link>

        <Link href="/influencers"><li className={` cursor-pointer ${
          pathname === "/influencers" ? ( "text-[#957D40] brightness-125") : ("text-[#AFAFAF] hover:brightness-150")
        }`}>For Influencers</li></Link>
        
        <Link href="/businesses"><li className={` cursor-pointer ${
          pathname === "/businesses" ? ( "text-[#957D40] brightness-125") : ("text-[#AFAFAF] hover:brightness-150")
        }`}>For Businesses</li></Link>

        <Link href="/how-it-works"><li className={` cursor-pointer ${
          pathname === "/how-it-works" ? ( "text-[#957D40] brightness-125") : ("text-[#AFAFAF] hover:brightness-150")
        }`}>How It Works</li></Link>
        
        <Link href=""><li className="hover:text-white cursor-pointer">Pricing</li></Link>

      </ul>

      <div className="hidden md:inline-flex items-center gap-3">
        <Button
          text="✦ Luminary Hub"
          bgColor="bg-[#D4B25B]"
          height="h-10"
          width="w-38"
          rounded="rounded"
          className="font-bold text-sm cursor-pointer text-center"
        />

        <Button
          text="Apply Now"
          bgColor="bg-[#D4B25B]"
          height="h-9"
          width="w-26"
          className="font-bold text-sm cursor-pointer text-center"
          onClick={() => setOpen(true)}
        />
      </div>

      <button
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#111111] p-5 md:hidden z-50 border-t border-[#D4B25B]/20">
          
          <ul className="flex flex-col gap-4 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">For Influencers</li>
            <li className="hover:text-white cursor-pointer">For Businesses</li>
            <li className="hover:text-white cursor-pointer">How It Works</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
          </ul>

          <div className="flex flex-col gap-3 mt-5">
            <Button
              text="✦ Luminary Hub"
              bgColor="bg-[#D4B25B]"
              height="h-10"
              width="w-full"
              rounded="rounded"
              className="font-bold text-sm cursor-pointer text-center"
            />

            <Button
              text="Apply Now"
              bgColor="bg-[#D4B25B]"
              height="h-10"
              width="w-full"
              className="font-bold text-sm cursor-pointer text-center"
            />
          </div>

        </div>
      )}
    </div>

    <div className='border-[#BB9D50]/30 border-b w-full'></div>

    {/* {open ? <ApplyNow onClose={() => setOpen(false)} /> : null} */}

    </nav>

    </>
  )
}

