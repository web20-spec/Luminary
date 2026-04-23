import Image from 'next/image'
import loginImg from '@/public/images/busLoginImg.png'
import commandImg from '@/public/images/busCommandImg.png'
import homeImg from '@/public/images/busHomeImg.png'
import sidebarImg from '@/public/images/busSidebarImg.png'
import eventsDetailImg from '@/public/images/busEventsImg.png'
import myEventsImg from '@/public/images/busMyEventsImg.png'
import commandCenterImg from '@/public/images/busCommand-centerImg.png'
import influencerProfileImg from '@/public/images/busInfluencer-profileImg.png'
import profileSettingsImg from '@/public/images/busProfileSetImg.png'
import QRImg from '@/public/images/busQR_checkinImg.png'

function BusMobApp() {
  return (
    <>
    <div className='bg-[#040403]'>

        <div className='flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-2 pt-22 pb-18 md:pt-28'>
        
            <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-3 md:px-8 md:py-12'>
        
              <div>
                <Image
                src={commandImg}
                alt='image'
                className='rotate-353 rounded-4xl w-26 md:w-45 border-[#C1A253]/30 border'
                />
        
                </div>
        
        
                <div>
        
                <Image
                src={loginImg}
                alt='accountImage'
                className='rounded-4xl w-26 md:w-55 border-[#C1A253] border relative z-10'
                />
        
              </div>
        
            </div>
        
            <div className='md:w-1/4 flex flex-col items-start px-6 gap-y-2 md:gap-y-5 md:pb-5 md:pr-14'>
        
            <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]'>STEP 1 — YOUR COMMAND CENTER</h5>
            <h2 className='hidden md:block text-4xl font-cormorant tracking-wide'>"Your venue.<br/>Your command."</h2>
                <h2 className='md:hidden block text-2xl font-cormorant tracking-wide mb-2'>"Your venue. Your command."</h2>
        
        
        
            <p className='text-[#AFAFAF] text-sm leading-relaxed mb-2'>Log in with Face ID or email. The moment you're in, your live event dashboard shows everything happening right now — pending applications, check-in progress, active events and your average creator rating.</p>
        
        
            <div className='flex flex-col gap-y-2 mt-3'>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> Face ID or email login</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> Multi-venue collage background shows every category you manage</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253]">✦</span> Secure business portal — invite-only access</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF] md:text-nowrap"><span className="text-[8px] text-[#C1A253]">✦</span> Connected to your web dashboard in real time</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            </div>
            
        
            </div>
        
            </div>

                <div className='h-px w-48 bg-linear-to-r from-transparent via-[#C1A253]/30 to-transparent mx-auto'></div>



        <div className='flex flex-col-reverse md:flex-row md:justify-center md:items-center md:gap-x-2 pt-6 pb-18 md:pt-12'>

    <div className='md:w-1/4 flex flex-col items-start px-6 gap-y-2 md:gap-y-4 md:pb-5'>

    <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]'>STEP 2 — LIVE OVERVIEW</h5>
    <h2 className='hidden md:block text-4xl font-cormorant tracking-wide'>"Everything at a<br/>glance."</h2>
        <h2 className='md:hidden block text-2xl font-cormorant tracking-wide mb-2'>"Everything at a glance."</h2>



    <p className='text-[#AFAFAF] text-sm leading-relaxed mb-2'>The home screen surfaces what matters most — active events with live/upcoming status, pending applications with one-tap approve or decline, and a real-time activity feed. The sidebar gives full navigation to every section.</p>


    <div className='flex flex-col gap-y-2 mt-3'>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> 4 live KPI cards: events, applications, completion rate, rating</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> Active events list with spot availability and status</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap md:text-wrap">✦</span> Pending applications with inline approve or decline</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> Full sidebar navigation with badge counts</li>

    <div className="border-b border-white/5 h-px"></div>

    </div>
    

    </div>

    <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-3 md:px-8 md:py-12'>

    <div>
        <Image
        src={homeImg}
        alt='image'
        className='rotate-353 rounded-4xl w-26 md:w-45 border-[#C1A253]/30 border'
        />

        </div>


        <div>

        <Image
        src={sidebarImg}
        alt='accountImage'
        className='rounded-4xl w-26 md:w-55 border-[#C1A253] border relative z-10'
        />

    </div>

    </div>

    </div>

