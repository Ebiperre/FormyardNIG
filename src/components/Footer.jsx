import React from 'react';
import logo from "../assets/Logo.png";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from 'react-icons/ti';

import { LiaCopyrightSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from '../constants';

function Footer() {
  return (
    /* <footer className="flexCenter bg-black text-white">
          <div className="padding-container max-container flex w-full
          // flex-col gap-14"> */
    // {/* contianer */}
    // <div className="grid grid-cols-2 gap-8 border-b">
    // {/* footer items */}
    // <div className="  flex flex-col justify-between border-r  ">
    //   <div className="flex justify-between text-start w-full  gap-4  py-12">
    //     <ul className="space-y-4">
    //       <li className="font-bold">Shop</li>
    //       <li className="text-[#BCBCBC]">Flooring</li>
    //       <li className="text-[#BCBCBC]">Form Work</li>
    //       <li className="text-[#BCBCBC]">Tool</li>
    //     </ul>
    //     <ul className="space-y-4">
    //       <li className="font-bold">About</li>
    //       <li className="text-[#BCBCBC]">Our Story</li>
    //       <li className="text-[#BCBCBC]">Wholesale</li>
    //     </ul>
    //     <ul className="pr-12 space-y-4">
    //       <li className="font-bold">Help</li>
    //       <li className="text-[#BCBCBC]">Contact US</li>
    //       {/* <li className="text-[#BCBCBC]">Contacts</li> */}
    //       <li className="text-[#BCBCBC]">FAQ</li>
    //     </ul>
    //   </div>

    //   <div className="flex text-[#BCBCBC] space-x-4">
    //     <TiSocialFacebook size={24} />

    //     <TiSocialLinkedin size={24} />

    //     <TiSocialTwitter size={24} />
    //   </div>
    // </div>

    // {/* Newsletter */}

    //   <div className="flex flex-col justify-center  pb-[60px] w-full ">
    //     <h2 className="text-[82px]">Newsletter</h2>
    //     <p className="text-[#BCBCBC] w-4/5 pb-2">
    //       Get the latest about us and sign up to get 10% off today. Never
    //       miss a single promo.
    //     </p>

    //     <div className=''>
    //       <input type="text" placeholder="Enter Your email address" className='bg-inherit   border border-[#BCBCBC] rounded-tl-[29px]  rounded-bl-[29px]  py-4 px-6' />
    //       <button className='bg-[#FD0] text-black rounded-tr-[29px] border border-[#FD0]  rounded-br-[29px] py-4 px-6 '>Shop Now</button>
    //     </div>
    //   </div>
    // </div>

    //     <div className="flex justify-between items-center pb-4">
    //       <div className='flex items-center text-[#BCBCBC]'>
    //         <LiaCopyrightSolid />
    //         <p>
    //           2023 Formyard. All Rights Reserve</p>
    //       </div>

    //       <div className="flex text-[#BCBCBC] space-x-3">
    //         <p>Terms of Service</p>
    //         <p>Privacy Policy</p>
    //       </div>
    //     </div>
    //   </div>
    // </footer    >

    <footer className="flexCenter bg-[#FFDD00]">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col item-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mg-10">
            <img
              src={logo}
              alt="logo"
              width={104} />
          </Link>
        </div>

        <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
          {FOOTER_LINKS.map((colmuns) => (
            <div>
              <p className="bold-18">{colmuns.title}</p>
              <ul className="regular-14 flex flex-col gap-4 text-black">
                {/* {colmuns.links.map((link) => (
                  <Link to={link.href} key={link.key}>
                    {link}</Link>
                ))} */}
                <div className='flex flex-col py-3'>
                  <Link to={colmuns.href} key={colmuns.key}>
                  {colmuns.links.map((link) => (
                    <p>{link}</p>
                  ))}
                  </Link>
                </div>
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-5 ">
            <div>
              <p className='bold-18'>
              {FOOTER_CONTACT_INFO.title}
              </p>
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <Link to="/"
                key={link.key} 
                className="flex gap-4 md:flex-col lg:flex-row pt-3">
                  <p className="whitespace-nowrap">{link.label}</p>
                  <p className="medium-14 whitespace-nowrap text-blue-70">{link.value}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        </div>
    </footer>
  );
}

export default Footer;
