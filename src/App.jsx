import React from 'react'
import Navbar from './components/Pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Products from './components/Pages/Products'
import Cart from './components/Pages/Cart'

const App = () => {
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/products' element={<Products/>} ></Route>
    <Route path='/cart' element={<Cart/>} ></Route>
   </Routes>
    </>

  )
}

export default App
