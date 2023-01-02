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
    <div className="relative px-4 py-6 mx-auto max-w-screen-xl">
      <h1 className="text-3xl font-bold text-center text-gray-900">
        Gift Items
      </h1>
      {giftItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between py-2 border-b border-gray-200"
        >
          <img
            src={item.image}
            alt="itemimage"
            className="w-20 h-20 rounded-full"
          />
          <span className="text-xl font-semibold text-gray-800">
            {item.name}
          </span>
          <span className="text-xl font-semibold text-gray-800">
            ${item.price}
          </span>
          <button
            onClick={() => handleSelectItem(item)}
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Select Your Gift
          </button>
        </div>
      ))}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray active:bg-gray-500"
        >
          Prev
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-gray-400 hover:bg-gray-600 text-gray-800 font-bold py-2 px-4 rounded-full"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default SelectGift;
