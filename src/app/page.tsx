'use client'

import Button from "../components/ui/Button";
import Link from "next/link";
import Counter from "../components/ui/Counter";
import Onboarding from "../components/ui/Onboarding";
import Image from "next/image";
import homeImg from '@/public/images/imgi_2_home-feed.jpeg'
import Verification from "../components/ui/Verification";
import Profile from "../components/ui/Profile";
import Discover from "../components/ui/Discover";
import CheckIn from "../components/ui/CheckIn";
import Task from "../components/ui/Task";
import BadgeSystem from "../components/ui/BadgeSystem";
import Venue from "../components/ui/Venue";
import Businesses from "../components/ui/Businesses";
import { useState } from "react";


export default function Home() {
  const [selected, setSelected] = useState("influencers")
  const steps = [
  "Apply & connect your Instagram",
  "Get approved by our team in 48 hours",
  "Browse curated events and request invitations",
  "Attend and scan your QR code at the venue",
  "Complete tasks and upload screenshot proof",
  "Earn ratings, badges, and your next invitation",
];

const steps2 = [
  "Register your venue on Luminary Pass",
  "Create an event with tasks and requirements",
  "Review influencer applications and approve",
  "Track attendance via QR check-in",
  "Verify content delivery with screenshot proof",
  "Rate your influencers and build your network"
]
  return (
    <div className="bg-[url('/images/bgImage.jpg')] w-full bg-fixed">
      <div className="flex flex-col gap-y-5">
        <p className="md:text-[10px] text-[10px] text-[#BB9D50] md:tracking-[0.4em] tracking-[0.2em] md:text-center text-center pt-30 md:pt-30">✦ PAKISTAN'S ELITE INFLUENCER NETWORK ✦</p>

        <h1 className="md:text-center md:text-7xl tracking-wide text-center text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>Exclusive Access.<br/>Verified Results.</h1>

        <div className="p-2">
        <p className="text-gray-400 md:text-lg md:leading-relaxed md:text-center text-center text-md p-2 ">Pakistan's first invite-only influencer platform connecting<br/> verified content creators with the country's top restaurants,<br/> hotels, and lifestyle brands.</p>
        </div>

        <div className="md:flex-row md:justify-center md:items-center md:gap-x-4 md:pt-3 flex flex-col justify-center items-center gap-y-2">

          <Button
          text="Apply as Influencer"
          height="md:h-14"
          rounded="rounded-xs"
          bgColor="bg-[#AD9146]"
          className="font-bold md:inline-flex md:gap-2 md:items-center md:justify-center tracking-wide md:text-[16px] md:px-5 cursor-pointer h-12 text-sm w-60 md:w-50 hover:bg-[#E5CFA4]"
          />

          <Button
          text="Partner Your Venue"
          height="md:h-14"
          rounded="rounded-xs"
          textColor="text-[#AD9146]"
          className="border-[#AD9146] border font-bold md:inline-flex md:gap-2 md:items-center md:justify-center tracking-wide md:text-[16px] text-sm md:px-5 cursor-pointer h-12 w-60 md:w-50 hover:bg-[#C1A253]/10"
          />


        </div>

        <p className="text-gray-400 md:text-center md:text-xs tracking-wider text-center text-xs px-4">Currently in beta · 200+ creators · 40+ venues</p>


          {/* <p className="text-[#D4B25B] text-center text-[10px] tracking-[0.2em]">SCROLL</p> */}

        {/* <div className="relative h-8 flex items-center justify-center">
  <div className="w-px h-10 bg-[#D4B25B]/50 animate-vline"></div>

  <p className="text-[#D4B25B] text-center text-[10px] tracking-[0.2em] absolute bottom-0">SCROLL</p>
</div> */}

        


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


      <div className="flex flex-col items-center mt-24 px-6 gap-y-0.5 md:flex-row md:justify-center md:gap-x-0.5 md:px-6 md:mt-32">

        <div className="flex flex-col gap-y-4 border border-[#C1A253]/10 bg-[#111111] p-12 text-start md:p-12 hover:shadow-[inset_0_0_8px_#D4B25B]/20 hover:border-[#D4B25B]/25 transition-all duration-300 md:w-158">
          <p className="text-[#C1A253] text-2xl">✦</p>

          <h2 className="font-cormorant text-3xl">Your City. Your Stage. Your Pass.</h2>
          <h5 className="text-[#AFAFAF] text-sm mb-5">Apply for exclusive access to Pakistan's most prestigious venues.</h5>

          <ul className="flex flex-col gap-y-3 text-sm text-[#AFAFAF]">

          <li className="flex items-center gap-x-3"><span className="text-[8px] text-[#C1A253]">✦</span> Access events at top venues — verified by QR</li>
          <div className="border-b border-white/5 h-px"></div>
          <li className="flex items-center gap-x-3"><span className="text-[8px] text-[#C1A253]">✦</span>  Build a public portfolio businesses can see</li>
          <div className="border-b border-white/5 h-px"></div>
          <li className="flex items-center gap-x-3"><span className="text-[8px] text-[#C1A253]">✦</span>  Earn badges through real performance</li>
          <div className="border-b border-white/5 h-px"></div>
          <li className="flex items-center gap-x-3"><span className="text-[8px] text-[#C1A253]">✦</span>  Rise from Rising Star to Elite Influencer</li>
          <div className="border-b border-white/5 h-px"></div>

          </ul>

          <Link className="mt-5 text-[15px] text-[#C1A253] md:mt-8" href="">
          Apply Now <span className="font-bold w-5">➝</span>
          </Link>
        </div>


        <div className="flex flex-col gap-y-4 border border-[#C1A253]/10 bg-[#111111] p-12 text-start md:p-12 hover:shadow-[inset_0_0_8px_#D4B25B]/20 hover:border-[#D4B25B]/25 transition-all duration-300 md:w-158">

          <p className="text-[#C1A253] text-2xl">◈</p>

          <h2 className="font-cormorant text-3xl">Verified Creators. Real Results.</h2>
          <h5 className="text-[#AFAFAF] text-sm mb-5">Connect with Pakistan's most accountable content creators.</h5>

          <ul className="flex flex-col gap-y-3 text-sm text-[#AFAFAF]">

          <li className="flex items-center gap-x-3 "><span className="text-[8px] text-[#C1A253]">✦</span> QR check-in confirms every influencer arrived</li>
          <div className="border-b border-white/5 h-px"></div>
          <li className="flex items-center gap-x-3"><span className="text-[8px] text-[#C1A253]">✦</span>  Screenshot proof verifies every content task</li>
          <div className="border-b border-white/5 h-px"></div>
          <li className="flex items-center gap-x-3"><span className="text-[8px] text-[#C1A253]">✦</span>  Ratings and reviews on every creator</li>
          <div className="border-b border-white/5 h-px"></div>
          <li className="flex items-center gap-x-3"><span className="text-[8px] text-[#C1A253]">✦</span>  Full ROI analytics on your dashboard</li>
          <div className="border-b border-white/5 h-px"></div>

          </ul>

          <Link className="mt-5 text-[15px] text-[#C1A253] md:mt-8" href="">
          Partner With Us <span className="font-bold w-5">➝</span>
          </Link>
        </div>

      </div>


          {/* COUNTER SECTION */}

      <div className="flex md:justify-between justify-evenly gap-x-4 gap-y-10 flex-wrap text-[#C1A253] text-center text-wrap px-6 mt-24 py-20 bg-[#111111] md:mt-24 md:px-24 md:py-28">

      
      <div>
        <h1 className="text-4xl md:text-6xl font-light font-cormorant mb-2">
          <Counter end={200} />+
        </h1>
        <p className="text-[10px] text-[#AFAFAF] tracking-widest">VERIFIED CREATORS</p>
      </div>

      <div className="hidden md:block border-r md:border-[#C1A253]/20"></div>

      <div>
        <h1 className="text-4xl md:text-6xl font-light font-cormorant mb-2">
          <Counter end={40} />+
        </h1>
        <p className="text-[10px] text-[#AFAFAF] tracking-widest">PARTNER VENUES</p>
      </div>


      <div className="hidden md:block border-r md:border-[#C1A253]/20"></div>

      <div>
        <h1 className="text-4xl md:text-6xl font-light font-cormorant mb-2">
          <Counter end={4} />.<Counter end={8} />
          <span className="text-[#C1A253]">★</span>
        </h1>
        <p className="text-[10px] text-[#AFAFAF] tracking-widest text-wrap">AVERAGE CREATOR RATING</p>
      </div>

      <div className="hidden md:block border-r md:border-[#C1A253]/20"></div>

      <div>
        <h1 className="text-4xl md:text-6xl font-light font-cormorant mb-2">
          <Counter end={48} />hr
        </h1>
        <p className="text-[10px] text-[#AFAFAF] tracking-widest">PROFILE REVIEW TIME</p>
      </div>

    </div>




          <div className="flex flex-col overflow-hidden items-center md:flex-row md:justify-center md:items-center md:gap-34 py-16 md:py-0">

            <div className="md:w-1/2 flex flex-col p-6 gap-y-5 md:flex-col md:gap-y-5 md:pl-6 md:my-50">
              <p className="text-[#87713A] brightness-150 text-[10px] tracking-[0.3em]">THE PLATFORM</p>
              <h2 className="text-3xl md:text-5xl font-cormorant">Not just access.<br/>Verified results.</h2>

              <p className="text-[#AFAFAF] text-wrap text-start">Luminary Pass is the only influencer platform in Pakistan that tracks attendance, verifies content delivery, and scores every influencer based on real performance — not follower counts.</p>

              <div className="flex items-start gap-2">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-check text-[#87713A] brightness-125 mt-0.5 shrink-0"
                >
              <path d="M20 6 9 17l-5-5" />
              </svg>
              <li className="list-none text-sm md:text-base text-[#AFAFAF]">QR-verified attendance at every event</li>
              </div>


              <div className="flex items-start gap-2">
                <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-check text-[#87713A] brightness-125 mt-0.5 shrink-0"
                >
              <path d="M20 6 9 17l-5-5" />
              </svg>
              <li className="list-none text-sm md:text-base text-[#AFAFAF]">Screenshot proof required for every task</li>
              </div>

              <div className="flex items-start gap-2">
                <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-check text-[#87713A] brightness-125 mt-0.5 shrink-0"
                >
              <path d="M20 6 9 17l-5-5" />
              </svg>
              <li className="list-none text-sm md:text-base text-[#AFAFAF]">Public ratings and reviews from real businesses</li>
              </div>

              <Link href="" className="text-[15px] text-[#87713A] brightness-150 underline underline-offset-4 hover:brightness-200 tracking-wider mt-3">Learn How It Works <span className="font-bold w-5">➝</span> </Link>

            </div>

            <div className="md:w-1/2 flex justify-center items-center my-12 md:my-14">
            <Image
            src={homeImg}
            alt="homefeed Image"
            className="w-70 md:w-70 float rounded-4xl border-[#C1A253] border"
            />

            </div>
            
          </div>
      




    {/* WORKING SECTION */}

    <div className="bg-linear-to-b from-[#080705] to-black flex flex-col md:flex-col items-center gap-y-3 pt-24 md:pt-30">

      <h5 className="text-[10px] text-[#C1A253] tracking-[0.3em] font-sans">✦ THE APP ✦</h5>
      <h2 className=" text-3xl md:text-5xl font-cormorant leading-relaxed">See how it works</h2>

      <p className="text-[#AFAFAF] text-[14px] md:text-sm text-center max-w-90 md:max-w-105 pb-6">Six core flows — from sign-up to star ratings. Every screen built for Dubai's elite creator economy.</p>

          <div className='border-b h-px w-24 border-[#C1A253]/40 mx-auto'></div>


    </div>

          <Onboarding />

          <Verification />

          <Profile />

          <Discover />

          <CheckIn /> 

          <Task />


          <div className="bg-transparent pt-22 pb-20 md:pt-30 md:pb-25">

            <div className="flex flex-col items-center gap-y-4 md:flex-col md:items-center md:gap-y-4">

            <h5 className="text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]">THE PROCESS</h5>
            <h2 className="text-3xl md:text-5xl font-cormorant tracking-wide">Simple for everyone.</h2>

            <div className="flex gap-x-3 py-6 md:flex-row md:gap-x-3 md:py-8">
            <Button
            onClick={() => setSelected("influencers")}
            text="For Influencers"
            width="w-40"
            height="h-11"
            rounded="rounded"
            className={`text-center text-sm tracking-wide cursor-pointer ${selected === 'influencers' ? "bg-[#C1A253] text-black" : "bg-transparent text-white/60 hover:text-white"}`}
            />

            <Button
            onClick={() => setSelected("businesses")}
            text="For Businesses"
            width="w-40"
            height="h-11"
            rounded="rounded"
            className={`text-center text-sm tracking-wide cursor-pointer ${selected === 'businesses' ? "bg-[#C1A253] text-black" : "bg-transparent text-white/60 hover:text-white"}`}
            />

            </div>

            </div>

          {selected === "influencers" ? (
            <div className="flex md:justify-center md:items-center relative text-white px-6 py-10">

                <div className="absolute left-10 md:left-94 top-10 bottom-10 w-px border-l border-dashed border-[#C1A253]/30"></div>

                <div className="space-y-6 md:-ml-75.5">
                  {steps.map((text, i) => (
                  <div key={i} className="flex items-center gap-6 relative">

                  <div className="relative z-10 w-8 h-8 shrink-0 rounded-full border border-[#C1A253]/50 flex items-center justify-center text-sm font-cormorant text-[#C1A253]/80 bg-[#080808]">
                    {i + 1}
                      </div>

                      <p className="text-sm text-[#AFAFAF] brightness-125 max-w-md text-wrap md:max-w-xl md:text-nowrap">
                        {text}
                      </p>

                  </div>
                  ))}
                  </div>
                  </div>
          ) : (
            <div className="flex md:justify-center md:items-center relative text-white px-6 py-10">

                <div className="absolute left-10 md:left-94 top-10 bottom-10 w-px border-l border-dashed border-[#C1A253]/30"></div>

                <div className="space-y-6 md:-ml-78">
                  {steps2.map((text, i) => (
                  <div key={i} className="flex items-center gap-6 relative">

                  <div className="relative z-10 w-8 h-8 shrink-0 rounded-full border border-[#C1A253]/50 flex items-center justify-center text-sm font-cormorant text-[#C1A253]/80 bg-[#080808]">
                    {i + 1}
                      </div>

                      <p className="text-sm text-[#AFAFAF] brightness-125 max-w-md text-wrap md:max-w-xl md:text-nowrap">
                        {text}
                      </p>

                  </div>
                  ))}
                  </div>
                  </div>
          )}
        

          </div>


          <BadgeSystem />

          <Venue />






          {/* WHAT THEY SAY - SECTION */}




          <div className="bg-[#0E0E0E] py-28">

            <div className="flex flex-col justify-between items-center gap-y-4">

            <h5 className="text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]">WHAT THEY SAY</h5>
            <h2 className="text-3xl md:text-4xl font-cormorant tracking-wide mb-14">Real results. Real voices.</h2>

            </div>

            <div className="flex flex-col md:flex-row items-center gap-y-4 md:justify-center md:items-start md:gap-x-6">

              <div className='bg-[#111111] border border-[#C1A253]/10 w-88 py-8 px-8 h-59 md:w-83 rounded-xl md:py-8 space-y-3 hover:border-[#D4B25B]/25 transition-all'>
                  <p className="text-[#C1A253] tracking-[0.3em] text-sm">★★★★★</p>
                  <p className="text-[#AFAFAF] brightness-125 text-sm tracking-wide md:tracking-wide md:text-base font-cormorant italic leading-6 mb-2 px-1">"The QR check-in system changed how we run influencer events. No more no-shows, no more excuses."</p>

                  <div className="flex items-center space-x-3 text-white py-4 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#C1A253]/20 bg-[#C1A253]/5">
                    <span className="text-[#C1A253] text-lg font-cormorant">M</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[14px] leading-5 font-semibold tracking-wide">Monal</span>
                    <span className="text-xs text-[#AFAFAF]">Partner Venue</span>
                  </div>
                </div>

              </div>


              <div className='bg-[#111111] border border-[#C1A253]/10 w-88 py-8 px-8 h-59 md:w-83 rounded-xl md:py-8 space-y-3 hover:border-[#D4B25B]/25 transition-all'>
                  <p className="text-[#C1A253] tracking-[0.3em] text-sm">★★★★★</p>
                  <p className="text-[#AFAFAF] brightness-125 text-sm tracking-wide md:tracking-wide md:text-base font-cormorant italic leading-6 mb-2 px-1">"Finally a platform that holds creators accountable. The proof screenshot system is exactly what we needed."</p>

                  <div className="flex items-center space-x-3 text-white py-4 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#C1A253]/20 bg-[#C1A253]/5">
                    <span className="text-[#C1A253] text-lg font-cormorant">T</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[14px] leading-5 font-semibold tracking-wide">Tuscany Courtyard</span>
                    <span className="text-xs text-[#AFAFAF]">Partner Venue</span>
                  </div>
                </div>

              </div>


              <div className='bg-[#111111] border border-[#C1A253]/10 w-88 py-8 px-8 h-59 md:w-83 rounded-xl md:py-8 space-y-3 hover:border-[#D4B25B]/25 transition-all'>
                  <p className="text-[#C1A253] tracking-[0.3em] text-sm">★★★★★</p>
                  <p className="text-[#AFAFAF] brightness-125 text-sm tracking-wide md:tracking-wide md:text-base font-cormorant italic leading-6 mb-2 px-1">"We ran our first event through Luminary Pass and the content quality was outstanding. 100% recommend."</p>

                  <div className="flex items-center space-x-3 text-white py-4 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#C1A253]/20 bg-[#C1A253]/5">
                    <span className="text-[#C1A253] text-lg font-cormorant">T</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[14px] leading-5 font-semibold tracking-wide">Xanders</span>
                    <span className="text-xs text-[#AFAFAF]">Partner Venue</span>
                  </div>
                </div>

              </div>

            </div>

          </div>


          <Businesses />


          <div className="bg-[#C1A253] py-18 md:py-20">
            
            <div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-0">
              <h3 className="text-[#080808] text-[30px] md:text-[48px] text-center px-8 font-cormorant">Ready to Join Pakistan's Most Exclusive Network?</h3>
              <p className="text-[#64552D] text-[14px] tracking-wide">Launching Pakistan 2026 · Limited spots available</p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-y-3 md:gap-x-3 mt-10">
                <Button
                text="Apply as Influencer"
                textColor="text-white"
                bgColor="bg-[#0E0E0E]"
                height="h-14"
                width="w-58"
                className="cursor-pointer hover:bg-[#1A1A1A] font-[520]"
                />

                <Button
                text="Partner Your Venue"
                textColor="text-black"
                bgColor="bg-transparent"
                height="h-14"
                width="w-58"
                className="border border-black hover:bg-[#AE924B] cursor-pointer"
                />
              </div>

              <div className="flex justify-center items-center gap-x-3 mt-5 md:mt-10">
                <Button
                text="App Store"
                textColor="text-[#3A321C]"
                bgColor="bg-transparent"
                height="h-[42px]"
                width="md:w-[108px] w-[112px]"
                className="border border-[#3A321C]/40 rounded text-[14px] leading-5 cursor-pointer hover:bg-[#AE924B]"
                />

                <Button
                text="▶ Google Play"
                textColor="text-[#3A321C]"
                bgColor="bg-transparent"
                height="h-[42px]"
                width="w-[130px]"
                className="border border-[#3A321C]/40 rounded text-[14px] leading-5 cursor-pointer hover:bg-[#AE924B]"
                />

              </div>
            </div>
          </div>




    </div>
  );
}
