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
                className="flex gap-2 md:flex-col lg:flex-row pt-3 items-center">
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
