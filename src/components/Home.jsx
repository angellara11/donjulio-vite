import React, { useEffect, useState } from "react";
import { getProducts } from "../asyncMock";

export const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProductList(products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold my-4">Product List</h2>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productList.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 mb-4"
            />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <a
              href={`/item/${product.id}`}
              className="mt-2 text-blue-500 hover:underline"
            >
              Ver Detalles
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
