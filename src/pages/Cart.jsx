import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdDeleteForever } from "react-icons/md";
import { formatCOP } from "../utils/format";
import { Link } from "react-router";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.quantity || 1) * item.price,
    0
  );

  //Estado carrito vacío
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-8 h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          🛒 Carrito Vacío
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Parece que aún no has añadido ningún ambientador.
        </p>
        <Link
          to="/store"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
        >
          Ir a la Tienda
        </Link>
      </div>
    );
  }

  // Renderizado del Carrito Lleno
  return (
    <div className="container mx-auto p-6 md:p-10 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Resumen de tu Pedido ({cartItems.length} tipos de producto)
      </h1>

      {/* ⬅️ NUEVO CONTENEDOR DE DOS COLUMNAS ➡️ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUMNA 1: LISTADO DE PRODUCTOS (Ocupa 2/3 en desktop) */}
        <div className="lg:col-span-2 bg-white shadow-xl rounded-lg overflow-hidden">
          
          {/* Encabezado de la Tabla */}
          <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 font-bold text-gray-600 border-b border-gray-200">
            <div className="col-span-2">Producto</div>
            <div className="text-center">Cantidad</div>
            <div className="text-right">Subtotal</div>
          </div>

          {/* Listado de Productos */}
          {cartItems.map((item) => (
            <div 
              key={item.id} 
              className="grid grid-cols-4 gap-4 items-center p-4 border-b border-gray-100 hover:bg-indigo-50 transition"
            >
              
              {/* Nombre y Precio Unitario */}
              <div className="col-span-2 flex items-center space-x-4">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <Link to={`/productDetail/${item.id}`} className="font-semibold text-gray-800 hover:text-indigo-600 transition">
                    {item.name}
                  </Link>
                  <p className="text-sm text-gray-500">
                    Precio unitario: {formatCOP(item.price)}
                  </p>
                </div>
              </div>
              
              {/* Cantidad y Botón de Eliminar */}
              <div className="flex items-center justify-center space-x-2">
                <span className="font-medium text-gray-700">
                  {item.quantity}
                </span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                  title="Eliminar producto"
                >
                  <MdDeleteForever className="h-6 w-6 cursor-pointer" />
                </button>
              </div>

              {/* Subtotal del Item */}
              <div className="text-right font-bold text-lg text-indigo-700">
                {formatCOP(item.price * item.quantity)}
              </div>

            </div>
          ))}
        </div>
        
        {/* COLUMNA 2: RESUMEN DEL TOTAL Y CTA (Ocupa 1/3 en desktop) */}
        <div className="lg:col-span-1">
          <div className="bg-indigo-50 rounded-lg p-6 shadow-lg border border-indigo-200 sticky top-28">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <span className="text-xl font-semibold text-gray-700">Total a Pagar:</span>
              <span className="text-3xl font-extrabold text-indigo-800">
                {formatCOP(totalPrice)}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Envío gratis en compras superiores a $150.000 COP.
            </p>

            <Link 
              to="/checkout" 
              className="block w-full text-center py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-xl hover:bg-indigo-700 transition duration-200 mb-3"
            >
              Proceder al Pago
            </Link>
            
            <Link 
              to="/store" 
              className="block w-full text-center py-2 text-indigo-600 font-semibold border border-indigo-300 rounded-lg hover:bg-indigo-100 transition duration-200"
            >
              &larr; Seguir Comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
