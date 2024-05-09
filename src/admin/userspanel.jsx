import React, { useState, useEffect } from 'react';
import { HiSearch, HiUserAdd, HiChartBar, HiUserCircle, HiShoppingCart, HiClipboardList } from 'react-icons/hi';

const User = () => {

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
              <HiClipboardList className="mr-1 h-5 w-5" /> Orders
            </a>
          </nav>
        </div>
      </header>
      <div className="container mx-auto mt-20 flex flex-col items-center">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center mb-20">
            <input
              type="text"
              placeholder="Search..."
              className="border-none border-b border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <HiSearch className="h-6 w-6 text-gray-500 ml-2" />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center ml-20 mb-20">
            Add User
            <HiUserAdd className="h-5 w-5 ml-1" />
          </button>
        </div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Created On</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default User;
