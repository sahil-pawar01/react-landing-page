import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full w-72 bg-red-200 rounded-3xl overflow-hidden relative shrink-0">
      <img
        className="w-full h-full object-cover object-center"
        src={props.img}
        alt=""
      />
      <RightCardContent id={props.id} tag={props.tag} intro={props.intro} />
    </div>
  );
};

export default RightCard;
