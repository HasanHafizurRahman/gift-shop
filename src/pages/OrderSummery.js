import React from "react";

const OrderSummery = ({ setPage, selectedBox, selectedItems, totalCost }) => {
  console.log(selectedItems);
  return (
    <div class="relative px-4 py-6 mx-auto max-w-screen-xl">
      <h1 class="text-3xl font-bold text-center text-gray-900">
        Order Summary
      </h1>
      <h2 class="text-2xl font-semibold text-gray-800">
        Selected Gifts Items:{" "}
        {selectedItems.map((data) => (
          <span>{data.name}</span>
        ))}
      </h2>
      <h2 class="text-2xl font-semibold text-gray-800">
        Selected Gifts Box: <span>{selectedBox.name}</span>
      </h2>

      <h2 class="text-2xl font-semibold text-gray-800">
        Total Gift Purchase: ${totalCost}
      </h2>
      <button
        onClick={() => setPage((prev) => prev - 1)}
        class="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray active:bg-gray-500"
      >
        Prev
      </button>
    </div>
  );
};

export default OrderSummery;
