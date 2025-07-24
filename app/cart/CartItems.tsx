'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CartItems() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Hydroponic Lettuce',
      price: 45,
      quantity: 2,
      image: 'https://readdy.ai/api/search-image?query=fresh%20hydroponic%20lettuce%20leaves%20in%20white%20container%2C%20crisp%20green%20lettuce%2C%20clean%20agricultural%20setup%2C%20professional%20food%20photography%2C%20healthy%20organic%20vegetables%2C%20pesticide-free%20produce&width=300&height=200&seq=lettuce3&orientation=landscape'
    },
    {
      id: 2,
      name: 'Cherry Tomatoes',
      price: 65,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=vibrant%20red%20cherry%20tomatoes%20growing%20in%20hydroponic%20system%2C%20fresh%20ripe%20tomatoes%20on%20vine%2C%20clean%20white%20growing%20containers%2C%20professional%20agricultural%20photography%2C%20healthy%20organic%20produce&width=300&height=200&seq=tomato3&orientation=landscape'
    },
    {
      id: 3,
      name: 'Fresh Spinach',
      price: 38,
      quantity: 3,
      image: 'https://readdy.ai/api/search-image?query=fresh%20green%20spinach%20leaves%20in%20hydroponic%20growing%20system%2C%20healthy%20leafy%20vegetables%2C%20clean%20white%20containers%2C%20professional%20food%20photography%2C%20organic%20produce%2C%20pesticide-free%20farming&width=300&height=200&seq=spinach3&orientation=landscape'
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 200 ? 0 : 30;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
              <i className="ri-shopping-cart-line text-6xl text-gray-400 w-16 h-16 flex items-center justify-center"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Add some fresh hydroponic vegetables to get started!</p>
            <Link href="/products">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">Review your fresh hydroponic vegetables</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Cart Items ({cartItems.length})</h2>

                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover object-top rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-green-600 font-semibold">₹{item.price} per pack</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"
                        >
                          <i className="ri-subtract-line text-gray-600 w-4 h-4 flex items-center justify-center"></i>
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"
                        >
                          <i className="ri-add-line text-gray-600 w-4 h-4 flex items-center justify-center"></i>
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-semibold text-gray-900">₹{item.price * item.quantity}</p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/products">
                <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-arrow-left-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className={deliveryFee === 0 ? 'text-green-600 font-semibold' : 'font-semibold'}>
                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>
                {subtotal < 200 && (
                  <div className="text-sm text-gray-500 bg-yellow-50 p-3 rounded">
                    Add ₹{200 - subtotal} more for free delivery!
                  </div>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-green-600">₹{total}</span>
                  </div>
                </div>
              </div>

              <Link href="/checkout">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer mb-4">
                  Proceed to Checkout
                </button>
              </Link>

              <div className="text-center text-sm text-gray-500">
                <div className="flex items-center justify-center mb-2">
                  <i className="ri-truck-line mr-2 text-green-600 w-4 h-4 flex items-center justify-center"></i>
                  <span>Same day delivery available</span>
                </div>
                <div className="flex items-center justify-center">
                  <i className="ri-shield-check-line mr-2 text-green-600 w-4 h-4 flex items-center justify-center"></i>
                  <span>100% pesticide-free guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
