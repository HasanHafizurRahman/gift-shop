import React from "react";
import banner from "../images/gifts-banner.png";

const Banner = () => {
  return (
    <div className="bg-gray-200 text-gray-900 py-12">
      <img src={banner} alt="Banner" className="w-full" />
      <p className="text-xl text-center font-light py-4">
        Find the perfect gift for any occasion
      </p>
    </div>
  );
};

export default Banner;
