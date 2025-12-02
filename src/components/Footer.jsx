import React from 'react'
import { IoLogoApple, IoLogoGooglePlaystore, IoLogoYoutube } from "react-icons/io5";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-white text-black font-['Plus Jakarta Sans'] pt-10 pb-10 px-6 md:px-16 lg:px-40">
      {/* Download App Section */}
      <div className="text-center mb-12">
        <p className="text-[#6C5DD3] font-bold mb-2 uppercase gap-5">DOWNLOAD OUR MOBILE APP</p>
        <h2 className="text-[32px] md:text-[40px] font-normal mb-4 ">
          Download our app and start to get started today!
        </h2>
        <p className="text-[#64607D] text-xl font-medium text-center font-['Plus Jakarta Sans'] mb-8">
          Software suite for venture capital and private equity funds.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#6C5DD3] text-white w-[145px] h-[46px] px-[20px] py-[8px] flex items-center justify-center gap-[8px] hover:bg-[#5b4ec2] transition-colors cursor-pointer ">
            <IoLogoApple className="text-[20px]" />
            <span className="font-['Plus_Jakarta_Sans'] font-normal text-[16px] leading-[24px]">App Store</span>
          </button>
          <button className="bg-[#0B0F19] text-white w-[145px] h-[46px] px-[20px] py-[8px] flex items-center justify-center gap-[8px] hover:bg-gray-800 transition-colors cursor-pointer ">
            <IoLogoGooglePlaystore className="text-[20px]" />
            <span className="font-['Plus_Jakarta_Sans'] font-normal text-[16px] leading-[24px]">Play Store</span>
          </button>
        </div>
      </div>

      <hr className="border-[#CCCCCC] mb-20" />

<div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between gap-20 font-['Plus_Jakarta_Sans']">

  {/* Left Section - Taghash */}
  <div className="w-full lg:w-1/2 space-y-6">
    <h3 className="text-2xl font-bold"># taghash</h3>

    <p className="text-[#596780] text-[16px] leading-[24px]">
      Software suite for venture capital and private equity funds.
    </p>

    <div className="text-[#596780] text-[16px] leading-[24px] space-y-1 mt-12">
      <p>Epicurean Technologies Pvt Ltd,</p>
      <p>1/145, Moodahadu Village, Post Yedabettu,</p>
      <p>via Sastana, Udupi, Karnataka, IN - 576226</p>
    </div>
  </div>

  {/* Right Columns Wrapper */}
  <div className="flex w-[598px] h-[372px] gap-[40px]">

    {/* Products Column */}
    <div>
      <h4 className="text-[18px] font-bold mb-6">Products</h4>
      <ul className="space-y-1 text-black-600 text-[16px] leading-[24px] gap-2">
        <li>Dealflow Management</li>
        <li>Portfolio Management</li>
        <li>LP Dashboard</li>
        <li>LP Management</li>
        <li>LP Outreach Management</li>
        <li>Fund Management</li>
        <li>Fund of Funds</li>
        <li>ESG Module</li>
        <li>Taghash MCP Server</li>
        <li>Get SEBI-Accredited Investor Status</li>
      </ul>
    </div>

    {/* Legal & Reports */}
    <div className="flex flex-col gap-8">

      {/* Legal */}
      <div>
        <h4 className="text-[18px] font-bold mb-4">Legal</h4>
        <ul className="space-y-1 text-black-600 text-[14px] leading-[21px]">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Security Policy</li>
        </ul>
      </div>

      {/* Reports */}
      <div>
        <h4 className="text-[18px] font-bold mb-4">Reports</h4>
        <ul className="space-y-1 text-black-600 text-[14px] leading-[21px]">
          <li>Indian VC Survey 2025</li>
          <li>A Practical Guide to SEBI’s CSCRF Compliance for AIF CAT I and CAT II Funds</li>
        </ul>
      </div>

    </div>
  </div>

</div>

<hr className="border-[#CCCCCC] mt-12" />


      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-5">
        <div className="flex gap-4">
          <a href="#" className="bg-[#121822] text-white h-9 w-9 flex items-center justify-center rounded-full">
            <FaXTwitter className="text-sm w-6 h-6" />
          </a>
          <a href="#" className="bg-[#121822] text-white h-9 w-9 flex items-center justify-center rounded-full">
            <FaLinkedinIn className="text-sm  w-6 h-6" />
          </a>
          <a href="#" className="bg-[#121822] text-white h-9 w-9 flex items-center justify-center rounded-full">
            <IoLogoYoutube className="text-sm   w-4 h-4" />
          </a>
        </div>
        <div className="text-[#596780] text-sm text-right">
          @ Taghash 2023
        </div>
      </div>
    </footer>
  )
}

export default Footer
