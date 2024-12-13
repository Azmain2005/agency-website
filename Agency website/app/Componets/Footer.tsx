import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
function Footer() {
  return (
    <>
      <div className="mt-[100px] container mx-auto p-2">
        <hr />
        {/* Grid container for the footer */}
        <div className="grid grid-cols-2 items-center mt-4 max-sm:grid-cols-1 max-sm:justify-items-center">
          {/* Brand Section - left side on PC, bottom on mobile */}
          <div className="text-left max-sm:text-center">
            <h1 className="text-2xl font-bold max-sm:mb-6"> SMMCALL</h1>
            <p className="text-sm text-gray-500 max-sm:hidden ">
              © SMMCALL LIMITED 2024
            </p>
          </div>

          {/* Social Media and Links - right side on PC, top on mobile */}
          <div className="flex flex-col items-end max-sm:items-center max-sm:mb-4">
            <div className="flex justify-end items-center max-sm:justify-center">
              <FaFacebook size={20} className="mx-2" />
              <FaSquareXTwitter size={20} className="mx-2" />
              <FaLinkedin size={20} className="mx-2" />
            </div>
            <ul className="flex justify-end items-center max-sm:justify-center mt-2">
              <Link href="/terms">
                <li className="mx-2 text-sm text-gray-500">Terms of service</li>
              </Link>

              <Link href="/privacy">
                <li className="mx-2 text-sm text-gray-500">Privacy policy</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
