import { useState } from "react";
import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between p-4 z-50 bg-[#202020]">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <div className="text-lg font-bold flex justify-center gap-3 items-center mr-4 uppercase text-white">
              <Image
                src={"/icons/icon-square.png"}
                width={40}
                height={40}
                alt="ahsan-javed-logo"
                className="rounded-xl"
              />
              <span className="tracking-wider">Ahsan Javed</span>
            </div>
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex pt-5" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-5">
            <li className="nav-item">
              <Link href="/experience" className="py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/files/Ahsan_Javed_Resume.pdf" target="_blank" rel="noopener noreferrer" className="py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
                My Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
