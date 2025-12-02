import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-black/10 bg-black text-white px-6 md:px-16 lg:px-40 py-4 font-['Plus_Jakarta_Sans']">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer ">
          <img src={Logo} alt="Logo" className="h-8" />
        </div>

        {/* Center Links (Desktop) */}
        <ul className="hidden md:flex space-x-12 text-sm font-normal text-white items-center tracking-wide font-['Plus_Jakarta_Sans']">
          <li className="hover:text-[#97DDFE] cursor-pointer transition-colors">Home</li>
          <li className="hover:text-[#97DDFE] cursor-pointer transition-colors flex items-center gap-1">
            Products
            <IoChevronDown className="text-white text-sm mt-0.5" />
          </li>
          <li className="hover:text-[#97DDFE] cursor-pointer transition-colors">Blog</li>
        </ul>

        {/* Right Side Login (Desktop) */}
        <div className="hidden md:block">
          <button className="bg-[#97DDFE] text-black px-6 py-2 text-sm font-normal hover:bg-[#7acbf0] transition-colors cursor-pointer rounded-none ">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none">
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-gray-800 py-4 px-6 flex flex-col space-y-4 shadow-lg">
          <ul className="flex flex-col space-y-4 text-sm font-normal text-white tracking-wide font-['Plus_Jakarta_Sans']">
            <li className="hover:text-[#97DDFE] cursor-pointer transition-colors">Home</li>
            <li className="hover:text-[#97DDFE] cursor-pointer transition-colors flex items-center justify-between">
              Products
              <IoChevronDown className="text-white text-sm" />
            </li>
            <li className="hover:text-[#97DDFE] cursor-pointer transition-colors">Blog</li>
          </ul>
          <button className="bg-[#97DDFE] text-black px-6 py-2 text-sm font-normal hover:bg-[#7acbf0] transition-colors cursor-pointer rounded-none w-full">
            Login
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar