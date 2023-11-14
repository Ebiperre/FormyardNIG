import portfolio from '../assets/portfolio.png';
// import blog from '../assets/about.png';
// import about2 from '../assets/about2.png';

//portfolio images
// import portfolio1 from '../assets/port1.jpg';
// import portfolio2 from '../assets/port2.jpg';
// import portfolio3 from '../assets/portfolio3.png';
// import portfolio4 from '../assets/portfolio4.png';
// import portfolio6 from '../assets/portfolio6.png';
// import portfolio7 from '../assets/portfolio7.png';
// import portfolio8 from '../assets/portfolio8.png';

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
import rail1 from '../assets/portfolio/rail1.jpg';
// import rail2 from '../assets/portfolio/rail2.jpg';
import rail3 from '../assets/portfolio/rail3.jpg';
import rail4 from '../assets/portfolio/rail4.jpg';

//salvation

import salvation1 from '../assets/portfolio/salvation1.webp';
// import salvation2 from '../assets/portfolio/salvation2.JPG';
import salvation3 from '../assets/portfolio/salvation3.webp';
import salvation4 from '../assets/portfolio/salvation4.webp';
import salvation5 from '../assets/portfolio/salvation5.webp';

const Portfolio = () => {
  return (
    <div>
      <header
        style={{ backgroundImage: `url(${portfolio})` }}
        className="relative max-container padding-container flex flex-col gap-20 py-2 pb-32 md:gap-28 lg:pb-20 lg:pt-2 xl:flex-row bg-cover"
      >
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          {/* CTA */}
          <div className="relative flexCenter flex-1  flex-col py-16 lg:py-44 gap-3 lg:gap-6">
            <p className="text-white regular-14 lg:regular-20  ">Portfolio</p>
          </div>
        </div>
      </header>

      {/* the favourite */}
      <section className="px-5 py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl">COMPLETED PROJECT</h2>
        <h2 className="font-bold uppercase">
          {/* Salvation Ministries BY FORMYARD NIG LTD */}
          FAVOURITE
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={fav6} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p  className='font-normal text-[14px] md:text-[16px] md:text-left  text-center'>
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


      <section className="px-5  py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl">COMPLETED PROJECT</h2>
        <h2 className="font-bold">
          LEKKI BLUE WATERS 2018 BY FORMYARD NIG LTD
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={bluewater1} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p className='font-normal text-[14px] md:text-[16px] md:text-left  text-center' >
              <span className="font-bold">DATE OF AWARD: 2018</span> <br></br>{' '}
              <span className="font-bold text-center lg:text-left"> PROJECT DESCRIPTION: </span>The
              FORMYARD NIG LTD is excited to introduce "LEKKI BLUE WATERS 2018,"
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

      <section className="px-5   py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl">COMPLETED PROJECT</h2>
        <h2 className="font-bold">
          FORMYARD NIG LTD'S PHC TRAINING PROGRAM: SUDELETTRA TRAINING 1
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={train1} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2 text-center md:text-left">
            <p className='font-normal text-[14px] md:text-[16px] md:text-left  text-center'>
              <span className="font-bold">DATE OF AWARD: JULY 2021</span>{' '}
              <br></br>{' '}
              <span className="font-bold "> PROJECT DESCRIPTION: </span>The
              FORMYARD NIG LTD's PHC Training Program, SUDELETTRA Training 1, is
              a specialized training initiative designed to provide essential
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
            <img src={train3} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={train4} alt="portfolio image" />
          </div>
        </div>
      </section>

      <section className=" px-5 py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl">COMPLETED PROJECT</h2>
        <h2 className="font-bold">
          SERVICE ASSEMBLY OFFERED BY FORMYARD NIG LTD
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={assemble} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p  className='font-normal text-[14px] md:text-[16px] md:text-left  text-center'>
              <span className="font-bold">DATE OF AWARD: JULY 2021</span>{' '}
              <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>The
              FORMYARD NIG LTD offers a comprehensive service assembly that
              caters to various needs and requirements. Our expertise and
              resources enable us to efficiently assemble a wide range of
              services, providing convenience and satisfaction for our clients.
              This service assembly is utilized for streamlining processes,
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

      <section className=" px-5 py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl">COMPLETED PROJECT</h2>
        <h2 className="font-bold">7UP Truck Park BY FORMYARD NIG LTD</h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={up1} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p  className='font-normal text-[14px] md:text-[16px] md:text-left  text-center'>
              <span className="font-bold">DATE OF AWARD: 2014 - 2015</span>{' '}
              <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>The
              FORMYARD's "7UP Truck Park" project, undertaken in 2014-2015 for
              our valued client, Ranjy Construction & Foundation Limited,
              showcased our expertise in engineering services. The project
              involved the implementation of a comprehensive system that
              included single-sided formwork, top 50 slab formwork, floor props,
              and timber formwork. Our choice of materials, such as Eurex props,
              H20 beams, and 350 sheets, ensured the structural integrity and
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

      <section className="px-5 py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl">COMPLETED PROJECT</h2>
        <h2 className="font-bold uppercase">
          Zenith Bank Building: A Vision of Modern Banking Excellence by
          FORMYARD NIG LTD
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={zenith1} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p  className='font-normal text-[14px] md:text-[16px] md:text-left  text-center'>
              <span className="font-bold">DATE OF AWARD: JULY 2021</span>{' '}
              <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>The
              FORMYARD NIG LTD is excited to introduce "Zenith," a remarkable
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

      <section className="px-5 py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl">COMPLETED PROJECT</h2>
        <h2 className="font-bold uppercase">
          Salvation Ministries BY FORMYARD NIG LTD
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={salvation1} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p  className='font-normal text-[14px] md:text-[16px] md:text-left  text-center'>
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

      
    </div>
  );
};

export default Portfolio;
