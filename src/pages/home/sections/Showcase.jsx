import React from "react";
import Fowl from "../../../../public/images/Akokor7.jpg"
const Showcase = () => {
  const features = [
    {
      title: "Dual Power System",
      description: "Seamlessly switch between solar and electric power for uninterrupted operation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Temperature Control",
      description: "Automated system maintains optimal brooding temperature for healthy chick development",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Cost Savings",
      description: "Reduce operational costs with efficient energy usage and minimal maintenance",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div id="products" className="relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Fowl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay - adjusted to darker overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header - updated text colors */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-white mb-4">
            Product Showcase
          </h2>
          <div className="h-1 w-24 bg-[#FFC107] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg font-opensans text-gray-200">
            Discover how our innovative brooder box is transforming poultry farming
          </p>
        </div>

        {/* Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-[#FFC107] bg-opacity-10">
              {/* Replace with actual product image */}
              {/* <div className="flex items-center justify-center h-full">
                <p className="font-poppins text-gray-600">Product Image</p>
                <img src={Fowl} alt="" />
              </div> */}
            </div>
            {/* Feature Badge */}
            {/* <div className="absolute -bottom-6 right-6 bg-[#28A745] text-white px-6 py-2 rounded-full font-opensans">
              Solar Powered
            </div> */}
          </div>

          {/* Feature List - updated text colors */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFC107] bg-opacity-20 rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold text-[#FFC107] mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-opensans text-gray-200">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics - updated background and text colors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: "90%", label: "Chick Survival Rate" },
            { value: "50%", label: "Cost Reduction" },
            { value: "24/7", label: "Temperature Control" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl font-bold font-poppins text-[#FFC107] mb-2">
                {stat.value}
              </div>
              <div className="font-opensans text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
