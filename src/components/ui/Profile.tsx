
import Image from 'next/image'
import yourProfile from '@/public/images/yourProfileImg.jpeg'
import profileDetails from '@/public/images/profileDetailsImg.jpeg'
import profileMain from '@/public/images/profileMainImg.jpeg'

function Profile() {
  return (
        <>
        <div className='bg-[#040403]'>
    <div className=' flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-2 pt-6 pb-18 md:pt-12'>

    <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-3 md:px-8 md:py-12'>

      <div>
        <Image
        src={yourProfile}
        alt='image'
        className='rotate-353 rounded-4xl w-26 md:w-45 border-[#C1A253]/30 border'
        />

        </div>


        <div>

        <Image
        src={profileMain}
        alt='accountImage'
        className='rounded-4xl w-26 md:w-55 border-[#C1A253] border relative z-10'
        />

      </div>

      <div>
        <Image
        src={profileDetails}
        alt='InstaImage'
        className='rotate-7 rounded-4xl w-26 md:w-45 border-[#C1A253]/30 border'
        />
      </div>

    </div>

    <div className='md:w-1/4 flex flex-col items-start px-6 gap-y-2 md:gap-y-5 md:pb-5 md:pr-14'>

    <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]'>YOUR PROFILE</h5>
    <h2 className='hidden md:block text-4xl font-cormorant tracking-wide'>Build Your<br/>Identity</h2>
        <h2 className='md:hidden block text-2xl font-cormorant tracking-wide mb-2'>Build Your Identity</h2>



    <p className='text-[#AFAFAF] text-sm leading-relaxed mb-2'>Your profile is your public portfolio — seen by every business on the platform when you apply for an event.</p>


    <div className='flex flex-col gap-y-2 mt-3'>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> Auto-populated from Instagram</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> Categories, bio and location</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> Badge tier displayed on your card</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF] md:text-nowrap"><span className="text-[8px] text-[#C1A253]">✦</span> Portfolio of past events</li>

    <div className="border-b border-white/5 h-px"></div>

    </div>
    

    </div>

    </div>

<div className='h-px w-48 bg-linear-to-r from-transparent via-[#C1A253]/30 to-transparent mx-auto'></div>

    </div>

    </>
  )
}

export default Profile
