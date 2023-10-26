import { AiOutlineArrowRight } from 'react-icons/ai';
import Image from '../assets/construction.jpg';
import { SOLUTIONS } from '../constants';

const data = [
  { heading: "Design and Planning Services", text: "Our expert design and planning services ensure meticulous execution" },
  { heading: "Construction and Building", text: "From groundbreaking to finishing touches, we bring your vision to life with precision." },
  { heading: "Renovation and Remodeling", text: "Enhance existing spaces or rejuvenate structure with tailored solutions" },


]

const Services = () => {
  return (
    <section className="2xl:max-container lg:mt-14 relative flex flex-col px-8 lg:px-20  lg:mb-10  xl:mb-20">
      <div className="flexCenter flex-col mt-14 w-full">
        <h1 className="bold-50 lg:bold-56 px-5 lg:px-0">Tailored Construction Solutions</h1>
        <p className="regular-20 lg:w-[782px] pt-7">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei, at nihil tantas platonem eos. Mazim nemore singulis an ius, nullam ornatus nam ei.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-[23px] mt-14 ">
        {SOLUTIONS.map((solution) => (
          <div
            style={{ backgroundImage: `url(${Image})` }}
            className="flex flex-col w-full justify-end gap-[20px] h-[320px] lg:h-[455px] w-[ 379px] bg-[#FFF3E3] rounded-xl px-3 py-6">

            <div className="grid gap-4 text-white w-full  ">
              <h2 className="font-bold text-[20px] w-full">{solution.heading}</h2>
              <p className='text-[14px]'>{solution.title}</p>
            </div>
            <div className='text-white flex items-center gap-1 '>
              <a href="">Learn more</a>
              <span> < AiOutlineArrowRight /></span>
            </div>
          </div>
        ))}
        {/* {data.map((stat) =>(
        <div
        style={{ backgroundImage: `url(${Image})` }}
         className="flex flex-col w-full justify-end gap-[20px]  h-[455px] w-[ 379px] bg-[#FFF3E3] rounded-xl px-3 py-6">
        
             <div className="grid gap-4 text-white w-full  ">
               <h2 className="font-bold text-[20px] w-full">{stat.heading}</h2>
               <p className='text-[14px]'>{stat.text}</p>
             </div>
             <div className='text-white flex items-center gap-1 '>
                <a href="">Learn more</a>
                <span> < AiOutlineArrowRight /></span>
             </div>
           </div>

        ))} */}




      </div>
    </section>
  );
};

export default Services;
