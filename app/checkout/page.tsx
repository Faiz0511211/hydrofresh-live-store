'use client';

import Header from '../../components/Header';
import CheckoutForm from './CheckoutForm';
import Footer from '../../components/Footer';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CheckoutForm />
      <Footer />
    </div>
  );
}