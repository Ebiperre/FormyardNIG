import { AiFillCheckCircle } from 'react-icons/ai';

const data = [
  { text: 'Structural Materials' },
  { text: 'Finishing Materials' },
  { text: 'Machinery and Equipment' },
  { text: 'Safety Gear and Apparel' },
];

const Services = () => {
  return (
    <section className="mx-auto  px-28">
      <div className="mt-14 text-center">
        <h1 className="text-[64px] text-3xl font-bold leading-[64px]">
          Elevate Your Projects with Our Products
        </h1>
        <p className=" mt-8 w-3/5 mx-auto ">
          Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,
          at nihil tantas platonem eos. Mazim nemore singulis an ius, nullam
          ornatus nam ei.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-[23px] mt-4 ">
        {data.map((stat) => (
          <div className="flex flex-col place-content-center gap-[32px]    w-fit">
            <div className="flex  items-center justify-center gap-4 w-[240px] h-[78px]  rounded-full  border border-black py-4 px-4 b">
              <p className="text-base text-center">{stat.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
