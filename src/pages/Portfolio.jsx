import portfolio from '../assets/portfolio.png';
import blog from '../assets/about.png';
import about2 from '../assets/about2.png';

//portfolio images
import portfolio1 from '../assets/port1.jpg';
import portfolio2 from '../assets/port2.jpg';
import portfolio3 from '../assets/portfolio3.png';
import portfolio4 from '../assets/portfolio4.png';
import port3 from '../assets/port3.jpg';
import portfolio6 from '../assets/portfolio6.png';
import portfolio7 from '../assets/portfolio7.png';
import portfolio8 from '../assets/portfolio8.png';

import taraba1 from '../assets/taraba1.webp';
import taraba2 from '../assets/taraba2.webp';
import taraba3 from '../assets/taraba3.webp';

import project2a from '../assets/portfolio/project2a.jpg';
import project2b from '../assets/portfolio/project2b.jpg';
import project2c from '../assets/portfolio/project2c.jpg';


import project3a from '../assets/portfolio/project3a.jpg';
import project3c from '../assets/portfolio/project3c.jpg';


import project4a from '../assets/portfolio/project4a.jpg';
import project4b from '../assets/portfolio/project4b.jpg';


import completed1 from '../assets/portfolio/completedproject1.webp';
import completed2 from '../assets/portfolio/completedproject1b.webp';
import completed3 from '../assets/portfolio/completedproject2.webp';
import completed4 from '../assets/portfolio/completedproject2c.webp';

import completed6 from '../assets/portfolio/completedproject6.webp';
import completed7 from '../assets/portfolio/completedproject7.webp';






// function Portfolio() {
//   return (
//     <div>
//       <header
//         style={{ backgroundImage: `url(${portfolio})` }}
//         className="relative max-container padding-container flex flex-col gap-20 py-2 pb-32 md:gap-28 lg:pb-20 lg:pt-2 xl:flex-row bg-cover"
//       >
//         <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
//           {/* CTA */}
//           <div className="relative flexCenter flex-1  flex-col py-16 lg:py-44 gap-3 lg:gap-6">
//             <p className="text-white regular-14 lg:regular-20  ">Portfolio</p>
//           </div>
//         </div>
//       </header>
//       <section  className="py-8 container px-36 mx-auto space-y-2">
//         <h2>Recent work</h2>
//         {/* first row */}
//         <div className='flex gap-2'>
//           <div className='w-[580px]'>
//             <img src={portfolio1} alt="portfolio image"
//             className='rounded-md' />
//           </div>
//           <div  className='w-[580px]'>
//             <img src={portfolio2} alt="portfolio image" className='rounded-md' />
//           </div>
//         </div>

//         {/* second row */}
//         <div className='flex gap-2'>
//           <div className='w-[580px] h-[580px]'>
//             <img src={port3} alt="portfolio image" className='' />
//           </div>
//           <div  className='w-[580px]'>
//             <img src={portfolio4} alt="portfolio image" />
//           </div>
//         </div>

//         {/* third row */}
//         <div className='flex gap-2'>
//           <div className='w-[580px]'>
//             <img src={portfolio1} alt="portfolio image" />
//           </div>
//           <div  className='w-[580px]'>
//             <img src={portfolio2} alt="portfolio image" />
//           </div>
//           <div className='w-[580px]'>
//             <img src={portfolio3} alt="portfolio image" />
//           </div>
//           <div  className='w-[580px]'>
//             <img src={portfolio7} alt="portfolio image" />
//           </div>
//         </div>

//       </section>
//     </div>
//   );
// }

// export default Portfolio;

