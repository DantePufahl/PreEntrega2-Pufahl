import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="hero">
      <nav className="navbar">
        <div className="shop__container">
          <p className="shop__button">Shop</p>
          <div className="menu">
            <ul>
           
              <li>
              <NavLink to="/categoria/1">Hamburguesas Carne</NavLink>
              </li>
              <li>
              <NavLink to="/categoria/2">hamburguesas veggie</NavLink>
              </li>
              <li>
              <NavLink to="/categoria/3">Tapas</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>TeKomo</h1>
      </Link>
      <CartWidget />
    </header>
  );
};

export default NavBar;
