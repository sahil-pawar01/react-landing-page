import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = (props) => {
  return (
    <div className="page1 px-16 pt-2 pb-10 flex gap-4 items-center">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
