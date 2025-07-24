import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from './ProductGrid';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Fresh Selection</h1>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
