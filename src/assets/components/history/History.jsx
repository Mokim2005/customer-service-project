import React, { use, useState, useEffect } from "react";
import Card from "../Card/Card";
import CardHistory from "../Card-history/CardHistory";
import Resolve from "../Card-history/Resolve";

const History = ({
  fetchUSers,
  selectedCard,
  setSelectedCard,
  removeHistory,
  resolvedTickets,
}) => {
  const promisData = use(fetchUSers);

  const [customerTickets, setCustomerTickets] = useState([]);

  useEffect(() => {
    if (promisData && customerTickets.length === 0) {
      setCustomerTickets(promisData);
      console.log("Original tickets loaded into state.");
    }
  }, [promisData]);

  const handleMainTicketRemoval = (ticketToRemove) => {
    const updatedTickets = customerTickets.filter(
      (card) => card.ticket !== ticketToRemove.ticket
    );
    setCustomerTickets(updatedTickets);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-[#34485a] font-semibold text-[25px]">
        Customer Tickets
      </h2>

      <div className=" grid grid-cols-10  p-2 gap-2">
        <div className="col-span-7 gap-2 grid grid-cols-1 md:grid-cols-2">
          {customerTickets.map((card) => (
            <Card
              key={card.ticket}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
              card={card}
            ></Card>
          ))}
        </div>

        <div className="col-span-3 ">
          <h2 className="text-[#34485a] font-semibold text-[25px] text-center whitespace-nowrap ">
            Task Status
          </h2>

          <CardHistory
            selectedCard={selectedCard}
            removeHistory={removeHistory}
            handleMainRemoval={handleMainTicketRemoval}
          ></CardHistory>
          <div className="items-center">
            <h2 className="font-bold text-[#34485a] text-center text-[25px] whitespace-nowrap">Resolve</h2>
            {resolvedTickets.map((resolve, index) => (
              <Resolve resolve={resolve} index={index}></Resolve>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
