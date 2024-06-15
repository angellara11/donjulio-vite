import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { CartContext } from "./CartContext";
import { dataBase } from "../firebase/config";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, getCartProductQuantity } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(dataBase, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ ...docSnap.data(), id: docSnap.id });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = (quantity) => {
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
    <div className="min-h-screen flex flex-col p-4">
      <div className="text-center mb-8">Item Detail</div>
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-lg font-bold mb-7">{product.name}</h2>
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
          <p className="text-lg w-full sm:w-1/2 px-4 sm:px-0">
            {product.description}
          </p>{" "}
          {/* Ajustado para una mejor lectura en móvil */}
          <p className="text-lg">Category: {product.category}</p>
          <p className="text-lg">Price: ${product.price}</p>
          <p className="text-lg">Stock: {availableStock}</p>
          <ItemCount
            stock={availableStock}
            initial={1}
            onAdd={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
