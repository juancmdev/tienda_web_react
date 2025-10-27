import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="text-3xl text-center font-bold mt-10">
        El carrito está vacío
      </div>
    );
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1 className="text-4xl text-center font-bold mt-10 mb-4">
        Artículos en tu carrito:{" "}
      </h1>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-center items-center text-2xl text-center font-bold mt-2"
        >
          *{item.name}
          <MdDeleteForever
            className="text-3xl cursor-pointer hover:text-gray-700"
            onClick={() => removeFromCart(item.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Cart;
