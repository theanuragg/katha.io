import React from "react";
import { FiSearch, FiGithub, FiShare2 } from "react-icons/fi";
const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-opacity-15  rounded-t-lg">
      <div className="w-0 h-0 bg-white rounded-full"></div>
      <div className="flex items-center space-x-3">
        <a
          href="https://github.com/theanuragg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className="text-gray-600 cursor-pointer hover:text-gray-800" />
        </a>
        <FiShare2 className="text-gray-600 cursor-pointer hover:text-gray-800" />
        <div className="relative">
          <FiSearch className="absolute top-2 left-2 text-orange" />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-4 py-1 text-sm text-facey bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-offset-purple-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
