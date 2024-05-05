import React, { Children } from "react";

const Motal = ({ children }) => {
  return (
    <div className=" fixed bg-black bg-opacity-40 backdrop-blur-[0.5px]  inset-0  flex justify-center items-center">
      <div className="bg-white">{children}</div>
    </div>
  );
};

export default Motal;
