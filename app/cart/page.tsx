'use client';

import Header from '../../components/Header';
import CartItems from './CartItems';
import Footer from '../../components/Footer';

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CartItems />
      <Footer />
    </div>
  );
}