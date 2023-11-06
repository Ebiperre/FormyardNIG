import { AiOutlineArrowRight } from 'react-icons/ai';
import Image from '../assets/construction.jpg';
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[23px] mt-14 ">
        {SOLUTIONS.map((solution) => (
          <div
            style={{ backgroundImage: `url(${Image})` }}
            className="flex flex-col w-full justify-end gap-[20px] h-[320px] lg:h-[455px] w-[ 379px] bg-[#FFF3E3] rounded-xl px-3 py-6 bg-no-repeat bg-cover bg-center">

            <div className="grid gap-4 text-white w-full  ">
              <h2 className="font-bold text-[20px]  w-full">{solution.heading}</h2>
              <p className='text-[14px]'>{solution.title}</p>
            </div>
            <div className='text-white flex items-center gap-1 '>
              <a href="">Learn more</a>
              <span> < AiOutlineArrowRight /></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
