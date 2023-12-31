import { AiFillCheckCircle } from 'react-icons/ai';
import { SERVICES } from '../constants';

const data = [
  {
    heading: 'Proven Track Record',
    text: 'We have a decade of successful projects.',
    color: '#FFF3E',
  },
  {
    heading: 'Quality Assurance',
    text: 'Meticulous attention to details.',
    color: 'bg-green-500',
  },
  {
    heading: 'Client-Centric Approach',
    text: 'Effective, transparent, and collaborative.',
    color: 'bg-green-500',
  },
];

const heading = ' Why Choose Doka?';
const text =
  'Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,at nihil tantas platonem eos. Mazim nemore singulis an ius, nullamornatus nam ei.';

const Services = () => {
  return (
    <section className="2xl:max-container 4xl:max-none  relative flex flex-col px-5 md:px-10 lg:px-20 py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="flexCenter flex-col mt-14 w-full">
        <h1 className="bold-28 lg:bold-56 text-center">Why Choose Formyard</h1>
        <p className="md:regular-20 lg:w-[782px] pt-7 text-center">Formyard offers formwork solutions for all areas of construction activity – for anything from housing developments to transportation infrastructure and power-generation facilities . You can choose from formwork systems and components for any construction project and any requirement..</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-6 mt-14 ">
        {SERVICES.map((services) => (
          <div className={`grid gap-[28px] p-[24px]  ${services.color} rounded-xl`}>
            <div className={`grid gap-[28px] p-[24px] bg-[#EAF3F5] rounded-xl`}>
              <span>
                <AiFillCheckCircle size={18} />
              </span>
              <div className="grid ">
                <h2 className="font-bold text-xl">{services.heading}</h2>
                <p>{services.title}</p>
              </div>
            </div>
            </div>
        ))}

          </div>
    </section>
  );
};

export default Services;
