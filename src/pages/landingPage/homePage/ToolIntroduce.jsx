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
            <img className="w-full" src="/IT-frame.png" alt="" />
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
    <div className="p-4 py-36 pt-48">
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
          <div className="lg:w-1/2">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-20">
                Plan your perfect journey with our{' '}
                <span className="text-[#6E67D6]">smart tool</span>
              </h1>
              <p className="text-3xl font-semibold text-gray-800 mb-8">
                The secret to great travel-
              </p>
            </div>

            <div className="space-y-9">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-600"
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
                <span className="text-gray-700 text-2xl">
                  Unlimited collaborators at no extra cost
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-600"
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
                <span className="text-gray-700 text-2xl">
                  No complex onboarding - simple user experience
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-600"
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
                <span className="text-gray-700 text-2xl">
                  Designed specifically for the visual planner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolIntroduce;
