'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'You Order',
      description: 'Browse our fresh selection and place your order online',
      icon: 'ri-smartphone-line'
    },
    {
      number: 2,
      title: 'We Harvest',
      description: 'We pick your vegetables fresh from our hydroponic farm',
      icon: 'ri-plant-line'
    },
    {
      number: 3,
      title: 'We Deliver',
      description: 'Same-day delivery straight to your doorstep in Kanpur',
      icon: 'ri-truck-line'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From farm to table in just three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${step.icon} text-3xl text-green-600 w-8 h-8 flex items-center justify-center`}></i>
                </div>
                <div className="absolute top-2 right-2 bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-green-50 rounded-lg p-6 inline-block">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Same Day Delivery</h3>
            <p className="text-green-600">Order before 6 PM and receive your fresh vegetables the same day!</p>
          </div>
        </div>
      </div>
    </section>
  );
}