'use client';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: 'ri-shield-check-line',
      title: 'Zero Pesticides',
      description: 'Our controlled environment eliminates the need for harmful chemicals, ensuring your vegetables are 100% pesticide-free and safe for your family.'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Maximum Nutrition',
      description: 'Hydroponic vegetables retain more nutrients than traditional farming methods, giving you vegetables that are not just fresh but incredibly nutritious.'
    },
    {
      icon: 'ri-drop-line',
      title: 'Water Efficient',
      description: 'Our hydroponic system uses 90% less water than traditional farming, making it an environmentally sustainable choice for Kanpur.'
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Year-Round Fresh',
      description: 'Controlled environment means we can grow fresh vegetables throughout the year, regardless of weather conditions or seasons.'
    },
    {
      icon: 'ri-time-line',
      title: 'Faster Growth',
      description: 'Plants grow 25-30% faster in hydroponic systems, allowing us to harvest fresher vegetables more frequently.'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Cleaner Produce',
      description: 'No soil means no soil-borne diseases or contaminants. Your vegetables are cleaner and safer straight from our farm.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Hydroponic Vegetables?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our hydroponic method isn't just about growing vegetables differently – it's about growing them better. 
            Here's why our method produces superior vegetables for your health and the environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className={`${benefit.icon} text-2xl text-green-600 w-6 h-6 flex items-center justify-center`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}