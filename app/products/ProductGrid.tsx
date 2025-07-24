
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProductGrid() {
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [showPopup, setShowPopup] = useState(false);
  const [addedProduct, setAddedProduct] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Hydroponic Lettuce',
      price: 45,
      category: 'leafy',
      image: 'https://readdy.ai/api/search-image?query=fresh%20hydroponic%20lettuce%20leaves%20in%20white%20container%2C%20crisp%20green%20lettuce%2C%20clean%20agricultural%20setup%2C%20professional%20food%20photography%2C%20healthy%20organic%20vegetables%2C%20pesticide-free%20produce&width=400&height=300&seq=lettuce2&orientation=landscape',
      badge: 'Best Seller',
      description: 'Crisp, fresh lettuce grown without soil'
    },
    {
      id: 2,
      name: 'Cherry Tomatoes',
      price: 65,
      category: 'fruits',
      image: 'https://readdy.ai/api/search-image?query=vibrant%20red%20cherry%20tomatoes%20growing%20in%20hydroponic%20system%2C%20fresh%20ripe%20tomatoes%20on%20vine%2C%20clean%20white%20growing%20containers%2C%20professional%20agricultural%20photography%2C%20healthy%20organic%20produce&width=400&height=300&seq=tomato2&orientation=landscape',
      badge: '',
      description: 'Sweet, juicy cherry tomatoes'
    },
    {
      id: 3,
      name: 'Fresh Spinach',
      price: 38,
      category: 'leafy',
      image: 'https://readdy.ai/api/search-image?query=fresh%20green%20spinach%20leaves%20in%20hydroponic%20growing%20system%2C%20healthy%20leafy%20vegetables%2C%20clean%20white%20containers%2C%20professional%20food%20photography%2C%20organic%20produce%2C%20pesticide-free%20farming&width=400&height=300&seq=spinach2&orientation=landscape',
      badge: '',
      description: 'Nutritious baby spinach leaves'
    },
    {
      id: 4,
      name: 'Mint Leaves',
      price: 25,
      category: 'herbs',
      image: 'https://readdy.ai/api/search-image?query=fresh%20mint%20leaves%20growing%20in%20hydroponic%20system%2C%20aromatic%20green%20herbs%2C%20clean%20white%20growing%20containers%2C%20professional%20agricultural%20photography%2C%20healthy%20organic%20herbs&width=400&height=300&seq=mint2&orientation=landscape',
      badge: '',
      description: 'Aromatic fresh mint for cooking'
    },
    {
      id: 5,
      name: 'Kale',
      price: 52,
      category: 'leafy',
      image: 'https://readdy.ai/api/search-image?query=dark%20green%20kale%20leaves%20in%20hydroponic%20growing%20system%2C%20nutritious%20leafy%20vegetables%2C%20clean%20white%20containers%2C%20professional%20food%20photography%2C%20healthy%20organic%20produce%2C%20superfood%20greens&width=400&height=300&seq=kale1&orientation=landscape',
      badge: '',
      description: 'Nutrient-rich superfood kale'
    },
    {
      id: 6,
      name: 'Basil',
      price: 30,
      category: 'herbs',
      image: 'https://readdy.ai/api/search-image?query=fresh%20basil%20leaves%20growing%20in%20hydroponic%20system%2C%20aromatic%20green%20herbs%2C%20clean%20white%20growing%20containers%2C%20professional%20agricultural%20photography%2C%20healthy%20organic%20herbs%20for%20cooking&width=400&height=300&seq=basil1&orientation=landscape',
      badge: '',
      description: 'Fresh basil for Italian dishes'
    },
    {
      id: 7,
      name: 'Cucumber',
      price: 42,
      category: 'fruits',
      image: 'https://readdy.ai/api/search-image?query=fresh%20green%20cucumbers%20growing%20in%20hydroponic%20system%2C%20crisp%20vegetables%2C%20clean%20white%20growing%20containers%2C%20professional%20agricultural%20photography%2C%20healthy%20organic%20produce%2C%20pesticide-free%20farming&width=400&height=300&seq=cucumber1&orientation=landscape',
      badge: '',
      description: 'Crisp, refreshing cucumbers'
    },
    {
      id: 8,
      name: 'Bell Peppers',
      price: 75,
      category: 'fruits',
      image: 'https://readdy.ai/api/search-image?query=colorful%20bell%20peppers%20growing%20in%20hydroponic%20system%2C%20red%20yellow%20green%20peppers%2C%20clean%20white%20growing%20containers%2C%20professional%20agricultural%20photography%2C%20healthy%20organic%20vegetables&width=400&height=300&seq=peppers1&orientation=landscape',
      badge: '',
      description: 'Colorful, sweet bell peppers'
    },
    {
      id: 9,
      name: 'Cilantro',
      price: 22,
      category: 'herbs',
      image: 'https://readdy.ai/api/search-image?query=fresh%20cilantro%20leaves%20growing%20in%20hydroponic%20system%2C%20aromatic%20green%20herbs%2C%20clean%20white%20growing%20containers%2C%20professional%20agricultural%20photography%2C%20healthy%20organic%20herbs%20for%20Indian%20cooking&width=400&height=300&seq=cilantro1&orientation=landscape',
      badge: '',
      description: 'Fresh cilantro for Indian dishes'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'leafy', name: 'Leafy Greens' },
    { id: 'herbs', name: 'Herbs' },
    { id: 'fruits', name: 'Vegetables' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Fresh Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of pesticide-free hydroponic vegetables, herbs, and greens
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
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

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                    <span className="text-gray-500 ml-2">per pack</span>
                  </div>
                  <button 
                    onClick={() => addToCart(product.name)}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-green-50 rounded-lg p-8 inline-block">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Same Day Delivery</h3>
            <p className="text-green-600 mb-4">Order before 6 PM and receive your fresh vegetables today!</p>
            <div className="flex items-center justify-center text-green-700">
              <i className="ri-truck-line mr-2 text-xl w-6 h-6 flex items-center justify-center"></i>
              <span className="font-semibold">Free delivery on orders above ₹200</span>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50">
          <div className="flex items-center space-x-3">
            <i className="ri-check-circle-line text-xl w-6 h-6 flex items-center justify-center"></i>
            <span>{addedProduct} added to cart!</span>
            <Link href="/cart">
              <button className="bg-green-700 hover:bg-green-800 px-3 py-1 rounded text-sm whitespace-nowrap cursor-pointer">
                View Cart
              </button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
