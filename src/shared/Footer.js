import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center justify-between">
          <div class="w-full md:w-1/4 text-center md:text-left">
            <p class="text-sm font-light tracking-wide uppercase">Gift Shop</p>
            <p class="text-base font-light tracking-wide uppercase">
              Find the perfect gift for any occasion
            </p>
          </div>
          <div class="w-full md:w-1/4 text-center md:text-left">
            <p class="text-sm font-light tracking-wide uppercase">Contact Us</p>
            <p class="text-base font-light tracking-wide">info@giftshop.com</p>
            <p class="text-base font-light tracking-wide">(123) 456-7890</p>
          </div>
          <div class="w-full md:w-1/4 text-center md:text-left">
            <p class="text-sm font-light tracking-wide uppercase">Follow Us</p>
            <div class="flex items-center mt-2">
              <a href="#" class="text-base font-light tracking-wide mr-4">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="text-base font-light tracking-wide mr-4">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="text-base font-light tracking-wide mr-4">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="text-base font-light tracking-wide">
                <i class="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div class="w-full md:w-1/4 text-center md:text-left">
            <p class="text-sm font-light tracking-wide uppercase">Subscribe</p>
            <p class="text-base font-light tracking-wide">
              Get the latest updates and special offers
            </p>
            <form class="mt-4">
              <input
                type="email"
                placeholder="Email address"
                class="px-4 py-2 rounded-full w-full focus:outline-none focus:shadow-outline-gray-400"
              />
              <button
                type="submit"
                class="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray-400 mt-2"
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
