import logo from '../Assets/images/logo.png'
import cartIcon from '../Assets/icons/cart_icon.png'
import './Navbar.css'

  const Navbar = () => {
    return (
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="navigation logo" />
          <p>Vintage Fits</p>
        </div>
        <ul className="nav-menu">
          <li>Shop</li>
          <li>Men</li>
          <li>Women</li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cartIcon} alt="cart icon" />
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    )
  }

  export default Navbar
