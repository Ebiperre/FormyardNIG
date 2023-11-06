import hero from '../assets/pexels-ljupco-dzambazovski-1398761.jpg';
import logo from '../assets/Logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { Outlet, Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${hero})` }}
      className="relative max-container 4xl:max-none padding-container flex flex-col gap-20 py-2 pb-32 md:gap-28 lg:pb-20 lg:pt-2 xl:flex-row bg-cover bg-center"
    >
      {/* put bg image in tailwindconfig file */}
      {/* hero content  */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        

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
