import { formatPrice } from "../utils.js";

// One row inside the shopping cart: name, price and a delete button.
function CartItem({ item, onDelete }) {
  return (
    <li className="cart-item">
      <div className="cart-item-info">
        <span className="cart-item-name">{item.name}</span>
        <span className="cart-item-price">{formatPrice(item.price)}</span>
      </div>

      <button className="delete-button" onClick={() => onDelete(item.cartId)}>
        Delete
      </button>
    </li>
  );
}

export default CartItem;
