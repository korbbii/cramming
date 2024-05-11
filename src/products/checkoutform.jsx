import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import Swiftcart from './swiftcart.png';

function Checkoutform(props) {
  const [cartCount, setCartCount] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpText, setPopUpText] = useState('');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const location = useLocation(); 
  const product = location.state.product; 

  const updateCartCount = (count) => {
    localStorage.setItem('cartCount', count);
    setCartCount(count);
  };

  useEffect(() => {
    const storedCount = localStorage.getItem('cartCount');
    if (storedCount) {
      setCartCount(parseInt(storedCount));
    }
  }, []);

  const handleMouseEnter = (event, text) => {
    setPopUpText(text);
    setShowPopUp(true);
    event.currentTarget.querySelector('.underline-animation').style.width = '100%';
  };

  const handleMouseLeave = (event) => {
    setShowPopUp(false);
    event.currentTarget.querySelector('.underline-animation').style.width = '0';
  };

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const addToCart = () => {
    const newCount = cartCount + 1;
    updateCartCount(newCount);
    const storedProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    storedProducts.push(product);
    localStorage.setItem('cartProducts', JSON.stringify(storedProducts));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="fixed top-0 left-0 w-full bg-white text-black -py-4 sm:py-10 flex justify-between items-center shadow-lg z-10" onMouseMove={handleMouseMove}>
        <div className="flex items-center">
          <Link to="/" className="text-4xl font-bold font-Poppins lg:ml-64 sm:ml-40 md:mr-24 md:ml-24">
            {window.innerWidth < 640 && <img src={Swiftcart} alt="SwiftCart" className="w-40 h-50" />}
            {window.innerWidth >= 640 && <span>SwiftCart</span>}
          </Link>
        </div>
        <div className="text-2xl flex items-center mr-4 sm:mr-40">
          <Link
            to="/"
            className="mr-4 sm:mr-12 font-montserrat flex items-center relative"
            onMouseEnter={(e) => { handleMouseEnter(e, 'Home'); setShowPopUp(true); }}
            onMouseLeave={handleMouseLeave}>
            {window.innerWidth >= 640 ? (
              <>Home</>
            ) : (
              <FontAwesomeIcon icon={faHome} className="ml-2 text-black-500" />
            )}
            <span className="absolute bg-blue-500 bottom-0 left-0 w-0 h-0.5 transition-all duration-300 underline-animation"></span>
          </Link>
          <Link
            to="/pages/cart"
            className="mr-12 font-montserrat flex items-center relative"
            onMouseEnter={(e) => { handleMouseEnter(e, 'Cart'); setShowPopUp(true); }}
            onMouseLeave={handleMouseLeave}>
            {window.innerWidth >= 640 ? (
              <>
                Cart ({cartCount})
                <FontAwesomeIcon icon={faShoppingCart} className="ml-2 text-black-500" />
              </>
            ) : (
              <FontAwesomeIcon icon={faShoppingCart} className="ml-3 text-black-500" />
            )}
            <span className="absolute bg-blue-500 bottom-0 left-0 w-0 h-0.5 transition-all duration-300 underline-animation"></span>
          </Link>
          <Link
            to="/pages/wishlist"
            className="mr-12 font-montserrat flex items-center relative"
            onMouseEnter={(e) => { handleMouseEnter(e, 'Wishlist'); setShowPopUp(true); }}
            onMouseLeave={handleMouseLeave}>
            {window.innerWidth >= 640 ? (
              <>
                Wishlist
                <FontAwesomeIcon icon={faHeart} className="ml-2 text-black-500" />
              </>
            ) : (
              <FontAwesomeIcon icon={faHeart} className="-ml-4 text-black-500" />
            )}
            <span className="absolute bg-blue-500 bottom-0 left-0 w-0 h-0.5 transition-all duration-300 underline-animation"></span>
          </Link>
          <Link
            to="/pages/account"
            className="font-montserrat flex items-center relative"
            onMouseEnter={(e) => { handleMouseEnter(e, 'Account'); setShowPopUp(true); }}
            onMouseLeave={handleMouseLeave}>
            {window.innerWidth >= 640 ? (
              <>
                <FontAwesomeIcon icon={faUser} className="ml-2 text-black-500" />
              </>
            ) : (
              <FontAwesomeIcon icon={faUser} className="-ml-4 mr-4 text-black-500" />
            )}
            <span className="absolute bg-blue-500 bottom-0 left-0 w-0 h-0.5 transition-all duration-300 underline-animation"></span>
          </Link>
        </div>
        {showPopUp && (
          <div className="absolute" style={{ left: Math.min(cursorPosition.x, window.innerWidth - 200), top: cursorPosition.y + 35 }}>
            <div className="bg-gray-800 text-white px-4 py-1 rounded-md">{popUpText}</div>
          </div>
        )}
      </nav>
      <div className="container mx-auto mt-16 px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <img src={product.image} alt={product.name} className="w-full ml-40 mt-40 h-auto object-cover" style={{ maxWidth: '250px', maxHeight: '350px'}} />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            {product && (
              <>
                <h2 className="text-2xl font-bold mb-2 mt-40">{product.name}</h2>
                <p className="text-md mb-4">{product.description}</p>
                <p className="text-xl font-bold mb-4">{product.price}</p>
                <p className="text-xl font-bold mb-4">{product.rating}</p>
                <div className="flex">
                  <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md mr-4" onClick={addToCart}>
                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                    Add to Cart
                  </button>
                  <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md">
                    <FontAwesomeIcon icon={faHeart} className="mr-2" />
                    Add to Wishlist
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkoutform;
