'use client'

import Button from '@/src/components/ui/Button'
import BusMobApp from '@/src/components/ui/BusMobApp'
import Businesses from '@/src/components/ui/Businesses'
import { useState } from 'react'
import BusWebApp from '@/src/components/ui/BusWebApp'


function page() {
    const [selected, setSelected] = useState("mobileApp")
  return (
    <>
    <div className="bg-[url('/images/bgImage.jpg')] w-full bg-fixed">
    
    <div className='flex flex-col gap-y-4 md:gap-y-5 pl-6 md:pl-70 pt-4 pb-18 md:py-24'>

        
        <h5 className='pt-30 md:pt-20 text-[#C1A253] text-[11px] tracking-[0.3em]'>FOR BUSINESSES</h5>
        <h2 className='hidden md:block text-[60px] font-cormorant leading-none'>Verified Creators.<br/>Measurable Results.</h2>
            {/* <h2 className='md:hidden block text-[36px] font-cormorant tracking-wide leading-tight mb-2'>Your City.<br />Your Platform.<br />Your Pass.</h2> */}
        
            <div className='flex flex-col gap-y-2'>
            <p className='text-[#AFAFAF] text-[16px] text-wrap max-w-82 md:max-w-135'>Connect with Pakistan's most credible content creators. Every attendance verified. Every task tracked. Every rupee accounted for.</p>

            <p className='text-[#C1A253] text-[12px] tracking-wide'>Currently accepting venue partners across Pakistan.</p>

            </div>

            <Button
            text='Book a Demo'
            textColor='text-black'
            bgColor='bg-[#C1A253]'
            width='w-[190px]'
            height='h-14'
            className='font-black text-[16px] cursor-pointer hover:bg-[#E5CFA4] mt-5'
            />
    </div>


    <div className="bg-[#111111] overflow-hidden shadow-sm p-4 mt-8 flex whitespace-nowrap border-[#D4B25B]/10 border">
      <div className="marquee-content flex items-center justify-center animate-marquee gap-x-4">

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">MONAL</p>
        
        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">TUSCANY COURTYARD</p>

        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">COSA NOSTRA</p>
        
        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">XANDERS </p>
        
        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">ARCADIAN CAFÉ</p>

        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">JADE RESTAURANT</p>

        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">THE PANTRY</p>

        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">AVARI TOWERS</p>

        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">SALT</p>

        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">ANDAAZ</p>

        <p className= "text-[8px] text-[#D4B25B]">✦</p>


        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">MONAL</p>

        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">TUSCANY COURTYARD</p>

        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">COSA NOSTRA </p>
        
        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">XANDERS </p>

        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">ARCADIAN CAFÉ </p>

        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">JADE RESTAURANT </p>

        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">THE PANTRY </p>

        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">AVARI TOWERS </p>

        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">SALT </p>

        <p className= "text-[8px] text-[#D4B25B]">✦</p>

        <p className="text-[#D4B25B] rounded text-[10px] text-center tracking-[0.3em] inline-block mx-4">ANDAAZ </p>
      </div>

    </div>

    
    <div className='bg-[#0E0E0E] py-24 md:py-18'>
    
    <div className='flex flex-col gap-y-2 md:gap-y-2 pl-6 pb-8 md:pl-67 md:py-8'>
        <h5 className='text-[#C1A253] text-[11px] tracking-[0.3em]'>THE PROBLEM</h5>
        <h2 className='text-[30px] md:text-[36px] font-cormorant'>What venues face today</h2>
    </div>

    <div className='flex flex-col md:flex-row justify-center items-center gap-y-6 md:gap-x-5'>

    <div className='bg-[#111111] border border-[#EF4444]/20 h-38 w-87 md:w-66 flex flex-col items-start p-5 space-y-2'>
        <p className='text-[16px] text-[#EF4444]'>X</p>
        <p className='text-[16px] font-cormorant'>No-shows</p>
        <p className='text-[14px] tracking-wide text-[#AAAAAA]'>Influencers who RSVP but never show up. No accountability.</p>
    </div>

    <div className='bg-[#111111] border border-[#EF4444]/20 h-38 w-87 md:w-66 flex flex-col items-start p-5 space-y-2'>
        <p className='text-[16px] text-[#EF4444]'>X</p>
        <p className='text-[16px] font-cormorant'>Fake proof</p>
        <p className='text-[14px] tracking-wide text-[#AAAAAA]'>No way to verify if content was actually posted or delivered.</p>
    </div>

    <div className='bg-[#111111] border border-[#EF4444]/20 h-38 w-87 md:w-66 flex flex-col items-start p-5 space-y-2'>
        <p className='text-[16px] text-[#EF4444]'>X</p>
        <p className='text-[16px] font-cormorant'>Wasted budget</p>
        <p className='text-[14px] tracking-wide text-[#AAAAAA]'>No performance data. No ROI tracking. Just hope.</p>
    </div>

    </div>

    </div>


    <div className='py-24 md:py-18'>
        <div className='flex flex-col gap-y-2 md:gap-y-2 pl-6 pb-8 md:pl-66 md:py-8'>
        <h5 className='text-[#C1A253] text-[11px] tracking-[0.3em]'>THE SOLUTION</h5>
        <h2 className='text-[30px] md:text-[36px] font-cormorant'>How Luminary Pass fixes it</h2>
        </div>


        <div className='flex flex-col md:flex-row justify-center items-center gap-y-6 md:gap-x-6'>

        <div className='bg-[#111111] border border-[#C1A253]/20 h-38 md:h-42 w-88 md:w-66 flex flex-col items-start p-5 space-y-2'>
        <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#C1A253] mt-1 shrink-0"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
        <p className='text-[16px] font-cormorant'>QR Check-in</p>
        <p className='text-[14px] tracking-wide text-[#AAAAAA]'>Every influencer scans in at the venue. Know exactly who showed up and when.</p>
        </div>

        <div className='bg-[#111111] border border-[#C1A253]/20 h-38 md:h-42 w-88 md:w-66 flex flex-col items-start p-5 space-y-2'>
        <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#C1A253] mt-1 shrink-0"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
        <p className='text-[16px] font-cormorant'>Task Verification</p>
        <p className='text-[14px] tracking-wide text-[#AAAAAA]'>Screenshots and proof required for every deliverable. No more guesswork.</p>
        </div>

        <div className='bg-[#111111] border border-[#C1A253]/20 h-38 md:h-42 w-88 md:w-66 flex flex-col items-start p-5 space-y-2'>
        <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#C1A253] mt-1 shrink-0"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
        <p className='text-[16px] font-cormorant'>Performance Ratings</p>
        <p className='text-[14px] tracking-wide text-[#AAAAAA]'>Rate influencers after every event. Build your trusted creator network.</p>
        </div>

    </div>

    </div>



    <div className="bg-linear-to-b from-[#080705] to-black flex flex-col md:flex-col items-center gap-y-3 pt-24 md:pt-30 md:pb-16">

        <h5 className="text-[10px] text-[#C1A253] tracking-[0.3em] font-sans text-center">✦ THE BUSINESS EXPERIENCE ✦</h5>
    <h2 className=" text-3xl md:text-5xl font-cormorant text-center tracking-wide">Two powerful tools.<br/>Built for your business.</h2>

    <p className="text-[#AFAFAF] text-[14px] md:text-[16px] text-center max-w-90 md:max-w-132 pb-6">Whether you're at your desk or on the venue floor — Luminary Pass gives business owners full control over every event, every influencer, every result.</p>

    <div className="flex flex-col md:flex-row justify-center items-center gap-y-3 md:gap-x-3">
        <button
        onClick={() => setSelected("mobileApp")}
        className={`bg-[#040403] text-center tracking-wide h-13.5 w-69 text-[15px] font-cormorant cursor-pointer ${ selected === 'mobileApp' ? "text-[#C1A253] border rounded-xl border-[#C1A253]/30  shadow-[0_0_8px_rgba(193,162,83,0.12),0_0_18px_rgba(193,162,83,0.08)]" : "text-[#AFAFAF]/60 border border-[#AFAFAF]/20 rounded-xl hover:border-[#C1A253]/30 hover:text-white transition-all duration-200"}`}><span className ="mr-1.5">✦</span> Luminary Command<span className={`text-[10px] font-sans ml-2 tracking-wide ${ selected === 'mobileApp' ? "text-[#C1A253]/60" : "text-[#AFAFAF]/35"}`}>MOBILE APP</span></button>

        <button
        onClick={() => setSelected("webApp")}
        className={`bg-[#111110] text-center tracking-wide h-13.5 w-69 text-[15px] font-cormorant cursor-pointer ${ selected ==='webApp' ? "text-[#C1A253] border rounded-xl border-[#C1A253]/30  shadow-[0_0_8px_rgba(193,162,83,0.12),0_0_18px_rgba(193,162,83,0.08)]" : "text-[#AFAFAF]/60 border border-[#AFAFAF]/20 rounded-xl hover:border-[#C1A253]/30 hover:text-white transition-all duration-200"}`}><span className ="mr-1.5 hover:text-white">◈</span> Business Dashboard<span className={`text-[10px] font-sans ml-2 tracking-wide ${ selected === 'webApp' ? "text-[#C1A253]/60" : "text-[#AFAFAF]/35"}`}>WEB PORTAL</span></button>


    </div>

    </div>


    {selected === "mobileApp" ? <BusMobApp /> : <BusWebApp />}

    <Businesses />


    <div className='flex flex-col justify-center items-center py-20'>
        <h2 className='text-[36px] font-cormorant text-white'>Book a Demo</h2>
        <p className='text-[14px] text-[#AFAFAF] text-center'>See how Luminary Pass can transform your influencer marketing.</p>

        <Button
                    text="Book a Demo →"
                    textColor="text-black"
                    rounded="rounded-none"
                    height="h-13"
                    width="w-48"
                    bgColor="bg-[#C1A253]"
                    className="font-black mt-8 text-center tracking-wide hover:bg-[#E5CFA4] cursor-pointer"
                    />
    </div>








    </div>
    </>
  )
}

export default page
