import React from 'react';

import { BiPlayCircle } from 'react-icons/bi';
import blog from '../assets/pexels-freestocksorg-410730.jpg';
// import about2 from '../assets/about2.png';

import about1 from '../assets/about1.webp';
import about3 from '../assets/about3.jpg';
import about4 from '../assets/about4.webp';
import about2 from '../assets/about2.webp'

// import
import eko3 from '../assets/portfolio/Eko3.jpg';

import { Outlet, Link } from 'react-router-dom';

import { AiOutlineMenu } from 'react-icons/ai';

function About() {
  return (
    <div>
        <div class="relative mx-auto ">
        <div>
          <img
            src={eko3}
            alt=""
            className="h-screen w-full object-cover rounded-md"
          />
        </div>
        <div class="absolute inset-0 bg-gray-700 opacity-60 "></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div className="flex  flex-1 item-center flex-col  justify-center lg:py-44  lg:gap-6  z-999 max-container 4xl:max-none padding-container   py-2 pb-32 gap-4 lg:pb-20 lg:pt-2  ">
            <h1 className="bold-28 md:bold-52 lg:bold-88 text-center text-white">
            About us
            </h1>
            <p className="text-white regular-14 lg:regular-20 text-center ">
            Passionate and Sustainable
            </p>
            <div>
              {/* <button className="rounded-full text-black text-base font-bold text-start bg-[#FFDD00] px-12  py-3">
                <Link to="/contact">
                  Contact us
                </Link>
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white padding-container max-container pb-20 mt-8 lg:mt-0">
        <div className="grid  gap-6  ">
          <div className="flex flex-col  lg:flex-row lg:py-10  lg:text-left gap-2  items-center      ">
            <div className="lg:w-1/2 w-full">
              <h2 className="  text-3xl  text-center md:text-left ">
                Our Expertise
              </h2>
              <p className=" text-gray-30 mt-4 font-normal  mb-2 md:mb-0  text-center md:text-left lg:w-4/5">
                We specialize in commercial and residential construction
                projects, including new construction, renovations, and
                additions. Our team has extensive experience and knowledge in
                the industry, allowing us to provide our clients with top-notch
                services.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <img
                src={about2}
                alt="about image"
                className="lg:w-[500px] w-full"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row  items-center gap-4 ">
            <div className="lg:w-1/2">
              <img src={about4} alt="about image" />
            </div>
            <div className="lg:py-10  lg:text-left lg:w-1/2 gap-4 ">
              <h2 className=" text-3xl  text-center md:text-left">
                {' '}
                Our Process
              </h2>
              <p className="mt-4   text-gray-30 text-center md:text-left lg:w-4/5">
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
            <h2 className=" text-3xl  text-center md:text-left">Our Vision</h2>
            <p className=" text-gray-30  text-center md:text-left lg:w-4/5">
              To lead globally in formwork products solutions through unwavering
              commitment to excellence, innovation, and sustainability. We aim
              to redefine formwork systems, engineering, and training,
              surpassing stakeholders' expectations.
            </p>
          </div>
          <div className="w-full ">
            <h2 className=" text-3xl  text-center md:text-left">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-30  text-center md:text-left lg:w-4/5">
            We're committed to providing top-notch formwork solutions, empowering clients to shape the future with a focus on safety, sustainability, and customer satisfaction in every project.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white padding-container max-container pb-20">
        <div
          style={{ backgroundImage: `url(${about2})` }}
          className="relative max-container padding-container flex flex-col gap-20 py-2 pb-32 md:gap-28 lg:pb-20 lg:pt-2 xl:flex-row h-[300px] lg:h-[300px] bg-cover bg-center "
        >
          <div className="flex flex-col lg:flex-row   items-start w-full justify-center">
            <h2 className="lg:regular-72 bold-28 text-white text-left   mt-auto">
              <span className="textPrimary">Passionate </span>
              <br /> and Sustainable
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-white padding-container max-container pb-20 md:hidden">
        <div className="lg:w-1/2 lg:ml-auto  ">
          <h2 className=" text-2xl font-bold">Ranking</h2>
          {/* ROW ONE */}
          <div className="grid gap-4 w-full">
            <div className="flex justify-between">
              <div>
                <h1 className="lg:regular-62 ">260+</h1>
                <p>Projects Completed</p>
              </div>
              <div>
                <h1 className="lg:regular-62 ">95%</h1>
                <p>Satisfaction Rate</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div>
                  <h1 className="lg:regular-62 ">200+</h1>
                  <p>Satisfied Clients</p>
                </div>
                <div>
                  <h1 className="lg:regular-62 ">150+</h1>
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
{/* <header */}
// style={{ backgroundImage: `url(${eko3
// })` }}
// className="relative max-container padding-container flex flex-col gap-20 py-2 pb-32 md:gap-28 lg:pb-20 lg:pt-2 xl:flex-row bg-cover"
// >
// <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
  {/* CTA */}
  {/* <div className="relative flexCenter flex-1  flex-col py-16 lg:py-44 gap-3 lg:gap-6">
    <p className="text-white regular-14 lg:regular-20  ">About us</p>
    <h1 className=" bold-28 text-center md:text-left lg:bold-88 text-white">
      Passionate and Sustainable
    </h1>
  </div>
</div>
</header> */}