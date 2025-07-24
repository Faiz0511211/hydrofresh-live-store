'use client';

import { useState } from 'react';

export default function FeaturedProducts() {
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [showPopup, setShowPopup] = useState(false);
  const [addedProduct, setAddedProduct] = useState('');

  const featuredProducts = [
    {
      id: 1,
      name: 'Hydroponic Lettuce',
      price: 45,
      image: 'https://readdy.ai/api/search-image?query=fresh%20hydroponic%20lettuce%20leaves%20in%20white%20container%2C%20crisp%20green%20lettuce%2C%20clean%20agricultural%20setup%2C%20professional%20food%20photography%2C%20healthy%20organic%20vegetables%2C%20pesticide-free%20produce%2C%20modern%20farming%20technology&width=400&height=300&seq=lettuce1&orientation=landscape',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Cherry Tomatoes',
      price: 65,
      image: 'https://readdy.ai/api/search-image?query=vibrant%20red%20cherry%20tomatoes%20growing%20in%20hydroponic%20system%2C%20fresh%20ripe%20tomatoes%20on%20vine%2C%20clean%20white%20growing%20containers%2C%20professional%20agricultural%20photography%2C%20healthy%20organic%20produce%2C%20pesticide-free%20vegetables&width=400&height=300&seq=tomato1&orientation=landscape',
      badge: ''
    },
    {
      id: 3,
      name: 'Fresh Spinach',
      price: 38,
      image: 'https://readdy.ai/api/search-image?query=fresh%20green%20spinach%20leaves%20in%20hydroponic%20growing%20system%2C%20healthy%20leafy%20vegetables%2C%20clean%20white%20containers%2C%20professional%20food%20photography%2C%20organic%20produce%2C%20pesticide-free%20farming%2C%20nutritious%20greens&width=400&height=300&seq=spinach1&orientation=landscape',
      badge: ''
    },
    {
      id: 4,
      name: 'Mint Leaves',
      price: 25,
      image: 'https://readdy.ai/api/search-image?query=fresh%20mint%20leaves%20growing%20in%20hydroponic%20system%2C%20aromatic%20green%20herbs%2C%20clean%20white%20growing%20containers%2C%20professional%20agricultural%20photography%2C%20healthy%20organic%20herbs%2C%20pesticide-free%20produce&width=400&height=300&seq=mint1&orientation=landscape',
      badge: ''
    }
  ];

  const addToCart = (productName: string) => {
    setCart(prev => ({
      ...prev,
      [productName]: (prev[productName] || 0) + 1
    }));
    setAddedProduct(productName);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Best Sellers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular hydroponic vegetables, loved by families across Kanpur
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover object-top"
                />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </span>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                  <button 
                    onClick={() => addToCart(product.name)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="/products" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-block">
            View All Products
          </a>
        </div>
      </div>
      
      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50">
          <div className="flex items-center space-x-3">
            <i className="ri-check-circle-line text-xl w-6 h-6 flex items-center justify-center"></i>
            <span>{addedProduct} added to cart!</span>
            <button className="bg-green-700 hover:bg-green-800 px-3 py-1 rounded text-sm whitespace-nowrap cursor-pointer">
              View Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
}