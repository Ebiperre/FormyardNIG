import { AiOutlineArrowRight } from 'react-icons/ai';
import Image from '../assets/construction.jpg';

const data = [
    {  heading:"Design and Planning Services", text: "Our expert design and planning services ensure meticulous execution"},
    {  heading:"Construction and Building", text: "From groundbreaking to finishing touches, we bring your vision to life with precision."},
    {  heading:"Renovation and Remodeling", text: "Enhance existing spaces or rejuvenate structure with tailored solutions"},


]

const Services = () => {
  return (
    <section className="mx-auto  px-28">
      <div className="mt-14 text-center">
        <h1 className="text-[64px]  text-3xl font-bold">Tailored Construction Solutions</h1>
        <p className=" mt-8 w-3/5 mx-auto ">
        Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei, at nihil tantas platonem eos. Mazim nemore singulis an ius, nullam ornatus nam ei.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[23px] mt-14 ">
        {data.map((stat) =>(
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

        ))}
       
      

    
      </div>
    </section>
  );
};

export default Services;
