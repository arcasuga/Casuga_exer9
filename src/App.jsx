import { useState, useRef } from "react";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

// Navigation menu data
const menus = [
  { name: "Appliances", url: "#", id: 1 },
  { name: "Gadgets", url: "#", id: 2 },
  { name: "Accessories", url: "#", id: 3 },
];

// Initial state of the marketplace, price is in pesos
const products = [
  { id: 1, name: "Electric Fan", category: "Appliances", price: 1299 },
  { id: 2, name: "Wireless Earbuds", category: "Gadgets", price: 899 },
  { id: 3, name: "Phone Case", category: "Accessories", price: 249 },
  { id: 4, name: "Power Bank 10000mAh", category: "Gadgets", price: 699 },
  { id: 5, name: "Rice Cooker", category: "Appliances", price: 1899 },
  { id: 6, name: "USB Cable", category: "Accessories", price: 149 },
];

function App() {
  const [category, setCategory] = useState("");

  const [carts, setCarts] = useState([]);

  const nextCartId = useRef(1);

  const handleAddToCart = (product) => {
    const entry = { ...product, cartId: nextCartId.current++ };
    const updated = [...carts, entry];
    setCarts(updated);
    console.log("Added to cart:", product.name);
    console.log("carts[]:", updated);
  };

  // Delete one individual entry from the cart
  const handleDelete = (cartId) => {
    const updated = carts.filter((item) => item.cartId !== cartId);
    setCarts(updated);
    console.log("Removed from cart");
    console.log("carts[]:", updated);
  };

  // Show only products of the selected category
  const visibleProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="frame">
      <Header
        title="Lazado"
        menus={menus}
        activeCategory={category}
        onSelect={setCategory}
      />

      <div className="layout">
        <ProductList products={visibleProducts} onAddToCart={handleAddToCart} />
        <Cart items={carts} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
