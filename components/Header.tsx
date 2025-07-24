'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartCount(cart.reduce((acc: number, item: any) => acc + item.quantity, 0));
  };

  useEffect(() => {
    updateCartCount(); // Initial count
    window.addEventListener('cartUpdated', updateCartCount);
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-700">
          HydroFresh
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-green-700">Home</Link>
          <Link href="/products" className="text-gray-600 hover:text-green-700">Products</Link>
          <Link href="/our-method" className="text-gray-600 hover:text-green-700">Our Method</Link>
        </nav>
        <Link href="/cart" className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
}