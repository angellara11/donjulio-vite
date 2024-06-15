import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import brand from "/src/assets/brand.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="h-14 w-screen bg-black py-2 px-10 flex items-center justify-between">
      <button className="md:hidden text-white text-3xl" onClick={toggleMenu}>
        ☰
      </button>
      <div className="flex-grow md:flex-grow-0 flex justify-center md:justify-start">
        <Link to="/">
          <img className="h-10 w-auto" src={brand} alt="brand" />
        </Link>
      </div>
      <ul
        className={`text-white flex-col md:flex-row flex md:space-x-14 w-full md:w-auto justify-center md:justify-end items-center md:flex ${
          isMenuOpen ? "block" : "hidden"
        } absolute md:static top-14 left-0 bg-black md:bg-transparent z-10`}
      >
        <Link to="/category/blanco" onClick={closeMenu}>
          <li className="hover:underline py-2 md:py-0">Blanco</li>
        </Link>
        <Link to="/category/reposado" onClick={closeMenu}>
          <li className="hover:underline py-2 md:py-0">Reposados</li>
        </Link>
        <Link to="/category/añejo" onClick={closeMenu}>
          <li className="hover:underline py-2 md:py-0">Añejos</li>
        </Link>
      </ul>
      <div className="ml-auto md:ml-0 flex items-center space-x-4">
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
