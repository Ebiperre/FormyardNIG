import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { PiEnvelope } from 'react-icons/pi';
import { MdPhoneIphone } from 'react-icons/md';
import { NAV_LINKS } from '../constants';

const Navigation = () => {
  return (
    <nav className="bg-[#FFDD00] flexBetween flexCenter max-container padding-container relative z-30 py-5">
      {/* <div className=" mx-auto  px-28 w-full container  flex justify-between items-center h-[66px] "> */}
        {/* <div className="flex  items-center w-full gap-4"> */}
        <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) =>(
            <Link href={link.href} key={link.key}
            className="font-bold flexCenter cursor-pointer pb-1.5 transition-all">{link.label}</Link>
          ))}
        </ul>
        {/* </div> */}
        <div className="gap-7 lg:gap-12 flexCenter">
          <div className="flexCenter gap-1">
            <MdPhoneIphone size={24} />
            <h2 className="font-normal regular-12 lg:regular-16">+1-541-754-3010</h2>
          </div>

          <div className="flexCenter gap-1">
            <PiEnvelope size={24} />
            <h2 className="font-normal regular-12 lg:regular-16">info@gmail.com</h2>
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
};

export default Navigation;
