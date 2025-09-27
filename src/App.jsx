import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./assets/components/banner/Banner";
import Footer from "./assets/components/footer/Footer";
import History from "./assets/components/history/History";
import Navber from "./assets/components/Navber/Navber";

import { ToastContainer } from "react-toastify";

const fetchData = async () => {
  const res = await fetch("/public/data.json");
  return res.json();
};
const fetchUSers = fetchData();
function App() {
  const [selectedCard, setSelectedCard] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const removeHistory = (h) => {
    setResolvedTickets((another) => [...another, h]);

    setSelectedCard((anotherSelected) => {
      const filteredData = anotherSelected.filter(
        (crd) => crd.ticket.trim() !== h.ticket.trim()
      );

      console.log("Filtered Task Status (selectedCard):", filteredData);
      return filteredData;
    });
  };

  return (
    <div className="bg-[#f5f5f5]">
      {/* navber section  */}
      <Navber></Navber>

      {/* banner section  */}
      <Banner resolvedTickets={resolvedTickets}  selectedCard={selectedCard}></Banner>

      {/* history section  */}
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <History
          fetchUSers={fetchUSers}
          resolvedTickets={resolvedTickets}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          removeHistory={removeHistory}
        ></History>
      </Suspense>

      {/* footer section  */}
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
