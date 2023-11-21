import React from 'react';
import Heading from './Heading';
import Image from '../assets/Shape.png';
import { CLIENTS } from '../constants';

const Clients = () => {

  return (
    <section className="2xl:max-container 4xl:max-none  relative flex flex-col px-5 md:px-10 lg:px-20 py-10 lg:mb-10 lg:py-20 xl:mb-20">
      {/* <Heading heading={heading} text={text} /> */}
      <div className="flexCenter flex-col mt-14 w-full">
        <h1 className="bold-28 text-center lg:text-left lg:bold-56">Clients Voices of Satisfaction</h1>
        <p className="md:regular-20 lg:w-[782px] pt-7 text-center">OUR REPUTATION IN THE WORDS OF OUR CUSTOMERS</p>
      </div>
      <div className="grid md:grid-cols-2 md:gap-3 lg:grid-cols-3 py-12 ">
        {CLIENTS.map((client, index) => (
          <div className="flex flex-col text-center gap-4 ">
          <p className="text-[#999]">{client.text}</p>

          <div className="text-center">
            <div className="flex flex-col items-center justify-start ">
              <div className=" text-center  ">
              <img
          src={client.image}
          alt="clients"
          style={{ width: '100px', paddingTop: index === 0 ? '35px' : '0' }}
        />
              </div>
            </div>
            {/* <h2>{client.name}</h2> */}
            {/* <small>{client.company}</small> */}
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
