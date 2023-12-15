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
        <h1 className="bold-28 text-center md:text-left lg:bold-56   lg:px-0">Tailored Formwork Solutions</h1>
        <p className="md:regular-20  lg:w-[782px] pt-7 text-center">
        At Formyard Ltd, we are committed to sustainable formwork system 
practices
, by  using cost effective and safe solutions, while helping the clients achieve his target for delivery accurately, without compromising quality and safety on the environment. 
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[23px] mt-14  ">
        {SOLUTIONS.map((solution) => (
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
