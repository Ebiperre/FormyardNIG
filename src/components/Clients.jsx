import React from 'react';
import Heading from './Heading';
import Image from '../assets/Shape.png';
import { CLIENTS } from '../constants';

const Clients = () => {
  const heading = ' Clients Voices of Satisfaction';
  const text =
    'Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei, at nihil tantas platonem eos. Mazim nemore singulis an ius, nullam ornatus nam ei.';

  const data = [
    {
      text: 'Et vim graeco principes. Cu dico nullam pri stet possim quaerendum invenire platonem animal assentior nam.',
      name: 'Amelia Edwards',
      company: 'Google Inc',
    },
    {
      text: 'Nam natum volutpat eu. Natum elitr vel te. Id qui purto dicit, bonorum minimum et sit assum tation homero.',
      name: 'Darika Samak',
      company: 'Apple',
    },
    {
      text: 'Et vim graeco principes. Cu dico nullam pri stet possim quaerendum invenire platonem animal assentior nam.',
      name: 'Darika Samak',
      company: 'Microsoft',
    },
  ];

  return (
    <section className="2xl:max-container 4xl:max-none  relative flex flex-col px-10 lg:px-20 py-10 lg:mb-10 lg:py-20 xl:mb-20">
      {/* <Heading heading={heading} text={text} /> */}
      <div className="flexCenter flex-col mt-14 w-full">
        <h1 className="bold-56">Clients Voices of Satisfaction</h1>
        <p className="regular-20 lg:w-[782px] pt-7">Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,at nihil tantas platonem eos. Mazim nemore singulis an ius, nullamornatus nam ei.</p>
      </div>
      <div className="grid lg:grid-cols-3 py-12 ">
        {CLIENTS.map((client) => (
          <div className="flex flex-col text-center gap-4">
          <p className="text-[#999]">{client.text}</p>

          <div className="text-center">
            <div className="flex flex-col gap-4">
              <div className="grid place-content-center">
                <img src={Image} alt="clients" />
              </div>
            </div>
            <h2>{client.name}</h2>
            <small>{client.company}</small>
          </div>
        </div>
        ))}
        {/* {data.map((client) => (
          <div className="flex flex-col text-center gap-4">
            <p className="text-[#999]">{client.text}</p>

            <div className="text-center">
              <div className="flex flex-col gap-4">
                <div className="grid place-content-center">
                  <img src={Image} alt="clients" />
                </div>
              </div>
              <h2>{client.name}</h2>
              <small>{client.company}</small>
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default Clients;
