'use client';

export default function MethodHero() {
  return (
    <section 
      className="relative h-96 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=modern%20hydroponic%20farming%20facility%20with%20rows%20of%20green%20vegetables%20growing%20in%20white%20containers%2C%20advanced%20agricultural%20technology%2C%20clean%20sterile%20environment%2C%20professional%20farming%20setup%2C%20sustainable%20agriculture%2C%20futuristic%20food%20production&width=1920&height=600&seq=method1&orientation=landscape')`
      }}
    >
      <div className="text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Revolutionary Method
        </h1>
        <p className="text-xl md:text-2xl text-gray-200">
          Discover how we grow the freshest, most nutritious vegetables without soil or pesticides
        </p>
      </div>
    </section>
  );
}