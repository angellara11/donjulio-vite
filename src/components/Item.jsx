import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <li className="m-4 p-4 border rounded shadow-md w-64">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm">ID: {product.id}</p>
      <p className="text-sm">Category: {product.category}</p>
      <p className="text-sm">Price: ${product.price}</p>
      <Link
        to={`/item/${product.id}`}
        className="text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </li>
  );
};

export default Item;
