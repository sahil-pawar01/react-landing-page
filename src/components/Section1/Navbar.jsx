import React from "react";
import { CornerDownRight } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-16 py-6">
      <h4 className="bg-black text-white px-6 py-2 rounded-full uppercase text-sm">
        Target Audience
      </h4>
      <button className="bg-gray-200 px-6 py-2 rounded-full uppercase tracking-wider text-xs flex items-center gap-2">
        <CornerDownRight size={12} />
        digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
