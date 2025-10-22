import products from '../data/products'

const Store = () => {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Store
