import React from "react";

const AboutInnovator = () => {
  const innovatorDetails = {
    name: "Emmanuel Donkor Banahee",
    organization: "Chicks Brooder Solutions",
    vision: "To revolutionize small-scale poultry farming by providing efficient, affordable, and sustainable brooding solutions for day-old chicks.",
    mission: "To empower small-scale poultry farmers with a solar-powered and electric brooder box system that ensures optimal temperature regulation, improves chick survival rates, and enhances productivity.",
    values: [
      "Innovation – Creating modern solutions for poultry farmers",
      "Sustainability – Utilizing solar energy for an eco-friendly approach",
      "Affordability – Ensuring cost-effective solutions for small-scale farmers",
      "Efficiency – Reducing labor and improving chick survival rates",
      "Reliability – Delivering consistent and effective brooding systems",
    ],
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
            About the Innovator
          </h2>
          <div className="h-1 w-24 bg-[#FFC107] mx-auto"></div>
        </div>

        {/* Innovator Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-poppins font-bold text-[#28A745] mb-4">
                {innovatorDetails.name}
              </h3>
              <p className="text-lg font-opensans text-gray-600 mb-2">
                Founder & CEO
              </p>
              <p className="text-xl font-opensans text-gray-800">
                {innovatorDetails.organization}
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <h4 className="text-xl font-poppins font-bold text-gray-800 mb-3">
                  Vision
                </h4>
                <p className="font-opensans text-gray-600">
                  {innovatorDetails.vision}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-poppins font-bold text-gray-800 mb-3">
                  Mission
                </h4>
                <p className="font-opensans text-gray-600">
                  {innovatorDetails.mission}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Core Values */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-6">
              Core Values
            </h3>
            <div className="space-y-4">
              {innovatorDetails.values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#FFC107] flex items-center justify-center">
                      <span className="text-white font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <p className="font-opensans text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInnovator;
