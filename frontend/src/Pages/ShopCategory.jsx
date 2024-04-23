import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdownIcon from '../Components/Assets/icons/dropdown_icon.png'
import { Item } from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {allProducts} = useContext(ShopContext)

  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p><span>Showing 1-16 </span>out of 36 products</p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdownIcon} alt="dropdown icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {allProducts.map((item,i) => {
          if(props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          } else {
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
