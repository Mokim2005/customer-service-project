import React from "react";

const Banner = ({selectedCard,resolvedTickets}) => {
  console.log(resolvedTickets)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] container mx-auto my-[50px] ">
      <div className="flex justify-center items-center text-white rounded-lg  bg-gradient-to-r from-[#7740f7] to-[#9f62f2]">
        <div>
          <img src="https://i.ibb.co.com/B5NmHScV/vector1.png" alt="" />
        </div>
        <div className="text-center whitespace-nowrap">
          <h3 className="font-semibold text-[20px] ">In-Progress</h3>
          <span className="font-bold text-[40px]">{selectedCard.length}</span>
        </div>
        <div>
          <img src="https://i.ibb.co.com/tTX9C7sQ/vactor2.png" alt="" />
        </div>
      </div>

      <div className="flex justify-center items-center rounded-lg bg-gradient-to-r from-[#62e978] to-[#00827a]  text-white">
        <div>
          <img src="https://i.ibb.co.com/B5NmHScV/vector1.png" alt="" />
        </div>
        <div className="text-center whitespace-nowrap">
          <h3 className="font-semibold text-[20px]">Resolved</h3>
          <span className="font-bold text-[40px]">{resolvedTickets.length}</span>
        </div>
        <div>
          <img src="https://i.ibb.co.com/tTX9C7sQ/vactor2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
