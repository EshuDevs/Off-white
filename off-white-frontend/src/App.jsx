import './App.css'
import React from 'react'
import { ShopContextProvider } from './context/shop-context'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage'


function App() {

  return (
    <ShopContextProvider>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/ProductPage" element={<ProductPage/>}/>
      </Routes>
    </ShopContextProvider>
  )
}

export default App
