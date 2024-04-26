import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import {Breadcrumb} from '../Components/Breadcrumbs/Breadcrumbs'
import {ProductDisplay} from '../Components/ProductDisplay/ProductDisplay'
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox'


const Product = () => {
  const {allProducts} = useContext(ShopContext)
  const {productId} = useParams()
  const product = allProducts.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
    </div>
  )
}

export default Product
