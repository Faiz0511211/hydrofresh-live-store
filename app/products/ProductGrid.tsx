'use client'; // This is the most important line

import { useState } from 'react';

// In a real app, this would come from a database. For now, we define it here.
const products = [
    { id: 1, name: 'Hydroponic Lettuce', price: 50, image: 'https://placehold.co/400x300/22c55e/ffffff?text=Lettuce' },
    { id: 2, name: 'Hydroponic Basil', price: 60, image: 'https://placehold.co/400x300/22c55e/ffffff?text=Basil' },
    { id: 3, name: 'Cherry Tomatoes', price: 75, image: 'https://placehold.co/400x300/22c55e/ffffff?text=Tomatoes' },
    { id: 4, name: 'Hydroponic Kale', price: 55, image: 'https://placehold.co/400x300/22c55e/ffffff?text=Kale' },
    { id: 5, name: 'Hydroponic Mint', price: 45, image: 'https://placehold.co/400x300/22c55e/ffffff?text=Mint' },
    { id: 6, name: 'Hydroponic Spinach', price: 65, image: 'https://placehold.co/400x300/22c55e/ffffff?text=Spinach' },
];

export default function ProductGrid() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const addToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: any) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated')); // Notify header to update
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000);
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-gray-600">₹{product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)} className="mt-4 w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {showConfirmation && (
        <div className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Item added to cart!
        </div>
      )}
    </div>
  );
}
