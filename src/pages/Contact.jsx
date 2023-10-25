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
      className="min-h-[551px]"
    >
      <div className="container px-36 mx-auto">
        <div className=" w-full flex justify-between pt-2">
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
        <div className="grid gap-[24px] text-center  w-full  h-screen justify-center items-center   place-content-center">
          <h1 className=" font-bold text-5xl text-white w-3/5 mx-auto ">
            Get in touch with us for more information
          </h1>
          <p className="text-white font-normal w-4/5  mx-auto  ">
            If you need help or question, we’re here for you
          </p>
        </div>
      </div>
    </header>
    {/* conatct form */}
    <section className='bg-white py-8 px-36 mx-auto'>
      <div className='flex'>
        <div>
          <h2 className='text-[#FD0] text-5xl font-bold space-y-4'>Contact us Today</h2>
          <p className='w-4/5 text-black/50'  >Our team is available to assist you during our business hours. We will do our best to respond to your inquiry as quickly as possible.</p>
        </div>
        <div className=''>
          {/* card items */}
          <div className='shadow px-8  pt-2 pb-4'>
            <h2 className='text-[#FD0] text-xl font-bold'>Get directions to our office</h2>
            <p>20 Igbodo Street Old GRA Port Harcourt.</p>
          </div>
          <div className='shadow px-8  pt-2 pb-4'>
            <h2 className='text-[#FD0] text-xl font-bold'>Contact our support team</h2>
            <p>+2348037079584</p>
          </div>
          <div className='shadow px-8  pt-2 pb-4'>
            <h2 className='text-[#FD0] text-xl font-bold'>Send us an email</h2>
            <p>info@crewtechng.com.</p>
          </div>
        </div>
      </div>
    </section>
    <section className='bg-white py-8 px-36 mx-auto'>
      <div className='flex gap-4  '>
        {/* map */}
        <div className='w-1/2'>
          <img src={map} alt="map"  className='w-[479px] ' />
        </div>
        {/* contact form */}
        <div className='flex flex-col w-2/5 gap-[29px] justify-center '>
          <h2 className='text-2xl font-bold'>Contact Form</h2>

          <form className='flex flex-col space-y-4 mt-4'>
            <label htmlFor="" className='flex flex-col space-y-3'>
              <span>Full Name</span>
              <input type="text" placeholder='john Doe'
              className='py-4 px-6 border border-[#939294] rounded-md' />
            </label>
            <label htmlFor="" className='flex flex-col space-y-3'>
              <span>Email Address</span>
              <input type="text" placeholder='john Doe' 
                  className='py-4 px-6 border border-[#939294] rounded-md' />
            </label>
            <label htmlFor="" className='flex flex-col space-y-3'>
              <span className='text-[#939294]'>Message</span>
              <textarea name="" id="" cols="30" rows="5" className='border rounded-md border-[#939294]'>Enter Your Message</textarea>
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
