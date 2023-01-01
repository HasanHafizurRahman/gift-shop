import React, { useState } from "react";
import { giftItems } from "./GiftItems";

const SelectGift = ({ setPage, setSelectedItems, setTotalCost }) => {
  //   const [selectedItems, setSelectedItems] = useState([]);
  //   const [totalCost, setTotalCost] = useState(0);

  function handleSelectItem(item) {
    setSelectedItems((prevItems) => [...prevItems, item]);
    setTotalCost((prevCost) => prevCost + item.price);
  }
  return (
    <div>
      <h1>Gift Items</h1>
      {giftItems.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.price}</span>
          <button onClick={() => handleSelectItem(item)}>
            Select Your Gift
          </button>
        </div>
      ))}
      <button onClick={() => setPage((prev) => prev - 1)}>Prev</button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default SelectGift;
