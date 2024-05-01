import logo from '../Assets/images/logo.png'
import cartIcon from '../Assets/icons/cart_icon.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'

  const Navbar = () => {
     const [menu, setMenu] = useState('shop')
     const {getTotalCartItems} = useContext(ShopContext)
    return (
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="navigation logo" />
          <p>Vintage Fits</p>
        </div>
        <ul className="nav-menu">
          <li onClick={() => {setMenu('shop')}}><Link style={{textDecoration: 'none', color: '#006D77'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
          <li onClick={() => {setMenu('mens')}}><Link style={{textDecoration: 'none', color: '#006D77'}} to='/mens'>Men</Link>{menu==='mens'?<hr/>:<></>}</li>
          <li onClick={() => {setMenu('womens')}}><Link style={{textDecoration: 'none', color: '#006D77'}} to='/womens'>Women</Link>{menu==='womens'?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={cartIcon} alt="cart icon" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    )
  }

  export default Navbar
