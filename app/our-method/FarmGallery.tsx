'use client';

import Link from 'next/link';

export default function FarmGallery() {
  const farmImages = [
    {
      src: 'https://readdy.ai/api/search-image?query=hydroponic%20farm%20facility%20overview%2C%20modern%20agricultural%20greenhouse%2C%20rows%20of%20green%20vegetables%20growing%20in%20white%20containers%2C%20professional%20farming%20setup%2C%20clean%20sterile%20environment&width=500&height=400&seq=farm1&orientation=landscape',
      alt: 'HydroFresh Farm Overview'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=close%20up%20of%20hydroponic%20lettuce%20growing%2C%20fresh%20green%20leaves%20in%20nutrient%20solution%2C%20professional%20agricultural%20photography%2C%20healthy%20organic%20vegetables%2C%20soilless%20farming%20technology&width=500&height=400&seq=farm2&orientation=landscape',
      alt: 'Hydroponic Lettuce Growing'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=hydroponic%20tomato%20plants%20with%20ripe%20red%20tomatoes%2C%20healthy%20plants%20in%20growing%20containers%2C%20professional%20agricultural%20setup%2C%20clean%20farming%20environment%2C%20organic%20vegetable%20production&width=500&height=400&seq=farm3&orientation=landscape',
      alt: 'Tomato Plants in Hydroponic System'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=farmer%20working%20in%20hydroponic%20greenhouse%2C%20agricultural%20professional%20tending%20to%20plants%2C%20sustainable%20farming%20practices%2C%20modern%20agricultural%20technology%2C%20clean%20farming%20environment&width=500&height=400&seq=farm4&orientation=landscape',
      alt: 'Our Team at Work'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=hydroponic%20herb%20garden%20with%20fresh%20basil%20and%20mint%2C%20aromatic%20herbs%20growing%20in%20nutrient%20solution%2C%20professional%20agricultural%20photography%2C%20clean%20farming%20setup%2C%20organic%20herb%20production&width=500&height=400&seq=farm5&orientation=landscape',
      alt: 'Fresh Herbs Growing'
    },
    {
      src: 'https://readdy.ai/api/search-image?query=quality%20control%20and%20harvesting%20in%20hydroponic%20farm%2C%20fresh%20vegetables%20being%20inspected%2C%20professional%20agricultural%20practices%2C%20clean%20farming%20environment%2C%20healthy%20organic%20produce&width=500&height=400&seq=farm6&orientation=landscape',
      alt: 'Quality Control Process'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Inside Our Farm
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art hydroponic facility in Kanpur. 
            See where your fresh vegetables grow in the cleanest, most controlled environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {farmImages.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        
        <div className="bg-green-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Visit Our Farm
            </h3>
            <p className="text-green-600 mb-6 max-w-2xl mx-auto">
              We believe in transparency. Want to see how your vegetables are grown? 
              We welcome visitors to tour our facility and learn about hydroponic farming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  Shop Our Products
                </button>
              </Link>
              <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                Schedule Farm Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}