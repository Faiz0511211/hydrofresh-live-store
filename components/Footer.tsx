
'use client';

import Link from 'next/link';

export default function Footer() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi! I would like to know more about your hydroponic vegetables.');
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              HydroFresh
            </h3>
            <p className="text-gray-400 mb-4">
              Delivering Kanpur's freshest hydroponic vegetables with zero pesticides and maximum nutrition.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white cursor-pointer">
                <i className="ri-facebook-fill text-xl w-6 h-6 flex items-center justify-center"></i>
              </button>
              <button className="text-gray-400 hover:text-white cursor-pointer">
                <i className="ri-instagram-line text-xl w-6 h-6 flex items-center justify-center"></i>
              </button>
              <button 
                onClick={handleWhatsApp}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <i className="ri-whatsapp-line text-xl w-6 h-6 flex items-center justify-center"></i>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href="/our-method" className="text-gray-400 hover:text-white">Our Method</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <i className="ri-phone-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                +91 9876543210
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                hello@hydrofresh.com
              </li>
              <li className="flex items-center">
                <i className="ri-map-pin-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                Kanpur, UP, India
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Delivery Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Saturday: 8 AM - 8 PM</li>
              <li>Sunday: 9 AM - 6 PM</li>
              <li className="text-green-400 font-semibold">Same day delivery available!</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HydroFresh. All rights reserved. | Delivering fresh, pesticide-free vegetables in Kanpur.</p>
        </div>
      </div>
    </footer>
  );
}
