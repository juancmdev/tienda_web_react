import { useState, useRef } from "react";
import Buscador from "../components/Buscador";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
// import ImageModal from "../components/ImageModal";

const Store = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const timeRef = useRef(null); // 👈 Referencia al temporizador

  // const [modalState, setModalState] = useState({
  //   isOpen: false,
  //   imageUrl: "",
  // });

  // const openModal = (imageUrl) => {
  //   setModalState({ isOpen: true, imageUrl });
  // };

  // const closeModal = () => {
  //   setModalState({ isOpen: false, imageUrl: "" });
  // };

  const handleSearch = (term) => {
    clearTimeout(timeRef.current); // 👈 Limpia el temporizador anterior
    setIsLoading(true);
    setSearchTerm(term);
    const newTimer = setTimeout(() => {
      setIsLoading(false); //Detener el Loader
    }, 300);

    //Guardamos la referencia del nuevo temporizador
    timeRef.current = newTimer;
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Buscador onBusquedaChange={handleSearch} />

      {/*Lógica de Renderizado Condicional */}
      {isLoading ? (
        // Estado 1: CARGANDO (Si el Debounce está activo)
        <Loader />
      ) : filteredProducts - length === 0 && searchTerm.trim() !== "" ? (
        // Estado 2: NO ENCONTRADO (Si la carga terminó y no hay resultados)
        <div className="container mx-auto p-8 text-center">
          <h1 className="text-4xl font-extrabold text-red-600 mt-10">
            404 - Producto no encontrado.
          </h1>
          <p className="text-gray-600 mt-4">
            La referencia del producto {searchTerm} no existe en nuestra tienda.
          </p>
        </div>
      ) : (
        // Estado 3: MOSTRAR RESULTADOS (Si hay productos para mostrar)
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[85%] mx-auto mt-10">
          {filteredProducts.map((product, index) => (
            <ProductCard product={product} key={index} /> //onImageClick={openModal} si requiero el modal
          ))}
        </div>
      )}
      {/* <ImageModal
        imageUrl={modalState.imageUrl}
        isOpen={modalState.isOpen}
        onClose={closeModal}
      /> */}
    </>
  );
};

export default Store;
