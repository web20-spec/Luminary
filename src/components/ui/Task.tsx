import Image from "next/image"
import portfolioImg from '@/public/images/portfolioTaskImg.jpeg'
import reviewsImg from '@/public/images/reviewsTaskImg.jpeg'
import settingsImg from '@/public/images/settingTaksImg.jpeg'
import Button from "./Button"
import Link from "next/link"

function Task() {
return (
    <>
    <div className="bg-[#040403] pb-30">

    <div className='flex flex-col-reverse md:flex-row md:justify-center md:items-center md:gap-x-2 pt-6 pb-14 md:pt-12'>

    <div className='md:w-1/4 flex flex-col items-start px-6 gap-y-2 md:gap-y-4 md:pb-5'>

    <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]'>TASKS & REPUTATION</h5>
    <h2 className='hidden md:block text-4xl font-cormorant tracking-wide'>Build Your<br/>Reputation</h2>
        <h2 className='md:hidden block text-2xl font-cormorant tracking-wide mb-2'>Build Your Reputation</h2>



    <p className='text-[#AFAFAF] text-sm leading-relaxed mb-2'>Every task has a deadline. Upload screenshot proof. Get approved, reviewed, or flagged. Your score updates in real time.</p>


    <div className='flex flex-col gap-y-2 mt-3'>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> Venue star ratings after every event</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> Event portfolio history</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> Rising Star → Elite badges</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> IG & account management</li>

    <div className="border-b border-white/5 h-px"></div>

    </div>
    

    </div>

    <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-3 md:px-8 md:py-12'>

    <div>
        <Image
        src={portfolioImg}
        alt='image'
        className='rotate-353 rounded-4xl w-26 md:w-45 border-[#C1A253]/30 border'
        />

        </div>


        <div>

        <Image
        src={reviewsImg}
        alt='accountImage'
        className='rounded-4xl w-26 md:w-55 border-[#C1A253] border relative z-10'
        />

    </div>

    <div>
        <Image
        src={settingsImg}
        alt='InstaImage'
        className='rotate-7 rounded-4xl w-26 md:w-45 border-[#C1A253]/30 border'
        />
    </div>

    </div>

    </div>


    <div className="flex flex-col gap-y-4 items-center md:flex-row md:justify-center md:items-center md:gap-x-4 mt-20 md:mt-16">
        <Button
        text="App Store"
        textColor="text-[#C1A253]"
        width="w-[132px]"
        height="h-11"
        bgColor="bg-transparent"
        rounded="rounded"
        className="text-center text-[15px] cursor-pointer border-[#C1A253]/50 border hover:bg-[#C1A253]/10 ease-in transition-all"
        />


        <Button
        text="▶ Google Play"
        textColor="text-[#C1A253]"
        width="w-40"
        height="h-[45px]"
        bgColor="bg-transparent"
        rounded="rounded"
        className="text-center text-[15px] cursor-pointer border-[#C1A253]/50 border hover:bg-[#C1A253]/10 ease-in transition-all"
        />

    </div>
    
    <div className="flex justify-center items-center mt-6">
        <p className="text-xs text-[#AFAFAF]">Launching 2026 · Currently in beta · <span className="text-[#C1A253] hover:brightness-150"><Link href="">Apply for early access →</Link></span></p>
    </div>

    </div>

    </>
  )
}

export default Task
