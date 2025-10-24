const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 col-span-full">
      {/* 🌀 Spinner de Tailwind (Animación de giro) */}
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-4 border-indigo-500 mb-4"
        role="status"
      >
        {/* Este div queda vacío, la animación es solo del borde */}
      </div>

      {/* Mensaje */}
      <p className="text-lg text-gray-600">Buscando productos...</p>
    </div>
  );
};

export default Loader;
