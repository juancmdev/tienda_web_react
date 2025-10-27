import { formatCOP } from "../utils/format";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext); //Extraigo la función addToCart del contexto

  // Recibiría onImageClick para el modal
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Zona de Imagen (Asumimos que product.image tiene la ruta) */}

      <Link to={`/productDetail/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-contain cursor-pointer"
          // 👈 Cuando se hace clic, llamamos a la función recibida
          // y le pasamos la URL de esta imagen.
          //onClick={() => onImageClick(product.imageUrl)}
        />
      </Link>

      <div className="p-5">
        <h3
          className="text-xl font-semibold text-gray-800 truncate"
          title={product.name}
        >
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mt-1 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Precio */}
        <p className="text-2xl font-bold text-indigo-600 mb-4">
          {formatCOP(product.price)} COP
        </p>

        {/* Botón de Pago Añadir al carrito */}
        <button
          onClick={() => addToCart(product)} // Llamamos a la función addToCart del contexto
          className="block w-full text-center py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-150 cursor-pointer"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
