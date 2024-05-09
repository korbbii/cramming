import React from 'react';
import { HiChartBar, HiUserCircle, HiShoppingCart, HiOutlineTruck } from 'react-icons/hi'

const Statistics = () => {
  return (
    <div>
      <header className="bg-white py-5 shadow-lg">
        <div className="container mx-auto flex justify-center items-center mt-5 mb-5">
          <nav className="flex space-x-10">
            <a href="/admin/statisticspanel" className="flex items-center text-black font-Montserrat font-semibold hover:text-gray-300 flex-grow-1">
              <HiChartBar className="mr-1 h-5 w-5" /> Statistics
            </a>
            <a href="/admin/userspanel" className="flex items-center text-black font-Montserrat font-semibold hover:text-gray-300 flex-grow-1">
              <HiUserCircle className="mr-1 h-5 w-5" /> User
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
      <div className="container mx-auto mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
          <div className="max-w-xs bg-blue-300 shadow-lg rounded-lg overflow-hidden">
            <div className="px-12 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-gray-800 text-lg font-Montserrat font-semibold -ml-7">Products</h2>
                <p className="text-black font-bold text-sm mt-1 -ml-6">5</p>
              </div>
              <HiShoppingCart className="h-6 w-6 text-gray-black ml-20" />
            </div>
          </div>
          <div className="max-w-xs bg-blue-300 shadow-lg rounded-lg overflow-hidden">
            <div className="px-12 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-gray-800 text-lg font-Montserrat font-semibold -ml-7">Users</h2>
                <p className="text-black font-bold text-sm mt-1 -ml-6">10</p>
              </div>
              <HiUserCircle className="h-6 w-6 text-black ml-20" />
            </div>
          </div>
          <div className="max-w-xs bg-blue-300 shadow-lg rounded-lg overflow-hidden">
            <div className="px-12 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-gray-800 text-lg font-Montserrat font-semibold -ml-7">Orders</h2>
                <p className="text-black font-bold text-sm mt-1 -ml-6">20</p>
              </div>
              <HiOutlineTruck className="h-6 w-6 text-black ml-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
