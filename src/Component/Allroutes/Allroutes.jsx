import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { About } from '../Pages/About'
import { Product } from '../Pages/Product'
import { Contact } from '../Pages/Contact'
import { Error } from '../Pages/Error'
import { Cart } from '../Pages/Cart'
import Training from '../Pages/Training'
import { Dummy } from '../Pages/Dummy'



export const Allrout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/training' element={<Training/> }/>
      <Route path='/training' element={<Training/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/dummy' element={<Dummy/>} />
      <Route path='*' element={<Error/>} />

      {/* <Route path='/footer' element={<Footer/>} /> */}


    </Routes>
  )
}
