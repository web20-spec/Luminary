import Button from '@/src/components/ui/Button'
import Image from 'next/image'
import slpashImg from '@/public/images/splashImg.jpeg'
import accountImg from '@/public/images/imgi_3_create-account.jpeg'
import shareStats from '@/public/images/shareStatsImg.jpeg'
import uploadInsights from '@/public/images/uploadInsights.jpeg'
import yourProfile from '@/public/images/yourProfileImg.jpeg'
import profileMain from '@/public/images/profileMainImg.jpeg'
import homeImg from '@/public/images/imgi_2_home-feed.jpeg'
import trendImg from '@/public/images/trendingImg.png'
import pendingInvite from '@/public/images/pendingInvitation.jpeg'
import approvedInvite from '@/public/images/approvedInvitation.jpeg'
import eventImg from '@/public/images/todayEventImg.jpeg'
import pastImg from '@/public/images/pastInvitationImg.png'

function page() {
  return (
    <>
        <div className="bg-[url('/images/bgImage.jpg')] w-full bg-background">

            <div className="flex flex-col justify-center items-center gap-y-5">
        <p className="md:text-[10px] text-[10px] text-[#BB9D50] md:tracking-[0.4em] tracking-[0.2em] md:text-center text-center pt-30 md:pt-40">HOW IT WORKS</p>

        <h1 className="hidden md:block md:text-center md:text-6xl tracking-wide text-center text-5xl font-cormorant">Simple. Transparent.<br/>Accountable.</h1>

        <h1 className="md:hidden block md:text-center tracking-wide text-center text-4xl font-cormorant px-6">Simple. Transparent.<br/>Accountable.</h1>

        <p className="text-[#AFAFAF] md:text-lg md:leading-relaxed md:text-center text-center text-[16px]
        md:max-w-140 px-10 ">Luminary Pass removes the guesswork from influencer marketing in Pakistan. Every step is tracked, verified, and recorded — for both sides.</p>
        

        <div className="flex md:justify-center md:items-center gap-x-3 md:gap-x-4 md:pt-3 pb-16 md:pb-18 justify-center items-center gap-y-2">

            <Button
            text="For Influencers"
            textColor='text-[#C1A253]'
            height="h-10"
            rounded="rounded"
            bgColor="bg-transparent"
            className="border border-[#C1A253]/30 md:inline-flex md:gap-2 md:items-center md:justify-center tracking-wide md:text-[14px] md:px-3 cursor-pointer text-sm w-36 hover:bg-[#C1A253]/10"
            />

            <Button
            text="For Businesses"
            height="h-10"
            rounded="rounded"
            textColor="text-[#C1A253]"
            className="border border-[#C1A253]/30 md:inline-flex md:gap-2 md:items-center md:justify-center tracking-wide md:text-[14px] md:px-3 cursor-pointer text-sm w-36 hover:bg-[#C1A253]/10"
            />


        </div>

        </div>

        </div>



          <div className="bg-[#0E0E0E]">

            <div className='flex flex-col justify-start items-start gap-y-4 pt-20 md:pt-28 md:pb-6 ml-6 md:ml-50'>
              <h5 className='text-[10px] text-[#C1A253] brightness-125 max-w-md text-wrap md:max-w-xl md:text-nowrap tracking-[0.4em]'>FOR INFLUENCERS</h5>
              <h2 className='text-3xl md:text-4xl max-w-80 md:max-w-full font-cormorant tracking-wide'>Your journey on Luminary Pass</h2>
            </div>
            
            
            {/* STEP 1 */}

            <div className='flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-8 pt-22 pb-12 md:pb-10 md:pt-0'>

            <div className='flex md:justify-start justify-center items-end gap-x-8 px-6 py-10 md:gap-x-12 md:py-12'>

      <div>
        <Image
        src={slpashImg}
        alt='image'
        className='rotate-353 rounded-4xl w-36 md:w-52 border-[#C1A253]/30 border'
        />

        </div>


        <div>

        <Image
        src={accountImg}
        alt='accountImage'
        className='rotate-3 rounded-4xl w-36 md:w-52 border-[#C1A253] border relative z-10'
        />

      </div>

            </div>



            <div className='md:w-1/3 flex flex-col items-start px-6 gap-y-4 md:pb-5'>

      <div className="flex items-center gap-3 relative">

                  <div className="relative z-10 w-10 h-10 shrink-0 rounded-full border border-[#C1A253]/50 flex items-center justify-center text-sm font-cormorant text-[#C1A253]/80 bg-[#080808]/10">
                    1
                      </div>

                      <p className="text-[10px] text-[#C1A253] brightness-125 max-w-md text-wrap md:max-w-xl md:text-nowrap tracking-[0.3em]">
                        STEP 1
                      </p>

                  </div>
    <h2 className='text-2xl md:text-3xl font-cormorant tracking-wide'>Create your account</h2>

    <p className='text-[#AFAFAF] text-sm leading-relaxed mb-2'>Download the app, sign up with your email, and connect your Instagram account. We use Instagram OAuth to verify your identity and pull your follower count, post count, and engagement data. No manual entry needed.</p>

    <div className='border border-[#C1A253]/30 bg-[#C1A253]/5 rounded h-15 w-86 md:w-110 flex items-center '>
    <p className='text-[12px] text-[#C1A253] p-4'>⚠ Only Creator or Business Instagram accounts are accepted. Personal accounts cannot be verified.</p>
    </div>

    </div>

            </div>


            {/* STEP 2 */}

            <div className='flex flex-col md:flex-row-reverse md:justify-center md:items-center md:gap-x-8 pb-12 md:pb-10 md:pt-0'>

            <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-12 md:py-12'>

      <div>
        <Image
        src={shareStats}
        alt='image'
        className='rotate-353 rounded-4xl w-36 md:w-52 border-[#C1A253]/30 border'
        />

        </div>


        <div>

        <Image
        src={uploadInsights}
        alt='accountImage'
        className='rotate-3 rounded-4xl w-36 md:w-52 border-[#C1A253] border'
        />

      </div>

            </div>



            <div className='md:w-1/3 flex flex-col items-start px-6 gap-y-4 md:pb-5'>

     <div className="flex items-center gap-3 relative">

                  <div className="relative z-10 w-10 h-10 shrink-0 rounded-full border border-[#C1A253]/50 flex items-center justify-center text-sm font-cormorant text-[#C1A253]/80 bg-[#080808]/10">
                    2
                      </div>

                      <p className="text-[10px] text-[#C1A253] brightness-125 max-w-md text-wrap md:max-w-xl md:text-nowrap tracking-[0.3em]">
                        STEP 2
                      </p>

                  </div>
    <h2 className='text-2xl md:text-3xl font-cormorant tracking-wide'>Verify your reach</h2>

    <p className='text-[#AFAFAF] text-sm leading-relaxed mb-2'>We auto-fetch your basic Instagram stats. You also need to upload a screenshot of your Instagram Professional Dashboard showing your last 30 days of reach and views. Your username must be visible. This lets our team verify your actual performance.</p>

    </div>

            </div>



            {/* STEP 3 */}

            <div className='flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-8 pb-12 md:pb-10 md:pt-0'>

            <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-12 md:py-12'>

      <div>
        <Image
        src={yourProfile}
        alt='image'
        className='rotate-353 rounded-4xl w-36 md:w-52 border-[#C1A253]/30 border'
        />

        </div>


        <div>

        <Image
        src={profileMain}
        alt='accountImage'
        className='rotate-3 rounded-4xl w-36 md:w-52 border-[#C1A253] border'
        />

      </div>

            </div>



            <div className='md:w-1/3 flex flex-col items-start px-6 gap-y-4 md:pb-5'>

      <div className="flex items-center gap-3 relative">

                  <div className="relative z-10 w-10 h-10 shrink-0 rounded-full border border-[#C1A253]/50 flex items-center justify-center text-sm font-cormorant text-[#C1A253]/80 bg-[#080808]/10">
                    3
                      </div>

                      <p className="text-[10px] text-[#C1A253] brightness-125 max-w-md text-wrap md:max-w-xl md:text-nowrap tracking-[0.3em]">
                        STEP 3
                      </p>

                  </div>
    <h2 className='text-2xl md:text-3xl font-cormorant tracking-wide'>Build your public profile</h2>

    <p className='text-[#AFAFAF] text-sm leading-relaxed mb-2'>Set your bio, select your content categories (Food, Nightlife, Fitness, Spa, Luxury, Travel, Lifestyle), and confirm your location. Your profile is public — businesses see it when you apply for events. It shows your follower count, rating, badge tier, and portfolio of past events.</p>

    </div>

            </div>



            {/* STEP 4 */}

            <div className='flex flex-col md:flex-row-reverse md:justify-center md:items-center md:gap-x-8 pb-12 md:pb-10 md:pt-0'>

            <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-12 md:py-12'>

      <div>
        <Image
        src={homeImg}
        alt='image'
        className='rotate-353 rounded-4xl w-36 md:w-52 border-[#C1A253]/30 border'
        />

        </div>


        <div>

        <Image
        src={trendImg}
        alt='accountImage'
        className='rotate-3 rounded-4xl w-36 md:w-52 border-[#C1A253] border'
        />

      </div>

            </div>



            <div className='md:w-1/3 flex flex-col items-start px-6 gap-y-4 md:pb-5'>

      <div className="flex items-center gap-3 relative">

                  <div className="relative z-10 w-10 h-10 shrink-0 rounded-full border border-[#C1A253]/50 flex items-center justify-center text-sm font-cormorant text-[#C1A253]/80 bg-[#080808]/10">
                    4
                      </div>

                      <p className="text-[10px] text-[#C1A253] brightness-125 max-w-md text-wrap md:max-w-xl md:text-nowrap tracking-[0.3em]">
                        STEP 4
                      </p>

                  </div>
    <h2 className='text-2xl md:text-3xl font-cormorant tracking-wide'>Browse exclusive events</h2>

    <p className='text-[#AFAFAF] text-sm leading-relaxed mb-2'>Your home feed shows events filtered by your location and categories. Each event card shows the venue, the offer, how many spots are left, and who's already attending. Tap any event to see the full detail — including exactly what tasks you'll be expected to complete.</p>

    </div>

            </div>



            {/* STEP 5 */}

            <div className='flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-8 pb-12 md:pb-10 md:pt-0'>

            <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-12 md:py-12'>

      <div>
        <Image
        src={approvedInvite}
        alt='image'
        className='rotate-353 rounded-4xl w-36 md:w-52 border-[#C1A253]/30 border'
        />

        </div>


        <div>

        <Image
        src={pendingInvite}
        alt='accountImage'
        className='rotate-3 rounded-4xl w-36 md:w-52 border-[#C1A253] border'
        />

      </div>

            </div>



            <div className='md:w-1/3 flex flex-col items-start px-6 gap-y-4 md:pb-5'>

      <div className="flex items-center gap-3 relative">

                  <div className="relative z-10 w-10 h-10 shrink-0 rounded-full border border-[#C1A253]/50 flex items-center justify-center text-sm font-cormorant text-[#C1A253]/80 bg-[#080808]/10">
                    5
                      </div>

                      <p className="text-[10px] text-[#C1A253] brightness-125 max-w-md text-wrap md:max-w-xl md:text-nowrap tracking-[0.3em]">
                        STEP 5
                      </p>

                  </div>
    <h2 className='text-2xl md:text-3xl font-cormorant tracking-wide'>Request your invitation</h2>

    <p className='text-[#AFAFAF] text-sm leading-relaxed mb-2'>Tap "Request Invite" on any event. You can add a message to the business and confirm if you're bringing a guest. The business reviews your profile and either approves or declines. Approved invitations appear in your Invitations tab with a digital pass.</p>

    </div>

            </div>



            {/* STEP 6 */}

            <div className='flex flex-col md:flex-row-reverse md:justify-center md:items-center md:gap-x-8 pb-12'>

            <div className='flex md:justify-start justify-center items-end gap-x-2 px-6 py-10 md:gap-x-12 md:py-12'>

      <div>
        <Image
        src={eventImg}
        alt='image'
        className='rotate-353 rounded-4xl w-36 md:w-52 border-[#C1A253]/30 border'
        />

        </div>


        <div>

        <Image
        src={pastImg}
        alt='accountImage'
        className='rotate-3 rounded-4xl w-36 md:w-52 border-[#C1A253] border'
        />

      </div>

            </div>



            <div className='md:w-1/3 flex flex-col items-start px-6 gap-y-4 md:pb-5'>

      <div className="flex items-center gap-3 relative">

                  <div className="relative z-10 w-10 h-10 shrink-0 rounded-full border border-[#C1A253]/50 flex items-center justify-center text-sm font-cormorant text-[#C1A253]/80 bg-[#080808]/10">
                    6
                      </div>

                      <p className="text-[10px] text-[#C1A253] brightness-125 max-w-md text-wrap md:max-w-xl md:text-nowrap tracking-[0.3em]">
                        STEP 6
                      </p>

                  </div>
    <h2 className='text-2xl md:text-3xl font-cormorant tracking-wide'>Show up. Post. Get rated.</h2>

    <p className='text-[#AFAFAF] text-sm leading-relaxed mb-2'>On the day of the event, open your digital invitation and show the QR code to venue staff. After the event, your task list activates. Complete each task — post stories, create a reel, use the right hashtags — and upload a screenshot as proof. The business reviews and approves each task. Once all tasks are done you receive a rating, which updates your satisfaction score and badge tier.</p>

    </div>

            </div>



          </div>



          {/* SATISFACTION SECTION */}

          <div className="bg-[url('/images/bgImage.jpg')] w-full bg-background pt-20 pb-18 md:pt-28 md:pb-24">

          <div className='flex flex-col justify-center items-center gap-y-3.5 pb-16'>

          <h5 className='text-[10px] text-[#C1A253] brightness-125 max-w-md text-wrap md:max-w-xl md:text-nowrap tracking-[0.4em]'>SATISFACTION SCORE</h5>

          <h2 className='text-3xl md:text-4xl md:max-w-full font-cormorant tracking-wide'>How your score is calculated</h2>

          <p className="text-[#AFAFAF] md:leading-relaxed md:text-center text-center text-[14px]
        md:max-w-140 px-10 ">Your satisfaction score determines your badge tier and visibility to businesses.</p>

          </div>

          
          
          <div className='flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-x-4'>


            {/* BOX 1 */}

            <div className='border border-[#232017] w-86 md:w-40 h-36 md:h-41 rounded-xl bg-[#111111] pt-5'>
            
            <div className="flex flex-col justify-center items-center gap-3 relative">

                  <div className="relative z-10 w-8 h-8 shrink-0 rounded-full border border-[#C1A253]/50 flex items-center justify-center text-sm font-cormorant text-[#C1A253]/80 bg-[#232017]">
                    1
                      </div>

                      <div className='flex flex-col justify-center items-center gap-y-0.5'>

                      <p className="text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap">
                        Each task = 1 point
                      </p>

                      <p className="hidden md:block text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap leading-relaxed">
                        Approved = 1 ·<br/>Rejected = 0
                      </p>

                      <p className="md:hidden block text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap leading-relaxed">
                        Approved = 1 · Rejected = 0
                      </p>

                      <p className="text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap">
                        Pending = excluded
                      </p>

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
            className="hidden md:block text-[#C1A253]/50 relative z-10 bottom-18 left-21">
              <path d="M18 8L22 12L18 16"/><path d="M2 12H22"/>
              </svg>

              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="block md:hidden text-[#C1A253]/50 relative z-10 top-3.5 left-0">
                <path d="M8 18L12 22L16 18"/><path d="M12 2V22"/>
                </svg>

                      </div>

                  </div>
            </div>




            {/* BOX 2 */}

            <div className='border border-[#232017] w-86 md:w-40 h-31 md:h-36 rounded-xl bg-[#111111] pt-5'>
            
            <div className="flex flex-col justify-center items-center gap-3 relative">

                  <div className="relative z-10 w-8 h-8 shrink-0 rounded-full border border-[#C1A253]/50 flex items-center justify-center text-sm font-cormorant text-[#C1A253]/80 bg-[#232017]">
                    2
                      </div>

                      <div className='flex flex-col justify-center items-center gap-y-0.5'>

                      <p className="text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap">
                        Event Score =
                      </p>

                      <p className="hidden md:block text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap leading-relaxed">
                        Approved Tasks ÷<br/>Total Tasks × 100
                      </p>

                      <p className="block md:hidden text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap leading-relaxed">
                        Approved Tasks ÷ Total Tasks × 100
                      </p>

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
            className="hidden md:block text-[#C1A253]/50 relative z-10 bottom-15 left-21">
              <path d="M18 8L22 12L18 16"/><path d="M2 12H22"/>
              </svg>

              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="block md:hidden text-[#C1A253]/50 relative z-10 top-3.5 left-0">
                <path d="M8 18L12 22L16 18"/><path d="M12 2V22"/>
                </svg>

                      </div>

                  </div>
            </div>

            



            {/* BOX 3 */}

            <div className='border border-[#232017] w-86 md:w-40 h-36 md:h-41 rounded-xl bg-[#111111] pt-5'>
            
            <div className="flex flex-col justify-center items-center gap-3 relative">

                  <div className="relative z-10 w-8 h-8 shrink-0 rounded-full border border-[#C1A253]/50 flex items-center justify-center text-sm font-cormorant text-[#C1A253]/80 bg-[#232017]">
                    3
                      </div>

                      <div className='flex flex-col justify-center items-center gap-y-0.5'>

                      <p className="text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap">
                        "Good event" =
                      </p>

                      <p className="text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap">
                        Score ≥ 80% AND
                      </p>

                      <p className="hidden md:block text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap">
                        business rating ≥<br/>4★
                      </p>

                      <p className="block md:hidden text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap">
                        business rating ≥ 4★
                      </p>

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
            className="hidden md:block text-[#C1A253]/50 relative z-10 bottom-17.5 left-21">
              <path d="M18 8L22 12L18 16"/><path d="M2 12H22"/>
              </svg>

              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="block md:hidden text-[#C1A253]/50 relative z-10 top-4 left-0">
                <path d="M8 18L12 22L16 18"/><path d="M12 2V22"/>
                </svg>

                      </div>

                  </div>
            </div>




            {/* BOX 4 */}

            <div className='border border-[#232017] w-86 md:w-40 h-31 md:h-31 rounded-xl bg-[#111111] pt-5'>
            
            <div className="flex flex-col justify-center items-center gap-3 relative">

                  <div className="relative z-10 w-8 h-8 shrink-0 rounded-full border border-[#C1A253]/50 flex items-center justify-center text-sm font-cormorant text-[#C1A253]/80 bg-[#232017]">
                    4
                      </div>

                      <div className='flex flex-col justify-center items-center gap-y-0.5'>

                      <p className="text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap">
                        Rolling 90-day
                      </p>

                      <p className="text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap leading-relaxed">
                        window only
                      </p>

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
            className="hidden md:block text-[#C1A253]/50 relative z-10 bottom-13 left-21">
              <path d="M18 8L22 12L18 16"/><path d="M2 12H22"/>
              </svg>


              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="block md:hidden text-[#C1A253]/50 relative z-10 top-3.5 left-0">
                <path d="M8 18L12 22L16 18"/><path d="M12 2V22"/>
                </svg>

                      </div>

                  </div>
            </div>



            {/* BOX 5 */}

            <div className='border border-[#232017] w-85 md:w-40 h-36 md:h-46 rounded-xl bg-[#111111] pt-5'>
            
            <div className="flex flex-col justify-center items-center gap-3 relative">

                  <div className="relative z-10 w-8 h-8 shrink-0 rounded-full border border-[#C1A253]/50 flex items-center justify-center text-sm font-cormorant text-[#C1A253]/80 bg-[#232017]">
                    5
                      </div>

                      <div className='flex flex-col justify-center items-center gap-y-0.5'>

                      <p className="hidden md:block text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap">
                        Overall Satisfaction<br/>=
                      </p>

                      <p className="md:hidden block text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap">
                        Overall Satisfaction =
                      </p>

                      <p className="hidden md:block text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap leading-relaxed">
                        Total Approved ÷<br/>Total Tasks
                      </p>

                      <p className="md:hidden block text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap leading-relaxed">
                        Total Approved ÷ Total Tasks
                      </p>

                      <p className="text-[12px] text-[#AFAFAF] brightness-110 text-center md:text-nowrap">
                        (last 90 days) × 100
                      </p>

                      </div>

                  </div>
            </div>



          </div>

        </div>





        {/* BADGE SYSTEM */}


        <div className='bg-[0E0E0E]'>
          <div className='flex flex-col justify-center items-center gap-y-4'>

            <h5 className='text-[10px] text-[#C1A253] brightness-125 max-w-md text-wrap md:max-w-xl md:text-nowrap tracking-[0.4em]'>BADGE SYSTEM</h5>

            <h2 className='text-3xl md:text-4xl max-w-80 md:max-w-full font-cormorant tracking-wide'>Earn your tier</h2>
          </div>
        </div>







        
        </>

  )
}

export default page
