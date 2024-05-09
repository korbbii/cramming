import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import Swiftcart from './swiftcart.png';
import Monitor from './monitor.jpg';
import Samsung from './samsung.jpg';

function Productelectronics() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpText, setPopUpText] = useState('');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [gridColumns, setGridColumns] = useState(5);
  const [sortBy, setSortBy] = useState('rating');
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setGridColumns(5);
      } else if (window.innerWidth >= 640) {
        setGridColumns(2);
      } else {
        setGridColumns(1);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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

  const handleSortChange = (event) => {
    const { value } = event.target;
    setSortBy(value);
  };

  const products = [
    {
      name: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
      image: Monitor,
      description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology.",
      price: '₱4899.00',
      rating: 2.7,
    },
    {
      name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
      image: Samsung,
      description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR.",
      price: '₱6599.00',
      rating: 4.9,
    },
  ];

  let filteredProducts = [...products];
  if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => a.rating - b.rating);
  } else if (sortBy === '-rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'price') {
    filteredProducts.sort((a, b) => parseFloat(a.price.replace('₱', '')) - parseFloat(b.price.replace('₱', '')));
  } else if (sortBy === '-price') {
    filteredProducts.sort((a, b) => parseFloat(b.price.replace('₱', '')) - parseFloat(a.price.replace('₱', '')));
  }

  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-white text-black -py-4 sm:py-10 flex justify-between items-center shadow-lg z-10" onMouseMove={handleMouseMove}>
        <div className="flex items-center">
          <Link to="/" className="text-4xl font-bold font-poppins ml-4 sm:ml-40">
            <img src={window.innerWidth < 640 ? Swiftcart : null} alt="SwiftCart" className={window.innerWidth < 640 ? 'w-40 h-50' : 'hidden'} />
            <span className={window.innerWidth >= 640 ? '' : 'hidden'}>SwiftCart</span>
          </Link>
        </div>
        <div className="text-2xl flex items-center mr-4 sm:mr-40">
          <Link
            to="/"
            className="mr-4 sm:mr-12 font-montserrat flex items-center relative"
            onMouseEnter={(e) => { handleMouseEnter(e, 'Home'); setShowPopUp(true); }}
            onMouseLeave={handleMouseLeave}>
            {window.innerWidth >= 640 ? (
              <>
                Home
              </>
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
                Cart
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
      </div>
      <div className="flex justify-center">
        <div className="mr-4 sm:mr-40 ml-auto">
          <label htmlFor="sortBy" className="text-lg font-montserrat font-bold">Filter:</label>
          <div className="relative inline-block">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 9a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1zM9 13a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <select
              id="sortBy"
              value={sortBy}
              onChange={handleSortChange}
              className="mt-48 ml-5 pl-8 pr-4 py-1 border border-gray-400 rounded-md appearance-none"
            >
              <option value="rating">Rating Low - High</option>
              <option value="-rating">Rating High - Low</option>
              <option value="price">Price Low - High</option>
              <option value="-price">Price High - Low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className={`grid grid-cols-${gridColumns} gap-4 p-10 mt-30 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}>
          {filteredProducts.map((product, index) => (
            <Link to="/products/checkoutform" state={{ product: product }}>
              <div className="bg-white p-4 shadow-md rounded-md mx-2 mb-4">
                <img src={product.image} alt={product.name} className="w-full h-auto object-contain mb-2 max-h-60" />
                <h3 className="text-lg sm:text-xl font-semibold mb-1 mt-5 ml-3">{product.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 mt-5">{product.description}</p>
                <p className="text-gray-800 font-semibold mb-1 mt-5">{product.price}</p>
                <div className="flex items-center ml-40 -mt-7">
                  {[...Array(Math.round(product.rating))].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-current mb-1 mr-1" viewBox="0 0 20 20">
                      <path d="M10 0c-.4 0-.7.2-.9.5L6.4 6.1 1.1 7.1c-.7.1-1.1 1-.7 1.6l4.2 4.1-.9 5.2c-.1.7.6 1.2 1.2.8l4.9-2.6 4.9 2.6c.6.3 1.3-.2 1.2-.8l-.9-5.2 4.2-4.1c.4-.5 0-1.4-.7-1.6l-5.4-.9L10.9.5C10.7.2 10.4 0 10 0zm0 2.3L11.5 6H16l-4.1 4 1 5.8L10 14.7l-2.9 1.5 1-5.8L4 6h4.5L10 2.3z" />
                    </svg>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productelectronics;
