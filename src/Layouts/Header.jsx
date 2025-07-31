import React, { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaHandBackFist } from "react-icons/fa6";
import { FaPeopleCarry } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";


const Header = () => {
  const[open,setOpen]= useState(false);
  const opening=()=>{
    setOpen(!open);
  }
  return (
    <div>
      <div className="main-container-wrapper font-Nunito font-extrabold w-full">
        <div className="main-container w-full h-20 py-1 px-4 flex items-center gap-3 justify-between text-3xl mx-auto ">
          <div className="first-part text-green-500 felx flex-col">
            <p className="sm:text-4xl text-xl">ReGreen Alliance</p>
            <p className="text-xs text-black">
              A step towards green and clean evironment
            </p>
          </div>
          <div className="second-part text-lg md:block hidden">
            <ul className="flex justify-between gap-5 cursor-pointer ">
              <NavLink className={({isActive})=>isActive?'group relative text-green-500':'group relative'} to="/">
                Home
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              <NavLink
                className={({isActive})=>isActive?'group relative text-green-500':'group relative'}
                to="/OurWork"
              >
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                Our Work
              </NavLink>
              <NavLink
                className={({isActive})=>isActive?'group relative text-green-500':'group relative'}
                to="OurPartners"
              >
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                Our Partners
              </NavLink>
              <NavLink
                className={({isActive})=>isActive?'group relative text-green-500':'group relative'}
                to="/ContactUs"
              >
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-green-500 transition-all duration-500 group-hover:w-full"></span>
                Contact us
              </NavLink>

            </ul>
          </div>


          <div className={`second-conditionl md:hidden  block hover:text-slate-900`}>
            <p onClick={opening} className=""><TiThMenu size={30}/></p>
            { <div onClick={opening} className={`conditional-window flex flex-col absolute right-0 top-0 h-full ${open ? 'w-2/3 z-30 opacity-100':'w-0 -z-10 opacity-0'} text-xl backdrop-blur-md bg-slate-100 shadow-xl items-end p-4 rounded-l-lg duration-300`}>
                  <ul className={`${open?'flex justify-between flex-col w-full gap-5 cursor-pointer sm:text-2xl text-xl px-5':' hidden'} `}>
            <p className="w-full flex justify-between text-red-500 items-end"><IoCloseSharp onClick={opening} className="text-red-500" size={20}/>Close</p>
              <NavLink className={({isActive})=>isActive?'group relative text-green-500 flex items-center justify-between gap-2':'group relative flex items-center justify-between gap-2'} to="/">
                <IoMdHome size={20}/>
                Home
              </NavLink>
              <NavLink
                className={({isActive})=>isActive?'group relative text-green-500 flex items-center justify-between gap-2':'group relative flex items-center justify-between gap-2'}
                to="/OurWork"
              >
                <FaHandBackFist size={15}/>
                Our Work
              </NavLink>
              <NavLink
                className={({isActive})=>isActive?'group relative text-green-500 flex items-center justify-between gap-2':'group relative flex items-center justify-between gap-2'}
                to="OurPartners"
              >
                <FaPeopleCarry size={20}/>
                 Partners
              </NavLink>
              <NavLink
                className={({isActive})=>isActive?'group relative text-green-500 flex items-center justify-between gap-2':'group relative flex items-center justify-between gap-2'}
                to="/ContactUs"
              >
                <FaPhoneFlip size={20}/>
                Contact
              </NavLink>

            </ul>
            </div>
}
{open && <div onClick={opening} className="absolute top-0 left-0 bg-slate-400 h-full w-full opacity-35 z-10"></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
