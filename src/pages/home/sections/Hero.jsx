import Akokor from "../../../../public/images/Akokor1.jpg"

const Hero = () => {
  return (
    <div className="relative min-h-[100vh]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Akokor})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay - adjusted opacity */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full py-12">
          {/* Left Column - Text Content */}
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-white mb-6 mt-15">
              Smart Brooding,
              <br />
              <span className="text-[#FFC107]">Stronger Chicks!</span>
            </h1>
            
            <p className="text-xl font-opensans text-gray-200 mb-8 max-w-2xl">
              Revolutionizing small-scale poultry farming with our innovative
              solar-powered brooder box system. Ensure optimal temperature control
              and improve chick survival rates.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* <a
                href="/products"
                className="px-8 py-3 bg-[#FFC107] text-black font-opensans rounded-full hover:bg-[#FFC107]/80 transition-colors duration-300 text-lg font-bold"
              >
                Explore Products
              </a> */}
              <a
                href="https://wa.me/233540637441"
                className="px-8 py-3 border-2 border-white text-white font-opensans rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg font-bold"
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
                  <span className="font-opensans text-gray-200 font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
