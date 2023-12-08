import React from 'react';

import { BiPlayCircle } from 'react-icons/bi';
import blog from '../assets/pexels-freestocksorg-410730.jpg';
// import about2 from '../assets/about2.png';

import about1 from '../assets/about1.webp';
import about3 from '../assets/about3.jpg';
import about4 from '../assets/about4.webp';
import about2 from '../assets/about2.webp';


//whatsapp
// import whats1 from '../assets/portfolio/whats.jpeg'
import whats from '../assets/brands/whats.jpeg';

///////////////////////////////////////////////////////////////////////////
//training
import train1 from '../assets/portfolio/training1.jpg';
import train2 from '../assets/portfolio/training2.jpg';
import train3 from '../assets/portfolio/training3.jpg';
import train4 from '../assets/portfolio/training4.jpg';
import train5 from '../assets/portfolio/training5.jpg';

//7up

import up1 from '../assets/portfolio/7up.webp';
import up2 from '../assets/portfolio/7up2.webp';
import up3 from '../assets/portfolio/7up3.webp';
import up4 from '../assets/portfolio/7up4.webp';

//assembling
import assemble from '../assets/portfolio/asembling1.jpg';
import assemble2 from '../assets/portfolio/asembling2.jpg';
import assemble3 from '../assets/portfolio/asembling3.jpg';

//bluwaters
import bluewater1 from '../assets/portfolio/bluewaters1.webp';
import bluewater2 from '../assets/portfolio/bluewaters2.webp';
import bluewater3 from '../assets/portfolio/bluewaters3.webp';
import bluewater4 from '../assets/portfolio/bluewaters4.webp';

//zenith
import zenith1 from '../assets/portfolio/Zenith1.webp';
import zenith2 from '../assets/portfolio/Zenith2.webp';
import zenith3 from '../assets/portfolio/Zenith3.webp';
import zenith4 from '../assets/portfolio/Zenith4.webp';
import zenith5 from '../assets/portfolio/Zenith5.webp';
import zenith6 from '../assets/portfolio/zenith6.webp';

//eko
import eko1 from '../assets/portfolio/Eko1.jpg';
import eko2 from '../assets/portfolio/Eko2.jpg';
// import eko3 from '../assets/portfolio/Eko3.jpg';
import eko4 from '../assets/portfolio/Eko4.jpg';
import eko5 from '../assets/portfolio/Eko5.jpg';
import eko6 from '../assets/portfolio/Eko6.jpg';

//fav
import fav1 from '../assets/portfolio/fav1.jpeg';
import fav2 from '../assets/portfolio/fav2.jpeg';
import fav3 from '../assets/portfolio/fav3.jpeg';
import fav4 from '../assets/portfolio/fav4.jpeg';
import fav5 from '../assets/portfolio/fav5.jpg';
import fav6 from '../assets/portfolio/fav6.jpg';

//rail
import rail1 from '../assets/portfolio/rail1.webp';
import rail2 from '../assets/portfolio/rail2.webp';
import rail3 from '../assets/portfolio/rail3.webp';
import rail4 from '../assets/portfolio/rail4.webp';
import rail5 from '../assets/portfolio/rail5.webp';
import rail6 from '../assets/portfolio/rail6.webp';
import rail7 from '../assets/portfolio/rail7.webp';
import rail8 from '../assets/portfolio/rail8.webp';
import rail9 from '../assets/portfolio/rail9.webp';
import railfav from '../assets/portfolio/railfav.jpg';

//salvation

import salvation1 from '../assets/portfolio/salvation1.webp';
// import salvation2 from '../assets/portfolio/salvation2.JPG';
import salvation3 from '../assets/portfolio/salvation3.webp';
import salvation4 from '../assets/portfolio/salvation4.webp';
import salvation5 from '../assets/portfolio/salvation5.webp';

import towers1 from '../assets/portfolio/towers1.jpg';
import towers2 from '../assets/portfolio/towers2.jpg';
import towers3 from '../assets/portfolio/towers3.jpg';
import towers4 from '../assets/portfolio/towers4.jpg';

