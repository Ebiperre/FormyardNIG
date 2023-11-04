import React from 'react';

import { BiPlayCircle} from "react-icons/bi"
import blog from '../assets/about.png';
import about2 from '../assets/about2.png';

import about1 from '../assets/about1.webp';
import about3 from '../assets/about3.jpg';
import about4 from '../assets/about4.webp';

// import

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
        <div className="grid  gap-6  ">
          <div className="lg:grid lg:grid-cols-2 lg:py-10  lg:text-left gap-2  items-center      ">
            <div>
              <h2 className="textPrimary  text-3xl  text-center md:text-left ">Our Expertise</h2>
              <p className=" mt-4 text-xl  text-center md:text-left">
                We specialize in commercial and residential construction
                projects, including new construction, renovations, and
                additions. Our team has extensive experience and knowledge in
                the industry, allowing us to provide our clients with top-notch
                services.
              </p>
            </div>

            <div >
              <img src={about3} alt="about image" className='w-[500px]' />
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 gap-4 ">
            <div>
              <img src={about4} alt="about image" />
            </div>
            <div className="lg:py-10  lg:text-left ">
              <h2 className="textPrimary text-3xl  text-center md:text-left"> Our Process</h2>
              <p className="mt-4 text-xl  text-center md:text-left">
                We follow a rigorous process for every project we undertake,
                from initial consultation to final inspection. Our team works
                closely with our clients to ensure that their vision is realised
                and that the project is completed on time and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white padding-container max-container pb-20">
        <div className="flex flex-col lg:flex-row   gap-4">
          <div className="w-full ">
            <h2 className="textPrimary text-3xl  text-center md:text-left">Our Vision</h2>
            <p className="mt-4 text-xl text-center md:text-left">
              To be the premier global construction solutions provider, renowned
              for our unwavering commitment to excellence, innovation, and
              sustainable practices. We aspire to transform the construction
              industry by setting new standards in engineering, formwork
              systems, and training, while continually exceeding our
              stakeholders' expectations.
            </p>
          </div>
          <div className="w-full text-3xl">
            <h2 className="textPrimary text-3xl  text-center md:text-left">Our Solutions</h2>
            <p className='mt-4 text-xl  text-center md:text-left'>
            At Formyard, we are dedicated to delivering exceptional construction solutions that empower our clients to build the future. We are committed to safety, sustainability, and customer satisfaction in every project we undertake. Our relentless pursuit of innovation, quality, and client partnership fuels our mission to shape a better, more efficient future for the construction industry.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white padding-container max-container pb-20">
        <div
          style={{ backgroundImage: `url(${about2})` }}
          className="relative max-container padding-container flex flex-col gap-20 py-2 pb-32 md:gap-28 lg:pb-20 lg:pt-2 xl:flex-row h-[300px] lg:h-[300px] bg-cover bg-center "
        >
          <div className='flex justify-between items-center w-full'>
            <h2 className="lg:regular-72 font-normal  font-serif mt-auto">
              <span className="textPrimary">Passionate </span>
              <br /> and Sustainable
            </h2>

            <BiPlayCircle size={64}  className=' text-white'/>
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

    </div>
  );
}

export default About;
