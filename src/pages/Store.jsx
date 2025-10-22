import { useState } from "react";
import Buscador from "../components/Buscador";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Store = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Buscador onBusquedaChange={setSearchTerm} />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </>
  );
};

export default Store;
