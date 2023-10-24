import { AiFillCheckCircle } from 'react-icons/ai';

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
    <section className="mx-auto  px-28">
      <heading heading={heading} text={text} />
      <div className="grid grid-cols-3 gap-[23px] mt-14 ">
        {data.map((stat) => (
          //  <div className={`grid gap-[28px] p-[24px]  ${stat.color === "#FFF3E" ? 'bg-green-500' : 'bg-red-500'} rounded-xl`}>
          <div className={`grid gap-[28px] p-[24px] bg-[#FFF3E3] rounded-xl`}>
            <span>
              <AiFillCheckCircle size={18} />
            </span>
            <div className="grid ">
              <h2 className="font-bold text-xl">{stat.heading}</h2>
              <p>{stat.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
