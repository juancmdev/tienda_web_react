const ProductCard = ({ product }) => {
    return (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        {/* Zona de Imagen (Asumimos que product.image tiene la ruta) */}
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-48 object-contain" 
        />
        
        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-800 truncate" title={product.name}>
            {product.name}
          </h3>
          <p className="text-gray-500 text-sm mt-1 mb-3 line-clamp-2">
            {product.description}
          </p>
          
          {/* Precio */}
          <p className="text-2xl font-bold text-indigo-600 mb-4">
            ${product.price.toFixed(2)}
          </p>
          
          {/* Botón de Pago Mercado Pago (Redirección directa) */}
          <a 
            href={product.linkPagoMP}
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full text-center py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition duration-150"
          >
            Comprar
          </a>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