import nr1 from '../assets/portfolio/nr1.webp';
import nr2 from '../assets/portfolio/nr2.webp';
import nr3 from '../assets/portfolio/nr3.webp';
import nr4 from '../assets/portfolio/nr4.webp';
import nr5 from '../assets/portfolio/nr5.webp';
import nr6 from '../assets/portfolio/nr6.webp';

import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

import pen1 from '../assets/brands/pen1.webp';
import pen2 from '../assets/brands/pen2.webp';
import pen3 from '../assets/brands/pen3.webp';
import pen4 from '../assets/brands/pen4.webp';
import pen5 from '../assets/brands/pen5.webp';
import pen6 from '../assets/brands/pen6.webp';





///////////////////////////////////////////////////////////////////////////////////

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
            <div></div>
          </div>
        </div>
      </div>
      <section className="bg-white padding-container max-container pb-20 mt-8 lg:mt-0">
        <div className="grid  gap-6  ">
          <div className="flex flex-col  lg:flex-row lg:py-10  lg:text-left gap-2  items-center      ">
            <div className="lg:w-1/2 w-full">
              <h2 className="  text-3xl  text-center md:text-left ">
                RELIABILITY
              </h2>
              <p className=" text-gray-30 mt-4 font-normal  mb-2 md:mb-0  text-center md:text-left lg:w-4/5">
                No matter how high your requirements, you are in Safe hands with
                Formyard. <br />
                Formyard is a company with over 20 years of experience of
                woodworking and metalworking. We are one of the leading
                suppliers of formwork solutions in Nigeria. Our more than
                2000-strong workforce provides Formyard clients with
                high-performing products, systems and services. The Aim: to
                build faster, more safely and more efficiently. This means that
                right from your project’s development stage, you can rely on
                complete, cost-saving solutions and on professional support and
                assistance with everything to do with formwork.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <img
                src={pen2}
                alt="about image"
                className="lg:w-[500px] w-full"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row  items-center gap-4 ">
            <div className="lg:w-1/2">
              <img src={fav4} alt="about image" />
            </div>
            <div className="lg:py-10  lg:text-left lg:w-1/2 gap-4 ">
              <h2 className=" text-3xl  text-center md:text-left"> NEARNESS</h2>
              <p className="mt-4   text-gray-30 text-center md:text-left lg:w-4/5">
                With high-performing capability all-round Nigeria, Formyard is
                always near to you. Formyard formwork solutions are in demand
                all over Nigeria. More than 160 sales in all 36 states in
                Nigeria, we deliver products and services in yellow-blue quality
                 straight to your site and ready to use. This is why Formyard
                clients can be sure of getting the formwork they need, in the
                right quantities and at the right time, anytime and anywhere,
                combined with comprehensive advice and technical problem-solving
                capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* new section */}
      <section className="bg-white padding-container max-container pb-20 mt-8 lg:mt-0">
        <div className="grid  gap-6  ">
          <div className="flex flex-col  lg:flex-row lg:py-10  lg:text-left gap-2  items-center      ">
            <div className="lg:w-1/2 w-full">
              <h2 className="  text-3xl  text-center md:text-left ">
                FORMWORK PROJECT DEVELOPMENT STAGE (tender)
              </h2>
              <p className=" text-gray-30 mt-4 font-normal  mb-2 md:mb-0  text-center md:text-left lg:w-4/5">
                 Formyard  provides its clients the foundation for cost-efficient solution
                scenarios which are then critical for the progress of the whole
                project. In the early stage of the project, Formyard delivers
                important information, so that you benefit from good advice
                right from the outset.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <img
                src={fav3}
                alt="about image"
                className="lg:w-[500px] w-full"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row  gap-4 ">
            <div className="lg:py-10  lg:text-left lg:w-1/2 gap-4 ">
              <h2 className=" text-3xl  text-center md:text-left">
                {' '}
                Taking well-founded decisions
              </h2>
              <p className="mt-4   text-gray-30 text-center md:text-left lg:w-4/5">
             Efficient formwork solutions
                aided by in-depth analysis of the initial situation,  help with
                bid invitation, objective evaluation of the planning,
                execution, cost, and time risks.
              </p>
            </div>
            <div className="lg:py-10  lg:text-left lg:w-1/2 gap-4 ">
              <h2 className=" text-3xl  text-center md:text-left">
                {' '}
                Identifying Challenges
              </h2>
              <p className="mt-4   text-gray-30 text-center md:text-left lg:w-4/5">
    Implementing a project begins with the
                planning and the bid invitation. As soon as the bid invitation
                has been successfully dealt with, preparatory construction
                measures need to be taken, and the technical , business
                opportunities, and risks must be assessed. A carefully planned
                project-development stage thus paves the way to the success of
                your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white padding-container max-container pb-20 mt-8 lg:mt-0">
        <div className="grid  gap-6  ">
          <div className="flex flex-col  lg:flex-row lg:py-10  lg:text-left gap-2  items-center      ">
            <div className="lg:w-1/2 w-full">
              <h2 className="  text-3xl  text-center md:text-left ">
                FORMYARD TRAINING
              </h2>
              <p className=" text-gray-30 mt-4 font-normal  mb-2 md:mb-0  text-center md:text-left lg:w-4/5">
              The clearly structured curricula of Formyard
                training courses are precisely tailored to the requirements of
                everyday jobsite practice. Benefit from direct and immediate
                usefulness that can be put into practice on your site right away
                 for fast, safe and efficient forming operations:
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <img
                src={train5}
                alt="about image"
                className="lg:w-[500px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white padding-container max-container pb-20 mt-8 lg:mt-0">
        <h2 className="text-center text-3xl">SUPPORT IN THE BIDDING STAGE</h2>
        <div className="grid  gap-6  ">
          <div className="flex flex-col  lg:flex-row lg:py-10  lg:text-left gap-2  items-center      ">
            <div className="lg:w-1/2 w-full">
              <h2 className="  text-3xl  text-center md:text-left ">
                Formyard Engineering
              </h2>
              <p className=" text-gray-30 mt-4 font-normal  mb-2 md:mb-0  text-center md:text-left lg:w-4/5">
                Formyard Engineering Profits from the know-how of Formyard
                Formwork Experts, right from the word “go”. Their technical
                preparations communicate all the knowledge needed for a
                successful project, and include technical support in many
                different areas: Preparation of sketches Quantity surveys,
                Determination of commissioning quantities, Logistical feasibility
                study, Competence centers for complex formwork projects
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <img
                src={pen3}
                alt="about image"
                className="lg:w-[500px] w-full"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row  gap-4 ">
            <div className="lg:py-10  lg:text-left lg:w-1/2 gap-4 ">
              <h2 className=" text-3xl  text-center md:text-left">
                {' '}
                Selecting the Formwork System
              </h2>
              <p className="mt-4   text-gray-30 text-center md:text-left lg:w-4/5">
                 The choice of formwork solution
                has a crucial influence in the profitability of your
                construction project. Based on the project requirements, a
                detailed formwork concept is drawn up having regard to the site
                logistics, compliance with the required timetabling (quality
                and cost planning takes top priority here). In-depth initial
                discussion with an adviser and/or technical staff member. Save
                time and costs by letting us help you select the best formwork
                systems, optimize your  result in terms of concrete finish and tie-hole
                pattern, by choosing the right formwork.
              </p>
            </div>
            <div className="lg:py-10  lg:text-left lg:w-1/2 gap-4 ">
              <h2 className=" text-3xl  text-center md:text-left">
                {' '}
                Rental Service
              </h2>
              <p className="mt-4   text-gray-30 text-center md:text-left lg:w-4/5">
                Swift availability of formwork equipment is a crucial factor.
                Formyard’s national network of sales and logistics facilities
                with high-capacity rental parks, facilitates security of supply
                and rapid provisioning times. The Formyard quality standards
                stand for certainty and reliability and helps renters to achieve
                cost-effective construction workflows by providing them with
                quality-inspected formwork equipment. 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white padding-container max-container pb-20 mt-8 lg:mt-0">
        <h2 className="text-center text-3xl">
          SUPPORT IN THE PROJECT MANAGEMENT PLANNING STAGE
        </h2>
        <div className="grid  gap-6  ">
          <div className="flex flex-col  lg:flex-row lg:py-10  lg:text-left gap-2  items-center      ">
            <div className="lg:w-1/2 w-full">
              <h2 className="  text-3xl  text-center md:text-left ">
                Timetabling the formwork operations.
              </h2>
              <p className=" text-gray-30 mt-4 font-normal  mb-2 md:mb-0  text-center md:text-left lg:w-4/5">
                The relevant deadlines and timeframes for the forming operations
                are worked out based on the specified construction schedules.
                Greater efficiency, from: The time-savings that comes from
                having coordinated, transparent workflows. Reduced commissioning
                costs Less pressure on your own Operations Scheduling Dept.
                Optimum utilization of site resources Greater certainty on the
                site, due to improved logistics and stockkeeping.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <img
                src={assemble3}
                alt="about image"
                className="lg:w-[500px] w-full"
              />
            </div>
          </div>

          <div className="flex flex-col  lg:flex-row lg:py-10  lg:text-left gap-2  items-center  ">
            <div className="lg:py-10  lg:text-left lg:w-1/2 gap-4 ">
              <h2 className=" text-3xl  text-center md:text-left">
                {' '}
                Assembling Services
              </h2>
              <p className="mt-4   text-gray-30 text-center md:text-left lg:w-4/5">
              Well thought-out assembling services is the essential precondition for smooth forming operations, and facilitates enhanced workplace safety, less wear-and-tear on equipment, less on-site handling of equipment, reduced searching and handling times, optimum utilization of site resources
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={whats}
                alt="about image"
                className="lg:w-[500px] w-full"
              />
            </div>
        
          </div>
        </div>
      </section>

      <section className="bg-white padding-container max-container pb-20 mt-8 lg:mt-0">
        <h2 className="text-center text-3xl text-capitalize">
          Support in the Concrete Construction Stage
        </h2>
        <div className="grid  gap-6  ">
          <div className="flex flex-col  lg:flex-row lg:py-10  lg:text-left gap-2       ">
            <div className="lg:w-1/2 w-full">
              <h2 className="  text-3xl  text-center md:text-left ">
                Formwork Instructors
              </h2>
              <p className=" text-gray-30 mt-4 font-normal  mb-2 md:mb-0  text-center md:text-left lg:w-4/5">
                The Formyard Formwork Instructor is a specially trained and
                experience practitioner who explains to your crew how to use the
                formwork effectively and safely. The on-site support he provides
                during project ensures that you make the best possible use of
                resources, and that construction moves ahead efficiently.
                Productivity is raised by the professional familiarization
                training given to the new site crew. Greater safety, thanks to
                expert support. Cost-savings from top-caliber advice on formwork use, optimized deployment of custom-built formwork units.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <img
                src={train4}
                alt="about image"
                className="lg:w-[500px] w-full"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row   justify-center gap-1 ">
            <div className=" lg:text-left lg:w-1/2 gap-4  ">
              <h2 className=" text-3xl  text-center md:text-left">
                {' '}
                Ready-to-Use Service
              </h2>
              <p className="mt-4   text-gray-30 text-center md:text-left lg:w-4/5">
                Formyard system formwork covers wide areas of formwork
                applications. Special factors or structural requirements and
                unusual shapes call for an individualized approach. However,
                this is where Formyard Ready-to-Use service comes in,
                ‘tailor-making’ custom formwork units for you. By combining
                Formyard system with custom-built solutions, this helps to
                achieve economically efficient construction workflows: Less
                assembly work needed at your site. Faster workflows, as forming
                can be performed with precise-fitting accuracy. Rapid forming
                progress, with improved concreting results.
              </p>
            </div>
            <div className=" lg:text-left lg:w-1/2 gap-4  ">
              <h2 className=" text-3xl  text-center md:text-left">
                {' '}
                Project processing on the site
              </h2>
              <p className="mt-4   text-gray-30 text-center md:text-left lg:w-4/5">
                 Where needed, Formyard specialists can perform the agreed
                business or technical service directly on the site. This
                business or technical service directly on the site. This
                facilitates optimum project progress: Safe, dependable
                construction operations aided by ongoing ‘on-the-job’ planning.
                Detailed requirements can be clarified and coordinated
                ‘on-the-spot.’ Direct contact between the client and Formyard
                increases the safety of the formwork application.
              </p>
            </div>
        
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
