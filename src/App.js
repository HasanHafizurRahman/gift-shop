import { useState } from "react";
import "./App.css";
import GiftWrapper from "./pages/GiftWrapper";
import IntroPage from "./pages/IntroPage";
import OrderSummery from "./pages/OrderSummery";
import SelectGift from "./pages/SelectGift";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

function App() {
  const [page, setPage] = useState(1);
  const [selectedBox, setSelectedBox] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  return (
    <div>
      <Header />
      {page === 1 && <IntroPage setPage={setPage} />}
      {page === 2 && (
        <SelectGift
          setPage={setPage}
          setSelectedItems={setSelectedItems}
          setTotalCost={setTotalCost}
        />
      )}
      {page === 3 && (
        <GiftWrapper
          setPage={setPage}
          setSelectedBox={setSelectedBox}
          setTotalCost={setTotalCost}
          selectedBox={selectedBox}
        />
      )}
      {page === 4 && (
        <OrderSummery
          setPage={setPage}
          selectedBox={selectedBox}
          selectedItems={selectedItems}
          totalCost={totalCost}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
