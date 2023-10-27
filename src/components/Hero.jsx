import hero from '../assets/Hero.png';
import logo from '../assets/Logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { Outlet, Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${hero})` }}
      className="relative max-container padding-container flex flex-col gap-20 py-2 pb-32 md:gap-28 lg:pb-20 lg:pt-2 xl:flex-row bg-cover"
    >
      {/* put bg image in tailwindconfig file */}
      {/* hero content  */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <div className=" w-full flexBetween pt-2">
          <div className="w-24">
          <Link to={`/`} className="font-bold"><img src={logo} /></Link>
          </div>
          <button className="bg-white text-black rounded-full p-2">
            <AiOutlineMenu size={20} />
          </button>
        </div> */}

        {/* CTA */}
        <div className="relative flex flex-1 item-start flex-col py-16 lg:py-44 gap-3 lg:gap-6">
          <h1 className="bold-52 lg:bold-88 text-white">
          BUILDING YOUR VISION
          </h1>
          <p className="text-white regular-14 lg:regular-20 lg:w-[570px]">
          We bring your ideas to life with quality craftsmanship.


          </p>
          <div>
            <button className="rounded-full text-black text-base font-bold text-start bg-[#FFDD00] px-12  py-3">
              contact us
            </button>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
