import React from 'react'
import slpashImg from '@/public/images/splashImg.jpeg'
import accountImg from '@/public/images/imgi_3_create-account.jpeg'
import instaImg from '@/public/images/imgi_4_connect-instagram.jpeg'
import Image from 'next/image'

function Onboarding() {
  return (
    <>

    <div className='bg-[#040403]'>

    <div className='flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-2 pt-22 pb-18 md:pt-28'>

    <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-3 md:px-8 md:py-12'>

      <div>
        <Image
        src={slpashImg}
        alt='image'
        className='rotate-353 rounded-4xl w-26 md:w-45 border-[#C1A253]/30 border'
        />

        </div>


        <div>

        <Image
        src={accountImg}
        alt='accountImage'
        className='rounded-4xl w-26 md:w-55 border-[#C1A253] border relative z-10'
        />

      </div>

      <div>
        <Image
        src={instaImg}
        alt='InstaImage'
        className='rotate-7 rounded-4xl w-26 md:w-45 border-[#C1A253]/30 border'
        />
      </div>

    </div>

    <div className='md:w-1/4 flex flex-col items-start px-6 gap-y-2 md:gap-y-5 md:pb-5 md:pr-14'>

    <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]'>ONBOARDING</h5>
    <h2 className='hidden md:block text-4xl font-cormorant tracking-wide'>Apply in<br/>Minutes</h2>
        <h2 className='md:hidden block text-2xl font-cormorant tracking-wide mb-2'>Apply in Minutes</h2>



    <p className='text-[#AFAFAF] text-sm leading-relaxed mb-2'>Connect your Instagram, set up your profile, and get reviewed by our team — all within 48 hours.</p>


    <div className='flex flex-col gap-y-2 mt-3'>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> Instagram verification required</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> Creator or Business accounts only</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> Profile reviewed in 48 hours</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF] md:text-nowrap"><span className="text-[8px] text-[#C1A253]">✦</span> Invite-only — not everyone is accepted</li>

    <div className="border-b border-white/5 h-px"></div>

    </div>
    

    </div>

    </div>

    <div className='h-px w-48 bg-linear-to-r from-transparent via-[#C1A253]/30 to-transparent mx-auto'></div>

    </div>

    </>
  )
}

export default Onboarding
