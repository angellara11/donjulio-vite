import cartImage from "/src/assets/cart.png";
console.log(cartImage);
const CartWidget = (items) => (
  <div className="relative h-7 w-8">
    <img
      className="h-full min-w-6  mt-1"
      src={cartImage}
      alt="carrito compras"
    ></img>
    <div className="text-xs bg-white rounded-full flex justify-center items-center w-5 h-5 absolute bottom-3 -left-5">
      0
    </div>
  </div>
);

export default CartWidget;
