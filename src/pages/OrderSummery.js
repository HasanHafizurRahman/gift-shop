import React from "react";

const OrderSummery = ({ setPage, selectedBox, selectedItems, totalCost }) => {
  console.log(selectedItems);
  return (
    <div class="relative px-4 py-6 mx-auto max-w-screen-xl bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold text-center text-gray-900">
        Order Summary
      </h1>
      <div class="px-4 py-4">
        <h2 class="text-2xl font-semibold text-gray-800">
          Selected Gifts Items:
        </h2>
        {selectedItems.map((data) => (
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {data.name}
          </span>
        ))}
      </div>
      <div class="px-4 py-4">
        <h2 class="text-2xl font-semibold text-gray-800">
          Selected Gifts Box:
        </h2>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {selectedBox.name}
        </span>
      </div>
      <div class="px-4 py-4">
        <h2 class="text-2xl font-semibold text-gray-800">
          Total Gift Purchase:
        </h2>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${totalCost}
        </span>
      </div>
      <div class="flex justify-end px-4 py-4">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          class="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray active:bg-gray-500"
        >
          Prev
        </button>
      </div>
    </div>
  );
};

export default OrderSummery;
