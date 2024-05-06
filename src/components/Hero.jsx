import React, { useState } from 'react';

import hero from '../assets/portfolio/Eko5.jpg';
import logo from '../assets/Logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { Outlet, Link } from 'react-router-dom';
import portfolio from '../../src/assets/portfolio/--FORMYARD LIMITED COMPANY PROFILE. (1).pdf';

import Modal from './modal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDownload = () => {
    // Add logic for handling download or any other actions
    // For example, show the modal here
    openModal();
  };

  return (
    <section>
      <div class="relative mx-auto ">
        <div>
          <img
            src={hero}
            alt=""
            className="h-screen w-full object-cover rounded-md"
          />
        </div>
        <div class="absolute inset-0 bg-gray-700 opacity-60 "></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div className="flex  flex-1 item-start flex-col  justify-center lg:py-44  lg:gap-6  z-999 max-container 4xl:max-none padding-container   py-2 pb-32 gap-4 lg:pb-20 lg:pt-2  ">
            <h1 className="bold-28 md:bold-52 lg:bold-88 text-white">
              BUILDING YOUR VISION
            </h1>
            <p className="text-white regular-14 lg:regular-20 lg:w-[570px]">
              We bring your ideas to life with quality craftsmanship.
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              
              <button className="rounded-full  text-black text-base font-bold text-start bg-[#FFDD00] hover:bg-[#E9F3FF] transform transition duration-300 hover:scale-105 px-12 py-3">
                <Link to="/contact">Contact us</Link>
              </button>
              <button
                // onClick={handleDownload}
                className="rounded-full text-black  text-base font-bold text-start bg-[#E9F3FF] hover:bg-[#FFDD00] transform transition  hover:scale-105 px-12 py-3 duration-200"
              >
                <a
                href={portfolio}
                download
                // className="bg-[#FFDD00] text-black rounded-full px-6 py-2 font-bold cursor-pointer"
              >
                Download
              </a>
              </button>
            </div>
            {/* Modal */}
            {isModalOpen && (
              <Modal onClose={closeModal}>
                {/* Your form components and logic go here */}
                <h2>Fill out the form to proceed with the download</h2>
                {/* Your form components go here */}
              </Modal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
