import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <p className="text-sm font-light tracking-wide uppercase">
              Gift Shop
            </p>
            <p className="text-base font-light tracking-wide uppercase">
              Find the perfect gift for any occasion
            </p>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <p className="text-sm font-light tracking-wide uppercase">
              Contact Us
            </p>
            <p className="text-base font-light tracking-wide">
              info@giftshop.com
            </p>
            <p className="text-base font-light tracking-wide">(123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <p className="text-sm font-light tracking-wide uppercase">
              Follow Us
            </p>
            <div className="flex items-center mt-2">
              <a href="#" className="text-base font-light tracking-wide mr-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-base font-light tracking-wide mr-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-base font-light tracking-wide mr-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-base font-light tracking-wide">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <p className="text-sm font-light tracking-wide uppercase">
              Subscribe
            </p>
            <p className="text-base font-light tracking-wide">
              Get the latest updates and special offers
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 rounded-full w-full focus:outline-none focus:shadow-outline-gray-400"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray-400 mt-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
