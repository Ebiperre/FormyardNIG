import { useState } from 'react';
// import contact from '../assets/contact.png';
// import logo from '../assets/Logo.png';
// import map from '../assets/map.png';
// import { Outlet, Link } from 'react-router-dom';

import fav6 from '../assets/portfolio/fav6.jpg';

// import { AiOutlineMenu } from 'react-icons/ai';

function Contact() {
  const handleSubmit = () => {
    setTimeout(() => {
      setEmail('');
      setName('');
      setMessage('');
    }, 1000); // Adjust the delay time in milliseconds as needed
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div>
      <div className="relative mx-auto ">
        <div>
          <img
            src={fav6}
            alt=""
            className="h-screen w-full object-cover rounded-md"
          />
        </div>
        <div className="absolute inset-0 bg-gray-700 opacity-60 "></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex  flex-1 item-start flex-col  justify-center lg:py-44  lg:gap-6  z-999 max-container 4xl:max-none padding-container   py-2 pb-32 gap-4 lg:pb-20 lg:pt-2  ">
            <h1 className="bold-28 md:bold-52 lg:bold-88 text-white">
              Get in touch with us for more information
            </h1>
            <p className="text-white regular-14 lg:regular-20 lg:w-[570px]">
              If you need help or question, we’re here for you
            </p>
            <div>
              {/* <button className="rounded-full text-black text-base font-bold text-start bg-[#FFDD00] px-12  py-3">
                <Link to="/contact">
                  Contact us
                </Link>
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* conatct form */}
      <section className="relative padding-container max-container flex flex-col py-16 lg:py-44 gap-3 lg:gap-6">
        <div className="flex flex-col lg:flex-row gap-3">
          <div>
            <h2 className=" text-3xl font-bold space-y-4 ">Contact us Today</h2>
            <p className="lg:w-4/5 text-black/50 text-gray-30">
              Our team is available to assist you during our business hours. We
              will do our best to respond to your inquiry as quickly as
              possible.
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-0 lg:-mt-[105px]">
            {/* card items */}
            <div className="shadow p-8 rounded-xl  flex-col flexCenter border bg-[#FD0] ">
              <h2 className=" text-xl font-bold w-[182.216px]">
                Get directions to our office
              </h2>
              <p className="w-[209.544px] regular-18 pl-[14px]">
                Julius Berger – Palava Yard Off Ajah, Lekki Expressway Ajah,
                Lagos | Nigeria
              </p>
            </div>
            <div className="shadow p-8 rounded-xl flex-col flexCenter border bg-[#FD0]">
              <h2 className="text-xl font-bold">Contact our support team</h2>
              <p className="regular-18 "> +234 (0)813 860 5060</p>
              <p className="regular-18 "> +234 (0)813 965 0205</p>
            </div>
            <div className="shadow p-8 rounded-xl flex-col flexCenter border bg-[#FD0]">
              <h2 className=" text-xl font-bold ">Send us an email</h2>
              <p className="regular-18 ">Kevork@formyardnig.com</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white padding-container max-container pb-20">
        <div className="flexCenter flex-col-reverse lg:flex-row gap-6  ">
          {/* map */}
          <div className="px-2 md:px-0">
            <iframe
              width="400"
              height="600"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20%20%20Julius%20Berger%20%E2%80%93%20Palava%20Yard%20Off%20Ajah,%20Lekki%20Expressway%20Ajah,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Lagos+(formyardNig)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>

          
          </div>
          {/* contact form */}
          <div className="flex flex-col w-full lg:w-[397px] gap-[29px] justify-center ">
            <h2 className="bold-32">Contact Form</h2>

            <form
              className="flex flex-col space-y-4 mt-4"
              action="https://formsubmit.co/ezeoyeg@gmail.com"
              method="POST"
            >
              <label htmlFor="" className="flex flex-col space-y-3">
                <span className="regular-16">Full Name</span>
                <input
                  required
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  name="Name"
                  placeholder="john Doe"
                  className="py-4 px-6 border border-[#939294] rounded-md"
                />
              </label>
              <label htmlFor="" className="flex flex-col space-y-3">
                <span className="regular-16">Email Address</span>
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="Email"
                  placeholder="@mail.com"
                  className="py-4 px-6 border border-[#939294] rounded-md"
                />
              </label>
              <label htmlFor="" className="flex flex-col space-y-3">
                <span className="regular-16">Message</span>
                <textarea
                  name="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  id=""
                  cols="30"
                  rows="5"
                  className="border rounded-md border-[#939294] p-4 text-[#878787]"
                  placeholder="Enter Your Message"
                ></textarea>
              </label>
              <div className="pt-4">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-[#FD0]  w-full py-4 px-6 rounded-md font-bold text-white"
                >
                  Submit
                </button>
                <p className="text-center mt-4">Speak with a rep</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
