import React from "react";
import {
  BiSolidDashboard,
  BiSolidShoppingBag,
  BiSolidAddToQueue,
} from "react-icons/bi";

import { AiTwotonePicture } from "react-icons/ai";

const Sidebar = ({ setSelectedCategory }) => {
  
  return (
    <aside
      id="default-sidebar"
      className="flex top-0 left-0 z-40 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0"
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
          <div className="border-[1px] border-gray-400"> </div>

          <li>
            <button
              onClick={() => setSelectedCategory("Add Admin")}
              className="flex items-center p-2 text-gray-600 rounded-lg hover:text-white hover:bg-gray-100 dark:hover:bg-red-500 group"
            >
              <BiSolidDashboard size={22} />
              <span className="flex-1 ml-3 whitespace-nowrap">Add Admin</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
