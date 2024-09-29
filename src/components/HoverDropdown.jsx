import React from "react";

function HoverDropdown() {
  return (
    <div className="relative inline-block text-left group">
      <a href="#" className=" hover:text-red-400 rounded-md focus:outline-none">
        Category
      </a>
      <div className="absolute left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block z-10">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-300"
            role="menuitem"
          >
            Option 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-300"
            role="menuitem"
          >
            Option 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-300"
            role="menuitem"
          >
            Option 3
          </a>
        </div>
      </div>
    </div>
  );
}

export default HoverDropdown;
