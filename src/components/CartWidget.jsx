import React, { useContext } from "react";
import cartImage from "/src/assets/cart.png";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative h-7 w-8 cursor-pointer">
      <img
        className="h-full min-w-6 mt-1"
        src={cartImage}
        alt="carrito compras"
      />
      <div className="text-xs bg-red-500 text-white rounded-full flex justify-center items-center w-5 h-5 absolute bottom-3 -left-5">
        {totalItems}
      </div>
    </div>
  );
};

export default CartWidget;
