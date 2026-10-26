Casuga, Allen Gabriel R.
D-2L

This is the Lazado homepage built with React, extended with state management for a shopping cart. No CSS frameworks are used

Structure
src/
  main.jsx                  entry point, renders <App /> into #root
  App.jsx                   holds the menus, products and the carts[] state
  App.css                   all styles (flex layout)
  utils.js                  formatPrice() helper (pesos)
  components/
    Header.jsx              store name + navigation
    NavButton.jsx           reusable button, one per item in menus[]
    ProductList.jsx         flex container for the product cards
    ProductCard.jsx         reusable card: product name, price, "Add to cart"
    Cart.jsx                shopping cart on the right side (items, tally, total)
    CartItem.jsx            one cart row with its own Delete button
    

Run it:

npm install
npm run dev
localhost:5173
