import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='p-4 flex gap-4'>
        <Link to={'/'}>Home</Link>
        <Link to={'/pages/cart'}>Cart</Link>
        <Link to={'/pages/wishlist'}>Wishlist</Link>
        <Link to={'/pages/account'}>Account</Link>
    </div>
  )
}

export default Header;
