import React, { useState } from "react";
import { giftBoxes } from "./GiftItems";

const GiftWrapper = ({ setPage }) => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [totalCost, setTotalCost] = useState(0);
  function handleBoxSelect(box) {
    setTotalCost(
      (prevCost) => prevCost - (selectedBox ? selectedBox.price : 0)
    );
    setSelectedBox(box);
    setTotalCost((prevCost) => prevCost + box.price);
  }
  return (
    <div>
      <h1>Gift Boxes</h1>
      {giftBoxes.map((box) => (
        <div key={box.id}>
          <span>{box.name}</span>
          <span>{box.price}</span>
          <button onClick={() => handleBoxSelect(box)}>Select One Gift</button>
        </div>
      ))}
      <button onClick={() => setPage((prev) => prev - 1)}>Prev</button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default GiftWrapper;
