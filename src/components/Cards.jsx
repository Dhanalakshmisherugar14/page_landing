import React from 'react'
import { IoFlashOutline, IoShieldOutline, IoEyeOutline } from "react-icons/io5";

function Cards() {
  return (
    <div>
      {/* Cards - Moved below */}
      <div className="max-w-[1440px] mx-auto px-20 pt-16 flex flex-col md:flex-row justify-center gap-3 relative -top-[125px] font-['Plus_Jakarta_Sans']">
        <div className="bg-[#FFC66C] text-black w-[323px] h-[104px] rounded-lg py-3 px-8 flex flex-col gap-3 shadow-sm items-start justify-center">
          <IoFlashOutline className="text-3xl" strokeWidth="60" />
          <span className="font-medium text-[20px] leading-[28px]">Faster verification</span>
        </div>

        <div className="bg-[#D4C3FF] text-black w-[323px] h-[104px] rounded-lg py-3 px-8 flex flex-col gap-3 shadow-sm items-start justify-center">
          <IoShieldOutline className="text-3xl" strokeWidth="60" />
          <span className="font-medium text-[20px] leading-[28px]">Zero compliance backlog</span>
        </div>

        <div className="bg-[#97DDFE] text-black w-[323px] h-[104px] rounded-lg py-3 px-8 flex flex-col gap-3 shadow-sm items-start justify-center">
          <IoEyeOutline className="text-3xl" strokeWidth="60" />
          <span className="font-medium text-[20px] leading-[28px]">100% transparency</span>
        </div>
      </div>
    </div>
  )
}

export default Cards;