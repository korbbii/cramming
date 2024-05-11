import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import Swiftcart from './swiftcart.png';

function Cart() {
  const [cartCount, setCartCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpText, setPopUpText] = useState('');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const storedCount = localStorage.getItem('cartCount');
    if (storedCount) {
      setCartCount(parseInt(storedCount));
    }
    const storedProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    setCartProducts(storedProducts);
  }, []);

  const updateCart = () => {
    const storedCount = localStorage.getItem('cartCount');
    if (storedCount) {
      setCartCount(parseInt(storedCount));
    }
    const storedProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    setCartProducts(storedProducts);
  };

  const handleMouseEnter = (event, text) => {
    setPopUpText(text);
    setShowPopUp(true);
    event.currentTarget.querySelector('.underline-animation').style.width = "100%";
  };

  const handleMouseLeave = (event) => {
    setShowPopUp(false);
    event.currentTarget.querySelector('.underline-animation').style.width = "0";
  };

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-white text-black -py-4 sm:py-10 flex justify-between items-center shadow-lg z-10" onMouseMove={handleMouseMove}>
        <div className="flex items-center">
          <Link to="/" className="text-4xl font-bold font-poppins lg:ml-64 sm:ml-40 md:mr-24 md:ml-24">
            <img src={window.innerWidth < 640 ? Swiftcart : null} alt="SwiftCart" className={window.innerWidth < 640 ? 'w-40 h-50' : 'hidden'} />
            <span className={window.innerWidth >= 640 ? '' : 'hidden'}>SwiftCart</span>
          </Link>
        </div>
        <div className="text-2xl flex items-center mr-4 sm:mr-40">
          <Link to="/" className="mr-4 sm:mr-12 font-montserrat flex items-center relative"
            onMouseEnter={(e) => { handleMouseEnter(e, 'Home'); setShowPopUp(true); }} onMouseLeave={handleMouseLeave}>
            {window.innerWidth >= 640 && (
              <>
                Home
              </>
            )}
            {window.innerWidth < 640 && <FontAwesomeIcon icon={faHome} className="ml-2 text-black-500" />}
            <span className="absolute bg-blue-500 bottom-0 left-0 w-0 h-0.5 transition-all duration-300 underline-animation"></span>
          </Link>
          <Link to="/pages/cart" className="mr-12 font-montserrat flex items-center relative"
            onMouseEnter={(e) => { handleMouseEnter(e, 'Cart'); setShowPopUp(true); }} onMouseLeave={handleMouseLeave}>
            {window.innerWidth >= 640 && (
              <>
                Cart ({cartProducts.length})
                <FontAwesomeIcon icon={faShoppingCart} className="ml-2 text-black-500" />
              </>
            )}
            {window.innerWidth < 640 && <FontAwesomeIcon icon={faShoppingCart} className="ml-3 text-black-500" />}
            <span className="absolute bg-blue-500 bottom-0 left-0 w-0 h-0.5 transition-all duration-300 underline-animation"></span>
          </Link>
          <Link to="/pages/wishlist" className="mr-12 font-montserrat flex items-center relative"
            onMouseEnter={(e) => { handleMouseEnter(e, 'Wishlist'); setShowPopUp(true); }} onMouseLeave={handleMouseLeave}>
            {window.innerWidth >= 640 && (
              <>
                Wishlist
                <FontAwesomeIcon icon={faHeart} className="ml-2 text-black-500" />
              </>
            )}
            {window.innerWidth < 640 && <FontAwesomeIcon icon={faHeart} className="-ml-4 text-black-500" />}
            <span className="absolute bg-blue-500 bottom-0 left-0 w-0 h-0.5 transition-all duration-300 underline-animation"></span>
          </Link>
          <Link to="/pages/account" className="font-montserrat flex items-center relative"
            onMouseEnter={(e) => { handleMouseEnter(e, 'Account'); setShowPopUp(true); }} onMouseLeave={handleMouseLeave}>
            {window.innerWidth >= 640 && (
              <>
                <FontAwesomeIcon icon={faUser} className="ml-2 text-black-500" />
              </>
            )}
            {window.innerWidth < 640 && <FontAwesomeIcon icon={faUser} className="-ml-4 mr-4 text-black-500" />}
            <span className="absolute bg-blue-500 bottom-0 left-0 w-0 h-0.5 transition-all duration-300 underline-animation"></span>
          </Link>
        </div>
        {showPopUp && (
          <div className="absolute" style={{ left: cursorPosition.x, top: cursorPosition.y + 35 }}>
            <div className="bg-gray-800 text-white px-4 py-1 rounded-md">
              {popUpText}
            </div>
          </div>
        )}
      </div>
      <div className="container mx-auto mt-16 px-4">
        <div className="flex flex-wrap justify-around">
          {cartProducts.map((product, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg my-2">
              <img className="w-full" src={product.image} alt={product.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-900 text-lg">{product.price}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500">
                      {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
                        <FontAwesomeIcon key={i} icon={["fas", "star"]} className="mr-1" />
                      ))}
                    </span>
                    <span className="text-gray-700 ml-2">{product.rating}/5</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Checkout
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
