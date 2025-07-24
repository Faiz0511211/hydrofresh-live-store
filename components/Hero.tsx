'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=beautiful%20modern%20hydroponic%20farm%20with%20fresh%20green%20vegetables%20growing%20in%20clean%20white%20containers%2C%20natural%20lighting%2C%20professional%20photography%2C%20healthy%20organic%20food%20production%2C%20minimalist%20agricultural%20technology%2C%20fresh%20lettuce%20and%20herbs%2C%20pristine%20growing%20environment&width=1920&height=1080&seq=hero1&orientation=landscape')`
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Taste the Difference.
            <br />
            <span className="text-yellow-400">Zero Pesticides, Maximum Freshness.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Kanpur's freshest hydroponic vegetables delivered to your door the same day they're harvested
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                Shop Now
              </button>
            </Link>
            <Link href="/our-method">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}