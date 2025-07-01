// app/components/Navbar.tsx
'use client'; // This component uses useState, so it's a client component

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-bg-body2 shadow-sm">
      {/* Desktop Nav */}
      <div id="desktop-nav" className="hidden md:flex justify-around items-center h-[17vh] px-8">
        <div className="logo text-4xl text-accent cursor-default">Atumonye James</div>
        <div>
          <ul className="nav-links flex gap-8 list-none text-2xl">
            <li><Link href="#about" className="text-text1 hover:text-accent hover:underline hover:underline-offset-8">About</Link></li>
            <li><Link href="#experience" className="text-text1 hover:text-accent hover:underline hover:underline-offset-8">Skills</Link></li>
            <li><Link href="#projects" className="text-text1 hover:text-accent hover:underline hover:underline-offset-8">Projects</Link></li>
            <li><Link href="#dashboards" className="text-text1 hover:text-accent hover:underline hover:underline-offset-8">Dashboards</Link></li>
            <li><Link href="#contact" className="text-text1 hover:text-accent hover:underline hover:underline-offset-8">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Hamburger Nav */}
      <div id="hamburger-nav" className="flex md:hidden justify-between items-center h-[14vh] px-8 py-4">
        <div className="logo text-4xl text-accent cursor-default">Atumonye James</div>
        <div className="relative inline-block">
          <div className="flex flex-col justify-between h-6 w-8 cursor-pointer z-50" onClick={toggleMenu}>
            <span className={`block w-full h-0.5 bg-text1 transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-x-2.5 translate-y-1.5' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-text1 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-text1 transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 translate-x-2.5 -translate-y-1.5' : ''}`}></span>
          </div>
          <div className={`absolute top-full right-0 bg-bg-body2 w-fit max-w-[calc(100vw-2rem)] overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-80 shadow-md' : 'max-h-0'}`}>
            <ul className="list-none">
              <li><Link href="#about" className="block py-2.5 px-4 text-center text-2xl text-text1 transition-all duration-300 ease-in-out hover:text-accent hover:underline hover:underline-offset-8" onClick={closeMenu}>About</Link></li>
              <li><Link href="#experience" className="block py-2.5 px-4 text-center text-2xl text-text1 transition-all duration-300 ease-in-out hover:text-accent hover:underline hover:underline-offset-8" onClick={closeMenu}>Skills</Link></li>
              <li><Link href="#projects" className="block py-2.5 px-4 text-center text-2xl text-text1 transition-all duration-300 ease-in-out hover:text-accent hover:underline hover:underline-offset-8" onClick={closeMenu}>Projects</Link></li>
              <li><Link href="#dashboards" className="block py-2.5 px-4 text-center text-2xl text-text1 transition-all duration-300 ease-in-out hover:text-accent hover:underline hover:underline-offset-8" onClick={closeMenu}>Dashboards</Link></li>
              <li><Link href="#contact" className="block py-2.5 px-4 text-center text-2xl text-text1 transition-all duration-300 ease-in-out hover:text-accent hover:underline hover:underline-offset-8" onClick={closeMenu}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
