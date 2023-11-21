import React from 'react'
import brand1 from '../assets/brands/eko-dev-logo.png';
import brand2 from '../assets/brands/megastar.png';
import brand3 from '../assets/brands/hi_tech-logo.jpeg';
import brand4 from '../assets/brands/south_energy_logo-removebg-preview.png';
import lafa1 from '../assets/brands/lafa1.webp';
import lafa2 from '../assets/brands/lafa2.png';

const Brands = () => {
  return (
    <section className='flex flex-col md:flex-row  gap-6 py-6 justify-center items-center md:gap-12 lg:gap-24'>
  
        <div>
            <img src={brand1} alt="barnd logo" className='w-[150px]' />
        </div>
        <div>
            <img src={brand2} alt="barnd logo" className='w-[150px]' />
        </div>
        <div>
            <img src={brand3} alt="barnd logo" className='w-[50px]' />
        </div>

        <div>
            <img src={lafa2} alt="barnd logo" className='w-[100px]' />
        </div>
        <div>
            <img src={brand4} alt="barnd logo" className='w-[150px]' />
        </div>
    </section>
  )
}

export default Brands
