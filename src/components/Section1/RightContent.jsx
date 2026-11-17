import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  const users = props.users;
  return (
    <div className="w-2/3 h-full p-5 flex flex-nowrap gap-7 overflow-x-auto scrollbar-none">
      {users.map(function (user, idx) {
        return (
          <RightCard
            key={idx}
            id={idx}
            img={user.img}
            tag={user.tag}
            intro={user.intro}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
