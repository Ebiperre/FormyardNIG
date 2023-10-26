import Heading from "./Heading";

const data = [
  { text: 'Structural Materials' },
  { text: 'Finishing Materials' },
  { text: 'Machinery and Equipment' },
  { text: 'Safety Gear and Apparel' },
];


const heading = " Elevate Your Projects with Our Products"
const text = "Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,at nihil tantas platonem eos. Mazim nemore singulis an ius, nullamornatus nam ei." ;

const Services = () => {
  return (
    <section className="mx-auto py-8  hidden lg:block  px-28 bg-[#F2F4EB]">
      <Heading text={text} heading={heading} />
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
