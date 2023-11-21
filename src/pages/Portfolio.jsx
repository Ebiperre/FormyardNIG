import portfolio from '../assets/portfolio.png';

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
import eko3 from '../assets/portfolio/Eko3.jpg';
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

const Portfolio = () => {
  return (
    <div>
      <div class="relative mx-auto ">
        <div>
          <img
            src={railfav}
            alt=""
            className="h-screen w-full object-cover rounded-md"
          />
        </div>
        <div class="absolute inset-0 bg-gray-700 opacity-60 "></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div className="flex  flex-1 item-start flex-col  justify-center lg:py-44  lg:gap-6  z-999 max-container 4xl:max-none padding-container   py-2 pb-32 gap-4 lg:pb-20 lg:pt-2  ">
            <h1 className="bold-28 md:bold-52 lg:bold-88 text-white text-center">
              Portfolio
            </h1>
            {/* <p className="text-white regular-14 lg:regular-20 lg:w-[570px]">
            If you need help or question, we’re here for you
            </p> */}
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

      <section className="px-5 py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl font-bold text-center pb-6">
          BRIDGE CONSTRUCTIONS BY FORMYARD LTD
        </h2>
        <h2 className="font-bold uppercase">
          "PEN CINEMA PROJECT: Formyard Ltd's Exceptional Construction
          Excellence with Advanced Systems"
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 ">
          <div className="w-full lg:w-1/2 ">
            <img src={pen1} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="font-normal text-[14px] md:text-[16px] md:text-left  text-center">
              {/* <span className="font-bold">DATE OF AWARD: YEAR 2015</span>{' '} */}
              <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>
              "Formyard Ltd proudly undertook the Pen Cinema project from 2017
              to 2018 in collaboration with Hitech Construction Company Ltd.
              Employing advanced systems like Timber-Beam Formwork and a
              Concrete Pressure Monitoring System, our engineering prowess, and
              the use of quality materials such as Large Area Formwork TOP 50
              showcased our commitment to excellence in construction."
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={pen3} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={pen6} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={pen3} alt="portfolio image" />
          </div>
        </div>
      </section>

      <section className="px-5 py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl font-bold text-center pb-6">
          INFRASTRUCTURE PROJECTS DONE BY FORMYARD LTD
        </h2>
        <h2 className="font-bold uppercase">
          Formyard's Hydraulic Climbing Triumph at Azuri Towers, 2017
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="w-full lg:w-1/2 ">
            <img src={towers4} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="font-normal text-[14px] md:text-[16px] md:text-left  text-center">
              {/* <span className="font-bold">DATE OF AWARD: YEAR 2015</span>{' '} */}
              <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>
              Formyard successfully executed the Azuri Towers project in 2017
              for ITB Nigeria FZE, showcasing their prowess in construction and
              engineering services. The project involved the implementation of
              hydraulic climbing systems, specifically the SKE50+ and SKE50
              models. With top-tier materials like TOP 50 and TRENN, Formyard
              demonstrated excellence in both sales and refurbishing of the
              SKE50 equipment. The Azuri Towers project stands as a testament to
              Formyard's commitment to delivering high-quality construction
              solutions and innovative engineering services, solidifying their
              reputation in the industry.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={towers3} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={towers3} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={towers4} alt="portfolio image" />
          </div>
        </div>
      </section>

 

      <section className="px-5  py-8 container lg:px-36 mx-auto space-y-2 ">
        {/* <h2 className="text-xl">BUILDING PROJECTS</h2> */}
        <h2 className="font-bold">LEKKI BLUE WATERS 2018 BY FORMYARD LTD</h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={bluewater1} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="font-normal text-[14px] md:text-[16px] md:text-left  text-center">
              <span className="font-bold">DATE OF AWARD: 2018</span> <br></br>{' '}
              <span className="font-bold text-center lg:text-left">
                {' '}
                PROJECT DESCRIPTION:{' '}
              </span>
              The FORMYARD LTD is excited to introduce "LEKKI BLUE WATERS 2018,"
              a project that exemplifies our relentless pursuit of excellence
              and forward-thinking. This initiative in the Lekki Blue Waters
              area represents a significant milestone in our journey to create
              sustainable and visionary developments. In "LEKKI BLUE WATERS
              2018," we've combined cutting-edge design, eco-friendly practices,
              and community enhancement to craft a unique and vibrant
              environment. This project embodies our commitment to quality,
              innovation, and contributing to the growth and prosperity of the
              region.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={bluewater1} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={bluewater4} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={bluewater3} alt="portfolio image" />
          </div>
        </div>
      </section>

    

      <section className="px-5 py-8 container lg:px-36 mx-auto space-y-2 ">
        {/* <h2 className="text-xl">COMPLETED PROJECT</h2> */}
        <h2 className="font-bold uppercase">
          Salvation Ministries BY FORMYARD LTD
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={salvation1} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="font-normal text-[14px] md:text-[16px] md:text-left  text-center">
              <span className="font-bold">DATE OF AWARD: YEAR 2015</span>{' '}
              <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>The The
              "Salvation Ministries" project in 2015, highlighted FORMYARD's
              exceptional engineering services. Our team provided professional
              assembly and shop services, focusing on the implementation of the
              top 50 system for curved walls. The use of high-quality materials,
              specifically FRAMI XLIFE, ensured the project's structural
              integrity and longevity. This project reflects our commitment to
              delivering precision engineering solutions for a diverse range of
              applications.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={salvation3} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={salvation4} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={salvation5} alt="portfolio image" />
          </div>
        </div>
      </section>
      <section className=" px-5 py-8 container lg:px-36 mx-auto space-y-2 ">
        {/* <h2 className="text-xl">COMPLETED PROJECT</h2> */}
        <h2 className="font-bold">7UP Truck Park BY FORMYARD LTD</h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={up1} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="font-normal text-[14px] md:text-[16px] md:text-left  text-center">
              <span className="font-bold">DATE OF AWARD: 2014 - 2015</span>{' '}
              <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>The
              FORMYARD's "7UP Truck Park" project, undertaken in 2014-2015 for
              our valued client, Ranjy Construction & Foundation Limited,
              showcased our expertise in engineering services. The project
              involved the implementation of a comprehensive system that
              included single-sided formwork, top 50 slab formwork, floor props,
              and timber formwork. Our choice of materials, such as Eurex props,
              H20 beams, and 3-SO sheets, ensured the structural integrity and
              durability of the project. The "7UP Truck Park" exemplifies our
              commitment to delivering high-quality, reliable solutions and
              reflects our dedication to excellence in construction and
              engineering.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={up2} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={up3} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={up4} alt="portfolio image" />
          </div>
        </div>
      </section>

      <section className=" px-5 py-8 container lg:px-36 mx-auto space-y-2 ">
        {/* <h2 className="text-xl">COMPLETED PROJECT</h2> */}
        <h2 className="font-bold">EL-ALAN : NR4 PROJECT BY FORMYARD LTD</h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={nr6} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="font-normal text-[14px] md:text-[16px] md:text-left  text-center">
              <span className="font-bold">DATE OF AWARD: 2016</span> <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>The
              Formyard Ltd showcased its expertise in large-scale construction
              with the successful completion of Project Number 4 in 2016.
              Collaborating with Ranjy Construction & Foundation Limited,
              Formyard Ltd provided comprehensive engineering services, focusing
              on slab formwork 1-2-4 and climbing formwork. The innovative use
              of telescopic shaft beams (3-50) and Doka Trenn materials
              underscored Formyard Ltd's commitment to precision and efficiency.
              The incorporation of climbing formwork and bracket K platforms
              showcased cutting-edge techniques, ensuring a seamless
              construction process. This project stands as a testament to
              Formyard Ltd's dedication to delivering top-tier engineering
              solutions and reinforcing its position as an industry leader.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={nr2} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={nr3} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={nr5} alt="portfolio image" />
          </div>
        </div>
      </section>

      {/* RESIDENTIAL PROJECTS */}
      <section className="px-5 py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2  className="text-xl font-bold text-center pb-6">RESIDENTIAL PROJECTS BY FORMYARD LTD</h2>
        <h2 className="font-bold uppercase">
          NLNG Phase 2: Formyard's Excellence in RA Housing Construction
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="w-full lg:w-1/2 ">
            <img src={fav6} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="font-normal text-[14px] md:text-[16px] md:text-left  text-center">
              {/* <span className="font-bold">DATE OF AWARD: YEAR 2015</span>{' '} */}
              <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>
              Formyard Ltd spearheaded the NLNG Phase 2 Project in Bonny, Port
              Harcourt, comprising the construction of 72 Apartment Type RA
              Housing Units. Leveraging advanced systems like Dokadek 30 with
              Drop Heads and Framed Formwork Frami Eco, Formyard Ltd showcased
              its commitment to innovation and precision in large-scale
              construction. This project not only adds significant housing
              infrastructure to Bonny but also underscores Formyard Ltd's
              reputation for excellence in the construction industry.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={fav3} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={fav5} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={fav5} alt="portfolio image" />
          </div>
        </div>
      </section>

      <section className="px-5 py-8 container lg:px-36 mx-auto space-y-2 ">
        {/* <h2 className="text-xl">COMPLETED PROJECT</h2> */}
        <h2 className="font-bold uppercase">
          Zenith Bank Building: A Vision of Modern Banking Excellence by
          FORMYARD LTD
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={zenith1} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="font-normal text-[14px] md:text-[16px] md:text-left  text-center">
              <span className="font-bold">DATE OF AWARD: JULY 2021</span>{' '}
              <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>The
              FORMYARD LTD is excited to introduce "Zenith," a remarkable
              building constructed for a prominent bank. This project
              exemplifies our relentless pursuit of excellence and
              forward-thinking. "Zenith" represents a significant milestone in
              our journey to create sustainable and visionary developments for
              our valued clients. In the "Zenith" project, we've combined
              cutting-edge design, eco-friendly practices, and community
              enhancement to craft a unique and vibrant structure. This building
              embodies our commitment to quality, innovation, and contributing
              to the growth and prosperity of the region.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={zenith6} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={zenith5} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={zenith5} alt="portfolio image" />
          </div>
        </div>
      </section>

      {/* CONSTRUCTION PROJECTS CARRIED OUT BY FROMTARD */}

      {/* YABA  RAILWAY PROJECT */}
      <section className="px-5   py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl font-bold text-center pb-4">
          CONSTRUCTION PROJECTS BY FORMYARD{' '}
        </h2>
        <h2 className="font-bold">RAILWAY CONSTRUCTION BY FORMYARD LTD'S</h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={rail9} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2 text-center md:text-left">
            <p className="font-normal text-[14px] md:text-[16px] md:text-left  text-center">
              {/* <span className="font-bold">DATE OF AWARD: JULY 2021</span>{' '} */}
              <br></br>{' '}
              <span className="font-bold "> PROJECT DESCRIPTION: </span>The
              Formyard Ltd takes pride in its pivotal role in the successful
              execution of a railway construction project. Employing
              state-of-the-art engineering techniques, Formyard Ltd demonstrated
              its commitment to precision and innovation in large-scale
              infrastructure development. The project, marked by efficiency and
              excellence, not only contributes significantly to transportation
              advancement but also reinforces Formyard Ltd's distinguished
              position in the construction industry.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={rail4} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={rail6} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={rail7} alt="portfolio image" />
          </div>
        </div>
      </section>

      <section className=" px-5 py-8 container lg:px-36 mx-auto space-y-2 ">
        {/* <h2 className="text-xl">COMPLETED PROJECT</h2> */}
        <h2 className="font-bold">
          Project Description: Water Tank (Rental) - 2023
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="w-full lg:w-1/2 ">
            <img src={image3} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="font-normal text-[14px] md:text-[16px] md:text-left  text-center">
              <span className="font-bold">DATE OF AWARD: 2016</span> <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>The In
              2023, Formyard Ltd collaborated with South Energyx Nigeria Limited
              to deliver a cutting-edge solution for water infrastructure with
              the Water Tank (Rental) project. Employing a high-capacity,
              high-speed shoring system, Formyard Ltd utilized Load Bearing
              Towers Staxo 100 and D2 + H20 materials to ensure robust
              structural support. The engineering services provided by Formyard
              Ltd showcased expertise in optimizing efficiency and reliability
              in water infrastructure projects. This endeavor further solidifies
              Formyard Ltd's reputation for delivering innovative solutions in
              the realm of construction and engineering.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={image2} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={image3} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={image3} alt="portfolio image" />
          </div>
        </div>
      </section>

      {/* TRAINIG ORGANIZED BY FORMYARD */}

      <section className="px-5   py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl font-bold text-center pb-4">
          TRAINING CONDUCTED BY FORMYARD{' '}
        </h2>
        <h2 className="font-bold">
          FORMYARD LTD'S PHC TRAINING PROGRAM: SUDELETTRA TRAINING 1
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={train4} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2 text-center md:text-left">
            <p className="font-normal text-[14px] md:text-[16px] md:text-left  text-center">
              <span className="font-bold">DATE OF AWARD: JULY 2021</span>{' '}
              <br></br>{' '}
              <span className="font-bold "> PROJECT DESCRIPTION: </span>The
              FORMYARD LTD's PHC Training Program, SUDELETTRA Training 1, is a
              specialized training initiative designed to provide essential
              skills and knowledge in Port Harcourt (PHC). This program offers
              valuable insights and competencies relevant to the specific needs
              of the region.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={train5} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={train4} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={train4} alt="portfolio image" />
          </div>
        </div>
      </section>

      <section className=" px-5 py-8 container lg:px-36 mx-auto space-y-2 ">
        {/* <h2 className="text-xl">COMPLETED PROJECT</h2> */}
        <h2 className="font-bold">SERVICE ASSEMBLY OFFERED BY FORMYARD LTD</h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={assemble} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="font-normal text-[14px] md:text-[16px] md:text-left  text-center">
              <span className="font-bold">DATE OF AWARD: JULY 2021</span>{' '}
              <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>The
              FORMYARD LTD offers a comprehensive service assembly that caters
              to various needs and requirements. Our expertise and resources
              enable us to efficiently assemble a wide range of services,
              providing convenience and satisfaction for our clients. This
              service assembly is utilized for streamlining processes,
              optimizing resource allocation, and enhancing overall operational
              efficiency.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={assemble2} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={assemble3} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={assemble} alt="portfolio image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