<div className='h-px w-48 bg-linear-to-r from-transparent via-[#C1A253]/30 to-transparent mx-auto'></div>



<div className='flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-2 pt-22 pb-18 md:pt-28'>
        
            <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-3 md:px-8 md:py-12'>
        
              <div>
                <Image
                src={myEventsImg}
                alt='image'
                className='rotate-353 rounded-4xl w-26 md:w-45 border-[#C1A253]/30 border'
                />
        
                </div>
        
        
                <div>
        
                <Image
                src={eventsDetailImg}
                alt='accountImage'
                className='rounded-4xl w-26 md:w-55 border-[#C1A253] border relative z-10'
                />
        
              </div>
        
            </div>
        
            <div className='md:w-1/4 flex flex-col items-start px-6 gap-y-2 md:gap-y-5 md:pb-5 md:pr-14'>
        
            <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]'>STEP 3 — MANAGE YOUR EVENTS</h5>
            <h2 className='hidden md:block text-4xl font-cormorant tracking-wide'>"All your events.<br/>One place."</h2>
                <h2 className='md:hidden block text-2xl font-cormorant tracking-wide mb-2'>"All your events. One place."</h2>
        
        
        
            <p className='text-[#AFAFAF] text-sm leading-relaxed mb-2'>View every event across Live, Upcoming, Completed and Draft. Each card shows real venue photography, spot counts, and live stats. Tap any event to see the full detail — approved influencers, check-in status, task completion and more.</p>
        
        
            <div className='flex flex-col gap-y-2 mt-3'>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF] md:max-w-70"><span className="text-[8px] text-[#C1A253]">✦</span> Filter by Live / Upcoming / Completed / Draft</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF] md:max-w-70"><span className="text-[8px] text-[#C1A253]">✦</span> Real venue photography on every event card</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF] md:max-w-70"><span className="text-[8px] text-[#C1A253]">✦</span> Applied / Approved / Checked In / Tasks stats per event</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] md:max-w-70">✦</span> 9-person approved influencer grid — tap any to view profile</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            </div>
            
        
            </div>
        
            </div>

                <div className='h-px w-48 bg-linear-to-r from-transparent via-[#C1A253]/30 to-transparent mx-auto'></div>



        
        <div className='flex flex-col-reverse md:flex-row md:justify-center md:items-center md:gap-x-2 pt-6 pb-18 md:pt-12'>

    <div className='md:w-1/4 flex flex-col items-start px-6 gap-y-2 md:gap-y-4 md:pb-5'>

    <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]'>STEP 4 — APPROVE THE RIGHT CREATORS</h5>
    <h2 className='hidden md:block text-4xl font-cormorant tracking-wide'>"Every creator.<br/>Fully vetted."</h2>
        <h2 className='md:hidden block text-2xl font-cormorant tracking-wide mb-2'>"Every creator. Fully vetted."</h2>



    <p className='text-[#AFAFAF] text-sm leading-relaxed mb-2'>Review every applicant's full profile before approving — 6-stat header, Instagram insights for the last 30 days, bio, content categories, and their personal message to you. The Command Center gives you quick-action tiles for everything urgent.</p>


    <div className='flex flex-col gap-y-2 mt-3'>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> Followers, following, posts, engagement, rating and events done</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> Instagram reach, impressions and profile views (last 30 days)</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap md:text-wrap">✦</span> Applicant's message to your venue</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> Command Center: QR Check-In, Applications, Task Review, New Event</li>

    <div className="border-b border-white/5 h-px"></div>

    </div>
    

    </div>

    <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-3 md:px-8 md:py-12'>

    <div>
        <Image
        src={influencerProfileImg}
        alt='image'
        className='rotate-353 rounded-4xl w-26 md:w-45 border-[#C1A253]/30 border'
        />

        </div>


        <div>

        <Image
        src={commandCenterImg}
        alt='accountImage'
        className='rounded-4xl w-26 md:w-55 border-[#C1A253] border relative z-10'
        />

    </div>

    </div>

    </div>

