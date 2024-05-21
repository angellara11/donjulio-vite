import CartWidget from "./CartWidget";
import brand from "/src/assets/brand.png";

const Navbar = () => (
  <div className="h-14 w-screen bg-black py-2 px-10 flex space-x-20">
    <a href="/">
      <img className="h-full w-auto p-1" src={brand} alt="brand" />
    </a>

    <ul className="text-white flex space-x-14 w-full justify-end items-center ">
      <a href="/category/blanco">
        {" "}
        <li className="hover:underline">Blanco</li>
      </a>
      <a href="/category/reposado">
        <li className="hover:underline">Reposados</li>
      </a>
      <a href="/category/añejo">
        <li className="hover:underline">Añejos</li>
      </a>
    </ul>
    <CartWidget />
  </div>
);

export default Navbar;
