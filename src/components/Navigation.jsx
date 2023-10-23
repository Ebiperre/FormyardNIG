import React from 'react';

import { PiEnvelope } from 'react-icons/pi';
import { MdPhoneIphone } from 'react-icons/md';

const Navigation = () => {
  return (
    <div className="bg-[#FFDD00] w-full min-h-[66px]">
      <div className=" mx-auto  px-28 w-full container  flex justify-between items-center h-[66px] ">
        <div className="flex  items-center w-full gap-4">
          <h2 className="font-bold">About</h2>
          <h2 className="font-bold">Protfolio</h2>
          <h2 className="font-bold">Blog</h2>
          <h2 className="font-bold">Contact</h2>
        </div>
        <div className="flex  items-center w-full justify-end  gap-4">
          <div className="flex items-center gap-1">
            <MdPhoneIphone size={24} />
            <h2 className="font-normal text-base">+1-541-754-3010</h2>
          </div>

          <div className="flex items-center gap-1">
            <PiEnvelope size={24} />
            <h2 className="font-normal text-base">info@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
