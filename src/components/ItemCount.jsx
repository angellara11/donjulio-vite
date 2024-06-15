import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-4">
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          disabled={quantity <= 1}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>
      <button
        onClick={() => onAdd(quantity)}
        className={`mt-2 px-4 py-2 rounded ${
          stock === 0
            ? "bg-gray-200 text-gray-400 cursor-not-allowed hover:text-gray-500"
            : "bg-sky-700 text-white hover:bg-sky-500"
        }`}
        disabled={stock === 0}
        style={stock === 0 ? { cursor: "not-allowed" } : {}}
      >
        {stock === 0 ? "Fuera de Stock" : "Agregar al carrito"}
      </button>
    </div>
  );
};

export default ItemCount;
