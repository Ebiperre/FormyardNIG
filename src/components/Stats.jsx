
import { AiOutlinePercentage, AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { FEATURES } from "../constants";


const data = [
  { stats: "100", icon: true, text: "projects Completed", text2: "Always building quality industries" },
  { stats: "95", icon: false, text: "Satisfaction Rate", text2: "Best manufacturing service provider" },
  { stats: "200", icon: true, text: "Satisfied Clients", text2: "Using the newest manufacturing tech" },
  { stats: "150", icon: true, text: "Qualified Engineers", text2: "Experiences trusted contractor" },

]

const Stats = () => {
  return (
    
    <section className="px-10 lg:px-36 mx-auto  bg-[#E9F3FF] bg-red ">
      {/* container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-20 py-6">
        {FEATURES.map((stats) => (
          <div className="flex flex-col place-content-center lg:gap-[32px] h-full lg:min-h-[348px]  w-fit  ">
            <div className="gap-3">
              <div className="flex items-center gap-2 font-bold text-2xl">
                <h2>{stats.stats}</h2>
              </div>
              <p className="text-base">{stats.title}</p>
            </div>
            <div className="flex  items-center gap-4 w-[240px] h-[78px]  rounded-full  border border-black py-4 px-7 ">
              <AiFillCheckCircle size={32} />
              <p className="text-base">{stats.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
