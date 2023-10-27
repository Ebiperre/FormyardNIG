import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { PiEnvelope } from 'react-icons/pi';
import { MdPhoneIphone } from 'react-icons/md';
import { NAV_LINKS } from '../constants';
import logo from "../assets/Logo.png";
import { AiOutlineMenu } from 'react-icons/ai';

const Navigation = () => {
  return (
    <nav className="bg-[#FFDD00] flexBetween max-container 4xl:max-none padding-container relative z-30 py-0 lg:py-5">

      <ul className='hidden h-full gap-12 lg:flex  '>
        <li>
          <div className='w-[120px]'>
          <img src={logo} alt="logo image" />
          </div>
        </li>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key}
            className="font-bold flexCenter cursor-pointer pb-1.5 transition-all">{link.label}</Link>
        ))}
      </ul>
      
      <div className="gap-7 lg:gap-12 lg:flexEnd flexBetween w-full">
        {/* <div className="flexCenter gap-1">
          <MdPhoneIphone size={24} />
          <h2 className="font-normal regular-12 lg:regular-16">+1-541-754-3010</h2>
        </div> */}
        <div className='w-[120px] lg:hidden flexBetween'>
          <img src={logo} alt="logo image" />
          </div>

          <button className="bg-white text-black rounded-full p-2 flex lg:hidden">
            <AiOutlineMenu size={20} />
          </button>
        <div className="gap-1 lg:flex hidden">
          <PiEnvelope size={24} />
          <h2 className="font-normal regular-12 lg:regular-16">Kevork@formyardnig.com</h2>
        </div>
      </div>

    </nav>
  );
};

export default Navigation;
