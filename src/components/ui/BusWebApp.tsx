import Image from "next/image"
import dashbboardImg from '@/public/images/busDashboardImg.png'
import eventsImg from '@/public/images/buswebEventsImg.png'
import appImg from '@/public/images/busApplicationsImg.png'
import checkInImg from '@/public/images/busWebCheckinImg.png'
import taskImg from '@/public/images/busWebTasksImg.png'
import profileImg from '@/public/images/busWebInfluencerImg.png'

function BusWebApp() {
  return (
    <>
    <div className='bg-[#040403]'>

        <div className='flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-2 pt-22 pb-18 md:pt-28'>
        
            <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-3 md:px-8 md:py-12'>
        
            <div>
                <Image
                src={dashbboardImg}
                alt='image'
                className='rounded-xl w-26 md:w-xl md:h-82 border-[#C1A253]/30 border'
                />
        
                </div>
        
            </div>
        
            <div className='md:w-1/4 flex flex-col items-start px-6 gap-y-2 md:gap-y-5 md:pb-5 md:pr-14'>
        
            <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]'>YOUR OVERVIEW</h5>
            <h2 className='hidden md:block text-[40px] font-cormorant tracking-wide leading-none'>"Where influence gets managed."</h2>
                <h2 className='md:hidden block text-2xl font-cormorant tracking-wide mb-2'>"Where influence gets managed."</h2>
        
        
        
            <p className='text-[#AFAFAF] text-[15px] leading-relaxed mb-2'>The dashboard home shows your active events, pending applications with inline approve/decline, recent activity feed across all events, and four KPI cards updated in real time — active events, pending applications, task completion rate, and average creator rating.</p>
        
        
            <div className='flex flex-col gap-y-2 mt-3'>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> 4 KPI cards: Active Events / Applications / 94% Completion / 4.7★ Rating</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> Active events with Live / Upcoming status and spots remaining</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> Approve or decline applications without leaving the page</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF] md:text-nowrap"><span className="text-[8px] text-[#C1A253]">✦</span> Real-time activity feed — nothing slips through</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            </div>
            
        
            </div>
        
            </div>

                <div className='h-px w-48 bg-linear-to-r from-transparent via-[#C1A253]/30 to-transparent mx-auto'></div>



        <div className='flex flex-col-reverse md:flex-row md:justify-center md:items-center md:gap-x-2 pt-6 pb-18 md:pt-20'>
        
            <div className='md:w-1/4 flex flex-col items-start px-6 gap-y-2 md:gap-y-4 md:pb-5'>
        
            <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]'>EVENT MANAGEMENT</h5>
            <h2 className='hidden md:block text-[40px] font-cormorant tracking-wide leading-none'>"Published in<br/>under 2<br/>minutes."</h2>
                <h2 className='md:hidden block text-2xl font-cormorant tracking-wide mb-2'>"Published in under 2 minutes."</h2>
        
        
        
            <p className='text-[#AFAFAF] text-[15px] leading-relaxed mb-2'>Create events with a 4-step wizard — name, venue (auto-filled), date, time, application deadline, influencer spots slider, description and images. View all events in a rich card grid with real venue photography, filter by status, and click any event for the full 6-tab detail view.</p>
        
        
            <div className='flex flex-col gap-y-2 mt-3'>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> 4-step create wizard: Details → Offer → Tasks → Review & Publish</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> Venue name and location auto-filled from your business profile</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap md:text-wrap">✦</span> Filter: All / Live / Upcoming / Completed / Draft</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> 6-tab event detail: Info / Applications / Approved / Check-In / Tasks / Declined</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            </div>
            
        
            </div>
        
            <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-3 md:px-8 md:py-12'>
        
            <div>
                <Image
                src={eventsImg}
                alt='image'
                className='rounded-xl w-26 md:w-xl md:h-82 border-[#C1A253]/30 border'
                />
        
                </div>
        
            </div>
        
            </div>
        
        <div className='h-px w-48 bg-linear-to-r from-transparent via-[#C1A253]/30 to-transparent mx-auto'></div>



        <div className='flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-2 pt-22 pb-18 md:pt-28'>
        
            <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-3 md:px-8 md:py-12'>
        
            <div>
                <Image
                src={appImg}
                alt='image'
                className='rounded-xl w-26 md:w-xl md:h-82 border-[#C1A253]/30 border'
                />
        
                </div>
        
            </div>
        
            <div className='md:w-1/4 flex flex-col items-start px-6 gap-y-2 md:gap-y-5 md:pb-5 md:pr-14'>
        
            <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]'>REVIEW INFLUENCERS</h5>
            <h2 className='hidden md:block text-[40px] font-cormorant tracking-wide leading-tight'>"Every creator. Verified."</h2>
                <h2 className='md:hidden block text-2xl font-cormorant tracking-wide mb-2'>"Where influence gets managed."</h2>
        
        
        
            <p className='text-[#AFAFAF] text-[15px] leading-relaxed mb-2'>Review every applicant with their followers, engagement rate, badge tier, and personal pitch message — all in one consolidated applications view filterable by event. The full influencer network table shows every creator you've ever worked with, sortable by badge, completion rate and rating.</p>
        
        
            <div className='flex flex-col gap-y-2 mt-3'>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> Approve or decline with one click — reason sent to creator</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> Filter applications by event across your full portfolio</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> Influencer table: followers, badge, completion %, events, rating</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF] md:text-nowrap"><span className="text-[8px] text-[#C1A253]">✦</span> Declined creators can always be reconsidered</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            </div>
            
        
            </div>
        
            </div>

                <div className='h-px w-48 bg-linear-to-r from-transparent via-[#C1A253]/30 to-transparent mx-auto'></div>



        
        <div className='flex flex-col-reverse md:flex-row md:justify-center md:items-center md:gap-x-2 pt-6 pb-18 md:pt-20'>
        
            <div className='md:w-1/4 flex flex-col items-start px-6 gap-y-2 md:gap-y-4 md:pb-5'>
        
            <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em] md:max-w-60 leading-relaxed'>CHECK-IN & CONTENT VERIFICATION</h5>
            <h2 className='hidden md:block text-[40px] font-cormorant tracking-wide leading-none'>"Did they show<br/>up? Did they<br/>post?"</h2>
                <h2 className='md:hidden block text-2xl font-cormorant tracking-wide mb-2'>"Did they show up? Did they post?"</h2>
        
        
        
            <p className='text-[#AFAFAF] text-[15px] leading-relaxed mb-2'>The Check-In page logs QR scans across all events simultaneously — staff can use a USB scanner or type a handle manually. After the event, review proof screenshots from every creator per task, approve or decline with a preset reason, and see who completed everything.</p>
        
        
            <div className='flex flex-col gap-y-2 mt-3'>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> Scan QR codes across all events from one page</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> Scanner Mode for USB/Bluetooth QR scanners</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap md:text-wrap">✦</span> Proof screenshot visible before you approve any task</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> 7 preset decline reasons sent directly to the creator</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            </div>
            
        
            </div>
        
            <div className='flex md:flex-col md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-3 md:gap-y-4 md:px-8 md:py-12'>
        
            <div>
                <Image
                src={checkInImg}
                alt='image'
                className='rounded-xl w-26 md:w-xl md:h-82 border-[#C1A253]/30 border'
                />
        
                </div>

                <div>
                <Image
                src={taskImg}
                alt='image'
                className='rounded-xl w-26 md:w-xl md:h-82 border-[#C1A253]/30 border'
                />
        
                </div>
        
            </div>
        
            </div>
        
        <div className='h-px w-48 bg-linear-to-r from-transparent via-[#C1A253]/30 to-transparent mx-auto'></div>





        <div className='flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-2 pt-22 pb-18 md:pt-28'>
        
            <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-3 md:px-8 md:py-12'>
        
            <div>
                <Image
                src={profileImg}
                alt='image'
                className='rounded-xl w-26 md:w-xl md:h-82 border-[#C1A253]/30 border'
                />
        
                </div>
        
            </div>
        
            <div className='md:w-1/4 flex flex-col items-start px-6 gap-y-2 md:gap-y-5 md:pb-5 md:pr-14'>
        
            <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]'>FULL CREATOR PROFILES</h5>
            <h2 className='hidden md:block text-[40px] font-cormorant tracking-wide leading-none'>"Know who<br/>you're working<br/>with."</h2>
                <h2 className='md:hidden block text-2xl font-cormorant tracking-wide mb-2'>"Know who you're working with."</h2>
        
        
        
            <p className='text-[#AFAFAF] text-[15px] leading-relaxed mb-2'>Every creator has a full profile with 5 tabs — Overview with bio, categories and Instagram insights, Instagram Posts grid, Event History, Activity log with every QR check-in and task submission timestamped, and Reviews. Make fully informed decisions before you approve anyone.</p>
        
        
            <div className='flex flex-col gap-y-2 mt-3'>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> Bio, content categories and Instagram insights (last 30 days)</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> 126K reach · 340K impressions · 4.8% engagement</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> Event history with reach and views per collaboration</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF] md:text-nowrap"><span className="text-[8px] text-[#C1A253]">✦</span> Activity log: every check-in, task and rating timestamped</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            </div>
            
        
            </div>
        
            </div>








    </div>
    </>
  )
}

export default BusWebApp
