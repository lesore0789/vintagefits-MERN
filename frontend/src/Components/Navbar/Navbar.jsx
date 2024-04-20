import logo from '../Assets/images/logo.png'
import cartIcon from '../Assets/icons/cart_icon.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

  const Navbar = () => {
    return (
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="navigation logo" />
          <p>Vintage Fits</p>
        </div>
        <ul className="nav-menu">
          <li><Link style={{textDecoration: 'none'}} to='/'>Shop</Link></li>
          <li><Link style={{textDecoration: 'none'}} to='/'>Men</Link></li>
          <li><Link style={{textDecoration: 'none'}} to='/'>Women</Link></li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={cartIcon} alt="cart icon" /></Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    )
  }

  export default Navbar
