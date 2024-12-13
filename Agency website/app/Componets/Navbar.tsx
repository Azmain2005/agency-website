"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className=" container mx-auto py-6">
      <div className="relative ">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl  capitalize font-bold">
              SMMCALL
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-between">
            <Link href="/">
              <li className="mx-4 font-bold cursor-pointer hover:text-blue-500">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="mx-4 font-bold cursor-pointer hover:text-blue-500">
                About
              </li>
            </Link>

            <Link href="/#pricing">
              <li className="mx-4 font-bold cursor-pointer hover:text-blue-500">
                Services
              </li>
            </Link>
            <Link href="/#plan">
              <li className="mx-4 font-bold cursor-pointer hover:text-blue-500">
                Growth strategy
              </li>
            </Link>
            <Link href="/#faq">
              <li className="mx-4 font-bold cursor-pointer hover:text-blue-500">
                FAQ
              </li>
            </Link>
          </ul>

          <Link href="/contact">
            <button className="hidden md:block bg-black p-3 font-bold text-white rounded-md">
              Contact Us
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            <FaBars />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-[60%] h-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">mzmedia</h1>
            <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
          </div>
          <ul className="flex flex-col p-6 space-y-4">
            <Link href="/" onClick={toggleMenu}>
              <li className="hover:text-gray-700 cursor-pointer">Home</li>
            </Link>
            <Link href="/#pricing" onClick={toggleMenu}>
              <li className="hover:text-gray-700 cursor-pointer">Services</li>
            </Link>
            <Link href="/#plan" onClick={toggleMenu}>
              <li className="hover:text-gray-700 cursor-pointer">
                Growth strategy
              </li>
            </Link>
            <Link href="/#faq" onClick={toggleMenu}>
              <li className="hover:text-gray-700 cursor-pointer">FAQ</li>
            </Link>
            <Link href="/contact" onClick={toggleMenu}>
              <button className="bg-black p-2 text-white rounded-md">
                Contact Us
              </button>
            </Link>
          </ul>
        </div>

        {/* Overlay when menu is open */}
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
