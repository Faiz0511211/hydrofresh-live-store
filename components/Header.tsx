'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-green-800" style={{ fontFamily: 'Pacifico, serif' }}>
              HydroFresh
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-green-600 font-medium">
              Products
            </Link>
            <Link href="/our-method" className="text-gray-700 hover:text-green-600 font-medium">
              Our Method
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <button className="relative p-2 text-gray-600 hover:text-green-600 cursor-pointer">
                <i className="ri-shopping-cart-line text-xl w-6 h-6 flex items-center justify-center"></i>
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </Link>
            
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-green-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="ri-menu-line text-xl w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Home
              </Link>
              <Link href="/products" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Products
              </Link>
              <Link href="/our-method" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Our Method
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
