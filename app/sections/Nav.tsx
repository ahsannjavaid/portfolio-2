// import { useState } from 'react';
import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';
// import { FaBars } from 'react-icons/fa';

const Nav = () => {
  // const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='relative flex flex-wrap items-center justify-between p-4 z-50 bg-[#202020]'>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <Link href='/'>
            <div className='text-lg font-bold flex justify-center gap-3 items-center mr-4 uppercase text-white'>
              <Image
                src={'/icons/icon-square.png'}
                width={40}
                height={40}
                alt='ahsan-javed-logo'
                className='rounded-xl'
              />
              <span className='tracking-wider'>Ahsan Javed</span>
            </div>
          </Link>
          {/* <button
            className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars />
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
