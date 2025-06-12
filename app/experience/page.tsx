'use client';

import Experience from '../sections/Experience';
import Footer from '../sections/Footer';
import Nav from '../sections/Nav';

export default function Home() {
  return (
    <main className='z-[100] w-screen h-fit' data-color-mode='dark'>
      <Nav />
      <div className='z-20 w-screen flex flex-col justify-start items-center'>
        <Experience />
      </div>
      <Footer />
    </main>
  );
}
