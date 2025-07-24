'use client'; // This is the most important line

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartItems from './CartItems';

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <CartItems />
      </main>
      <Footer />
    </div>
  );
}
