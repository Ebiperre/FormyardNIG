import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section className='2xl:max-container 4xl:max-none  relative flex flex-col px-8 lg:px-20 py-10 lg:mb-10 lg:py-10 xl:mb-20'>
        <div className='bg-[#EAF3F5] rounded-xl p-5 pb-12 space-y-4 text-center lg:text-left'>
            <h2 className='lg:bold-56 bold-28 lg:leading-[64px] text-center lg:text-left'>Have any Upcoming Project?</h2>
            <p className='w-full text-center lg:text-left'>We bring your ideas to life with quality craftsmanship and innovative Formwork solution.</p>
            <button className='rounded-full text-black text-base font-bold lg:text-start bg-[#FFDD00] px-12  py-3 '>
                <Link to="/contact">
                Get Started
                </Link>
                
            </button>

        </div>
      
    </section>
  )
}

export default Projects
