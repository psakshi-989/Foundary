import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import symbol from "../assets/symbol.svg";
import font from "../assets/font.svg";
import { useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={symbol} alt="Company Logo" className="h-10 w-10" />
          <img src={font} alt="Company Name" className="h-6" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl z-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Nav Links */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:hidden`}
        ></div>

        <ul
          className={`menu fixed top-0 right-0 h-full bg-white shadow-lg w-64 flex flex-col space-y-4 p-6 transform transition-transform duration-300 md:static md:w-auto md:flex-row md:space-y-0 md:space-x-6 md:bg-transparent md:shadow-none ${
            isOpen ? "translate-x-0 z-50" : "translate-x-full"
          } md:translate-x-0`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Products", path: "/products" },
            { name: "Quality and Certifications", path: "/quality" },
          ].map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `font-bold block py-2 text-gray-700 hover:text-red-600 hover:underline ${
                    isActive ? "text-red-600 underline" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Contact Icons */}
        <div className="hidden md:flex space-x-4 text-xl">
          <a href="tel:+1234567890" className="hover:text-blue-600">
            📞
          </a>
          <a href="mailto:info@example.com" className="hover:text-blue-600">
            ✉️
          </a>
          <a href="location.html" className="hover:text-blue-600">
            📍
          </a>
        </div>
      </div>
    </nav>
  );
}
