import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./assets/components/banner/Banner";
import Footer from "./assets/components/footer/Footer";
import History from "./assets/components/history/History";
import Navber from "./assets/components/Navber/Navber";
import CardHistory from "./assets/components/Card-history/CardHistory";

const fetchData = async () => {
  const res = await fetch("/public/data.json");
  return res.json();
};
function App() {
  const [selectedCard, setSelectedCard] = useState([]);

  const fetchUSers = fetchData();
  return (
    <div className="bg-[#f5f5f5]">
      {/* navber section  */}
      <Navber></Navber>

      {/* banner section  */}
      <Banner></Banner>

      {/* history section  */}
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <History
          fetchUSers={fetchUSers}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        ></History>
      </Suspense>
  

      {/* footer section  */}
      <Footer></Footer>
    </div>
  );
}

export default App;
