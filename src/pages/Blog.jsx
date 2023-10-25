import React from 'react'

import logo from '../assets/Logo.png';
import { AiOutlineMenu } from 'react-icons/ai';

function Blog() {
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
    </div>
  )
}

export default Blog