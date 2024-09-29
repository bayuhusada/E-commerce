import React from 'react';
import HoverSearch from './HoverSearch';
import HoverDropdown from './HoverDropdown';
import { ShoppingCart, UserCircle } from '@phosphor-icons/react/dist/ssr';
import CartModal from './CartModal.jsx';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-[80%] mx-auto px-5 py-1'>
      <h1 className='bg-red-300 p-6 rounded-md'>LOGO</h1>
      <div className='flex justify-between gap-4'>
        <a href='' className='hover:text-red-500'>Home</a>
        <a href='' className='hover:text-red-500'>Product</a>
        <a href='' className='hover:text-red-500'>Shop</a>
        <a href='' className='hover:text-red-500'>About</a>
        <HoverDropdown />
      </div>
      <div className='flex gap-10'>
        <HoverSearch />
        <CartModal />
        <a href="http://"> <UserCircle size={30} /></a>
      </div>
    </div>
  );
}

export default Navbar;
