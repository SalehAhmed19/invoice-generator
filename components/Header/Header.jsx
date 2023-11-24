import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-green-500 text-white h-20 w-20 rounded-full flex justify-center items-center">
        <span className="font-bold text-2xl">Z</span>
      </div>
      <div>
        <h4 className="font-bold text-xl">Zylker Thread and Waves</h4>
        <p>148, Northern Street</p>
        <p>Greater South Avenue</p>
        <p>New York, USA</p>
      </div>
    </div>
  );
};

export default Header;
