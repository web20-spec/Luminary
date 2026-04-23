import React from 'react'
import Image from 'next/image'
import shareStats from '@/public/images/shareStatsImg.jpeg'
import uploadInsights from '@/public/images/uploadInsights.jpeg'
import underReview from '@/public/images/underReview.jpeg'

function Verification() {
return (
    <>

    <div className='bg-[#040403]'>

    <div className='flex flex-col-reverse md:flex-row md:justify-center md:items-center md:gap-x-2 pt-6 pb-18 md:pt-12'>

    <div className='md:w-1/4 flex flex-col items-start px-6 gap-y-2 md:gap-y-4 md:pb-5'>

    <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]'>VERIFICATION</h5>
    <h2 className='hidden md:block text-4xl font-cormorant tracking-wide'>Verified by<br/>Default</h2>
        <h2 className='md:hidden block text-2xl font-cormorant tracking-wide mb-2'>Verified by Default</h2>



    <p className='text-[#AFAFAF] text-sm leading-relaxed mb-2'>We auto-fetch your Instagram stats and require a Professional Dashboard screenshot. Every influencer is manually reviewed.</p>


    <div className='flex flex-col gap-y-2 mt-3'>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> Instagram stats auto-fetched via OAuth</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> Pro Dashboard screenshot required</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> PManual team review within 48 hours</li>

    <div className="border-b border-white/5 h-px"></div>

    </div>
    

    </div>

    <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-3 md:px-8 md:py-12'>

    <div>
        <Image
        src={shareStats}
        alt='image'
        className='rotate-353 rounded-4xl w-26 md:w-45 border-[#C1A253]/30 border'
        />

        </div>


        <div>

        <Image
        src={uploadInsights}
        alt='accountImage'
        className='rounded-4xl w-26 md:w-55 border-[#C1A253] border relative z-10'
        />

    </div>

    <div>
        <Image
        src={underReview}
        alt='InstaImage'
        className='rotate-7 rounded-4xl w-26 md:w-45 border-[#C1A253]/30 border'
        />
    </div>

    </div>

    </div>

<div className='h-px w-48 bg-linear-to-r from-transparent via-[#C1A253]/30 to-transparent mx-auto'></div>

</div>
    </>
)
}

export default Verification
