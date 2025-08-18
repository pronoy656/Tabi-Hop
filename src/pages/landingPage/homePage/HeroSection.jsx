import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { CiYoutube } from 'react-icons/ci';

import animationData from '../../../animations/gps-navigation.json';
import Lottie from 'lottie-react';

const HeroSection = () => {
  return (
    <div className="bg-[#D4D2F3] overflow-hidden">
      {/* ********* */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-2 flex flex-col lg:flex-row items-center justify-between lg:min-h-screen py-10 lg:py-0 gap-10 lg:gap-14">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            Create you dream <br className="hidden sm:block" /> itinerary
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-normal mt-4 lg:mt-2 text-gray-900 max-w-lg mx-auto lg:mx-0">
            Visually plan your next stop with AI technology
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-10 mt-8 lg:mt-11">
            {/* Try it for free button */}
            <div className="bg-[#6E67D6] w-full sm:w-auto min-w-[169px] h-11 border-2 border-[#6E67D6] rounded-bl-md rounded-br-md rounded-tr-lg relative">
              <button
                className="flex items-center justify-center space-x-2.5 px-4 h-11 bg-white border-2 border-[#6E67D6] rounded-lg absolute top-[-5px] text-lg md:text-[20px] font-medium w-full sm:w-[175px] -ml-[2px] sm:-ml-[11px]
               hover:shadow-lg hover:scale-105 hover:bg-[#6E67D6] hover:text-white transition-all duration-300 ease-in-out"
              >
                <span>Try it for free</span>
                <FaArrowRightLong />
              </button>
            </div>

            {/* Watch video button */}
            <div className="bg-[#6E67D6] w-full sm:w-auto min-w-[179px] h-11 border-2 border-[#6E67D6] rounded-bl-md rounded-br-md rounded-tr-lg relative">
              <button className="flex items-center justify-center space-x-2.5 px-4 h-11 bg-white border-2 border-[#6E67D6] rounded-lg absolute top-[-5px] text-lg md:text-[20px] font-medium w-full sm:w-[185px] -ml-[2px] sm:-ml-[11px] hover:shadow-lg hover:scale-105 hover:bg-[#6E67D6] hover:text-white transition-all duration-300 ease-in-out">
                <CiYoutube className="text-xl" />
                <span>Watch a video</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-6">
            <div className="flex -space-x-2">
              <img
                src="/profile.png"
                alt="User 1"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
              />
              <img
                src="/profile1.png"
                alt="User 2"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
              />
              <img
                src="/profile.png"
                alt="User 3"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
              />
            </div>
            <p className="font-medium text-gray-800 text-sm sm:text-base">
              2,500+ happy travelers
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-md sm:max-w-lg lg:max-w-none">
          <div className="relative w-full h-75 sm:h-80 md:h-96 lg:w-[570px] lg:h-[500px] xl:w-[700px] xl:h-[600px]">
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full h-full object-contain"
            ></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
