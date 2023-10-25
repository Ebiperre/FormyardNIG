import React from 'react';

import blog from '../assets/blog.png';
import logo from '../assets/Logo.png';
import image from '../assets/Image.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/Image2.png';

import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import blog4 from '../assets/blog4.png';
import blog5 from '../assets/blog5.png';
import blog6 from '../assets/blog6.png';
import blog7 from '../assets/blog7.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { Outlet, Link } from 'react-router-dom';



const data = [
  { 
    image: 'blog1',
    date: "Natali Craig • 1 Jan 2023",
    heading: "How collaboration makes us better designers",
    text: "Collaboration can make our teams stronger, and our individual designs better.",
    tags: [
      "Design","Research"
    ]
  },
  { 
    image: 'blog2',
    date: "Drew Cano • 1 Jan 2023",
    heading: "Our top 10 Javascript frameworks to use",
    text: "JavaScript frameworks make development easy with extensive features and functionalities.",
    tags: [
      "Design","Research"
    ]
  },
  

]

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
      <section className="py-8 container px-36 mx-auto ">
        <h2 className="text-xl">Recent blog posts</h2>
        <div className="pt-8 flex gap-4 ">
          <div className="w-1/2">
            <div>
              <img src={image} alt="" />
            </div>
            <small>Olivia Rhye • 1 Jan 2023</small>
            <h2 className="text-2xl">UX review presentations</h2>
            <p className="text-[#667085]">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
          </div>
          <div className="flex flex-col w-1/2 bg-red-300">
            {/* first card */}
            <div className="flex gap-2">
              <div >
                <img src={image1} alt="blog image"  className='h-[200px]' />
              </div>

              <div>
                <small>Phoenix Baker • 1 Jan 2023</small>
                <h2 className="text-xl">Migrating to Linear 101</h2>
                <p className="text-[#667085]">
                  {' '}
                  Linear helps streamline software projects, sprints, tasks, and
                  bug tracking. Here’s how to get...
                </p>
                <div className="flex items-center">
                  <button>Design</button>
                  <button>Design</button>
                </div>
              </div>
            </div>
            {/* end of first card */}
            <div className="flex gap-2">
              <div >
                <img src={image1} alt="blog image"  className='h-[200px]' />
              </div>

              <div>
                <small>Phoenix Baker • 1 Jan 2023</small>
                <h2 className="text-xl">Migrating to Linear 101</h2>
                <p className="text-[#667085]">
                  {' '}
                  Linear helps streamline software projects, sprints, tasks, and
                  bug tracking. Here’s how to get...
                </p>
                <div className="flex items-center">
                  <button>Design</button>
                  <button>Design</button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
      <section className="py-8 container px-36 mx-auto ">
        <div className="flex gap-4">
          <div className="w-1/2 ">
            <img src={image} alt="blog image" className="w-full h-[246px]" />
          </div>
          <div className="w-1/2  space-y-4">
            <small className="text-[#6941C6]">Olivia Rhye • 1 Jan 2023</small>
            <h2 className="text-xl font-semibold">
              Grid system for better Design User Interface
            </h2>
            <p className="text-sm">
              A grid system is a design tool used to arrange content on a
              webpage. It is a series of vertical and horizontal lines that
              create a matrix of intersecting points, which can be used to align
              and organize page elements. Grid systems are used to create a
              consistent look and feel across a website, and can help to make
              the layout more visually appealing and easier to navigate.
            </p>
            <div className="flex gap-4">
              <button className="text-sm text-[#6941C6] bg-[#F9F5FF] py-1 px-3 rounded-full">
                Design
              </button>
              <button className="text-sm rounded-full  py-1 px-3 text-[#C11574] bg-[#FDF2FA]">
                Interface
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* all blog post */}
      <section className="pb-8 container px-36 mx-auto">
        <h2 className="text-xl font-bold mb-4">All blog posts</h2>
        <div className="grid grid-cols-4 gap-4">

          <div className="space-y-2 w-full">
            <div>
              <img src={blog1} alt="blog image" />
            </div>
            <small className="text-[#6941C6]">Alec Whitten • 1 Jan 2023</small>
            <h2 className="text-[16px] font-bold">Bill Walsh leadership lessons</h2>
            <p className="text-sm">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex gap-4">
              <button className="text-sm text-[#6941C6] bg-[#F9F5FF] py-1 px-3 rounded-full">
                Design
              </button>
              <button className="text-sm rounded-full  py-1 px-3 text-[#C11574] bg-[#FDF2FA]">
                Interface
              </button>
            </div>
          </div>


          <div className="space-y-2 w-full">
            <div>
              <img src={blog1} alt="blog image" />
            </div>
            <small className="text-[#6941C6]">Alec Whitten • 1 Jan 2023</small>
            <h2 className="text-[16px] font-bold">Bill Walsh leadership lessons</h2>
            <p className="text-sm">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex gap-4">
              <button className="text-sm text-[#6941C6] bg-[#F9F5FF] py-1 px-3 rounded-full">
                Design
              </button>
              <button className="text-sm rounded-full  py-1 px-3 text-[#C11574] bg-[#FDF2FA]">
                Interface
              </button>
            </div>
          </div>

          <div className="space-y-2 w-full">
            <div>
              <img src={blog1} alt="blog image" />
            </div>
            <small className="text-[#6941C6]">Alec Whitten • 1 Jan 2023</small>
            <h2 className="text-[16px] font-bold">Bill Walsh leadership lessons</h2>
            <p className="text-sm">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="flex gap-4">
              <button className="text-sm text-[#6941C6] bg-[#F9F5FF] py-1 px-3 rounded-full">
                Design
              </button>
              <button className="text-sm rounded-full  py-1 px-3 text-[#C11574] bg-[#FDF2FA]">
                Interface
              </button>
            </div>
          </div>

          <div className="space-y-2 w-full">
            <div>
              <img src={blog1} alt="blog image" />
            </div>
            <small className="text-[#6941C6]">Alec Whitten • 1 Jan 2023</small>
            <h2 className="text-[16px] font-bold">Bill Walsh leadership lessons</h2>
            <p className="text-sm">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>
            <div className="grid grid-cols-3 gap-4">
              <button className="text-sm text-[#6941C6] bg-[#F9F5FF] py-1 px-3 rounded-full">
                Design
              </button>
              <button className="text-sm rounded-full  py-1 px-3 text-[#C11574] bg-[#FDF2FA]">
                Interface
              </button>
            </div>
          </div>




        </div>
      </section>
    </div>
  );
}

export default Blog;
