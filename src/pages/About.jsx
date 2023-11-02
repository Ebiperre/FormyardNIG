import React from 'react';
import blog from '../assets/about.png';
import about2 from '../assets/about2.png';

import { Outlet, Link } from 'react-router-dom';

import { AiOutlineMenu } from 'react-icons/ai';

function About() {
  return (
    <div>
      <header
        style={{ backgroundImage: `url(${blog})` }}
        className="relative max-container padding-container flex flex-col gap-20 py-2 pb-32 md:gap-28 lg:pb-20 lg:pt-2 xl:flex-row bg-cover"
      >
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          {/* CTA */}
          <div className="relative flexCenter flex-1  flex-col py-16 lg:py-44 gap-3 lg:gap-6">
            <p className="text-white regular-14 lg:regular-20  ">About us</p>
            <h1 className=" bold-52 lg:bold-88 text-white">
              Passionate and Sustainable
            </h1>
          </div>
        </div>
      </header>
      <section className="bg-white padding-container max-container pb-20">
        <div className="grid gap-6  ">
          <div className=" lg:py-10 lg:w-1/2 lg:text-left ">
            <p>
              Quidam officiis similique sea ei, vel tollit indoctum efficiendi
              ei, at nihil tantas platonem eos. Mazim nemore singulis an ius,
              nullam ornatus nam ei..
            </p>
          </div>

          <div className="lg:py-10 lg:w-1/2 lg:ml-auto lg:text-left ">
            <p>
              Quidam officiis similique sea ei, vel tollit indoctum efficiendi
              ei, at nihil tantas platonem eos. Mazim nemore singulis an ius,
              nullam ornatus nam ei. Quidam officiis similique sea ei, vel
              tollit indoctum efficiendi ei, at nihil tantas platonem eos. Mazim
              nemore singulis an ius, nullam ornatus nam ei.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white padding-container max-container pb-20">
        <div
          style={{ backgroundImage: `url(${about2})` }}
          className="relative max-container padding-container flex flex-col gap-20 py-2 pb-32 md:gap-28 lg:pb-20 lg:pt-2 xl:flex-row h-[300px] lg:h-[600px] "
        >
          <div>
            <h2 className="lg:regular-72 font-serif mt-auto">
              <span className="textPrimary">Passionate </span>
              <br /> and Sustainable
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-white padding-container max-container pb-20">
        <div className="lg:w-1/2 lg:ml-auto  ">
          <h2 className="textPrimary text-2xl">Numbers</h2>
          {/* ROW ONE */}
          <div className="grid gap-4 w-full">
            <div className="flex justify-between">
              <div>
                <h1 className="lg:regular-62 textPrimary">260+</h1>
                <p>Projects Completed</p>
              </div>
              <div>
                <h1 className="lg:regular-62 textPrimary">95%</h1>
                <p>Satisfaction Rate</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div>
                  <h1 className="lg:regular-62 textPrimary">200+</h1>
                  <p>Satisfied Clients</p>
                </div>
                <div>
                  <h1 className="lg:regular-62 textPrimary">150+</h1>
                  <p>Qualified Engineers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section  className='bg-white padding-container max-container pb-20'>
       <div className='flex  gap-4'>
       <div className='w-full '>
          <h2 className='textPrimary text-3xl'>Our Vision</h2>
          <p className='mt-4 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed pariatur sequi quisquam rerum eum accusamus explicabo numquam nihil deleniti, ut, nemo mollitia delectus sit deserunt minima porro. Nihil, ad quae.</p>

        </div>
        <div className='w-full text-3xl'>
        <h2 className='textPrimary'>Our Solutions</h2>
  
        </div>
       </div>

      </section>
    </div>
  );
}

export default About;
