import { MdSearch } from "react-icons/md";

// Recibe la función para manejar el cambio del término de búsqueda
const Buscador = ({ onBusquedaChange }) => {
  return (
    <div className="mb-8 mt-8 w-[50%] m-auto relative">
      <input
        type="text"
        placeholder="Qué producto deseas buscar?"
        onChange={(e) => onBusquedaChange(e.target.value)}
        className="w-full p-4 border border-gray-300 rounded-xl shadow-inner focus:ring-indigo-500 focus:border-indigo-500 transition"
      />
      {/* 👈 El Ícono de Lupa */}
      <MdSearch
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={28} // Puedes definir el tamaño
      />
    </div>
  );
};

export default Buscador;
