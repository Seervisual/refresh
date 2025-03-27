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
          Take $50 off any order $200 USD or more with code <strong>ANY50</strong>
        </p>
      </div>

      <div className="opal-container flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-white text-2xl font-semibold">Opal</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="py-2 text-white hover:text-opacity-80 transition-opacity">
              Products
            </button>
            <div className="absolute top-full left-0 w-48 hidden group-hover:block bg-opal-dark border border-gray-800 rounded-md overflow-hidden">
              <Link href="/opal-tadpole" className="block px-4 py-2 hover:bg-gray-800">Tadpole</Link>
              <Link href="/opal-c1" className="block px-4 py-2 hover:bg-gray-800">C1</Link>
              <Link href="/opal-composer" className="block px-4 py-2 hover:bg-gray-800">Composer</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="py-2 text-white hover:text-opacity-80 transition-opacity">
              Company
            </button>
            <div className="absolute top-full left-0 w-48 hidden group-hover:block bg-opal-dark border border-gray-800 rounded-md overflow-hidden">
              <Link href="/about" className="block px-4 py-2 hover:bg-gray-800">About</Link>
              <Link href="/terms" className="block px-4 py-2 hover:bg-gray-800">Terms</Link>
              <Link href="/privacy" className="block px-4 py-2 hover:bg-gray-800">Privacy</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="py-2 text-white hover:text-opacity-80 transition-opacity">
              Resources
            </button>
            <div className="absolute top-full left-0 w-48 hidden group-hover:block bg-opal-dark border border-gray-800 rounded-md overflow-hidden">
              <Link href="/support" className="block px-4 py-2 hover:bg-gray-800">Support</Link>
              <Link href="/media-kit" className="block px-4 py-2 hover:bg-gray-800">Media Kit</Link>
              <Link href="/downloads" className="block px-4 py-2 hover:bg-gray-800">Downloads</Link>
              <Link href="/newsletter" className="block px-4 py-2 hover:bg-gray-800">Newsletter</Link>
            </div>
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
