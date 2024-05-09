import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Wishlist from './pages/wishlist';
import Account from './pages/account';
import Admin from './admin/adminpanel';
import Statistics from './admin/statisticspanel';
import User from './admin/userspanel';
import Order from './admin/orderspanel';
import Product from './admin/productspanel';
import Register from './pages/register';
import Login from './pages/login';
import Shoes from './products/productshoes';
import Checkoutform from './products/checkoutform';
import Books from './products/productbooks';
import Clothes from './products/productclothes';
import Jewelry from './products/productjewelry';
import Electronics from './products/productelectronics';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/cart" element={<Cart />} />
          <Route path="/pages/wishlist" element={<Wishlist />} />
          <Route path="/pages/account" element={<Account />} />
          <Route path="/admin/adminpanel" element={<Admin />} />
          <Route path="/admin/statisticspanel" element={<Statistics />} />
          <Route path="/admin/userspanel" element={<User />} />
          <Route path="/admin/orderspanel" element={<Order />} />
          <Route path="/admin/productspanel" element={<Product />} />
          <Route path="/pages/register" element={<Register />} />
          <Route path="/pages/login" element={<Login />} />
          <Route path="/products/productbooks" element={<Books />} /> 
          <Route path="/products/checkoutform" element={<Checkoutform />} />
          <Route path="/products/productshoes" element={<Shoes />} />
          <Route path="/products/productclothes" element={<Clothes />} />
          <Route path="/products/productjewelry" element={<Jewelry />} />
          <Route path="/products/productelectronics" element={<Electronics />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
