import React from 'react';
import logo from "../../assets/police.png";

const Navbar = () => {
  return (
    <nav className="bg-[#234D92] font-outfit w-[100vw]  ">
      <div className="container w-[80%] mx-auto flex items-center justify-between py-1">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            width={50}
            alt="Sri Lanka Police"
            
          />
          <span className="text-[#fff] font-bold text-lg">SRI LANKA POLICE</span>
        </div>

        {/* Links Section */}
        <div className="space-x-6 text-white text-sm font-semibold">
          <a href="#" className="hover:text-gray-300">HOME</a>
          <a href="#" className="hover:text-gray-300">ABOUT US</a>
          <a href="#" className="hover:text-gray-300">DIVISIONS</a>
          <a href="#" className="hover:text-gray-300">CONTACT US</a>
          
        </div>
        <div>
        <a href="#" className="text-white font-semibold hover:text-gray-300">LOGIN</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
