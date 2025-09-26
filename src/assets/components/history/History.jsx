import React, { use } from "react";
import Card from "../Card/Card";
import CardHistory from "../Card-history/CardHistory";

const History = ({ fetchUSers, selectedCard, setSelectedCard }) => {
  const promisData = use(fetchUSers);
  console.log(promisData);
  return (
    <div className="container mx-auto">

        <h2 className="text-[#34485a] font-semibold text-[25px]">
          Customer Tickets
        </h2>


      <div className="border-2 grid grid-cols-10  p-2 gap-2">
        <div className="border-2 col-span-7 border-red-500 gap-2 grid grid-cols-1 md:grid-cols-2">
          {promisData.map((card) => (
            <Card
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
              card={card}
            ></Card>
          ))}
        </div>
        <h2 className="text-[#34485a] font-semibold text-[25px] text-center whitespace-nowrap">Task Status</h2>
        <div className="border-2 col-span-3 border-green-500">
          <CardHistory  selectedCard={ selectedCard}></CardHistory>
        </div>
      </div>
      
    </div>
  );
};

export default History;
