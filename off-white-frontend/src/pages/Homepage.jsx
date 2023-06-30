
import Hero from '../components/Hero'
import Shop from '../components/Shop'
import React, { useState } from 'react'
import { PRODUCTS } from '../components/products'
import { ShopContextProvider } from '../context/shop-context'




function Homepage() {

  return (
    <>
        <Hero/>
        <Shop products={PRODUCTS}/>
    </>
  )
}

export default Homepage