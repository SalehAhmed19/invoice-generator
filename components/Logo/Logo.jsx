import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="h-[1px] bg-[#dedede] w-full mr-5"></div>
      <h2 className="text-3xl uppercase font-bold">Invoice</h2>
      <div className="h-[0.5px] bg-[#dedede] w-full ml-5"></div>
    </div>
  );
};

export default Logo;
