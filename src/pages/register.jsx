
import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faHeart, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Swiftcart from './swiftcart.png';

function Register() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpText, setPopUpText] = useState('');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
    <div className="flex justify-center items-center bg-gray-100 font-[sans-serif] text-[#333] h-full md:min-h-screen p-4">
      <div className="grid justify-center max-w-md mx-auto">
        <div>
        </div>
        <form className="w-96 mt-36 bg-white rounded-2xl p-6 -mt-27 relative z-1 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
          <div className="mb-10">
            <h3 className="text-3xl font-Montserrat font-bold text-blue-600">Sign Up</h3>
          </div>
          <div className="mb-4">
            <div className="relative flex items-center">
              <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter email" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" />
                  </clipPath>
                </defs>
                <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                  <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" />
                  <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" />
                </g>
              </svg>
            </div>
          </div>
          <div className="mb-4">
            <div className="relative flex items-center">
              <input name="mobile" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter mobile number" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 32 32" id="phone" width="24" height="24" x="0" y="0">
                <path d="M27.308,20.649l-2.2-2.2a3.521,3.521,0,0,0-4.938-.021,2.152,2.152,0,0,1-2.729.267A15.026,15.026,0,0,1,13.3,14.562a2.181,2.181,0,0,1,.284-2.739A3.521,3.521,0,0,0,13.553,6.9l-2.2-2.2a3.514,3.514,0,0,0-4.961,0l-.633.634c-3.3,3.3-3.053,10.238,3.813,17.1,4.14,4.141,8.307,5.875,11.686,5.875a7.5,7.5,0,0,0,5.418-2.061l.634-.634A3.513,3.513,0,0,0,27.308,20.649ZM25.894,24.2l-.634.634c-2.6,2.6-8.339,2.125-14.276-3.813S4.571,9.34,7.171,6.74L7.8,6.107a1.511,1.511,0,0,1,2.133,0l2.2,2.2a1.511,1.511,0,0,1,.021,2.11,4.181,4.181,0,0,0-.531,5.239,17.01,17.01,0,0,0,4.713,4.706,4.179,4.179,0,0,0,5.231-.517,1.512,1.512,0,0,1,2.118.013l2.2,2.2A1.51,1.51,0,0,1,25.894,24.2Z"></path>
              </svg>
            </div>
          </div>
          <div className="mt-6">
            <div className="relative flex items-center">
              <input name="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-2 outline-none" placeholder="Enter password" />
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="w-[18px] h-[18px] absolute right-2 cursor-pointer text-gray-400" onClick={togglePasswordVisibility} />
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Sign Up
            </button>
            <p className="text-sm text-center mt-6">Already have an account? <span onClick={() => { window.location.href = "/pages/login"; }} className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap cursor-pointer">Sign in here</span></p>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
  }

  export default Register;

