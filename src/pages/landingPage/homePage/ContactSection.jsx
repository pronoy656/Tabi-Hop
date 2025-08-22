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
    <div className="flex items-center justify-center space-x-3 p-4 ">
      <div className="max-w-7xl w-full rounded-3xl overflow-hidden pb-44 pt-16">
        <p className="text-center text-3xl md:text-7xl font-medium md:font-bold mb-14">
          Contact us
        </p>
        <div className="flex flex-col lg:flex-row space-x-6 min-h-[600px]">
          {/* Left Panel - Contact Information */}
          <div className="w-full md:w-3/5 lg:w-2/5 bg-[#6E67D6] rounded-2xl p-6 sm:p-6 md:p-6 lg:p-6 text-white relative overflow-hidden">
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
              <div className="flex space-x-3 sm:space-x-4 mt-8 sm:mt-12 md:mt-14 lg:mt-16 text-white">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/tabihop?igsh=am5oZ2dscGswbnNk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zm9.75 1.25a1 1 0 11-.001 2.001 1 1 0 01.001-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@CyberBunny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a2.974 2.974 0 00-2.093-2.106C19.691 3.5 12 3.5 12 3.5s-7.691 0-9.405.58A2.974 2.974 0 00.502 6.186 31.537 31.537 0 000 12a31.54 31.54 0 00.502 5.814 2.974 2.974 0 002.093 2.106C4.309 20.5 12 20.5 12 20.5s7.691 0 9.405-.58a2.974 2.974 0 002.093-2.106A31.54 31.54 0 0024 12a31.537 31.537 0 00-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@tabihop?_t=ZT-8z3cnyzXBAN&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.001 2.004c1.318 0 2.635.004 3.952-.002.133 1.483.63 2.93 1.502 4.148.893 1.26 2.232 2.16 3.72 2.497v3.547c-1.29-.046-2.59-.363-3.74-.963-.49-.255-.94-.567-1.37-.906-.005 2.18.01 4.362-.008 6.543-.032 1.23-.36 2.47-.994 3.525-.868 1.445-2.363 2.47-3.987 2.69-1.414.2-2.89-.114-4.07-.88-1.58-1.004-2.62-2.847-2.61-4.727-.02-1.78.74-3.56 2.06-4.737 1.227-1.13 2.92-1.757 4.594-1.633.016 1.29-.033 2.58-.027 3.87-.86-.28-1.87.25-2.22 1.07-.38.82-.14 1.9.55 2.48.71.62 1.9.65 2.64.07.39-.29.62-.75.73-1.22.07-.32.04-.65.05-.97.003-3.58-.007-7.16.006-10.74z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/tabihop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                >
                  {' '}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {' '}
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />{' '}
                  </svg>{' '}
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="lg:w-3/5 p-2 lg:p-12 mt-6 lg:mt-0 bg-white rounded-lg shadow-xl">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#837ce7] focus:border-transparent outline-none transition-all"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#837ce7] focus:border-transparent outline-none transition-all"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#837ce7] focus:border-transparent outline-none transition-all"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#837ce7] focus:border-transparent outline-none transition-all"
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
                        className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-[#837ce7]"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#837ce7] focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <div className="bg-[#6E67D6] w-[135px] h-11 border-1 border-[#6E67D6]  rounded-bl-md rounded-br-md rounded-tr-lg relative">
                  <button className=" h-11  bg-white border-1 border-[#6E67D6] rounded-lg absolute top-[-4px] text-[16px] font-medium w-[140px] -ml-[9px]">
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
