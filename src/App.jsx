import React from 'react'
import Navbar from './componets/Navbar'
import './App.css'
import Home from './componets/Home'
import Products from './componets/Products'
import Product from './componets/Product'


import { Routes, Route } from 'react-router-dom'
import Footer from './componets/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App