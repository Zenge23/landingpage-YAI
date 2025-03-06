import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    farmType: "small-scale",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-poppins text-gray-800 mb-4">
            Contact Us
          </h2>
          <div className="h-1 w-24 bg-[#FFC107] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg font-opensans text-gray-600">
            Interested in our brooder box solution? Get in touch with us for more
            information or support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-poppins font-bold text-[#28A745] mb-6">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#FFC107] bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#28A745]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Location</h4>
                  <p className="text-gray-600">Bono East Region, Ghana</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#FFC107] bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#28A745]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">ebanahee@gmail.com</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#FFC107] bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#28A745]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-[#28A745]">Facebook</a>
                    <a href="#" className="text-gray-600 hover:text-[#28A745]">WhatsApp</a>
                    <a href="#" className="text-gray-600 hover:text-[#28A745]">TikTok</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745]"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745]"
                  required
                />
              </div>

              <div>
                <label htmlFor="farmType" className="block text-sm font-medium text-gray-700">
                  Farm Type
                </label>
                <select
                  id="farmType"
                  name="farmType"
                  value={formData.farmType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745]"
                >
                  <option value="small-scale">Small Scale Farm</option>
                  <option value="medium-scale">Medium Scale Farm</option>
                  <option value="large-scale">Large Scale Farm</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#28A745] focus:ring-[#28A745]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#28A745] text-white py-3 px-6 rounded-md hover:bg-[#218838] transition-colors duration-300 font-opensans"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
