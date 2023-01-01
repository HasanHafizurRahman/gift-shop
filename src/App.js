import { useState } from "react";
import "./App.css";
import GiftWrapper from "./pages/GiftWrapper";
import IntroPage from "./pages/IntroPage";
import OrderSummery from "./pages/OrderSummery";
import SelectGift from "./pages/SelectGift";

function App() {
  const [page, setPage] = useState(1);
  const [selectedBox, setSelectedBox] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  return (
    <div>
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
    </div>
  );
}

export default App;
