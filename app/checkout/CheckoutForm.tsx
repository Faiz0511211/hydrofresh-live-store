
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveOrder } from '../../lib/orderService';

export default function CheckoutForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '9794051017',
    address: '',
    city: 'Kanpur',
    pincode: '',
    paymentMethod: 'cod'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPaymentPending, setShowPaymentPending] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const orderItems = [
    { name: 'Hydroponic Lettuce', price: 45, quantity: 2 },
    { name: 'Cherry Tomatoes', price: 65, quantity: 1 },
    { name: 'Fresh Spinach', price: 38, quantity: 3 }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 200 ? 0 : 30;
  const total = subtotal + deliveryFee;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePaymentMethodChange = (method) => {
    setFormData({
      ...formData,
      paymentMethod: method
    });
    setShowPaymentOptions(false);
  };

  const generatePaymentUrl = (provider: string, amount: number, orderId: string): string => {
    const upiId = '9794051017-2@axl';
    const merchantName = 'HydroFresh Store';

    if (provider === 'phonepe') {
      return `upi://pay?pa=${upiId}&pn=${merchantName}&am=${amount}&cu=INR&tn=Order-${orderId}`;
    } else if (provider === 'paytm') {
      return `upi://pay?pa=${upiId}&pn=${merchantName}&am=${amount}&cu=INR&tn=Order-${orderId}`;
    } else if (provider === 'googlepay') {
      return `upi://pay?pa=${upiId}&pn=${merchantName}&am=${amount}&cu=INR&tn=Order-${orderId}`;
    }

    return '';
  };

  const handleOnlinePayment = async (provider: string) => {
    try {
      setIsSubmitting(true);

      const orderData = {
        ...formData,
        phone: '9794051017',
        items: orderItems,
        subtotal,
        deliveryFee,
        total,
        status: 'payment_pending',
        paymentProvider: provider
      };

      const result = await saveOrder(orderData);

      if (result.success) {
        const paymentUrl = generatePaymentUrl(provider, total, result.orderId || '');
        const paymentWindow = window.open(paymentUrl, '_blank', 'width=600,height=700');
        alert(`Payment initiated for Order ID: ${result.orderId}\n\nIMPORTANT: After completing payment, please contact us at 9794051017 with your Order ID to confirm payment.\n\nOrder will be processed only after payment verification.`);
        const checkPaymentStatus = setInterval(() => {
          if (paymentWindow?.closed) {
            clearInterval(checkPaymentStatus);
            setOrderId(result.orderId || '');
            setShowPaymentPending(true);
          }
        }, 1000);
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.paymentMethod === 'online') {
      setShowPaymentOptions(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const orderData = {
        ...formData,
        items: orderItems,
        subtotal,
        deliveryFee,
        total,
        status: 'confirmed'
      };

      const result = await saveOrder(orderData);

      if (result.success) {
        setOrderId(result.orderId || '');
        setShowSuccess(true);
        setTimeout(() => {
          router.push('/');
        }, 3000);
      } else {
        throw new Error('Failed to save order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showPaymentPending) {
    return (
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <i className="ri-time-line text-3xl text-orange-600 w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Initiated</h2>
            <p className="text-gray-600 mb-2">Your order has been created and is awaiting payment confirmation.</p>
            {orderId && (
              <p className="text-sm text-gray-500 mb-6">Order ID: {orderId}</p>
            )}
            <div className="bg-orange-50 rounded-lg p-4 mb-6">
              <p className="text-orange-800 font-semibold">Order Total: ₹{total}</p>
              <p className="text-orange-600">Status: Payment Pending</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">Next Steps:</h3>
              <div className="text-sm text-blue-700 space-y-1">
                <p>1. Complete your payment using the UPI app</p>
                <p>2. Contact us at <strong>9794051017</strong></p>
                <p>3. Share your Order ID: <strong>{orderId}</strong></p>
                <p>4. We'll confirm payment and process your order</p>
              </div>
            </div>
            <button
              onClick={() => router.push('/')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showSuccess) {
    return (
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <i className="ri-check-circle-line text-3xl text-green-600 w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
            <p className="text-gray-600 mb-2">Thank you for your order. We'll deliver your fresh vegetables soon.</p>
            {orderId && (
              <p className="text-sm text-gray-500 mb-6">Order ID: {orderId}</p>
            )}
            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-semibold">Order Total: ₹{total}</p>
              <p className="text-green-600">Expected delivery: Same day</p>
            </div>
            <p className="text-sm text-gray-500">Redirecting to homepage...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your order for fresh hydroponic vegetables</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Delivery Information</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  maxLength={500}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  placeholder="Enter your complete address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    placeholder="208001"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-sm">Cash on Delivery</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={formData.paymentMethod === 'online'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-sm">Online Payment</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer disabled:bg-gray-400"
              >
                {isSubmitting ? 'Processing...' : formData.paymentMethod === 'online' ? 'Choose Payment Method' : 'Place Order'}
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {orderItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">₹{item.price} × {item.quantity}</p>
                  </div>
                  <span className="font-semibold">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
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
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-green-600">₹{total}</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center text-green-700 mb-2">
                <i className="ri-truck-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                <span className="font-semibold">Same Day Delivery</span>
              </div>
              <p className="text-sm text-green-600">Your fresh vegetables will be delivered within 4-6 hours</p>
            </div>
          </div>
        </div>

        {showPaymentOptions && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Choose Payment Method</h3>
                <button
                  onClick={() => setShowPaymentOptions(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleOnlinePayment('phonepe')}
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-3 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer disabled:bg-gray-400"
                >
                  <i className="ri-smartphone-line w-5 h-5 flex items-center justify-center"></i>
                  <span>Pay with PhonePe</span>
                </button>

                <button
                  onClick={() => handleOnlinePayment('paytm')}
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer disabled:bg-gray-400"
                >
                  <i className="ri-wallet-line w-5 h-5 flex items-center justify-center"></i>
                  <span>Pay with Paytm</span>
                </button>

                <button
                  onClick={() => handleOnlinePayment('googlepay')}
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer disabled:bg-gray-400"
                >
                  <i className="ri-google-line w-5 h-5 flex items-center justify-center"></i>
                  <span>Pay with Google Pay</span>
                </button>

                <div className="text-center text-sm text-gray-500 mt-4">
                  <p>Total Amount: ₹{total}</p>
                  <p>Secure payment powered by UPI</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
