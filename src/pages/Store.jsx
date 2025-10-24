import { useState } from "react";
import Buscador from "../components/Buscador";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
// import ImageModal from "../components/ImageModal";

const Store = () => {
  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Buscador onBusquedaChange={setSearchTerm} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[85%] mx-auto mt-10">
        {filteredProducts.map((product, index) => (
          <ProductCard product={product} key={index} /> //onImageClick={openModal} si requiero el modal
        ))}
      </div>
      {/* <ImageModal
        imageUrl={modalState.imageUrl}
        isOpen={modalState.isOpen}
        onClose={closeModal}
      /> */}
    </>
  );
};

export default Store;
