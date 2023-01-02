import React from "react";
import banner from "../images/gifts-banner.png";

const Banner = () => {
  return (
    <div class="bg-gray-200 text-gray-900 py-12">
      <img src={banner} alt="Banner" class="w-full" />
      <p class="text-xl text-center font-light py-4">
        Find the perfect gift for any occasion
      </p>
    </div>
  );
};

export default Banner;
