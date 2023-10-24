import React from 'react';
import Heading from './Heading';
import Image from '../assets/Shape.png';

const Clients = () => {
  const heading = ' Clients Voices of Satisfaction';
  const text =
    'Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei, at nihil tantas platonem eos. Mazim nemore singulis an ius, nullam ornatus nam ei.';

  return (
    <section className="mx-auto  px-28">
      <Heading heading={heading} text={text} />
      <div className="grid grid-cols-3 pt-8 ">
        <div className="flex flex-col text-center gap-4">
          <p className="text-[#999]">
            "Et vim graeco principes. Cu dico nullam pri stet possim quaerendum
            invenire platonem animal assentior nam."
          </p>

          <div className="text-center">
            <div className="flex flex-col gap-4">
              <div className='grid place-content-center'>
                <img src={Image} alt="clients" />
              </div>
            </div>
            <h2>Amelia Edwards</h2>
            <small>Google Inc</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
