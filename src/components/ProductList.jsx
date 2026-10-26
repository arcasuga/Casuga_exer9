import ProductCard from "./ProductCard.jsx";

// a flex container that wraps the product cards.
function ProductList({ products, onAddToCart }) {
  return (
    <main className="products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </main>
  );
}

export default ProductList;
