import React, { useState } from "react";
import vactorImg from "../../../assets/Vector.png";
import { toast } from "react-toastify";
const Card = ({ card,setSelectedCard }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleCardClick = () => {
    toast("Clicked");
    setIsSelected(true);
    setSelectedCard((prevSelectedCards) => [...prevSelectedCards, card]);
  };
  return (
    <div
      onClick={handleCardClick}
      className=" cursor-pointer bg-white shaddw-3xl rounded-lg border-gray-600 p-4 mt-3"
    >
      <div className="flex justify-between items-center gap-1">
        <h2 className="font-semibold text-[18px]">{card.subject}</h2>
        <button
          onClick={() => setIsSelected(true)}
          className={`font-semibold text-[12px] ${
            isSelected === true ? "bg-yellow-200" : "bg-[#b9f8cf]"
          } rounded-3xl p-2`}
        >
          <span className=" rounded-full p-1 mb-2"></span>
          {isSelected === true ? "In- Progress" : "Open"}
        </button>
      </div>
      <p className="text-[#627382] text-[16px]">{card.description}</p>
      <div className="flex justify-between items-center mt-2">
        <div className="flex justify-between items-center space-x-1">
          <p className="text-[#627382]">{card.ticket}</p>
          <h3
            onClick={() => setIsSelected(true)}
            className={`${
              isSelected === true ? "text-yellow-400" : "text-red-400"
            } text-red-500 font-semibold text-[15px]`}
          >
            {card.priority}
          </h3>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex text-[#627382] justify-between items-center space-x-2">
            <p>{card.requestBy}</p>
            <div className="flex items-center ">
              <img className="w-[15px]" src={vactorImg} alt="" />
              <p>{card.createDate}</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Card;
