
import Hero from '../components/Hero'
import Shop from '../components/Shop'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { PRODUCTS } from '../components/products'
import { ShopContextProvider } from '../context/shop-context'



function Homepage() {

  const[open, setOpen] = useState(false)



  return (
    <ShopContextProvider>
        <Navbar open={open} setOpen={setOpen} products={PRODUCTS}/>
        <Sidebar open={open} setOpen={setOpen} products={PRODUCTS}/>
        <Hero/>
        <Shop products={PRODUCTS}/>
    </ShopContextProvider>
  )
}

export default Homepage