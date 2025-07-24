'use client';

export default function ProcessSection() {
  const processSteps = [
    {
      number: '01',
      title: 'Seed Selection',
      description: 'We carefully select premium quality seeds from trusted suppliers, ensuring only the best genetics for our plants.',
      image: 'https://readdy.ai/api/search-image?query=premium%20vegetable%20seeds%20in%20small%20containers%2C%20high%20quality%20seeds%20for%20hydroponic%20farming%2C%20professional%20agricultural%20setup%2C%20clean%20white%20containers%2C%20organic%20seed%20selection%20process&width=400&height=300&seq=seeds1&orientation=landscape'
    },
    {
      number: '02',
      title: 'Nutrient Solution',
      description: 'Our specially formulated nutrient solution provides plants with all essential minerals they need for optimal growth.',
      image: 'https://readdy.ai/api/search-image?query=hydroponic%20nutrient%20solution%20in%20clear%20containers%2C%20liquid%20fertilizer%20for%20plants%2C%20professional%20agricultural%20chemistry%2C%20clean%20laboratory%20setup%2C%20plant%20nutrition%20system&width=400&height=300&seq=nutrients1&orientation=landscape'
    },
    {
      number: '03',
      title: 'Controlled Environment',
      description: 'Temperature, humidity, and lighting are precisely controlled to create the perfect growing conditions year-round.',
      image: 'https://readdy.ai/api/search-image?query=modern%20hydroponic%20greenhouse%20with%20controlled%20environment%2C%20LED%20grow%20lights%2C%20temperature%20monitoring%20systems%2C%20professional%20agricultural%20technology%2C%20clean%20growing%20facility&width=400&height=300&seq=environment1&orientation=landscape'
    },
    {
      number: '04',
      title: 'Daily Monitoring',
      description: 'Our team monitors plant health daily, ensuring optimal growth and early detection of any issues.',
      image: 'https://readdy.ai/api/search-image?query=farmer%20monitoring%20hydroponic%20plants%2C%20agricultural%20professional%20checking%20plant%20health%2C%20greenhouse%20inspection%2C%20vegetable%20quality%20control%2C%20sustainable%20farming%20practices&width=400&height=300&seq=monitoring1&orientation=landscape'
    },
    {
      number: '05',
      title: 'Perfect Harvest',
      description: 'We harvest vegetables at peak ripeness, ensuring maximum flavor and nutritional value for our customers.',
      image: 'https://readdy.ai/api/search-image?query=fresh%20harvested%20hydroponic%20vegetables%20in%20baskets%2C%20professional%20vegetable%20harvesting%2C%20clean%20agricultural%20produce%2C%20healthy%20organic%20vegetables%2C%20farm%20to%20table%20concept&width=400&height=300&seq=harvest1&orientation=landscape'
    },
    {
      number: '06',
      title: 'Same Day Delivery',
      description: 'Freshly harvested vegetables are packed and delivered to your doorstep within hours of harvesting.',
      image: 'https://readdy.ai/api/search-image?query=fresh%20vegetables%20being%20packed%20for%20delivery%2C%20professional%20food%20packaging%2C%20clean%20white%20containers%2C%20same%20day%20delivery%20service%2C%20healthy%20organic%20produce%20ready%20for%20shipping&width=400&height=300&seq=delivery1&orientation=landscape'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Growing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From seed to your table, every step is carefully managed to ensure you receive the freshest, 
            most nutritious vegetables possible. Here's how we do it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={step.image} 
                alt={step.title}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-green-600 text-white rounded-lg p-8 inline-block">
            <h3 className="text-2xl font-bold mb-2">The Result?</h3>
            <p className="text-xl">Vegetables that are fresher, cleaner, and more nutritious than anything you'll find in traditional markets.</p>
          </div>
        </div>
      </div>
    </section>
  );
}