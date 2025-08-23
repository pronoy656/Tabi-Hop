import React, { useState } from 'react';

const ToolIntroduce = () => {
  const [activeTab, setActiveTab] = useState('Itinerary Generator');

  const tabs = [
    'Itinerary Generator',
    'Calendar',
    'Mood Board',
    'Track reservations',
    'organized in one place',
  ];
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Itinerary Generator':
        return (
          <div className="p-2">
            <img className="w-full" src="/IT-frame.png" alt="" />
          </div>
        );

      case 'Calendar':
        return (
          <div className="p-2">
            <img className="w-full" src="/calender-image.png" alt="" />
          </div>
        );

      case 'Mood Board':
        return (
          <div className="p-2">
            <img className="w-full" src="/Mood-Board-frame.png" alt="" />
          </div>
        );

      case 'Track reservations':
        return (
          <div className="p-2">
            <img className="w-full" src="/track-reserve-frame.png" alt="" />
          </div>
        );
      case 'organized in one place':
        return (
          <div className="p-2">
            <img className="w-full" src="/overview.png" alt="" />
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div className="p-4 md:py-36 pt-16 md:pt-48">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Mobile App Interface */}
          <div className="lg:w-1/2">
            {renderTabContent()}
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-6 pt-10">
              {tabs.map((tab) => (
                <div className="">
                  <div
                    className={`bg-[#6E67D6] w-[183px] h-11 border-1 border-[#6E67D6]  rounded-bl-md rounded-br-md rounded-tr-lg relative ${
                      activeTab === tab
                        ? 'bg-[#dbd9f3]'
                        : ' bg-[#6E67D6] hover:bg-[#dbd9f3]'
                    }`}
                  >
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`h-11  border-1 border-[#6E67D6] rounded-lg absolute top-[-5px] text-[16px] transition-all font-medium w-[190px] -ml-[13px] ${
                        activeTab === tab
                          ? 'bg-[#6E67D6] text-white'
                          : 'text-[#6E67D6] bg-white hover:bg-[#6E67D6] hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Marketing Content */}
          <div className="lg:w-1/2 w-full px-4 sm:px-6 lg:px-8">
            <div>
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-snug">
                Plan your perfect journey with our{' '}
                <span className="text-[#6E67D6]">smart tool</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-6 sm:mb-8">
                The secret to great travel-
              </p>
            </div>

            <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-9">
              {[
                'Unlimited collaborators at no extra cost',
                'No complex onboarding - simple user experience',
                'Designed specifically for the visual planner',
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-start sm:items-center space-x-3"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolIntroduce;
