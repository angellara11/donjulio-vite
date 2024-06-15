import React, { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from "./CartContext";
import { dataBase } from "../firebase/config";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });

  const [orderId, setOrderId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { cart, clearCart } = useContext(CartContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (/^\d*$/.test(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
        setErrorMessage("");
      } else {
        setErrorMessage("Solo se permiten números");
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      setErrorMessage("El email no coincide");
      return;
    }

    // Create order object
    const order = {
      buyer: formData,
      items: cart,
      date: new Date(),
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    };

    setIsSubmitting(true);
    try {
      const docRef = await addDoc(collection(dataBase, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error añadiendo el documento: ", error);
      setErrorMessage(
        "Ocurrio un error mientras se procesaba su pedido. Por favor intentalo de nuevo."
      );
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold my-4">Checkout Form</h2>
      {orderId ? (
        <div className="text-center">
          <h3 className="text-xl font-bold">
            Gracias por su compra, esperamos verte de nuevo pronto!
          </h3>
          <p>Tu ID de pedido es: {orderId}</p>
        </div>
      ) : (
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Apellidos
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Dirección
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Número de Teléfono
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            {errorMessage && (
              <p className="text-red-500 text-xs italic mt-2">{errorMessage}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirmar Email
            </label>
            <input
              type="email"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Realizar Compra
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
