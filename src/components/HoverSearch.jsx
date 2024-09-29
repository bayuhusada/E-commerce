import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import React from "react";

function HoverSearch() {
  return (
    <div className="relative inline-block text-left">
      <div className="group">
        {/* Tombol yang memicu search bar */}
        <a href="" className=" text-red-300 hover:bg-gray-50 focus:outline-none">
          <MagnifyingGlass size={30}/>
        </a>

        {/* Search bar yang muncul saat hover */}
        <div className="absolute right-full top-0 mt-1 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform translate-x-[-20px] opacity-0 transition-transform duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <input
            type="text"
            className="w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Type to search..."
          />
        </div>
      </div>
    </div>
  );
}

export default HoverSearch;
