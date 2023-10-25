import React from 'react';

import blog from '../assets/blog.png';
import logo from '../assets/Logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { Outlet, Link } from 'react-router-dom';

function Blog() {
  return (
    <div>
      <header
        style={{
          backgroundImage: `url(${blog})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="min-h-[551px]"
      >
        <div className="container px-36 mx-auto">
          <div className=" w-full flex justify-between pt-2">
            <div className="w-24">
              <Link to={`/`} className="font-bold">
                <img src={logo} />
              </Link>
            </div>
            <button className="bg-white text-black rounded-full p-2">
              <AiOutlineMenu size={20} />
            </button>
          </div>

          {/* CTA */}
          <div className="grid gap-[24px] text-center  w-full  h-screen justify-center items-center   place-content-center">
            <h1 className=" font-bold text-5xl text-white w-3/5 mx-auto ">
              Blog
            </h1>
            <p className="text-white font-normal w-4/5  mx-auto  ">
              If you need help or question, we’re here for you
            </p>
          </div>
        </div>
      </header>
      <section className='py-8 container px-36 mx-auto' >
        <h2 className='text-xl'>Recent blog posts</h2>
        <div className='pt-8 flex '>
          <div>

          </div>
          <div>

          </div>
          
        </div>

      </section>
    </div>
  );
}

export default Blog;
