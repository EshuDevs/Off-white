import React from 'react'
import { PRODUCTS } from '../components/products'
import ProductDetails from '../components/ProductDetails'

function ProductPage() {
  return (
    <div>
      <ProductDetails products={PRODUCTS}/>
    </div>
  )
}

export default ProductPage