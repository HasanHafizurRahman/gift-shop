import React from "react";

const OrderSummery = ({ setPage, selectedBox, selectedItems, totalCost }) => {
  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Selected Gifts:</h2>
      {selectedItems.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>${item.price}</span>
        </div>
      ))}
      {selectedBox.map((box) => (
        <div key={box.id}>
          <span>{box.name}</span>
          <span>${box.price}</span>
        </div>
      ))}
      <h2>Total Gift Purchase:{totalCost} </h2>
      <button onClick={() => setPage((prev) => prev - 1)}>Prev</button>
    </div>
  );
};

export default OrderSummery;
