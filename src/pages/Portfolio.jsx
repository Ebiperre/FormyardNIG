import React from 'react';

import portfolio from '../assets/portfolio.png';

import blog from '../assets/about.png';
import about2 from '../assets/about2.png';


//portfolio images
import portfolio1 from '../assets/portfolio1.png';
import portfolio2 from '../assets/portfolio2.png';
import portfolio3 from '../assets/portfolio3.png';
import portfolio4 from '../assets/portfolio4.png';
import portfolio5 from '../assets/portfolio5.png';
import portfolio6 from '../assets/portfolio6.png';
import portfolio7 from '../assets/portfolio7.png';
import portfolio8 from '../assets/portfolio8.png';


function Portfolio() {
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
      <section  className="py-8 container px-36 mx-auto space-y-2">
        <h2>Recent work</h2>
        {/* first row */}
        <div className='flex gap-2'>
          <div className='w-[580px]'>
            <img src={portfolio8} alt="portfolio image" />
          </div>
          <div  className='w-[580px]'>
            <img src={portfolio6} alt="portfolio image" />
          </div>
        </div>

        {/* second row */}
        <div className='flex gap-2'>
          <div className='w-[580px]'>
            <img src={portfolio5} alt="portfolio image" />
          </div>
          <div  className='w-[580px]'>
            <img src={portfolio4} alt="portfolio image" />
          </div>
        </div>

        {/* third row */}
        <div className='flex gap-2'>
          <div className='w-[580px]'>
            <img src={portfolio1} alt="portfolio image" />
          </div>
          <div  className='w-[580px]'>
            <img src={portfolio2} alt="portfolio image" />
          </div>
          <div className='w-[580px]'>
            <img src={portfolio3} alt="portfolio image" />
          </div>
          <div  className='w-[580px]'>
            <img src={portfolio7} alt="portfolio image" />
          </div>
        </div>

        
      </section>
    </div>
  );
}

export default Portfolio;
