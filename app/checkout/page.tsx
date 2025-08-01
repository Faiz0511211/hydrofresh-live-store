'use client'; // This is the most important line

import CheckoutForm from './CheckoutForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Safely access localStorage only on the client
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart);
      const newTotal = parsedCart.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);
      setTotal(newTotal);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <CheckoutForm cartItems={cartItems} total={total} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
