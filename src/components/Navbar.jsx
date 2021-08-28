import React from 'react';
import Logo from '../assets/images/logo.svg';
import '../assets/style.css';

export default function Navbar() {
  return (
    <nav className="relative flex flex-wrap items-center font-Karla justify-between px-2 py-3 navbar-expand-lg bg-blueGray-500 mb-3">
      <div className="container px-36 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-dark"
            href="/"
          >
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="lg:flex flex-grow items-center">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <a
                className="px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-dark hover:text-violet-verydark"
                href="#pablo"
              >
                How We Work
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-dark hover:text-violet-verydark"
                href="#pablo"
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-dark hover:text-violet-verydark"
                href="#pablo"
              >
                Account
              </a>
            </li>
            <li className="nav-item plan">
              <a
                className="px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-violet-verydark border-2 hover:bg-violet-verydark hover:text-gray-light"
                href="#pablo"
              >
                View Plan
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
