import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { CartContext } from "./CartContext";
import { dataBase } from "../firebase/config";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, getCartProductQuantity } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(dataBase, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ ...docSnap.data(), id: docSnap.id });
        } else {
          console.log("No existe tal documento!");
        }
      } catch (error) {
        console.error("Error al recuperar productos:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleIncrement = () => {
    if (quantity < product.stock - getCartProductQuantity(product.id)) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  if (!product) {
    return <div className="text-center">Loading...</div>;
  }

  const quantityInCart = getCartProductQuantity(product.id);
  const availableStock = product.stock - quantityInCart;
  const isMaxStockReached = quantityInCart >= product.stock;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="text-center mb-8">Item Detail</div>
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center text-center gap-4">
          {product.image ? (
            <div className="w-full flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full h-auto max-h-80"
              />
            </div>
          ) : (
            <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
              No Image
            </div>
          )}
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-sm">ID: {product.id}</p>
          <p className="text-sm">Category: {product.category}</p>
          <p className="text-sm">Price: ${product.price}</p>
          <p className="text-sm">Stock: {availableStock}</p>
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
              disabled={quantity >= availableStock}
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isMaxStockReached}
            className={`px-4 py-2 mt-2 rounded ${
              isMaxStockReached
                ? "bg-gray-200 text-gray-400 cursor-not-allowed hover:text-gray-500"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            style={isMaxStockReached ? { cursor: "not-allowed" } : {}}
          >
            {isMaxStockReached ? "Fuera de stock" : "Añadir al carrito"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
