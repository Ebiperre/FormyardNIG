// import hero from '../assets/pexels-ljupco-dzambazovski-1398761.jpg';
// import hero from '../assets/hero-image.jpg';
import hero from '../assets/hero-image2.jpg';
import logo from '../assets/Logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { Outlet, Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
    // style={{ backgroundImage: `url(${hero})` }}
    // className=" max-container 4xl:max-none padding-container flex flex-col gap-20 py-2 pb-32 md:gap-28 lg:pb-20 lg:pt-2 xl:flex-row "
    >
      {/* put bg image in tailwindconfig file */}
      {/* hero content  */}
      {/* <div className="relative z-20 flex flex-1 flex-col xl:w-1/2"> */}

      {/* CTA */}
      {/* <div className="flex flex-1 item-start flex-col py-16 lg:py-44 gap-3 lg:gap-6  z-999 ">
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
        </div> */}
      {/* </div> */}

      <div class="relative mx-auto ">
        <div>
          <img
            src={hero}
            alt=""
            className="h-screen w-full object-cover rounded-md"
          />
        </div>
        <div class="absolute inset-0 bg-gray-700 opacity-60 "></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div className="flex  flex-1 item-start flex-col  justify-center lg:py-44  lg:gap-6  z-999 max-container 4xl:max-none padding-container   py-2 pb-32 gap-4 lg:pb-20 lg:pt-2  ">
            <h1 className="bold-28 md:bold-52 lg:bold-88 text-white">
              BUILDING YOUR VISION
            </h1>
            <p className="text-white regular-14 lg:regular-20 lg:w-[570px]">
              We bring your ideas to life with quality craftsmanship.
            </p>
            <div>
              <button className="rounded-full text-black text-base font-bold text-start bg-[#FFDD00] px-12  py-3">
                <Link to="/contact">
                  Contact us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
