'use client';

import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Nav from './sections/Nav';
import Player from './sections/Player';
import Projects from './sections/Projects';

export default function Home() {
  return (
    <main className='z-[100] w-screen h-fit' data-color-mode='dark'>
      <Nav />
      <div className='z-20 w-screen flex flex-col justify-start items-center'>
        <Hero />
        <Player />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
