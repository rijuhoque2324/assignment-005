import Logo from '../assets/logo-text.png'

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-gray-200 bg-white">

      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-4">

        {/* Left - Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-slate-600 md:hidden"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>


        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={Logo}
            alt="Dev Stack Logo"
            className="h-10"
          />
        </a>


        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <li><a href="#">Home</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>


        {/* Right Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">

          <button className="px-2 py-2 text-xs font-medium text-slate-700 sm:px-3 sm:text-sm">
            Sign In
          </button>

          <button className="rounded-full bg-[#DB2777] px-4 py-2 text-xs font-medium text-white sm:px-5 sm:text-sm">
            Sign Up
          </button>

        </div>

      </nav>


      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">

          <ul className="flex flex-col gap-4 text-sm text-slate-600">

            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                onClick={() => setIsOpen(false)}
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}

    </div>
  );
};

export default Nav;