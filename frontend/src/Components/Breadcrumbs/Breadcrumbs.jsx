import React from 'react'
import './Breadcrumbs.css'
import arrowIcon from '../Assets/icons/breadcrumb_arrow.png'
import { Link } from 'react-router-dom'


export const Breadcrumb = (props) => {
  const {product} = props;
  return (
    <div className='breadcrumb'>
      <Link to="/">HOME</Link> <img src={arrowIcon} alt="" /> <Link to="/">SHOP</Link> <img src={arrowIcon} alt="" /> <Link to={product.category === "men" ? "/mens" : "/womens"}>{product.category}</Link> <img src={arrowIcon} alt="" /> <Link to={`/product/${product.id}`}>{product.name}</Link>
    </div>
  )
}
