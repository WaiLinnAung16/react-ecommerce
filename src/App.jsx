import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './Pages/Cart'
import Detail from './Pages/Detail'
import Success from './Pages/Success'
import 'animate.css'



const App = () => {


  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/success' element={<Success/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

export default App