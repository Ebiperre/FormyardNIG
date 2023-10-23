import hero from '../assets/Hero.png';
import logo from '../assets/Logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { Outlet, Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${hero})` }}
      className="min-h-[768px]  bg-cover"
    >
      {/* hero content  */}
      <div className="container px-36 mx-auto">
        <div className=" w-full flex justify-between pt-2">
          <div className="w-24">
          <Link to={`/`} className="font-bold"><img src={logo} /></Link>
          </div>
          <button className="bg-white text-black rounded-full p-2">
            <AiOutlineMenu size={20} />
          </button>
        </div>

        {/* CTA */}
        <div className="grid gap-[24px]  w-3/4 h-screen justify-center items-center   place-content-center">
          <h1 className=" font-bold text-7xl text-white ">
            Build Your Vision With Precision
          </h1>
          <p className="text-white font-normal w-4/5 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            enim similique magni ipsum quia vero, numquam voluptates libero
            nesciunt a!
          </p>
          <div>
            <button className="rounded-full text-black text-base font-bold text-start bg-[#FFDD00] px-12  py-3">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
