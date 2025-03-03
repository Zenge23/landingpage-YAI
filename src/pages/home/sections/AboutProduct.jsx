import React from "react";
import Akokor from "../../../../public/images/Akokor4.jpg"
import Fowl from "../../../../public/images/Akokor3.jpg";

const AboutProduct = () => {
  const productDetails = {
    name: "Solar-Powered Chicks Brooder Box",
    description:
      "An innovative, temperature-controlled brooder box that provides consistent heat for day-old chicks using solar or electric power. The system ensures optimal warmth, reducing mortality rates and improving poultry productivity.",
    usps: [
      {
        title: "Dual Power Mode",
        description: "Works with solar energy or electricity for flexibility",
      },
      {
        title: "Automated Temperature Control",
        description: "Maintains an ideal brooding environment",
      },
      {
        title: "Cost-Effective",
        description: "Reduces the need for traditional brooding methods like charcoal or gas",
      },
      {
        title: "Eco-Friendly",
        description: "Uses renewable solar energy, lowering carbon footprint",
      },
      {
        title: "Scalable",
        description: "Suitable for both small-scale and large-scale poultry farmers",
      },
    ],
    benefits: [
      "Ensures consistent warmth for day-old chicks, reducing mortality rates",
      "Saves time and labor, as it eliminates the need for constant monitoring",
      "Reduces costs, as solar power minimizes electricity expenses",
      "Eco-friendly alternative to traditional heating methods",
    ],
  };

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8">
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
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-white opacity-95"></div> */}
        <div className="absolute inset-0  opacity-95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-poppins text-white mb-4">
            {productDetails.name}
          </h2>
          <div className="h-1 w-24 bg-[#FFC107] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg font-opensans text-black font-bold">
            {productDetails.description}
          </p>
        </div>

        {/* USPs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productDetails.usps.map((usp, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#28A745] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-800">
                  {usp.title}
                </h3>
              </div>
              <p className="font-opensans text-gray-600">{usp.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-6 text-center">
            Key Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productDetails.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-[#FFC107] rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="font-opensans text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
