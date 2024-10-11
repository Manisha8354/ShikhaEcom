import React, { useState } from "react";
import Logo from "../../assets/logoshikha.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaUser, FaHeart, FaBars } from "react-icons/fa6";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 3,
    name: "Bracelets",
    link: "/#",
  },
  {
    id: 4,
    name: "Earrings",
    link: "/#",
  },
  {
    id: 5,
    name: "Necklace Sets",
    link: "/#",
  },
];

export default function Navbar({ handleOrderPopup }) {
  const [isOpen, setIsOpen] = useState(false); // Hamburger menu toggle

  // Function to toggle hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img
                src={Logo}
                alt="Logo"
                className="absolute w-12 top-0 md:bottom-6 md:h-20 md:w-28"
              />
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-3xl text-primary dark:text-white"
            >
              <FaBars />
            </button>
          </div>

          {/* Search bar with icons, visible only on larger screens */}
          <div className="hidden sm:flex justify-between items-center gap-4">
            <div className="relative group flex items-center gap-4">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <FaUser className="text-primary dark:text-white text-2xl cursor-pointer" />
              <FaHeart className="text-secondary dark:text-red-400 text-2xl cursor-pointer" />
            </div>

            {/* Order button */}
            <button
              onClick={handleOrderPopup} // Directly call the function
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* "About Us" Link Without Dropdown */}
          <li className="cursor-pointer">
            <a href="/about" className="flex items-center gap-[2px] py-2">
              About Us
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden bg-white dark:bg-gray-900 p-4 w-full transition-all duration-300`}
      >
        <div className="flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="search"
            className="w-full rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
          />

          <FaUser className="text-primary dark:text-white text-2xl cursor-pointer" />
          <FaHeart className="text-secondary dark:text-red-400 text-2xl cursor-pointer" />

          <button
            onClick={handleOrderPopup} // Directly call the function
            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
          >
            Order
            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>

          <ul className="flex flex-col items-center gap-2">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 hover:text-primary duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>

          {/* "About Us" Link Without Dropdown */}
          <li className="cursor-pointer">
            <a href="/about-us" className="flex items-center gap-[2px] py-2">
              About Us
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
