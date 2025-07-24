'use client';

import Header from '../../components/Header';
import ProductGrid from './ProductGrid';
import Footer from '../../components/Footer';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductGrid />
      <Footer />
    </div>
  );
}