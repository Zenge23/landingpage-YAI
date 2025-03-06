import React from 'react';

const SuccessStory = () => {
  const testimonials = [
    {
      name: "Sarah Kimani",
      role: "Small-scale Poultry Farmer",
      location: "Buoyem,Techiman, Ghana",
      image: "/images/farmer1.jpg", // Add actual farmer images
      quote: "Since using the solar-powered brooder box, my chick survival rate has increased from 60% to 95%. The consistent temperature control has made a huge difference in my poultry business.",
      stats: {
        survivalRate: "95%",
        costReduction: "40%"
      }
    },
    {
      name: "John Omondi",
      role: "Commercial Poultry Farmer",
      location: " Techiman, Ghana",
      image: "/images/farmer2.jpg",
      quote: "The dual power system ensures my chicks are always warm, even during cloudy days. I've significantly reduced my operational costs by switching from charcoal to this solar solution.",
      stats: {
        survivalRate: "92%",
        costReduction: "45%"
      }
    },
    {
      name: "Mary Wanjiku",
      role: "Agricultural Cooperative Leader",
      location: "Kenten,Techiman, Ghana",
      image: "/images/farmer3.jpg",
      quote: "Our cooperative members have seen remarkable improvements in their poultry farming since adopting these brooder boxes. It's both eco-friendly and economical.",
      stats: {
        survivalRate: "90%",
        costReduction: "50%"
      }
    }
  ];

  return (
    <div id="stories" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">
          Success Stories
        </h2>
        <div className="h-1 w-24 bg-[#FFC107] mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-lg font-opensans text-gray-600">
          See how our solar-powered brooder box is transforming poultry farming across Techiman, Ghana
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              {/* Quote */}
              <div className="mb-6">
                <svg className="h-8 w-8 text-[#FFC107] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
                </svg>
                <p className="text-gray-600 font-opensans italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Farmer Info */}
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-[#28A745] flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold font-poppins text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#28A745]">
                    {testimonial.stats.survivalRate}
                  </p>
                  <p className="text-sm text-gray-500">Survival Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#28A745]">
                    {testimonial.stats.costReduction}
                  </p>
                  <p className="text-sm text-gray-500">Cost Reduction</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      {/* <div className="text-center mt-12">
       <a
          href="/contact"
          className="inline-block px-8 py-3 bg-[#28A745] text-white font-bold rounded-full hover:bg-[#218838] transition-colors duration-300"
        >
          Share Your Success Story
        </a>
      </div>  */}
    </div>
  );
};

export default SuccessStory;
