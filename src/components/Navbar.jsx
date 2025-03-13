import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: "Home", href: "#home" },
    { title: "Products", href: "#products" },
    { title: "Benefits", href: "#benefits" },
    { title: "Success Stories", href: "#stories" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-[#FFC107]/90 backdrop-blur-sm shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <img 
              src="/project logo.jpeg" 
              alt="Logo" 
              className="w-10 h-10 rounded-full object-cover mr-2"
            />
            <h1 className="text-lg sm:text-xl font-bold font-poppins text-gray-900">
              Chicks Brooder Solutions 
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="font-opensans text-gray-900 hover:text-[#28A745] font-medium transition-colors duration-300"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-[#28A745] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#28A745]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block px-3 py-2 rounded-md font-opensans text-gray-900 hover:text-[#28A745] hover:bg-gray-50 transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
