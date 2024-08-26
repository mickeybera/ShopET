import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import Login from './components/Login'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Cart from './components/Cart'

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes> 
    <Footer />
    </div>
  )
}

export default App
