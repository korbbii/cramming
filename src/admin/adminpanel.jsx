import React from 'react';
import { HiChartBar, HiUserCircle, HiShoppingCart, HiOutlineTruck } from 'react-icons/hi'

const Admin = () => {
  return (
    <div>
      <header className="bg-white py-5 shadow-lg">
        <div className="container mx-auto flex justify-center items-center mt-5 mb-5">
          <nav className="flex space-x-10">
            <a href="/admin/statisticspanel" className="flex items-center text-black font-Montserrat font-semibold hover:text-gray-300 flex-grow-1">
              <HiChartBar className="mr-1 h-5 w-5" /> Statistics
            </a>
            <a href="/admin/userspanel" className="flex items-center text-black font-Montserrat font-semibold hover:text-gray-300 flex-grow-1">
              <HiUserCircle className="mr-1 h-5 w-5" /> Users
            </a>
            <a href="/admin/productspanel" className="flex items-center text-black font-Montserrat font-semibold hover:text-gray-300 flex-grow-1">
              <HiShoppingCart className="mr-1 h-5 w-5" /> Products
            </a>
            <a href="/admin/orderspanel" className="flex items-center text-black font-Montserrat font-semibold hover:text-gray-300 flex-grow-1">
              <HiOutlineTruck className="mr-1 h-5 w-5" /> Orders
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Admin;
