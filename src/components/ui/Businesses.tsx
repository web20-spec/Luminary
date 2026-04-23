"use client";
import { useState } from "react";
import Button from "./Button";
import { FaArrowRightLong } from 'react-icons/fa6'

function Businesses() {
    const [selected, setSelected] = useState("monthly");

  return (
    <>
    
    <div className="bg-[#0E0E0E]">

        <div className="flex flex-col justify-center items-center gap-y-3 pt-16 mb-4 md:mb-10">
            <h5 className='text-[#C1A253] brightness-120 text-[10px] tracking-[0.3em]'>FOR BUSINESSES</h5>
        <h2 className='text-3xl md:text-5xl font-cormorant tracking-wide'>Simple, transparent pricing.</h2>
        </div>


        <div className="flex flex-col items-center text-white p-6 rounded-xl w-full max-w-md mx-auto mb-3">

    <div className="flex justify-center items-center space-x-6 border border-[#C1A253]/20 bg-[#C1A253]/2 py-2 rounded w-72">
        
        <Button
        text="Monthly"
        rounded="rounded-xs"
        height="h-9"
        onClick={() => setSelected("monthly")}
        className={`px-7 text-[14px] transition-all duration-300 cursor-pointer ${
            selected === "monthly"
            ? "bg-[#C1A253] text-black font-[510]"
            : "bg-transparent text-white/60 hover:text-white"
            }`}
        />


        <div className={`flex justify-center items-center px-2 ${
            selected === "annual" ? "bg-[#C1A253] text-black rounded-xs": "bg-transparent text-[#AFAFAF] hover:text-white"
        }`}>
        <Button
        text="Annual"
        height="h-9"
        onClick={() => setSelected("annual")}
        className={`px-2 py-2 text-[14px] transition-all duration-300 cursor-pointer ${
            selected === "annual"
            ?  "text-black font-[510]"
            :  "text-white/60 hover:text-white"
            }`}
        
        />

        <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#C1A253] text-black">Save20%</span>
            </div>
        
    </div>

    </div>


            <div className="flex justify-center items-center mb-10">

                <div className="border border-[#C1A253]/20 bg-[#C1A253]/10 rounded-full py-2.5 md:py-3.5 mx-4 px-4 md:px-7">
                <p className="text-[10px] md:text-[12px] tracking-widest text-[#C1A253] text-center ">✦ 3-MONTH FREE TRIAL FOR ALL NEW VENUES · NO SETUP FEES · CANCEL ANYTIME ✦ </p>
                </div>

            </div>

    
        <div className="flex flex-col md:flex-row items-center gap-y-8 md:justify-center md:items-center md:gap-x-5 pb-24 md:pb-30">

            <div className='bg-[#111111] border border-[#C1A253]/20 h-160 w-88 py-8 px-8 md:px-10 md:h-160 md:w-78 rounded-2xl md:py-8 space-y-4'>

            {
            selected === "monthly" ? (
            <div><h5 className="text-[#C1A253] brightness-110 text-[11px] tracking-[0.2em]">STARTER</h5>
            <p className="text-[#AFAFAF]">PKR <span className="text-5xl text-white font-cormorant">35,000</span> /mo</p></div>
          ) : (
          <div>
            <h5 className="text-[#C1A253] brightness-110 text-[11px] tracking-[0.2em]">STARTER</h5>
            <p className="text-[#AFAFAF]">PKR <span className="text-5xl text-white font-cormorant">28,000</span> /mo</p>
            <p className="line-through text-[12px] text-[#AFAFAF] pt-3">PKR 35,000</p>
            </div>
            
            )
            
            }

            <p className="text-[#AFAFAF] text-[14px]">Perfect for single venues getting started.</p>
            

            <div className="flex flex-col gap-y-3 text-sm text-[#AFAFAF]">

          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Events per month</p><p className="text-sm text-white"> Up to 4</p>
          </div>
          <div className="border-b border-white/5 h-px"></div>

          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Influencer slots</p><p className="text-sm text-white"> 20</p>
          </div>
          <div className="border-b border-white/5 h-px"></div>

          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">QR check-in</p>       
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
                className="text-[#C1A253] mt-1 shrink-0"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
          </div>
          <div className="border-b border-white/5 h-px"></div>

          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Task verification</p>       
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
                className="text-[#C1A253] mt-1 shrink-0"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
          </div>
          <div className="border-b border-white/5 h-px"></div>


          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Analytics</p><p className="text-sm text-white">Basic</p>
          </div>
          <div className="border-b border-white/5 h-px"></div>


          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Support</p><p className="text-sm text-white">Email</p>
          </div>
          <div className="border-b border-white/5 h-px"></div>


          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Badge filtering</p><p className="text-sm text-[#AFAFAF]">—</p>
          </div>
          <div className="border-b border-white/5 h-px"></div>


          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Dedicated manager</p><p className="text-sm text-white">—</p>
          </div>
          <div className="border-b border-white/5 h-px"></div>

          
          <Button
          text="Get Started"
          icon={
    <FaArrowRightLong className="text-[#C1A253] w-4 h-3" />
}
          textColor="text-[#C1A253]"
          bgColor="bg-transparent"
          className="flex justify-center items-center gap-x-1 border border-[#C1A253] hover:bg-[#C1A253]/10 cursor-pointer mt-4 text-[16px] font-black tracking-wide"
          />
          

          </div>

            </div>

            <div className='bg-[#111111] border-2 border-[#C1A253] h-170 w-88 py-8 px-8 md:px-10 md:h-165 md:w-79 rounded-2xl md:py-8 space-y-4'>

              <div className="relative">
                <Button
                text="MOST POPULAR"
                bgColor="bg-[#C1A253]"
                rounded="rounded-xl"
                height="h-6"
                width="w-34"
                className="text-[10px] text-center font-black text-nowrap tracking-[0.2em] leading-relaxed items-center absolute -top-11.5 left-19 md:left-13.5"
                />
              </div>

              {
              selected === "monthly" ? (
                <div><h5 className="text-[#C1A253] brightness-110 text-[11px] tracking-[0.2em]">GROWTH</h5>
            <p className="text-[#AFAFAF]">PKR <span className="text-5xl text-white font-cormorant">60,000</span> /mo</p></div>
              ) : (
                <div>
                <h5 className="text-[#C1A253] brightness-110 text-[11px] tracking-[0.2em]">GROWTH</h5>
            <p className="text-[#AFAFAF]">PKR <span className="text-5xl text-white font-cormorant">48,000</span> /mo</p>
            <p className="line-through text-[12px] text-[#AFAFAF] pt-3">PKR 60,000</p>
            </div>
              )
              }

            

            <p className="text-[#AFAFAF] text-[14px]">For venues running regular influencer campaigns.</p>
            

            <div className="flex flex-col gap-y-3 text-sm text-[#AFAFAF]">

          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Events per month</p><p className="text-sm text-white"> Up to 10</p>
          </div>
          <div className="border-b border-white/5 h-px"></div>

          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Influencer slots</p><p className="text-sm text-white"> 60</p>
          </div>
          <div className="border-b border-white/5 h-px"></div>

          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">QR check-in</p>       
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
                className="text-[#C1A253] mt-1 shrink-0"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
          </div>
          <div className="border-b border-white/5 h-px"></div>

          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Task verification</p>       
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
                className="text-[#C1A253] mt-1 shrink-0"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
          </div>
          <div className="border-b border-white/5 h-px"></div>


          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Analytics</p><p className="text-sm text-white">Advanced</p>
          </div>
          <div className="border-b border-white/5 h-px"></div>


          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Support</p><p className="text-sm text-white">Priority</p>
          </div>
          <div className="border-b border-white/5 h-px"></div>


          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Badge filtering</p>
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
                className="text-[#C1A253] mt-1 shrink-0"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
          </div>
          <div className="border-b border-white/5 h-px"></div>


          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Dedicated manager</p><p className="text-sm text-[#AFAFAF]">—</p>
          </div>
          <div className="border-b border-white/5 h-px"></div>

          
          <Button
          text="Get Started"
          icon={
    <FaArrowRightLong className="text-black w-4 h-3" />
  }
          bgColor="bg-[#C1A253]"
          className="flex justify-center items-center gap-x-1 border border-[#C1A253] hover:brightness-200 cursor-pointer mt-4 text-[16px] font-black tracking-wide"
          />
          

          </div>

            </div>


            <div className='bg-[#111111] border border-[#C1A253]/20 h-166 w-88 py-8 px-8 md:px-10 md:h-160 md:w-78 rounded-2xl md:py-8 space-y-4'>

            {
              selected === "monthly" ? (
                <div>
                  <h5 className="text-[#C1A253] brightness-110 text-[11px] tracking-[0.2em]">ENTERPRISE</h5>
            <p className="text-[#AFAFAF]">PKR <span className="text-5xl text-white font-cormorant">95,000</span> /mo</p>
            </div>
              ) : (
                <div>
                  <h5 className="text-[#C1A253] brightness-110 text-[11px] tracking-[0.2em]">ENTERPRISE</h5>
            <p className="text-[#AFAFAF]">PKR <span className="text-5xl text-white font-cormorant">76,000</span> /mo</p>
            <p className="line-through text-[12px] text-[#AFAFAF] pt-3">PKR 95,000</p>
                </div>
              )
            }


            <p className="text-[#AFAFAF] text-[14px]">For multi-venue groups and enterprise brands.</p>
            

            <div className="flex flex-col gap-y-3 text-sm text-[#AFAFAF]">

          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Events per month</p><p className="text-sm text-white"> Unlimited</p>
          </div>
          <div className="border-b border-white/5 h-px"></div>

          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Influencer slots</p><p className="text-sm text-white"> Unlimited</p>
          </div>
          <div className="border-b border-white/5 h-px"></div>

          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">QR check-in</p>       
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
                className="text-[#C1A253] mt-1 shrink-0"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
          </div>
          <div className="border-b border-white/5 h-px"></div>

          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Task verification</p>       
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
                className="text-[#C1A253] mt-1 shrink-0"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
          </div>
          <div className="border-b border-white/5 h-px"></div>


          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Analytics</p><p className="text-sm text-white">Full + Export</p>
          </div>
          <div className="border-b border-white/5 h-px"></div>


          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Support</p><p className="text-sm text-white">24/7 Dedicated</p>
          </div>
          <div className="border-b border-white/5 h-px"></div>


          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Badge filtering</p>
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
                className="text-[#C1A253] mt-1 shrink-0"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
          </div>
          <div className="border-b border-white/5 h-px"></div>


          <div className="flex justify-between items-center">
          <p className="flex items-center gap-x-3 ">Dedicated manager</p>
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
                className="text-[#C1A253] mt-1 shrink-0"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
          </div>
          <div className="border-b border-white/5 h-px"></div>

          
          <Button
          text="Contact Us"
          icon={
    <FaArrowRightLong className="text-[#C1A253] w-4 h-3" />
  }       
          textColor="text-[#C1A253]"
          bgColor="bg-transparent"
          className="flex justify-center items-center gap-x-1 border border-[#C1A253] hover:bg-[#C1A253]/10 cursor-pointer mt-4 text-[16px] font-black tracking-wide"
          />
          

          </div>

            </div>

        </div>

    </div>
    </>
  )
}

export default Businesses
