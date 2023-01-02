import React from "react";
import Banner from "./Banner";

const IntroPage = ({ setPage }) => {
  return (
    <div className="bg-gray-200 py-12 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-center">
          Welcome to the Gift Shop
        </h1>
        <Banner />
        <p className="text-gray-700 text-lg mb-8">
          We offer wide selection of gifts for all occasions.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4"
          >
            Create Your Own Box
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="bg-gray-400 hover:bg-gray-600 text-gray-800 font-bold py-2 px-4 rounded-full"
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
