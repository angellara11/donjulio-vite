import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateCartItemQuantity,
    getCartProductQuantity,
  } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity, stock) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else if (quantity <= stock) {
      updateCartItemQuantity(id, quantity);
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (cart.length === 0) {
    return <div className="text-center">El carrito de compras esta vacio</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold my-4">Detalles del carrito</h2>
      <div className="w-full max-w-2xl">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-4 p-4 border rounded"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p>Price: ${item.price}</p>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        item.quantity - 1,
                        item.stock
                      )
                    }
                    className="px-2 bg-gray-200 rounded"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        item.quantity + 1,
                        item.stock
                      )
                    }
                    className={`px-2 rounded ${
                      item.quantity >= item.stock
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed hover:text-gray-500"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    disabled={item.quantity >= item.stock}
                    style={
                      item.quantity >= item.stock
                        ? { cursor: "not-allowed" }
                        : {}
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                >
                  Eliminar
                </button>
              </div>
            </div>
            <div>
              <p className="text-lg font-bold">${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-xl font-bold">
          Total: $
          {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
        </p>
      </div>
      <button
        onClick={handleCheckout}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Comprar
      </button>
    </div>
  );
};

export default Cart;
