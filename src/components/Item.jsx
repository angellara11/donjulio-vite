import React from "react";

const Item = ({ product }) => {
  return (
    <ul>
      <li className="m-4 p-4 border rounded shadow-md w-64 list-none">
        <img
          src={product.image}
          alt={product.name}
          className="w-50 h-50 object-cover mb-4"
        />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-sm">Categoria: {product.category}</p>
        <p className="text-sm">Precio: ${product.price}</p>
        <div
          className="text-blue-500 hover:underline cursor-pointer"
          onClick={() => (window.location.href = `/item/${product.id}`)}
        >
          Ver Detalles
        </div>
      </li>
    </ul>
  );
};

export default Item;
