import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../../assets/images/logo.png";
import menuItems from "../../service/menuService";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentPage = menuItems.find((item) => location.pathname === item.path);
    document.title = currentPage ? currentPage.title : "";
  }, [location]);

  return (
    <header className="header-content-wrapper  sticky top-0 bg-white py-6 z-[999] ">
      <div className="container mx-auto px-4">
        <div className="site-navigation flex justify-between items-center">
          {/* Logo */}
          <div className="nav-brand-logo-block">
            <NavLink to="/">
              <img src={Logo} alt="Logo" className=" w-[100%] max-w-[150px]" />
            </NavLink>
          </div>

          {/* Navbar Menu */}
          <div
            className={`navbar-block transition-all duration-300 
              ${isOpen ? "translate-x-0" : "-translate-x-full"} 
              lg:translate-x-0 fixed lg:static top-0 left-0 w-full 
              lg:w-auto bg-white  lg:bg-transparent p-5 lg:p-0  h-screen lg:h-auto z-[999]`}
          >
            <nav className="navigation text-center">
              <ul className="flex flex-col justify-center lg:flex-row gap-4 lg:gap-1 pt-[70px] lg:pt-0">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#fff] bg-[#ff3f3f] rounded-md px-4 py-2  text-[16px] transition-all duration-300 font-Josefin inline-block"
                          : "text-black text-[16px] bg-transparent rounded-md px-4 py-2  transition-all duration-300 font-Josefin inline-block"
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile Toggle Button (Visible for 991px and below) */}
          <div className="menu-button lg:hidden z-[9999]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black text-2xl transition-all duration-300 transform hover:scale-110 z-[9999]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
