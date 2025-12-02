import React from "react";
import Container from "../assets/Container.png";
import { IoShieldOutline } from "react-icons/io5";

function Herosection() {
  return (
    <div className="bg-black text-white pt-40 pb-32 px-6 md:px-20 font-['Plus_Jakarta_Sans']">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

        {/* LEFT SECTION */}
        <div className="flex-1 space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E8F1FF] rounded-full px-4 py-1.5">
            <IoShieldOutline className="text-[#1447E6] text-sm" />
            <span className="text-sm font-medium text-[#1447E6]">LP Onboarding</span>
          </div>

          {/* Heading - fixed alignment, weight, line height */}
          <h1 className="text-[44px] md:text-[56px] lg:text-[60px] font-normal leading-[1.15] lg:leading-[60px] w-full lg:w-[700px] lg:h-[240px] lg:flex lg:items-center tracking-normal opacity-100 rotate-0">
            Accelerate investor onboarding while maintaining end-to-end compliance.
          </h1>

          {/* Subheading - matching screenshot */}
          <p className="text-[#97DDFE] text-[20px] md:text-[22px] lg:text-[30px] leading-[32px] lg:leading-[36px] font-normal w-full lg:w-[700px] lg:h-[72px] lg:flex lg:items-center tracking-normal opacity-100 rotate-0">
            Digitise profile verification, compliance checks and onboarding in one seamless flow.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-1 relative flex justify-center lg:justify-end">
          <div className="absolute w-[80%] h-[80%] bg-[#2F76FF]/20 blur-[120px] rounded-full -z-10 top-1/2 -translate-y-1/2"></div>

          <img
            src={Container}
            alt="Dashboard"
            className="w-full lg:w-[640px] h-auto object-contain"
          />
        </div>

      </div>

      
    </div>
  );
}

export default Herosection;
