import Button from "./Button"

function BadgeSystem() {

    const badges1 = [
        "Complete 5+ events",
        "80% satisfaction rate",
        "Within 90 days"
    ]

    const badges2 = [
        "Complete 20+ events in 90 days",
        "85% satisfaction rate",
        "4+ star average rating"
    ]

    const badges3 = [
        "Complete 40+ events in 90 days",
        "90% satisfaction rate",
        "4.5+ star average · Zero no-shows"
    ]

return (
    <>
    <div className='bg-[#0A0A0A] py-30 md:py-30 '>

        <div className='flex flex-col justify-center items-center gap-y-3 mb-10'>
            
        <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]'>BADGE SYSTEM</h5>
        <h2 className='text-3xl md:text-5xl font-cormorant tracking-wide'>Earn your reputation.</h2>

        <p className='text-[#AFAFAF] text-xs tracking-wide md:tracking-normal md:text-sm font-cormorant italic leading-relaxed mb-2 text-nowrap'>"Every badge is earned through performance — not follower counts."</p>

        </div>


        <div className='flex flex-col md:flex-row items-center gap-y-4 md:justify-center md:items-start md:gap-x-5'>

        <div className='bg-[#111111] border border-[#111111] h-85 w-90 py-8 px-8 md:h-95 md:w-78 rounded-xl md:py-8 transition-transform duration-300 hover:-translate-y-1'>

            <div className='flex flex-col justify-center items-center gap-y-4'>
                <p className='text-4xl'>🔰</p>

                <h5 className='text-[#C1A253] font-cormorant text-2xl'>Rising Star</h5>
                <p className='text-[#AFAFAF] text-xs md:max-w-40 text-center tracking-wide'>Building momentum on the platform.</p>

                </div>

                <div className="pt-5 md:pt-8">
                {badges1.map((text, i) => (
                <div key={i} className="flex flex-col px-5 md:px-5">

                <div className="flex items-start gap-x-3 py-1.5">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#87713A] mt-1 shrink-0"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
            
                <p className="text-[13px] brightness-125 text-[#AFAFAF]">
                    {text}
                </p>
                </div>

                <div className="border-b border-white/5"></div>
            
                </div>
            ))}


                <p className='text-[#C1A253] text-[11px] text-center tracking-wide pt-6'>Priority visibility · Rising Star badge</p>

                </div>
            
        </div>

        <div className='bg-[#111111] border-2 border-[#C1A253] h-87 w-90 py-8 px-8 md:h-100 md:w-78 rounded-xl md:py-8 transition-transform duration-300 hover:-translate-y-1'>

            <div className="relative">

            <Button
            text="MOST HELD"
            bgColor="bg-[#C1A253]"
            rounded="rounded-xl"
            height="h-6"
            width="w-21"
            className="text-[9px] text-nowrap absolute left-56 md:left-44 -top-4 tracking-widest leading-relaxed items-center"
            />

            </div>

            <div className='flex flex-col justify-center items-center gap-y-4'>
                <p className='text-4xl'>🥇</p>

                <h5 className='text-[#C1A253] font-cormorant text-2xl'>Top Influencer</h5>
                <p className='text-[#AFAFAF] text-xs md:max-w-40 text-center tracking-wide'>Our most active and reliable creators.</p>

                </div>

                <div className="pt-5 md:pt-8">
                {badges2.map((text, i) => (
                <div key={i} className="flex flex-col px-3 md:items-start md:px-4">

                <div className="flex items-start gap-x-3 py-1.5">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#87713A] mt-1 shrink-0"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
            
                <p className="text-[13px] brightness-125 text-[#AFAFAF]">
                    {text}
                </p>
                </div>

                <div className="border-b border-white/5"></div>
            
                </div>
            ))}


                <p className='text-[#C1A253] text-[11px] text-center tracking-wide pt-6 md:px-6'>Faster approvals · Featured in search · Priority placement</p>

                </div>
            
        </div>


        <div className='bg-[#111111] border border-[#111111] h-85 w-90 py-8 px-8 md:h-95 md:w-78 rounded-xl md:py-8 transition-transform duration-300 hover:-translate-y-1'>

            <div className='flex flex-col justify-center items-center gap-y-4'>
                <p className='text-4xl'>💎</p>

                <h5 className='text-[#C1A253] font-cormorant text-2xl'>Elite Influencer</h5>
                <p className='text-[#AFAFAF] text-xs md:max-w-50 text-center tracking-wide'>The highest tier on Luminary Pass.</p>

                </div>

                <div className="pt-5 md:pt-8">
                {badges3.map((text, i) => (
                <div key={i} className="flex flex-col px-5 md:items-start md:px-0">

                <div className="flex items-start gap-x-3 py-1.5">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#87713A] mt-1 shrink-0"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
            
                <p className="text-[13px] brightness-125 text-[#AFAFAF] md:text-nowrap">
                    {text}
                </p>
                </div>

                <div className="border-b border-white/5"></div>
            
                </div>
            ))}


                <p className='text-[#C1A253] text-[11px] text-center tracking-wide pt-6 md:px-8'>Exclusive Elite events · Direct brand deals · Elite badge</p>

                </div>
            
        </div>

        </div>

        <p className="text-[#AFAFAF] text-xs text-center tracking-wide pt-8 px-8 md:pt-8">Badges auto-recalculate every 24 hours based on your last 90 days of activity.</p>

    </div>
    </>
)
}

export default BadgeSystem
