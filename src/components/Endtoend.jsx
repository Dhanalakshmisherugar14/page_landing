import React from 'react'
import { IoLogoWhatsapp, IoChatbubbleEllipsesOutline, IoCalendarOutline } from "react-icons/io5";

function Endtoend() {
  return (
    <section className="bg-[#131421] text-white py-24 px-6 md:px-20 lg:px-32 font-['Plus_Jakarta_Sans']">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Container */}
        <div className="bg-[#1A202C] rounded-xl p-10 md:p-14 text-center mb-32 ">
          <h2 className="text-[30px] leading-[36px] font-normal text-[#97DDFE] mb-4">
            Simplify Compliance End-to-End
          </h2>
          <p className="text-gray-400 text-[16px] md:text-[18px] w-full mx-auto leading-relaxed">
            With Taghash's built-in compliance checks, streamline every onboarding stage, speed up LP activation and minimise regulatory hurdles.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Chat With Us */}
          <div className="bg-[#1A202C] rounded-lg shadow-md  p-6 md:p-10 flex-1 flex flex-col items-center text-center ">
            <div className="mb-4">
              <IoLogoWhatsapp className="text-[#FDB84C] text-4xl" />
            </div>
            <h3 className="text-3xl font-bold text-[#FDB84C] mb-8">Chat With Us</h3>
            <button className="w-full bg-[#FDB84C] text-black font-thin py-4 rounded-lg cursor-pointer">
              Chat With Us
            </button>
          </div>

          {/* Card 2: Email Us */}
          <div className="bg-[#1A202C] rounded-lg shadow-md  p-6 md:p-10 flex-1 flex flex-col items-center text-center ">
            <div className="mb-4">
              <IoChatbubbleEllipsesOutline className="text-[#CBBBF5] text-4xl" />
            </div>
            <h3 className="text-3xl font-bold text-[#CBBBF5] mb-8">Email Us</h3>
            <button className="w-full bg-[#CBBBF5] text-black font-thin py-4 rounded-lg cursor-pointer">
              Mail Us
            </button>
          </div>

          {/* Card 3: Book a Demo */}
          <div className="bg-[#1A202C] rounded-lg shadow-md  p-6 md:p-10 flex-1 flex flex-col items-center text-center ">
            <div className="mb-4">
              <IoCalendarOutline className="text-[#97DDFE] text-4xl" />
            </div>
            <h3 className="text-3xl font-bold text-[#97DDFE] mb-8">Book a Demo</h3>
            <button className="w-full bg-[#97DDFE] text-black font-thin py-4 rounded-lg cursor-pointer">
              Book a Demo
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Endtoend
