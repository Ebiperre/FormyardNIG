import Heading from "./Heading";

const data = [
  { text: 'Engineering Services ' },
  { text: 'Formwork Instructor' },
  { text: 'Reconditioning Services' },
  { text: 'Ready to Use Services' },
];


const heading = " Elevate Your Projects with Our Products"
const text = "Formyard  Ltd: Elevating Excellence in Engineering – Offering Expert Formwork Instruction, Precision Reconditioning Services, and Ready-to-Use Solutions for Unparalleled Construction Success." ;


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
