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
        <p className="">{resolve.createDate}</p>
        <button className=" cursor-pointer text-green-500 font-semibold text-[20px] w-full rounded-lg mt-1 p-2 transition duration-300  shadow-md">
          Completed
        </button>
      </div>
    </div>
  );
};

export default Resolve;
