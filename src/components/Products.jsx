import { AiFillCheckCircle } from 'react-icons/ai';

const data = [
    {  heading:"Proven Track Record", text: "We have a decade of successful projects.", color: "#FFF3E"},
    {  heading:"Quality Assurance", text: "Meticulous attention to details.", color: "bg-green-500"},
    {  heading:"Client-Centric Approach", text: "Effective, transparent, and collaborative.", color: "bg-green-500"},


]

const Services = () => {
  return (
    <section className="mx-auto  px-28">
      <div className="mt-14 text-center">
        <h1 className="text-[64px]  text-3xl font-bold">Elevate Your Projects with Our Products</h1>
        <p className=" mt-8 w-3/5 mx-auto ">
        Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei, at nihil tantas platonem eos. Mazim nemore singulis an ius, nullam ornatus nam ei.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[23px] mt-14 ">
        {data.map((stat) =>(
                   <div className={`grid gap-[28px] p-[24px] bg-[#FFF3E3] rounded-xl`}>
             <span>
               <AiFillCheckCircle size={18} />
             </span>
             <div className="grid ">
            
               <p>{stat.text}</p>
             </div>
           </div>

        ))}
       
      

    
      </div>
    </section>
  );
};

export default Services;
