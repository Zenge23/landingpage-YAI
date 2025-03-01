import React from "react";

const Footer = () => {
  const footerSections = {
    contact: {
      title: "Contact Us",
      items: [
        "Bono East Region, Ghana",
        "ebanahee@gmail.com",
        "+233 54 063 7441",
      ],
    },
    quickLinks: {
      title: "Quick Links",
      items: [
        { name: "Products", href: "/products" },
        { name: "Benefits", href: "/benefits" },
        { name: "Success Stories", href: "/stories" },
        { name: "Contact", href: "/contact" },
      ],
    },
    social: {
      title: "Follow Us",
      items: [
        { name: "Facebook", href: "#" },
        { name: "WhatsApp", href: "#" },
        { name: "YouTube", href: "#" },
        { name: "TikTok", href: "#" },
      ],
    },
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-poppins text-xl font-bold mb-4 text-[#FFC107]">
              {footerSections.contact.title}
            </h3>
            <ul className="font-opensans space-y-2">
              {footerSections.contact.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins text-xl font-bold mb-4 text-[#FFC107]">
              {footerSections.quickLinks.title}
            </h3>
            <ul className="font-opensans space-y-2">
              {footerSections.quickLinks.items.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-[#28A745] transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-poppins text-xl font-bold mb-4 text-[#FFC107]">
              {footerSections.social.title}
            </h3>
            <ul className="font-opensans space-y-2">
              {footerSections.social.items.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-[#28A745] transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center font-opensans">
            <p className="text-sm">
              © {new Date().getFullYear()} Chicks Brooder Solutions. All rights
              reserved.
            </p>
            <p className="text-sm mt-2 text-[#28A745]">
              Smart Brooding, Stronger Chicks!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
