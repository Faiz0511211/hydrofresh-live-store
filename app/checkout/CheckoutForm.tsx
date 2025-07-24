'use client';

import { useState } from 'react';
import { saveOrder } from '@/lib/orderService';

// This defines the structure of our form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: string;
}

export default function CheckoutForm({ cartItems, total }: { cartItems: any[], total: number }) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'cod',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // THE FIX IS HERE: We are now creating a "flat" object that
      // matches what the saveOrder function expects.
      const newOrder = {
        ...formData, // This spreads the name, email, phone, etc. directly
        items: cartItems,
        total,
        status: 'new',
        createdAt: new Date(),
      };
      const id = await saveOrder(newOrder);
      setOrderId(id);
    } catch (err) {
      setError('Failed to place order. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderId) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg">
        <h2 className="text-2xl font-bold text-green-700">Order Placed Successfully!</h2>
        <p className="mt-2 text-gray-600">Your Order ID is: <span className="font-mono bg-gray-200 px-2 py-1 rounded">{orderId}</span></p>
        <p className="mt-4">Thank you for your purchase. We will contact you shortly to confirm delivery.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" required />
      </div>
      <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" required />
      </div>
      <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" required />
      </div>
      <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <textarea id="address" name="address" value={formData.address} onChange={handleInputChange} rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" required></textarea>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button type="submit" disabled={isSubmitting} className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 disabled:bg-green-300">
        {isSubmitting ? 'Placing Order...' : `Place Order (₹${total})`}
      </button>
    </form>
  );
}
