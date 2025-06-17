import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Profile from './pages/Profile'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/cart' element={ <Cart /> } />
        <Route path='/account' element={ <Profile /> } />
      </Routes>
    </div>
  )
}

export default App
