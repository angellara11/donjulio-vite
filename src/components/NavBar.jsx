import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import brand from "/src/assets/brand.png";

const NavBar = () => (
  <div className="h-14 w-screen bg-black py-2 px-10 flex space-x-20">
    <Link to="/">
      <img className="h-full w-auto p-1" src={brand} alt="brand" />
    </Link>
    <ul className="text-white flex space-x-14 w-full justify-end items-center ">
      <Link to="/category/blanco">
        <li className="hover:underline">Blanco</li>
      </Link>
      <Link to="/category/reposado">
        <li className="hover:underline">Reposados</li>
      </Link>
      <Link to="/category/añejo">
        <li className="hover:underline">Añejos</li>
      </Link>
    </ul>
    <CartWidget />
  </div>
);

export default NavBar;
