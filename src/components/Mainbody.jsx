import React from "react";
import { IoFlashOutline, IoShieldOutline, IoEyeOutline } from "react-icons/io5";
import overlay from "../assets/Overlay.png"; 
import Overlay1 from "../assets/Overlay1.png";
import Overlay3 from "../assets/Overlay3.png";
import Overlay4 from "../assets/Overlay4.png";
import Overlay5 from "../assets/Overlay5.png";

function Mainbody() {
  return (
    <section className="bg-[#FAF9F6] px-6 md:px-20 lg:px-32 pt-28 pb-24 font-['Plus_Jakarta_Sans'] -mt-[100px]">

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-center">

        {/* LEFT TEXT */}
        <div className="space-y-6">
          <h2 className="text-[34px] md:text-[40px] font-semibold text-black leading-[1.3]">
            Digitize Investor Onboarding
          </h2>
          <p className="text-[17px] text-gray-700 leading-[28px] max-w-md">
            Smooth form completion, document uploads and real-time progress
            tracking.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={overlay}
            alt="Investor onboarding"
            className="w-full max-w-xl rounded-xl"
          />
        </div>

      </div>

      {/* SECOND SECTION - Automate Compliance Checks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center order-last lg:order-first">
          <img
            src={Overlay1}
            alt="Automate Compliance Checks"
            className="w-full max-w-xl rounded-xl"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-6">
          <h2 className="text-[34px] md:text-[40px] font-semibold text-black leading-[1.3]">
            Automate Compliance Checks
          </h2>
          <p className="text-[17px] text-gray-700 leading-[28px] max-w-md">
            Instant PAN/Aadhaar validation, accreditation confirmation and
            recurring KYC updates.
          </p>
        </div>

      </div>

      {/* THIRD SECTION - Screen AML & Risk Automatically */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-center">
        
        {/* LEFT TEXT */}
        <div className="space-y-6">
          <h2 className="text-[34px] md:text-[40px] font-semibold text-black leading-[1.3] lg:whitespace-nowrap">
            Screen AML & Risk Automatically
          </h2>
          <p className="text-[17px] text-gray-700 leading-[28px] max-w-md">
            Automatic checks against SEBI, FIU-India, UN, OFAC and PEP lists.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={Overlay3}
            alt="Screen AML & Risk Automatically"
            className="w-full max-w-xl rounded-xl"
          />
        </div>

      </div>

      {/* FOURTH SECTION - Secure Documents & Audit Trails */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center order-last lg:order-first">
          <img
            src={Overlay4}
            alt="Secure Documents & Audit Trails"
            className="w-full max-w-xl rounded-xl"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-6">
          <h2 className="text-[34px] md:text-[40px] font-semibold text-black leading-[1.3]">
            Secure Documents & Audit Trails
          </h2>
          <p className="text-[17px] text-gray-700 leading-[28px] max-w-md">
            Centralised vault with controlled access, version tracking and full audit logs.
          </p>
        </div>

      </div>

      {/* FIFTH SECTION - Reuse LP Identity Across Funds */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-center">
        
        {/* LEFT TEXT */}
        <div className="space-y-6">
          <h2 className="text-[34px] md:text-[40px] font-semibold text-black leading-[1.3]">
            Reuse LP Identity Across Funds
          </h2>
          <p className="text-[17px] text-gray-700 leading-[28px] max-w-md">
            Reuse verified LP profiles across multiple funds without repeated data entry.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={Overlay5}
            alt="Reuse LP Identity Across Funds"
            className="w-full max-w-xl rounded-xl"
          />
        </div>

      </div>
    </section>







    
  );
}

export default Mainbody;
