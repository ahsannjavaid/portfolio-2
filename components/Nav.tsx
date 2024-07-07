import { useState } from "react";
import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { NextRouter } from "next/router";
type props = {
  router: NextRouter;
};

const Nav = ({ router }: props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      {!router.pathname.startsWith("/admin") && (
        <nav className="relative flex flex-wrap items-center justify-between p-4 z-50 bg-[#202020]">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link href="/">
                <a className="text-lg font-bold leading-relaxed flex justify-center gap-3 items-center mr-4 whitespace-nowrap uppercase text-white">
                  <Image
                    src={"/icon-square.png"}
                    width={40}
                    height={40}
                    alt="ahsan-javed-logo"
                    className="rounded-xl"
                  />
                  <span>Ahsan Javed</span>
                </a>
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
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link href="/">
                    <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
                      <span className="ml-2">Portfolio</span>
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/linktree">
                    <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75">
                      <span className="ml-2">Link Tree</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
