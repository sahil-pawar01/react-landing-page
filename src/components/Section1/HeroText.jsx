import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-8 pt-8">
      <h1 className="text-6xl font-bold leading-tight">
        Prospective <br />
        <span className="bg-gray-200 rounded-full px-1.5 pb-2 w-fit">
          customer
        </span>
        <br /> segmentation
      </h1>
      <p className="text-xl text-gray-800 w-[90%]">
        Depending on customer satisfaction and access to banking products,
        potential target audience can be divided Into three groups
      </p>
    </div>
  );
};

export default HeroText;
