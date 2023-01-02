import React from "react";
import banner from "../images/gifts-banner.png";

const Banner = () => {
  return (
    <div class="bg-gray-900 text-white py-12">
      <img src={banner} alt="Banner" class="w-full" />
      <h1 class="text-5xl font-bold text-center">Welcome to the Gift Shop</h1>
      <p class="text-xl text-center font-light py-4">
        Find the perfect gift for any occasion
      </p>
    </div>
  );
};

export default Banner;
