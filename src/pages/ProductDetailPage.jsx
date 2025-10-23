import { useParams } from "react-router";
import products from "../data/products";

const ProductDetailPage = () => {
  const { id } = useParams();

  const currentProduct = products.find((product) => product.id === id);


  return (
    <div className="container mx-auto p-8">
      {currentProduct ? <h1 className="text-center text-3xl font-bold">{currentProduct.name}</h1> : <h1 className="text-center text-3xl font-bold">Producto no encontrado.</h1>}
    </div>
  );
};

export default ProductDetailPage;
