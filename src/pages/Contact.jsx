import React from 'react';
import contact from '../assets/contact.png';
import logo from '../assets/Logo.png';
import map from '../assets/map.png';
import { Outlet, Link } from 'react-router-dom';

import { AiOutlineMenu } from 'react-icons/ai';


function Contact() {
  return (
    <div>
    <header
      style={{ backgroundImage: `url(${contact})` }}
      className="relative max-container padding-container flex flex-col gap-20 py-2 pb-32 md:gap-28 lg:pb-20 lg:pt-2 xl:flex-row bg-cover"
    >
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <div className=" w-full flexBetween pt-2">
          <div className="w-24">
            <Link to={`/`} className="font-bold">
              <img src={logo} />
            </Link>
          </div>
          <button className="bg-white text-black rounded-full p-2">
            <AiOutlineMenu size={20} />
          </button>
        </div>

        {/* CTA */}
        <div className="relative flexCenter flex-1  flex-col py-16 lg:py-44 gap-3 lg:gap-6">
          <h1 className=" bold-52 lg:bold-88 text-white">
            Get in touch with us for more information
          </h1>
          <p className="text-white regular-14 lg:regular-20  ">
            If you need help or question, we’re here for you
          </p>
        </div>
      </div>
    </header>
    {/* conatct form */}
    <section className='relative padding-container max-container flex flex-col py-16 lg:py-44 gap-3 lg:gap-6'>
      <div className='flex flex-col lg:flex-row gap-3'>
        <div>
          <h2 className='text-[#FD0] text-5xl font-bold space-y-4 '>Contact us Today</h2>
          <p className='lg:w-[698.059px] text-black/50'  >Our team is available to assist you during our business hours. We will do our best to respond to your inquiry as quickly as possible.</p>
        </div>
        <div className='flex flex-col gap-5 mt-0 lg:-mt-[105px]'>
          {/* card items */}
          <div className='shadow p-8 rounded-xl  flex-col flexCenter'>
            <h2 className='text-[#FD0] text-xl font-bold w-[182.216px]'>Get directions to our office</h2>
            <p className='w-[209.544px] regular-18 pl-[14px]'>20 Igbodo Street Old GRA Port Harcourt.</p>
          </div>
          <div className='shadow p-8 rounded-xl flex-col flexCenter'>
            <h2 className='text-[#FD0] text-xl font-bold'>Contact our support team</h2>
            <p className="regular-18">+2348037079584</p>
          </div>
          <div className='shadow p-8 rounded-xl flex-col flexCenter'>
            <h2 className='text-[#FD0] text-xl font-bold'>Send us an email</h2>
            <p className="regular-18">info@crewtechng.com.</p>
          </div>
        </div>
      </div>
    </section>
    <section className='bg-white padding-container max-container pb-20'>
      <div className='flexCenter flex-col-reverse lg:flex-row gap-6  '>
        {/* map */}
        <div className=''>
          <img src={map} alt="map"  className='w-[479px] ' />
        </div>
        {/* contact form */}
        <div className='flex flex-col lg:w-[397px] gap-[29px] justify-center '>
          <h2 className='bold-32'>Contact Form</h2>

          <form className='flex flex-col space-y-4 mt-4'>
            <label htmlFor="" className='flex flex-col space-y-3'>
              <span className='regular-16'>Full Name</span>
              <input type="text" placeholder='john Doe'
              className='py-4 px-6 border border-[#939294] rounded-md' />
            </label>
            <label htmlFor="" className='flex flex-col space-y-3'>
              <span className='regular-16'>Email Address</span>
              <input type="text" placeholder='john Doe' 
                  className='py-4 px-6 border border-[#939294] rounded-md' />
            </label>
            <label htmlFor="" className='flex flex-col space-y-3'>
              <span className='regular-16'>Message</span>
              <textarea name="" id="" cols="30" rows="5" className='border rounded-md border-[#939294] p-4 text-[#878787]'>Enter Your Message</textarea>
            </label>
            <div className='pt-4'>
            <button className= 'bg-[#FD0]  w-full py-4 px-6 rounded-md font-bold text-white'>Submit</button>
            <p className='text-center mt-4'>Speak with a rep</p>
            </div>
          
          </form>

        </div>

      </div>

    </section>
    </div>
  );
}

export default Contact;