import React from 'react';

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
      <section className="py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl">COMPLETED PROJECT</h2>
        <h2 className="font-bold">
          PAMANGA-DAKKA ROAD, BALI L.G.A, TARABA STATE
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={portfolio2} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p>
              <span className="font-bold">DATE OF AWARD: JULY 2021</span>{' '}
              <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>The
              project essentially entails the CONSTRUCTION OF PAMANGA – DAKKA
              ROAD. The road network comprises of a single carriageway of 12.8m
              width and approximately 35.9Km length, along the existing road
              alignment. It shall be made up of 200mm lateritic sub-base, 150mm
              stone base on the carriageway and 40mm asphaltic concrete wearing
              course. There shall also be an extensive construction of lined
              drains and culverts of various shapes and sizes.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={taraba3} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={taraba2} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={taraba1} alt="portfolio image" />
          </div>
        </div>
      </section>

      <section className="py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl">COMPLETED PROJECT</h2>
        <h2 className="font-bold">
          PAMANGA-DAKKA ROAD, BALI L.G.A, TARABA STATE
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={project2a} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p>
              <span className="font-bold">DATE OF AWARD: JULY 2021</span>{' '}
              <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>The
              project The road is a major connector from the Federal Capital
              Territory to the North Central state of Kogi and the Southern part
              of the country. The length of the reconstruction is about
              49.362km, of the dualized road. The works include the
              Reconstruction of a 49km single carriageway of 11.85m width. It
              shall be made up of, 150 mm regulation stone base as sub-base, 200
              mm crushed stone base, 60mm asphaltic concrete binder course, 60mm
              MB asphaltic concrete binder course, and 40mm MB asphaltic
              concrete wearing course. This also includes the construction of
              side drains and box culverts as required.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={project2b} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={project2c} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={taraba1} alt="portfolio image" />
          </div>
        </div>
      </section>

      <section className="py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl">COMPLETED PROJECT</h2>
        <h2 className="font-bold">
          PAMANGA-DAKKA ROAD, BALI L.G.A, TARABA STATE
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={project3a} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p>
              <span className="font-bold">DATE OF AWARD: JULY 2021</span>{' '}
              <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>The
              project essentially entails the CONSTRUCTION OF PAMANGA – DAKKA
              ROAD. The road network comprises of a single carriageway of 12.8m
              width and approximately 35.9Km length, along the existing road
              alignment. It shall be made up of 200mm lateritic sub-base, 150mm
              stone base on the carriageway and 40mm asphaltic concrete wearing
              course. There shall also be an extensive construction of lined
              drains and culverts of various shapes and sizes.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={project3c} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={taraba2} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={taraba1} alt="portfolio image" />
          </div>
        </div>
      </section>

      <section className="py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl">COMPLETED PROJECT</h2>
        <h2 className="font-bold">
          PAMANGA-DAKKA ROAD, BALI L.G.A, TARABA STATE
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={project3a} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p>
              <span className="font-bold">DATE OF AWARD: JULY 2021</span>{' '}
              <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>The
              project essentially entails the CONSTRUCTION OF PAMANGA – DAKKA
              ROAD. The road network comprises of a single carriageway of 12.8m
              width and approximately 35.9Km length, along the existing road
              alignment. It shall be made up of 200mm lateritic sub-base, 150mm
              stone base on the carriageway and 40mm asphaltic concrete wearing
              course. There shall also be an extensive construction of lined
              drains and culverts of various shapes and sizes.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={project4a} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={project4b} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={taraba1} alt="portfolio image" />
          </div>
        </div>
      </section>

      <section className="py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl">COMPLETED PROJECT</h2>
        <h2 className="font-bold">
          PAMANGA-DAKKA ROAD, BALI L.G.A, TARABA STATE
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={completed2} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p>
              <span className="font-bold">DATE OF AWARD: JULY 2021</span>{' '}
              <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>The
              project essentially entails the CONSTRUCTION OF PAMANGA – DAKKA
              ROAD. The road network comprises of a single carriageway of 12.8m
              width and approximately 35.9Km length, along the existing road
              alignment. It shall be made up of 200mm lateritic sub-base, 150mm
              stone base on the carriageway and 40mm asphaltic concrete wearing
              course. There shall also be an extensive construction of lined
              drains and culverts of various shapes and sizes.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={completed3} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={completed3} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={completed3} alt="portfolio image" />
          </div>
        </div>
      </section>

      <section className="py-8 container lg:px-36 mx-auto space-y-2 ">
        <h2 className="text-xl">COMPLETED PROJECT</h2>
        <h2 className="font-bold">
          PAMANGA-DAKKA ROAD, BALI L.G.A, TARABA STATE
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 ">
            <img src={completed2} alt="portfolio image" />
          </div>
          <div className="w-full lg:w-1/2">
            <p>
              <span className="font-bold">DATE OF AWARD: JULY 2021</span>{' '}
              <br></br>{' '}
              <span className="font-bold"> PROJECT DESCRIPTION: </span>The
              project essentially entails the CONSTRUCTION OF PAMANGA – DAKKA
              ROAD. The road network comprises of a single carriageway of 12.8m
              width and approximately 35.9Km length, along the existing road
              alignment. It shall be made up of 200mm lateritic sub-base, 150mm
              stone base on the carriageway and 40mm asphaltic concrete wearing
              course. There shall also be an extensive construction of lined
              drains and culverts of various shapes and sizes.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={completed6} alt="portfolio image" />
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <img src={completed7} alt="portfolio image" />
          </div>

          <div className="w-full lg:w-1/2">
            <img src={completed7} alt="portfolio image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
