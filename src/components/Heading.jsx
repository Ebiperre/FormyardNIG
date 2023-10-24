import React from 'react';

const Heading = ({heading, text }) => {
  return (
    <div className="mt-14 text-center">
      <h1 className="text-[64px] text-3xl font-bold leading-[64px]">
       {heading}
      </h1>
      <p className=" mt-8 w-3/5 mx-auto ">
     {text}
      </p>
    </div>
  );
};

export default Heading;
