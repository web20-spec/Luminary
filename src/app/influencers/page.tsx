'use client'

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Button from '@/src/components/ui/Button'
import CheckIn from '@/src/components/ui/CheckIn';
import Discover from '@/src/components/ui/Discover';
import Onboarding from '@/src/components/ui/Onboarding';
import Profile from '@/src/components/ui/Profile';
import Task from '@/src/components/ui/Task';
import Verification from '@/src/components/ui/Verification';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


function Influencerspage() {
    const steps = [
    {
    title: "Connect Your Instagram",
    desc: "Link your Creator or Business Instagram account for verification.",
    },
    {
    title: "Complete Your Profile",
    desc: "Set your niche, location, bio, and content categories.",
    },
    {
    title: "Get Reviewed",
    desc: "Our team manually reviews every application within 48 hours.",
    },
    { 
    title: "Start Exploring",
    desc: "Browse curated events, request invitations, and build your portfolio.",
    },
    {
    title: "Rise Through the Ranks",
    desc: "Complete events, earn ratings, and unlock higher-tier badges.",
    },
];

const badges1 = [
        "5+ events completed",
        "80% satisfaction rate",
        "Within 90 days"
    ]

    const badges2 = [
        "20+ events in 90 days",
        "85% satisfaction rate",
        "4+ star average"
    ]

    const badges3 = [
        "40+ events in 90 days",
        "90% satisfaction rate",
        "4.5+ stars · Zero no-shows"
    ];


const faqs = [
  {
    question: "Who can apply to Luminary Pass?",
    answer: "We accept content creators with active Instagram accounts. You need a Creator or Business account with engaged followers. Quality matters more than quantity."
  },
  {
    question: "How long does the review process take?",
    answer: "Our team reviews every application within 48 hours. You'll receive an email notification once your application has been processed."
  },
  {
    question: "Is Luminary Pass free for influencers?",
    answer: "Yes — Luminary Pass is completely free for influencers. Businesses pay a subscription for access to the platform."
  },
  {
    question: "What kind of events are available?",
    answer: "Events range from restaurant launches and VIP tastings to spa experiences, fitness classes, and nightlife events at top venues."
  },
  {
    question: "How does the badge system work?",
    answer: "Badges are earned through verified performance over 90-day periods. Criteria include events completed, satisfaction ratings, and task completion rates."
  },
  {
    question: "What happens if i miss an event?",
    answer: "No-shows affect your completion rate and rating. Consistently missing events may result in fewer invitations and badge downgrades."
  },
  {
    question: "How are influencer ratings calculated?",
    answer: "After each event, venues rate influencers on punctuality, content quality, and professionalism. These ratings are publicly visible on your profile."
  }
];

 const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index : number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

return (
    <>
    <div className="bg-[url('/images/bgImage.jpg')] w-full bg-fixed">
    
    <div className='flex flex-col gap-y-4 md:gap-y-5 pl-6 md:pl-70 pt-4 pb-18 md:py-24'>

        
        <h5 className='pt-30 md:pt-20 text-[#C1A253] text-[11px] tracking-[0.3em]'>FOR INFLUENCERS</h5>
        <h2 className='hidden md:block text-[60px] font-cormorant leading-none'>Your City. Your Platform.<br/>Your Pass.</h2>
            <h2 className='md:hidden block text-[36px] font-cormorant tracking-wide leading-tight mb-2'>Your City.<br />Your Platform.<br />Your Pass.</h2>
        

            <p className='text-[#AFAFAF] text-[16px] text-wrap max-w-82 md:max-w-130'>Apply to join Pakistan's first verified influencer network. Get exclusive access to top venues — and build a portfolio that businesses trust.</p>

            <Button
            text='Apply Now'
            textColor='text-black'
            bgColor='bg-[#C1A253]'
            width='w-[160px]'
            height='h-14'
            className='font-black text-[16px] cursor-pointer hover:bg-[#E5CFA4] mt-5'
            />
    </div>


    <div className="bg-[#0E0E0E] text-white py-24 px-6">

        <div className='flex flex-col justify-center md:pl-83 mb-16 gap-y-4'>

            <h5 className="text-[#C1A253] text-[11px] tracking-[0.3em]">THE PROCESS</h5>
                <h2 className='text-[36px] font-cormorant leading-none'>How it works</h2>

        </div>


    <div className="max-w-2xl mx-auto relative">

        <div className="absolute left-5 -top-2 h-full border-l border-dashed border-[#C1A253]/40"></div>

        <div className="space-y-12 ml-1">
            {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-6">

            <div className="relative z-10 flex items-center justify-center shrink-0 w-8 h-8 rounded-full border border-[#C1A253]/50 text-[#C1A253]/80 bg-[#080808] text-sm font-cormorant">
                {i + 1}
            </div>

            <div>
                <h3 className="text-[16px] md:text-[18px] font-cormorant font-cormorant tracking-wide text-[#AFAFAF]">
                {step.title}
                </h3>
                <p className="text-sm text-[#AFAFAF] mt-2 leading-relaxed">
                {step.desc}
                </p>
            </div>

            </div>
        ))}
        </div>

    </div>
    </div>


    <div className='py-24 md:py-24'>

    <div className='flex flex-col gap-y-2 md:gap-y-5 pl-6 md:pl-64 md:pt-0 pb-14'>
        <h5 className='text-[#C1A253] text-[11px] tracking-[0.3em]'>BENEFITS</h5>
        <h2 className='text-[36px] font-cormorant leading-none'>What you get</h2>
    </div>


        <div className='flex flex-col justify-center items-center gap-y-6'>

        
    <div className="flex flex-col md:flex-row items-center gap-y-4 md:justify-center md:items-start md:gap-x-6">

        <div className='bg-[#111111] border border-[#C1A253]/10 w-88 py-8 px-8 h-52 md:w-104 md:py-8 hover:border-[#D4B25B]/25 transition-all'>

                <div className='border border-[#232017] h-10 w-10 flex items-center justify-center bg-[#232017] mb-3.5'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-star text-[#C1A253]"
                >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                </path>
                </svg>
                </div>

                <p className="text-[#AFAFAF] brightness-125 text-[16px] tracking-wide md:tracking-wide md:text-[18px] font-cormorant leading-11">Exclusive Events</p>

                <p className='text-[14px] text-[#AFAFAF] tracking-wide max-w-75'>Access to Pakistan's most sought-after venue launches, tastings, and VIP nights.</p>

            </div>


            <div className='bg-[#111111] border border-[#C1A253]/10 w-88 py-8 px-8 h-52 md:w-104 md:py-8 hover:border-[#D4B25B]/25 transition-all'>

                <div className='border border-[#232017] h-10 w-10 flex items-center justify-center bg-[#232017] mb-3.5'>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-award text-[#C1A253]"
                >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                </path>
                <circle cx="12" cy="8" r="6"></circle>
                </svg>
                </div>

                <p className="text-[#AFAFAF] brightness-125 text-[16px] tracking-wide md:tracking-wide md:text-[18px] font-cormorant leading-11">Verified Portfolio</p>

                <p className='text-[14px] text-[#AFAFAF] tracking-wide max-w-75'>Build a track record that venues trust. Every event is logged, verified, and rated.</p>

            </div>


    </div>


    <div className="flex flex-col md:flex-row items-center gap-y-4 md:justify-center md:items-start md:gap-x-6">

        <div className='bg-[#111111] border border-[#C1A253]/10 w-88 py-8 px-8 h-52 md:w-104 md:py-8 hover:border-[#D4B25B]/25 transition-all'>

                <div className='border border-[#232017] h-10 w-10 flex items-center justify-center bg-[#232017] mb-3.5'>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-crown text-[#C1A253]"
                >
                    <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z">
                    </path>
                    <path d="M5 21h14">
                    </path>
                    </svg>
                </div>

                <p className="text-[#AFAFAF] brightness-125 text-[16px] tracking-wide md:tracking-wide md:text-[18px] font-cormorant leading-11">Badge System</p>

                <p className='text-[14px] text-[#AFAFAF] tracking-wide max-w-75'>Rise from Rising Star to Elite Influencer through verified performance.</p>

            </div>



            <div className='bg-[#111111] border border-[#C1A253]/10 w-88 py-8 px-8 h-52 md:w-104 md:py-8 hover:border-[#D4B25B]/25 transition-all'>

                <div className='border border-[#232017] h-10 w-10 flex items-center justify-center bg-[#232017] mb-3.5'>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-check text-[#C1A253]">
                    <path d="M20 6 9 17l-5-5">
                    </path>
                </svg>
                </div>

                <p className="text-[#AFAFAF] brightness-125 text-[16px] tracking-wide md:tracking-wide md:text-[18px] font-cormorant leading-11">Paid Collaborations</p>

                <p className='text-[14px] text-[#AFAFAF] tracking-wide max-w-75'>Top-tier influencers unlock direct paid partnerships with premium venues.</p>

            </div>

    </div>


    </div>

    </div>



    <div className='flex flex-col justify-center items-center gap-y-5 bg-linear-to-b from-[#080705] to-black pt-32'>
        <h5 className='text-[#C1A253] text-[11px] tracking-[0.3em]'>✦ THE APP EXPERIENCE ✦</h5>
        <h2 className='text-[48px] font-cormorant leading-none'>Everything you need. Right in your pocket.</h2>
        <h2 className='md:hidden block text-2xl font-cormorant tracking-wide mb-2'>Everything you need.<br />Right in your pocket.</h2>

        <p className='text-[#AFAFAF] text-[14px] max-w-98 text-center'>From application to check-in to proof upload — your entire Luminary Pass journey happens inside the app.</p>

            <div className='border-b h-px w-24 border-[#C1A253]/40 mx-auto'></div>

    </div>


    <Onboarding />

    <Verification />

    <Profile />

    <Discover />

    <CheckIn />

    <Task />


    <div className='bg-[#0A0A0A] py-30 md:py-30 '>

        <div className='flex flex-col justify-center items-start gap-y-3 mb-10 md:gap-y-3 pl-6 md:pl-60 pt-4'>
            
        <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]'>BADGE SYSTEM</h5>
        <h2 className='text-3xl md:text-5xl font-cormorant tracking-wide'>Earn your reputation.</h2>

        <p className='text-[#AFAFAF] text-xs tracking-wide md:tracking-normal md:text-sm font-cormorant italic leading-relaxed mb-2 text-nowrap'>"Every badge is earned through performance — not follower counts."</p>

        </div>


        <div className='flex flex-col md:flex-row items-center gap-y-4 md:justify-center md:items-start md:gap-x-5'>

        <div className='bg-[#111111] border border-[#C1A253]/10 h-74 w-70 py-8 px-6 rounded-2xl md:py-6.5 hover:border-[#D4B25B]/25 transition-all'>

            <div className='flex flex-col justify-center items-center gap-y-4'>
                <p className='text-3xl'>🔰</p>

                <h5 className='text-[#C1A253] font-cormorant text-xl'>Rising Star</h5>

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


                <p className='text-[#C1A253] text-[11px] text-center tracking-wide pt-4'>Priority visibility</p>

                </div>
            
        </div>

        <div className='bg-[#111111] border border-[#C1A253]/10 h-74 w-70 py-8 px-6 rounded-xl md:py-6.5 hover:border-[#D4B25B]/25 transition-all'>


            <div className='flex flex-col justify-center items-center gap-y-4'>
                <p className='text-3xl'>🥇</p>

                <h5 className='text-[#C1A253] font-cormorant text-xl'>Top Influencer</h5>

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

                <div className="border-b border-white/5 h-px w-full"></div>
            
                </div>
            ))}


                <p className='text-[#C1A253] text-[11px] text-center tracking-wide pt-4 md:px-4'>Featured in search · Faster approvals</p>

                </div>
            
        </div>


        <div className='bg-[#111111]  border border-[#C1A253]/10 h-74 w-70 py-8 px-6 rounded-xl md:py-6.5 hover:border-[#D4B25B]/25 transition-all'>

            <div className='flex flex-col justify-center items-center gap-y-4'>
                <p className='text-3xl'>💎</p>

                <h5 className='text-[#C1A253] font-cormorant text-xl'>Elite Influencer</h5> 

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

                <div className="border-b border-white/5 h-px w-full"></div>
            
                </div>
            ))}


                <p className='text-[#C1A253] text-[11px] text-center tracking-wide pt-4 md:px-4'>Elite events · Direct brand deals</p>

                </div>
            
        </div>

        </div>

    </div>
    






            {/* FAQ SECTION */}




            <div className="py-18">


            <div className="text-white p-6 rounded-xl max-w-2xl mx-auto">

            <h5 className="text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em] mb-5">FAQ</h5>
        <h2 className="text-4xl font-cormorant mb-18 text-center">Frequently asked questions</h2>

        <div className="space-y-5">
        {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/8 pb-5">
            <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none cursor-pointer"
            >
                <span className="font-medium text-[#AFAFAF] brightness-130 text-sm tracking-wide">{faq.question}</span>
                <ChevronDownIcon
                className={`w-3.5 h-3.5 text-[#D4B25B] brightness-130 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 " : "rotate-none"
                }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
            >
                <p className="text-[#aaaaaa] text-sm leading-relaxed tracking-wide">{faq.answer}</p>
            </div>
            </div>
        ))}
        </div>
    </div>

    </div>


    <div className="bg-[#0E0E0E]">

        <div className="flex flex-col justify-center items-center gap-y-1 py-24">
            <h2 className="font-cormorant text-[30px] md:text-[36px]">Apply Now</h2>
            <p className="text-[#AFAFAF] text-[14px] tracking-wide text-center">Applications are reviewed within 48 hours. We curate carefully.</p>

            <Button
            text="Apply Now"
            icon={<FontAwesomeIcon icon={faArrowRight} />}
            textColor="text-black"
            rounded="rounded-none"
            height="h-13"
            width="w-44"
            bgColor="bg-[#C1A253]"
            className="font-black mt-8 text-center tracking-wide hover:bg-[#E5CFA4] cursor-pointer"
            />
        </div>
    </div>





    </div>
    </>
)
}

export default Influencerspage
