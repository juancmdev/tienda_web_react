import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Lógica de Adición: Maneja el incremento de cantidad o añade un nuevo ítem
  const addToCart = (product) => {
    console.log("Intentando añadir producto ID:", product.id); // 👈 Añade esto
    // 1. Buscar si el producto ya existe en el carrito
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      console.log(
        "Producto existente encontrado. Cantidad actual:",
        existingItem.quantity
      ); // 👈 Y esto

      // 2. Si existe: Usamos map para crear un nuevo array inmutable
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          // Si es el ítem, incrementamos su cantidad
          return { ...item, quantity: (item.quantity || 0) + 1 };
        }
        // Si no es el ítem, lo devolvemos sin cambios
        return item;
      });

      // Actualizamos el estado una sola vez
      setCartItems(updatedCart);
    } else {
      // 3. Si NO existe: Añadimos el nuevo producto con quantity: 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  //Eliminar productos del carrito
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Aumentar la cantidad de un ítem
  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        // Devolvemos el ítem con la cantidad incrementada
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  // Disminuir la cantidad de un ítem
  const decreaseQuantity = (productId) => {
    const existingItem = cartItems.find((item) => item.id === productId);

    if (existingItem && existingItem.quantity > 1) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === productId) {
          // Devolvemos el ítem con la cantidad decrementada
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCartItems(updatedCart);
    } else if (existingItem && existingItem.quantity === 1) {
      // Si la cantidad llega a 1, lo eliminamos completamente del carrito (opcional pero recomendado)
      removeFromCart(productId);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
