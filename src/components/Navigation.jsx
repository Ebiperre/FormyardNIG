import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { PiEnvelope } from 'react-icons/pi';
import { MdPhoneIphone } from 'react-icons/md';
import { NAV_LINKS } from '../constants';
import logo from '../assets/Logo.png';
import { AiOutlineMenu } from 'react-icons/ai';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#FFDD00] flexBetween max-container 4xl:max-none padding-container relative z-30 py-0 lg:py-5">
      <ul className="hidden h-full gap-12 lg:flex  ">
        <li>
          <div className="w-[120px]">
            <Link to="/">
            <img src={logo} alt="logo image" />
            </Link>
          </div>
        </li>
        {NAV_LINKS.map((link) => (
          <Link to={link.href} key={link.key}
            className="font-bold flexCenter cursor-pointer pb-1.5 transition-all">{link.label}</Link>
        ))}
      </ul>

      <div className="gap-7 lg:gap-12 lg:flexEnd flexBetween w-full">
        <div className="w-[120px] lg:hidden flexBetween">
        <Link to="/">
            <img src={logo} alt="logo image" />
            </Link>
        </div>

        <div className='relative'>
          <button 
          onClick={()=>setOpen(!open)}
          className="bg-white text-black rounded-full p-2 flex  lg:hidden">
            <AiOutlineMenu size={20} />
          </button>
        </div>

        <div className="gap-1 lg:flex hidden">
          <PiEnvelope size={24} />
          <h2 className="font-normal regular-12 lg:regular-16">
            Kevork@formyardnig.com
          </h2>
        </div>
      </div>
      {/* DROPDOWN MENU */}
      {
        open && (
          <ul className="flex flex-col items-start  h-fit space-y-2 absolute text-left right-2 top-14 bg-white  py-4 px-6 rounded-md lg:hidden ">
          {NAV_LINKS.map((link) => (
            <Link
              to={link.href}
              key={link.key}
              className="font-bold flexCenter cursor-pointer pb-1.5 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        )
      }
    

    </nav>
  );
};

export default Navigation;
