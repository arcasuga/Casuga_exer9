import NavButton from "./NavButton.jsx";

// Header that stores name on the left, navigation buttons on the right
function Header({ title, menus, activeCategory, onSelect }) {
  // Clicking the store name clears the filter and shows all products
  const handleBrandClick = (e) => {
    e.preventDefault();
    onSelect("");
  };

  return (
    <header className="navbar">
      <a href="#" className="brand" onClick={handleBrandClick}>
        {title}
      </a>

      <nav className="nav-links">
        {menus.map((menu) => (
          <NavButton
            key={menu.id}
            name={menu.name}
            url={menu.url}
            active={activeCategory === menu.name}
            onClick={onSelect}
          />
        ))}
      </nav>
    </header>
  );
}

export default Header;
