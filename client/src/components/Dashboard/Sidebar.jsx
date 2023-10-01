import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import {
  BiSolidDashboard,
  BiSolidShoppingBag,
  BiSolidAddToQueue,
} from "react-icons/bi";
import { RiAdvertisementFill,RiAdminFill, RiLogoutCircleFill } from 'react-icons/ri'
import { GiKnightBanner } from 'react-icons/gi'
import { AiTwotonePicture } from "react-icons/ai";

import * as actionType from '../../constants/actionTypes'

const Sidebar = ({ setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
  };
  
  return (
    <div>

    <div>
      <button
          onClick={() => setIsOpen(!isOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="peer ml-8 mt-4 inline-flex items-center p-2 w-24 h-10 bg-red-600 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="text-white"> Dashboard Options </span>
        </button>
        <div className="peer hidden z-10 absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
        <ul className="space-y-2 font-medium">
          <li >
            <button
              onClick={() => setSelectedCategory("Products")}
              className="flex items-center p-2 text-gray-600 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-500 group"
            >
              <BiSolidShoppingBag size={22} />

              <span className="ml-3"> Products </span>
            </button>
          </li>
          <li >
            <button
              onClick={() => setSelectedCategory("Gallery")}
              className="flex items-center p-2 text-gray-600 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-500 group"
            >
              <BiSolidDashboard size={22} />
              <span className="flex-1 ml-3 whitespace-nowrap">Gallery</span>
            </button>
          </li>
          <li >
            <button
              onClick={() => setSelectedCategory("Banners")}
              className="flex items-center p-2 text-gray-600 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-500 group"
            >
              <GiKnightBanner size={22} />

              <span className="ml-3"> Banners </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Add Product")}
              className="flex items-center p-2 text-gray-600 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-500 group"
            >
              <BiSolidAddToQueue size={22} />
              <span className="flex-1 ml-3 whitespace-nowrap">Add Product</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Add Gallery Data")}
              className="flex items-center p-2 text-gray-600 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-500 group"
            >
              <AiTwotonePicture size={22} />
              <span className="flex-1 ml-3 whitespace-nowrap">Add Gallery Data </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Add Banner")}
              className="flex items-center p-2 text-gray-600 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-500 group"
            >
              <RiAdvertisementFill size={22}/>
              <span className="flex-1 ml-3 whitespace-nowrap">Add Banner</span>
            </button>
          </li>
          <div className="border-[1px] border-gray-400"> </div>

          <li>
            <button
              onClick={() => setSelectedCategory("Add Admin")}
              className="flex items-center p-2 text-gray-600 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-500 group"
            >
              <RiAdminFill size={22} />
              <span className="flex-1 ml-3 whitespace-nowrap">Add Admin</span>
            </button>
          </li>

          <li>
            <Link to='/Home'>
            <button
              onClick={logout}
              className="flex w-full items-center p-2 text-white rounded-lg dark:bg-red-500 group"
            >
              <RiLogoutCircleFill size={22} />
              <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </button>
            </Link>
          </li>
          
        </ul>
        </div>
        </div>
      
    <aside
      id="default-sidebar"
      className="flex top-0 left-0 md:w-48 w-auto md:h-screen h-0 transition-transform -translate-x-full md:translate-x-0 "
      aria-label="Sidebar"
    >

      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
        <ul className="space-y-2 font-medium">
          <li>
            <button
              onClick={() => setSelectedCategory("Products")}
              className="flex items-center p-2 text-gray-600 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-500 group"
            >
              <BiSolidShoppingBag size={22} />

              <span className="ml-3"> Products </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Gallery")}
              className="flex items-center p-2 text-gray-600 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-500 group"
            >
              <BiSolidDashboard size={22} />
              <span className="flex-1 ml-3 whitespace-nowrap">Gallery</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Banners")}
              className="flex items-center p-2 text-gray-600 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-500 group"
            >
              <GiKnightBanner size={22} />

              <span className="ml-3"> Banners </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Add Product")}
              className="flex items-center p-2 text-gray-600 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-500 group"
            >
              <BiSolidAddToQueue size={22} />
              <span className="flex-1 ml-3 whitespace-nowrap">Add Product</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Add Gallery Data")}
              className="flex items-center p-2 text-gray-600 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-500 group"
            >
              <AiTwotonePicture size={22} />
              <span className="flex-1 ml-3 whitespace-nowrap">Add Gallery Data </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Add Banner")}
              className="flex items-center p-2 text-gray-600 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-500 group"
            >
              <RiAdvertisementFill size={22}/>
              <span className="flex-1 ml-3 whitespace-nowrap">Add Banner</span>
            </button>
          </li>
          <div className="border-[1px] border-gray-400"> </div>

          <li>
            <button
              onClick={() => setSelectedCategory("Add Admin")}
              className="flex items-center p-2 text-gray-600 rounded-lg hover:text-white hover:bg-red-500 group"
            >
              <RiAdminFill size={22} />
              <span className="flex-1 ml-3 whitespace-nowrap">Add Admin</span>
            </button>
          </li>

          <li>
            <Link to='/Home'>
            <button
              onClick={logout}
              className="flex w-full items-center p-2 text-white rounded-lg bg-red-500 group"
            >
              <RiLogoutCircleFill size={22} />
              <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </button>
            </Link>
          </li>
          
          
        </ul>
      </div>
    </aside>
    </div>
  );
};

export default Sidebar;
