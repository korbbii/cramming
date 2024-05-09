import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faHeart, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Swiftcart from './swiftcart.png';

function Account() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpText, setPopUpText] = useState('');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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

  const handleLogin = (event) => {
    event.preventDefault();
    // Your login logic here
    // For demonstration, setting isLoggedIn to true
    navigate('/pages/account'); // Redirect to account page after login
  };

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
        <div className="mt-40 grid justify-center max-w-md mx-auto">
          <div>
          </div>
          <form className="w-96 bg-white rounded-2xl p-6 md:mb-5 relative z-1 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]" onSubmit={handleLogin}>
            <div className="mb-5">
              <h3 className="text-3xl font-Montserrat font-bold text-blue-600">Sign in</h3>
            </div>
            <div>
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
            <div className="mt-8">
              <div className="relative flex items-center">
                <input name="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter password" />
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="w-[18px] h-[18px] absolute right-2 cursor-pointer text-gray-400" onClick={togglePasswordVisibility} />
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 mt-6">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="mt-10">
              <button type="submit" className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                Sign in
              </button>
              <p className="text-sm text-center mt-6">Don't have an account? <Link to="/pages/register" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
            </div>
            <hr className="my-6 border-gray-300" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account;
