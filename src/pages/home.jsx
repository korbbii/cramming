import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faHeart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'; 
import clothesImage from './clothes.jpg';
import clothesImagee from './clothess.jpg';
import clothesImageee from './clothesss.jpg';
import shoesImage from './shoe.jpg';
import booksImage from './books.jpg';
import electronicsImage from './electronics.jpg';
import jewelryImage from './jewelry.jpg';
import Swiftcart from './swiftcart.png';

function Home() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpText, setPopUpText] = useState('');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const images = [shoesImage, clothesImage, clothesImagee, booksImage, clothesImageee, electronicsImage, jewelryImage];
  const [displayedImages, setDisplayedImages] = useState(images);
  const categoriesData = [
    { image: shoesImage, link: './products/productshoes', hoverText: 'Shoes' },
    { image: clothesImage, link: './products/productclothes', hoverText: 'Clothes' },
    { image: clothesImagee, link: './products/productclothes', hoverText: 'Clothes' },
    { image: clothesImageee, link: './products/productclothes', hoverText: 'Clothes' },
    { image: booksImage, link: './products/productbooks', hoverText: 'Books' },
    { image: electronicsImage, link: './products/productelectronics', hoverText: 'Electronics' },
    { image: jewelryImage, link: './products/productjewelry', hoverText: 'Jewelry' },
  ];
  const [hoveredCategory, setHoveredCategory] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      containerRef.current.scrollLeft += 400;
      setDisplayedImages(prevImages => {
        const rotatedImages = prevImages.slice(1).concat(prevImages[0]);
        return rotatedImages;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = (event, text) => {
    setPopUpText(text);
    event.currentTarget.querySelector('.underline-animation').classList.add('w-full');
  };
  
  const handleMouseLeave = (event) => {
    setShowPopUp(false);
    event.currentTarget.querySelector('.underline-animation').classList.remove('w-full');
  };

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-white text-black -py-4 sm:py-10 flex justify-between items-center shadow-lg z-10" onMouseMove={handleMouseMove}>
        <div className="flex items-center">
          <Link to="/" className="text-4xl font-bold font-Poppins lg:ml-64 sm:ml-40 md:mr-24 md:ml-24">
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
                Cart
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
          <div className="absolute" style={{ left: Math.min(cursorPosition.x, window.innerWidth - 200), top: cursorPosition.y + 35 }}>
            <div className="bg-gray-800 text-white px-4 py-1 rounded-md">
              {popUpText}
            </div>
          </div>
        )}
      </div>
      <div ref={containerRef} className="flex justify-center items-center mt-40" style={{ overflowX: 'hidden' }}>
        {displayedImages.map((image, index) => (
          <img key={index} src={image} alt={`Image${index}`} className="w-96 h-64 object-contain" />
        ))}
      </div>
      <div className="flex justify-center mt-10 sm:mt-40">
        <div className="flex items-center rounded-full border border-gray-300 px-6 py-2 sm:px-4 sm:py-2" style={{ maxWidth: '500px', width: '100%' }}>
          <input type="text" placeholder="Search products" className="w-full outline-none px-2 sm:px-4 py-1 sm:py-2" />
          <FontAwesomeIcon icon={faSearch} className="text-gray-400 ml-2 sm:ml-4" />
        </div>
      </div>
      <h2 className="mt-40 text-center text-6xl font-poppins text-blue-400">Categories</h2>
      <div className="flex justify-center mt-20 mb-8 flex-wrap">
      {categoriesData.map((category, index) => (
        <Link key={index} to={category.link} className={`relative mx-2 my-2 overflow-hidden transform transition-transform ${hoveredCategory === index ? 'scale-105' : ''}`}
          onMouseEnter={() => setHoveredCategory(index)}
          onMouseLeave={() => setHoveredCategory(null)}>
          <img src={category.image} alt={`Image${index}`} className="w-96 h-50 object-cover rounded-lg" />
          {hoveredCategory === index && (
            <span className="text-white text-2xl mb-3 font-montserrat font-bold absolute bottom-0 right-5 px-2 py-1 drop-shadow-2xl transition-opacity duration-300 opacity-100">
              {category.hoverText}
            </span>
          )}
        </Link>
      ))}
    </div>
  </div>
);
}

export default Home;
