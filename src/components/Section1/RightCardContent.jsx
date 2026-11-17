import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8">
      <h2 className="w-10 h-10 p-2 bg-white rounded-full flex items-center justify-center">
        {props.id + 1}
      </h2>
      <div className="flex flex-col gap-14">
        <p className="text-lg w-60 leading-normal text-white text-shadow-md">{props.intro}</p>
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white px-8 py-2 rounded-full text-lg">
            {props.tag}
          </button>
          <button className="bg-blue-500 text-white px-3.5 py-2 rounded-full text-lg">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
