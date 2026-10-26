import CartItem from "./CartItem.jsx";
import { formatPrice } from "../utils.js";

// Shopping cart shown on the right-hand side of the page, and shows total price
function Cart({ items, onDelete }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <aside className="cart">
      <h2>Shopping Cart</h2>

      <p className="cart-count">Total items: {items.length}</p>

      {items.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((item) => (
              <CartItem key={item.cartId} item={item} onDelete={onDelete} />
            ))}
          </ul>

          <p className="cart-total">Total: {formatPrice(total)}</p>
        </>
      )}
    </aside>
  );
}

export default Cart;
