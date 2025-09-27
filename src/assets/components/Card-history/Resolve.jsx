import React from "react";

const Resolve = ({ resolve, index }) => {

  if (!resolve || resolve.length === 0) {
    return (
      <p className="p-4 text-center text-gray-500">No tasks</p>
    );
  }
  return (
    <div className="">
      <div key={index} className="border-b border-gray-200 pb-2 mb-2">
        <p className="font-semibold text-base ">{resolve.subject}</p>
        <p>{resolve.createDate}</p>
        <button className="bg-[#02a53b] cursor-pointer text-white font-semibold text-[15px] w-full rounded-lg mt-1 p-2 transition duration-300 hover:bg-[#028c30] shadow-md">
          Completed
        </button>
      </div>
    </div>
  );
};

export default Resolve;