<div className='h-px w-48 bg-linear-to-r from-transparent via-[#C1A253]/30 to-transparent mx-auto'></div>



        
        <div className='flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-2 pt-22 pb-18 md:pt-28'>
        
            <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-3 md:px-8 md:py-12'>
        
              <div>
                <Image
                src={QRImg}
                alt='image'
                className='rotate-353 rounded-4xl w-26 md:w-45 border-[#C1A253]/30 border'
                />
        
                </div>
        
        
                <div>
        
                <Image
                src={profileSettingsImg}
                alt='accountImage'
                className='rounded-4xl w-26 md:w-55 border-[#C1A253] border relative z-10'
                />
        
              </div>
        
            </div>
        
            <div className='md:w-1/4 flex flex-col items-start px-6 gap-y-2 md:gap-y-5 md:pb-5 md:pr-14'>
        
            <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]'>STEP 5 — LIVE CHECK-IN</h5>
            <h2 className='hidden md:block text-4xl font-cormorant tracking-wide'>"Know exactly<br/>who showed up."</h2>
                <h2 className='md:hidden block text-2xl font-cormorant tracking-wide mb-2'>"Know exactly who showed up."</h2>
        
        
        
            <p className='text-[#AFAFAF] text-sm leading-relaxed mb-2'>On event day, open the QR scanner and scan each creator's digital pass at the door. Check-in is logged instantly — 7 checked in, 9 approved, 2 not arrived — all visible in real time. Manage your account, team and billing from the Profile screen.</p>
        
        
            <div className='flex flex-col gap-y-2 mt-3'>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF] md:max-w-70"><span className="text-[8px] text-[#C1A253]">✦</span> QR camera scanner built directly into the app</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF] md:max-w-70"><span className="text-[8px] text-[#C1A253]">✦</span> Manual @handle or name entry as backup</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF] md:max-w-70"><span className="text-[8px] text-[#C1A253]">✦</span> Live stats: Checked In / Approved / Not Arrived</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] md:max-w-70">✦</span> Profile: Venue Profile, Team Members, Billing, Notifications</li>
        
            <div className="border-b border-white/5 h-px"></div>
        
            </div>
            
        
            </div>
        
            </div>

                <div className='h-px w-48 bg-linear-to-r from-transparent via-[#C1A253]/30 to-transparent mx-auto'></div>



        
        <div className='flex flex-col-reverse md:flex-row md:justify-center md:items-center md:gap-x-2 pt-6 pb-18 md:pt-12'>

    <div className='md:w-1/4 flex flex-col items-start px-6 gap-y-2 md:gap-y-4 md:pb-5'>

    <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em] md:max-w-65 leading-relaxed'>YOUR COMPLETE MOBILE COMMAND CENTER</h5>
    <h2 className='hidden md:block text-4xl font-cormorant tracking-wide'>"Run your<br/>business from<br/>anywhere."</h2>
        <h2 className='md:hidden block text-2xl font-cormorant tracking-wide mb-2'>"Run your business from anywhere."</h2>



    <p className='text-[#AFAFAF] text-sm leading-relaxed mb-2'>Luminary Command puts the full power of your influencer marketing operation in your pocket. From publishing events and approving creators to live check-ins and content verification — no laptop required.</p>


    <div className='flex flex-col gap-y-2 mt-3'>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> Available on iOS and Android</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> Synced in real time with your web dashboard</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap md:text-wrap">✦</span> Face ID login for instant secure access</li>

    <div className="border-b border-white/5 h-px"></div>

    <li className="flex items-center gap-x-3 text-sm text-[#AFAFAF]"><span className="text-[8px] text-[#C1A253] text-nowrap">✦</span> Push notifications for every application and check-in</li>

    <div className="border-b border-white/5 h-px"></div>

    </div>
    

    </div>

    <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-3 md:px-8 md:py-12'>

    <div>
        <Image
        src={commandImg}
        alt='image'
        className='rotate-353 rounded-4xl w-26 md:w-45 border-[#C1A253]/30 border'
        />

        </div>


        <div>

        <Image
        src={homeImg}
        alt='accountImage'
        className='rounded-4xl w-26 md:w-55 border-[#C1A253] border relative z-10'
        />

    </div>

    <div>
        <Image
        src={myEventsImg}
        alt='InstaImage'
        className='rotate-7 rounded-4xl w-26 md:w-45 border-[#C1A253]/30 border'
        />
    </div>

    </div>

    </div>



    </div>
    </>
  )
}

export default BusMobApp
