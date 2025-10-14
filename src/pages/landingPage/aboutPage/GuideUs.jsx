import React from 'react';

const GuideUs = () => {
  const principles = [
    {
      icon: (
        <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-12 h-12"
          >
            <path
              d="M32 60L20 28l24 8z"
              fill="#FFB74D"
              stroke="#E65100"
              strokeWidth="2"
            />

            <circle cx="15" cy="10" r="3" fill="#42A5F5" />
            <circle cx="50" cy="15" r="4" fill="#66BB6A" />
            <circle cx="40" cy="5" r="2" fill="#EC407A" />
            <circle cx="55" cy="35" r="3" fill="#AB47BC" />
            <circle cx="10" cy="30" r="3" fill="#FF7043" />

            <path
              d="M25 5c2 3 6 3 8 0"
              stroke="#FF4081"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M45 25c1.5 2.5 5 2.5 6.5 0"
              stroke="#29B6F6"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M15 40c2 2 6 2 8 0"
              stroke="#8BC34A"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      ),
      title: 'Playfulness',
      description:
        'We infuse fun into every aspect of travel, creating experiences that bring joy and wonder.',
    },
    {
      icon: (
        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-10 h-10 text-purple-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ),
      title: 'Safety',
      description:
        'Your well-being is our priority. We ensure every adventure is as safe as it is exciting.',
    },
    {
      icon: (
        <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-10 h-10 text-teal-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ),
      title: 'Sustainability',
      description:
        "We're committed to eco-friendly practices that preserve destinations for future explorers.",
    },
    {
      icon: (
        <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-10 h-10 text-yellow-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
        </div>
      ),
      title: 'Inclusivity',
      description:
        'We create travel experiences that welcome everyone, regardless of background or ability.',
    },
  ];
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6">
            The principles that <span className="text-[#6E67D6]">guide us</span>
          </h2>
          <p className="text-base sm:text-lg md:text-2xl font-normal max-w-4xl mx-auto">
            At TabiHop, our core values guide everything we do, serving as the
            driving force that keeps us moving forward.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-md lg:shadow-lg lg:hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center">{principle.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-800 font-medium leading-relaxed text-sm sm:text-base">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideUs;
