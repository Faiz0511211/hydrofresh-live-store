'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CartItems() {
  const [cart, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  const updateCart = (newCart: any[]) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.dispatchEvent(new Event('cartUpdated'));
    const newTotal = newCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    updateCart(storedCart);
  }, []);

  const handleQuantityChange = (id: number, delta: number) => {
    const newCart = cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    );
    updateCart(newCart);
  };

  const handleRemoveItem = (id: number) => {
    const newCart = cart.filter(item => item.id !== id);
    updateCart(newCart);
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
        <Link href="/products" className="mt-4 inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map(item => (
        <div key={item.id} className="flex items-center justify-between py-4 border-b">
          <div className="flex items-center space-x-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p>₹{item.price.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-lg">
              <button onClick={() => handleQuantityChange(item.id, -1)} className="px-3 py-1">-</button>
              <span className="px-4">{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)} className="px-3 py-1">+</button>
            </div>
            <p className="font-bold w-20 text-right">₹{(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
          </div>
        </div>
      ))}
      <div className="mt-8 text-right">
        <h3 className="text-2xl font-bold">Total: ₹{total.toFixed(2)}</h3>
        <Link href="/checkout" className="mt-4 inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}