import React, { useState } from "react";
import vactorImg from "../../../assets/Vector.png";
import { toast } from "react-toastify";

const Card = ({ card, setSelectedCard }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    toast("In-Progress!!");
    setIsSelected(true);
    setSelectedCard((prevSelectedCards) => [...prevSelectedCards, card]);
  };

  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer bg-white rounded-2xl border border-gray-200 p-5 mt-4 
      shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
    >
      {/* Top */}
      <div className="flex justify-between items-start gap-3">
        <h2 className="font-semibold text-[18px] text-gray-800 leading-snug">
          {card.subject}
        </h2>

        <button
          onClick={() => setIsSelected(true)}
          className={`font-medium text-[11px] px-3 py-1 rounded-full transition
          ${
            isSelected
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {isSelected ? "In Progress" : "Open"}
        </button>
      </div>

      {/* Description */}
      <p className="text-[#627382] text-[14px] mt-2 leading-relaxed">
        {card.description}
      </p>

      {/* Bottom */}
      <div className="flex justify-between items-center mt-4 text-sm">
        
        {/* Left */}
        <div className="flex items-center gap-2">
          <p className="text-gray-500">{card.ticket}</p>

          <span
            onClick={() => setIsSelected(true)}
            className={`font-semibold px-2 py-[2px] rounded-md text-xs
            ${
              isSelected
                ? "text-yellow-500 bg-yellow-50"
                : "text-red-500 bg-red-50"
            }`}
          >
            {card.priority}
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 text-gray-500">
          <p>{card.requestBy}</p>

          <div className="flex items-center gap-1">
            <img className="w-[14px] opacity-70" src={vactorImg} alt="" />
            <p>{card.createDate}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;