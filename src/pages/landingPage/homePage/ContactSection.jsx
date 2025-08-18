import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  return (
    <div className="flex items-center justify-center p-4">
      <div className="max-w-6xl w-full rounded-3xl overflow-hidden pb-44 pt-16">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Panel - Contact Information */}
          <div className="w-full md:w-3/5 lg:w-2/5 bg-[#E66CE5] rounded-2xl p-4 sm:p-6 md:p-6 lg:p-6 text-white relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full">
              <img
                src="/Ellipse 793.png"
                alt="Decorative Circle"
                className="w-full h-full"
              />
            </div>
            <div className="absolute bottom-16 right-8 sm:bottom-20 sm:right-12 w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-26 lg:h-26 rounded-full">
              <img
                src="/Ellipse 794.png"
                alt="Decorative Circle"
                className="w-full h-full"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-3 sm:mb-3 md:mb-4 lg:mb-4">
                Contact Information
              </h2>
              <p className="text-base sm:text-base md:text-lg lg:text-lg mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                Say something to start a live chat!
              </p>

              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-18">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base md:text-base lg:text-lg">
                    (123) 456 7890
                  </span>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base md:text-base lg:text-lg">
                    hello@tabihop.com
                  </span>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-sm sm:text-base md:text-base lg:text-lg">
                    <div>123 Anywhere St., Any City</div>
                    <div>State, Country 12345</div>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3 sm:space-x-4 mt-8 sm:mt-12 md:mt-14 lg:mt-16">
                {/** Example for each icon **/}
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="lg:w-3/5 p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter Your First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E66CE5] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter Your Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E66CE5] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E66CE5] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter Your Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E66CE5] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subject Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Select Subject?
                </label>
                <div className="flex flex-wrap gap-6">
                  {[
                    'General Inquiry',
                    'General Inquiry',
                    'General Inquiry',
                    'General Inquiry',
                  ].map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="subject"
                        value={option}
                        checked={formData.subject === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-[#E66CE5]"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E66CE5] focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <div className="bg-[#E66CE5] w-[135px] h-11 border-1 border-[#E66CE5]  rounded-bl-md rounded-br-md rounded-tr-lg relative">
                  <button className=" h-11  bg-white border-1 border-[#E66CE5] rounded-lg absolute top-[-4px] text-[16px] font-medium w-[140px] -ml-[9px]">
                    Send Message
                  </button>
                </div>
              </div>
            </form>

            {/* Decorative Element */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
