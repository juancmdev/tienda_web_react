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
    <div>
      <Buscador onBusquedaChange={setSearchTerm} />
      {filteredProducts.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
};

export default Store;
