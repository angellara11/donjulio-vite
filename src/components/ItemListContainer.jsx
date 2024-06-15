import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { CartContext } from "./CartContext";
import { dataBase } from "../firebase/config";
import Item from "./Item";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id: categoryId } = useParams();
  const { addToCart, getCartProductQuantity } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(dataBase, "products");
        const productsSnap = await getDocs(productsRef);
        const productsList = productsSnap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const filteredProducts = categoryId
    ? products.filter((product) => product.category === categoryId)
    : products;

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold my-4">Products</h2>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => {
          const quantityInCart = getCartProductQuantity(product.id);
          const isMaxStockReached = quantityInCart >= product.stock;

          return (
            <div
              key={product.id}
              className="p-4 border rounded flex flex-col items-center"
            >
              <Item product={product} />
              <button
                onClick={() => addToCart(product, 1)}
                disabled={isMaxStockReached}
                className={`px-4 py-2 mt-2 rounded ${
                  isMaxStockReached
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed hover:text-gray-500"
                    : "bg-sky-700 text-white hover:bg-sky-500"
                }`}
                style={isMaxStockReached ? { cursor: "not-allowed" } : {}}
              >
                {isMaxStockReached ? "Fuera de Stock" : "Agregar al carrito"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
