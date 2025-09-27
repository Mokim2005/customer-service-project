import React from "react";
import { toast } from "react-toastify";

const CardHistory = ({ selectedCard, removeHistory, handleMainRemoval }) => {
  const handleCompleteClick = (cardToRemove) => {
    removeHistory(cardToRemove);

    handleMainRemoval(cardToRemove);
  };
  const handleButton = ()=>{
    toast('compleated')
  }
  if (!selectedCard || selectedCard.length === 0) {
    return (
      <p className="p-4 text-center text-gray-500">No tasks in progress.</p>
    );
  }

  return (
    <div className="p-4 rounded-lg shadow-md mb-2">
      {selectedCard.map((card, index) => (
        <div key={index} className="border-b border-gray-200 pb-2 mb-2">
          <p className="font-semibold text-base">
            {card.subject}
          </p>
          <p>{card.createDate}</p>

          <button
            onClick={() => {handleCompleteClick(card),handleButton()}}
            className="bg-[#02a53b] cursor-pointer text-white font-semibold text-[15px] w-full rounded-lg mt-1 p-2 transition duration-300 hover:bg-[#028c30] shadow-md"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardHistory;
