const ImageModal = ({ imageUrl, isOpen, onClose }) => {
  if (!isOpen) {
    return null; // No renderiza nada si no está abierto
  }

  return (
    // Capa de fondo oscura (fixed, cubre todo, fondo semitransparente, z-index alto)
    <div
      className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Cierra el modal si se hace clic en el fondo
    >
      {/* Contenedor de la Imagen */}
      <div
        className="max-w-4xl max-h-full overflow-hidden"
        // Esto evita que el clic en la imagen cierre el modal
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt="Producto en pantalla completa"
          className="rounded-lg w-[60%] h-[60%] m-auto shadow-2xl"
        />

        {/* Botón de cierre (opcional, pero útil) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold p-2 hover:text-gray-300"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
