import { useParams } from "react-router"; // Asegúrate de importar de "react-router-dom"
import products from "../data/products";
// Importamos la función de formato de moneda para usarla aquí también
import { formatCOP } from "../utils/format";
import { Link } from "react-router";

const ProductDetailPage = () => {
  const { id } = useParams();

  // ✅ CORREGIDO: Comparación directa de strings.
  const currentProduct = products.find((product) => product.id === id);

  // 1. Manejo de Producto No Encontrado
  if (!currentProduct) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-4xl font-extrabold text-red-600 mt-10">
          404 - Producto no encontrado.
        </h1>
        <p className="text-gray-600 mt-4">
          La referencia del producto {id} no existe en nuestra tienda.
        </p>
        {/* Botón para volver a la tienda */}
        <Link
          to="/store"
          className="mt-8 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer"
        >
          Volver a la tienda
        </Link>
      </div>
    );
  }

  // 2. Renderizado del Detalle del Producto
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-10 bg-white p-6 rounded-xl shadow-2xl">
        {/* Columna 1: Imagen Principal */}
        <div className="md:w-1/2">
          <img
            src={currentProduct.imageUrl}
            alt={currentProduct.name}
            className="w-[70%] h-auto object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Columna 2: Descripción y Opciones de Pago */}
        <div className="md:w-1/2 pt-4 md:pt-0">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            {currentProduct.name}
          </h1>

          <p className="text-3xl font-bold text-indigo-700 mb-6">
            {formatCOP(currentProduct.price)}
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Descripción del Aroma:
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {currentProduct.description}
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Opciones de Pago:
          </h2>

          {/* Botón de Pago Mercado Pago */}
          <a
            href={currentProduct.linkPagoMP}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition shadow-lg mt-4"
          >
            Pagar con Mercado Pago
          </a>

          <p className="text-sm text-gray-500 mt-3 text-center">
            Serás redirigido a la pasarela de pago segura de Mercado Pago.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
