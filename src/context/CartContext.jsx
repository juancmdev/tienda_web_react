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

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
