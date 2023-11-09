import { AiOutlineArrowRight } from 'react-icons/ai';
import Image from '../assets/construction.jpg';
import train1 from "../assets/portfolio/training1.jpg"
import train2 from "../assets/portfolio/training2.jpg"
import train3 from "../assets/portfolio/training3.jpg"
import { SOLUTIONS } from '../constants';

const Services = () => {
  return (
    <section className="2xl:max-container 4xl:max-none  lg:mt-14 relative flex flex-col px-5 md:px-10 lg:px-20  lg:mb-10  xl:mb-20">
      <div className="flexCenter flex-col mt-14 w-full">
        <h1 className="bold-28 text-center md:text-left lg:bold-56   lg:px-0">Tailored Construction Solutions</h1>
        <p className="md:regular-20  lg:w-[782px] pt-7 text-center">
        At Formyard Nig Ltd, we are committed to sustainable and eco-friendly construction practises. We use green building materials and techniques whenever possible to reduce our impact on the environment.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[23px] mt-14  ">
        {SOLUTIONS.map((solution) => (
          // <div
          //   style={{ backgroundImage: `url(${Image})` }}
          //   className="flex flex-col w-full justify-end gap-[20px] h-[320px] lg:h-[455px] w-[ 379px] bg-[#FFF3E3] rounded-xl px-3 py-6 bg-no-repeat bg-cover bg-center">

          //   <div className="grid gap-4 text-white w-full  ">
          //     <h2 className="font-bold text-[20px]  w-full">{solution.heading}</h2>
          //     <p className='text-[14px]'>{solution.title}</p>
          //   </div>
          //   <div className='text-white flex items-center gap-1 '>
          //     <a href="">Learn more</a>
          //     <span> < AiOutlineArrowRight /></span>
          //   </div>
          // </div>
        //   <div class="relative mx-auto ">
        //   <div>
        //     <img
        //       src={Image}
        //       alt=""
        //       className=" h-[320px] lg:h-[455px] w-full object-cover rounded-md"
        //     />
        //   </div>
        //   <div class="absolute inset-0 bg-gray-700 opacity-60 "></div>
        //   <div class="absolute inset-0 flex items-center justify-center">
        //     <div className="flex  flex-1 item-start flex-col  justify-center lg:py-44  lg:gap-6  z-999 max-container 4xl:max-none padding-container   py-2 pb-32 gap-4 lg:pb-20 lg:pt-2  ">
        //       <h1 className="bold-28 md:bold-52 lg:bold-88 text-white">
        //         BUILDING YOUR VISION
        //       </h1>
        //       <p className="text-white regular-14 lg:regular-20 lg:w-[570px]">
        //         We bring your ideas to life with quality craftsmanship.
        //       </p>
        //       <div>
        //         <button className="rounded-full text-black text-base font-bold text-start bg-[#FFDD00] px-12  py-3">
        //           <Link to="/contact">
        //             Contact us
        //           </Link>
        //         </button>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-4 pt-40 pb-3  md:px-4  lg:px-6  w-full   mb:pb-4 lg:pb-8 md:pt-60 lg:pt-80 max-w-sm mx-auto ">
          <img   src={solution.image} className="absolute inset-0 h-full w-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 class="z-10 mt-3   text-white">{solution.title}</h3>
        <div class="z-10 gap-y-1 overflow-hidden font-bold text-sm leading-6 text-gray-300">{solution.heading}</div>
       </article>   
        ))}
      </div>
    </section>
  );
};

export default Services;
