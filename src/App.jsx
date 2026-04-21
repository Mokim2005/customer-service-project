import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./assets/components/banner/Banner";
import Footer from "./assets/components/footer/Footer";
import History from "./assets/components/history/History";
import Navber from "./assets/components/Navber/Navber";

import { ToastContainer } from "react-toastify";

const fetchData = async () => {
  const res = await fetch("/data.json");
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8f9ff] via-[#f5f5f5] to-[#eef1ff]">
      
      {/* Navbar */}
      <Navber />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Banner Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <Banner 
              resolvedTickets={resolvedTickets}  
              selectedCard={selectedCard} 
            />
          </div>
        </section>

        {/* History Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 mt-10 mb-16">
          
          <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
            <Suspense
              fallback={
                <div className="flex justify-center items-center py-16">
                  <span className="loading loading-dots loading-lg text-primary"></span>
                </div>
              }
            >
              <History
                fetchUSers={fetchUSers}
                resolvedTickets={resolvedTickets}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
                removeHistory={removeHistory}
              />
            </Suspense>
          </div>

        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Toast */}
      <ToastContainer position="top-right" autoClose={2000} />
      
    </div>
  );
}

export default App;