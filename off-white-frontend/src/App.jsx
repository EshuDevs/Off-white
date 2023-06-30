import './App.css'
import React, { useState } from 'react'
import { ShopContextProvider } from './context/shop-context'
import Homepage from './pages/Homepage'
import { Route, Routes,  } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { PRODUCTS } from './components/products'


function App() {

  const[open, setOpen] = useState(false)

  return (

    <ShopContextProvider>
      <Navbar open={open} setOpen={setOpen} products={PRODUCTS}/>
      <Sidebar open={open} setOpen={setOpen} products={PRODUCTS}/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/ProductPage/:id" element={<ProductPage />} />
      </Routes>
    </ShopContextProvider>

  )
}

export default App
