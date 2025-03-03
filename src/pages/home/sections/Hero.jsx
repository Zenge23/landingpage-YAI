// import Akokor from "../../../../public/images/akokor.jpg";
import Akokor from "../../../../public/images/Akokor1.jpg"
const HeroImage = () => (
  <div className="relative">
    <img
      src={Akokor}
      alt="Chicks Brooder"
      className="w-full h-full object-cover opacity-70"
    />
  </div>
);

const Hero = () => {
  return (
    <div className="relative bg-gray-50 min-h-[90vh]"> {/* Changed h-[90vh] to min-h-[90vh] */}
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#FFC107] opacity-10 pattern-dots"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full py-12">
          {/* Left Column - Text Content */}
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-gray-800 mb-6">
              Smart Brooding,
              <br />
              <span className="text-[#28A745]">Stronger Chicks!</span>
            </h1>
            
            <p className="text-xl font-opensans text-gray-600 mb-8 max-w-2xl bg-transparent">
              Revolutionizing small-scale poultry farming with our innovative
              solar-powered brooder box system. Ensure optimal temperature control
              and improve chick survival rates.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/products"
                className="px-8 py-3 bg-[#28A745] text-white font-opensans rounded-full hover:bg-[#218838] transition-colors duration-300 text-lg"
              >
                Explore Products
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-[#FFC107] text-gray-800 font-opensans rounded-full hover:bg-[#FFC107] transition-colors duration-300 text-lg"
              >
                Contact Us
              </a>
            </div>

            {/* Key Features */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                "Solar Powered",
                "Temperature Control",
                "Cost Effective",
                "Eco-Friendly",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center lg:justify-start space-x-2"
                >
                  <div className="w-2 h-2 bg-[#FFC107] rounded-full"></div>
                  <span className="font-opensans text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image/Illustration Placeholder */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full max-w-md h-[400px] bg-opacity-20 rounded-lg flex items-center justify-center">
              <img src={Akokor } alt="Brooder Box" className="w-full h-full object-cover rounded-lg" />
              
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 26.625C960 35.5 1056 71 1152 79.875C1248 88.75 1344 71 1392 62.125L1440 53.25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
