import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='sticky top-0 flex items-center justify-between flex-wrap bg-teal-500 px-6 py-4 z-50'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <Link href='/' className='font-semibold text-xl tracking-tight'>
          Homespace
        </Link>
      </div>

      <div className='flex w-auto justify-between items-center'>
        <div className='text-md flex-grow'>
          <Link
            href='/'
            className='inline-block mt-0 text-teal-200 hover:text-white mr-4'
          >
            Buy
          </Link>
          <Link
            href='/'
            className='inline-block mt-0 text-teal-200 hover:text-white mr-4'
          >
            Sell
          </Link>
          <Link
            href='/'
            className='inline-block mt-0 text-teal-200 hover:text-white mr-4'
          >
            Rent
          </Link>
        </div>
      </div>
      <div className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-0'>
        <Link href='/'>Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
