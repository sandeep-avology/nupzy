import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "../../../assets/images/footerLogo.png";
import ssl from "../../../assets/images/ssl.png";
import menuItems from "../../service/menuService";

import footerMenu from "../../service/footerMenu";

const Footer = () => {
  return (
    <footer className="bg-[#122b24] pt-14 text-white">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">

          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <a href="/" className="block">
              <img src={logo} alt="Logo" className="w-[100%] max-w-[150px]" />
            </a>
            <p className="mt-4 font-Josefin text-[16px] text-white max-w-[260px]">
              Las Vegas is home to some of the most exciting hotels in the world, offering everything from high-energy
              party resorts to luxurious spa retreats, world-class casino hotels, and budget-friendly stays.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-2xl font-bold mb-5 font-Josefin">Menu</h3>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className="text-white text-[16px] bg-transparent rounded-md hover:text-[#fa5f30] py-2 transition-all duration-300 font-Josefin"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-5 font-Josefin">Quick Links</h3>
            <ul className="space-y-2">
              {footerMenu.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className="text-white text-[16px] bg-transparent rounded-md hover:text-[#fa5f30] py-2 transition-all duration-300 font-Josefin"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-2xl font-bold mb-5 font-Josefin">Contact Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="p-2 bg-[#ff3f3f] flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-500 transition duration-300">
                <FontAwesomeIcon icon={faFacebookF} className="text-white w-5 h-5" />
              </a>

              <a href="https://twitter.com" className="p-2 bg-[#ff3f3f]  flex items-center justify-center w-10 h-10  rounded-full hover:bg-gray-500 transition duration-300">
                <FontAwesomeIcon icon={faXTwitter} className="text-white w-5 h-5" />
              </a>

              <a href="https://instagram.com" className="p-2 bg-[#ff3f3f] flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-500 transition duration-300">
                <FontAwesomeIcon icon={faInstagram} className="text-white w-5 h-5" />
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 py-4">
        <div className="container mx-auto px-4 lg:px-16 flex gap-2.5 flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left text-sm font-Josefin text-[16px]">
            Copyright &copy; {new Date().getFullYear()} nupzy.com All rights reserved.
          </p>
          <a href="#">
            <img src={ssl} alt="SSL Secure" className="max-w-[120px] h-[32px] object-contain transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
