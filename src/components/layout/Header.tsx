'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-opal-dark text-white py-4 relative z-50">
      {/* Promo banner */}
      <div className="bg-opal-yellow text-opal-dark text-center py-1 px-4 text-sm flex items-center justify-center">
        <p className="max-w-screen-lg mx-auto font-medium">
          Free shipping on any orders  <strong>+$199</strong>
        </p>
      </div>

      <div className="opal-container flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png" // Replace with the actual path to your logo image
            alt="forma logo"
            width={120} // Adjust width as needed
            height={40} // Adjust height as needed
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="py-2 text-white hover:text-opacity-80 transition-opacity">
              products
            </button>
            <div className="absolute top-full left-0 w-48 hidden group-hover:block bg-opal-dark border border-gray-800 rounded-md overflow-hidden">
              <Link href="/UNO" className="block px-4 py-2 hover:bg-gray-800">UNO</Link>
              <Link href="/DUE_presale" className="block px-4 py-2 hover:bg-gray-800">DUE</Link>
              <Link href="/FUTURA" className="block px-4 py-2 hover:bg-gray-800">FUTURA</Link>
              <Link href="/APP" className="block px-4 py-2 hover:bg-gray-800">APP</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="py-2 text-white hover:text-opacity-80 transition-opacity">
            <Link href="/DUE_presale" >DUE_presale</Link>
            </button>
         
          </div>
          <div className="relative group">
            <button className="py-2 text-white hover:text-opacity-80 transition-opacity">
            <Link href="/about" >about</Link>
            </button>
          
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-opal-dark absolute top-full left-0 right-0 z-50">
          <div className="opal-container py-4 flex flex-col space-y-4">
            <div className="border-b border-gray-800 pb-2">
              <div className="font-medium mb-2">Products</div>
              <div className="flex flex-col space-y-2 ml-4">
                <Link href="/opal-tadpole" className="text-sm text-gray-300 hover:text-white">Tadpole</Link>
                <Link href="/opal-c1" className="text-sm text-gray-300 hover:text-white">C1</Link>
                <Link href="/opal-composer" className="text-sm text-gray-300 hover:text-white">Composer</Link>
              </div>
            </div>
            <div className="border-b border-gray-800 pb-2">
              <div className="font-medium mb-2">Company</div>
              <div className="flex flex-col space-y-2 ml-4">
                <Link href="/about" className="text-sm text-gray-300 hover:text-white">About</Link>
                <Link href="/terms" className="text-sm text-gray-300 hover:text-white">Terms</Link>
                <Link href="/privacy" className="text-sm text-gray-300 hover:text-white">Privacy</Link>
              </div>
            </div>
            <div>
              <div className="font-medium mb-2">Resources</div>
              <div className="flex flex-col space-y-2 ml-4">
                <Link href="/support" className="text-sm text-gray-300 hover:text-white">Support</Link>
                <Link href="/media-kit" className="text-sm text-gray-300 hover:text-white">Media Kit</Link>
                <Link href="/downloads" className="text-sm text-gray-300 hover:text-white">Downloads</Link>
                <Link href="/newsletter" className="text-sm text-gray-300 hover:text-white">Newsletter</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
