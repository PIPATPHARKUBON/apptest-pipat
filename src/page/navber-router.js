import React from 'react'
import Home from './home'
import Member from './member'
import Product from './products.js'
import { BrowserRouter, NavLink,Routes,Route } from 'react-router-dom'

export default function Navberrouter() {
  return (
    <BrowserRouter>
  <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   <img src='./images/logo.jpg'width="50"  />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to="/" className="nav-link active"href="#">Home</NavLink>
        <NavLink to="/Member" className="nav-link" href="#">Member</NavLink>
        <NavLink to="/Product" className="nav-link" href="#">Product</NavLink>
      </div>
    </div>
  </div>
</nav>
<Routes>
   
    <Route path='/' element={<Home />}/>
    <Route path='/Member' element={<Member />}/>
    <Route path='/Product' element={<Product />}/>
  </Routes>
</div>
</BrowserRouter>
  )
}
