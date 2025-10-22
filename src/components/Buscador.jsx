// Recibe la función para manejar el cambio del término de búsqueda
const Buscador = ({ onBusquedaChange }) => {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Escribe el aroma que buscas (ej: Vainilla)"
        onChange={(e) => onBusquedaChange(e.target.value)}
        className="w-full p-4 border border-gray-300 rounded-xl shadow-inner focus:ring-indigo-500 focus:border-indigo-500 transition"
      />
    </div>
  );
};

export default Buscador;