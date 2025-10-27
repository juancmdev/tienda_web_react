import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Tienda", path: "/store" },
    { name: "Contacto", path: "/contact" },
  ];

  const { cartItems } = useContext(CartContext); //Consumimos el contexto
  const cartCount = cartItems.length; //Calculamos la cantidad de elementos en el carrito

  return (
    <header className="bg-indigo-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Nombre de la Marca */}
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-indigo-200 transition"
        >
          Dxs Tienda
        </Link>

        {/* Barra de Navegación */}
        <nav>
          <ul className="flex justify-center items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-white hover:text-indigo-200 transition font-bold"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Icono del Carrito con Contador */}
            <Link
              to="/cart"
              className="relative p-2 rounded-full hover:bg-indigo-700 transition"
            >
              {/* Ícono de Carrito (Puedes usar un SVG o Tailwind Icon aquí) */}
              <FaShoppingCart className="text-white text-2xl hover:text-indigo-200 transition" />

              {/* Contador (Badge) */}
              {cartCount > 0 && (
                <span
                  className="absolute top-0 right-0 inline-flex items-center justify-center 
                               px-2 py-1 text-xs font-bold leading-none text-white 
                               transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full"
                >
                  {cartCount}
                </span>
              )}
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
