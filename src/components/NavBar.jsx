import CartWidget from "./CartWidget";
import brand from "/src/assets/brand.png";

const Navbar = () => (
  <div className="h-14 w-screen bg-black py-2 px-10 flex space-x-20">
    <img className="h-full w-auto p-1" src={brand} alt="brand" />
    <ul className="text-white flex space-x-14 w-full justify-end items-center ">
      <a href="#">
        {" "}
        <li className="hover:underline">Home</li>
      </a>
      <a href="#">
        <li className="hover:underline">About</li>
      </a>
      <a href="">
        <li className="hover:underline">Menu</li>
      </a>
    </ul>
    <CartWidget />
  </div>
);

export default Navbar;
