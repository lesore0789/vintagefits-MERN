import React, { useState } from 'react'
import './ProductDisplay.css'
import starIcon from '../Assets/icons/star_icon.png'
import starDullIcon from '../Assets/icons/star_dull_icon.png'

export const ProductDisplay = (props) => {
  const {product} = props;
  const [selected, setSelected] = useState(product.image)

  const changeImage1 = () => setSelected(product.image)
  const changeImage2 = () => setSelected(product.image2)
  const changeImage3 = () => setSelected(product.image3)

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img onClick={changeImage1} src={product.image} alt="" />
          <img onClick={changeImage2} src={product.image2} alt="" />
          <img onClick={changeImage3} src={product.image3} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={selected} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starDullIcon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Vintage, Thrift
        </p>
      </div>
    </div>
  )
}
