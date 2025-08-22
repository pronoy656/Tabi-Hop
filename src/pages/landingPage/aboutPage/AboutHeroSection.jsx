import React from 'react';
import animationData from '../../../animations/Study Abroad.json';
import Lottie from 'lottie-react';

const AboutHeroSection = () => {
  return (
    <div className="bg-[#D4D2F3] py-12 md:py-16 lg:py-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-bold xl:leading-22">
              Planning your future <br />
              <span className="text-[#6E67D6]">with AI</span>
            </h2>
            <p className="text-base sm:text-lg md:text-2xl font-medium mt-4 md:mt-6 text-gray-800 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              An online tool that was built by a former tour guide & content
              creator. Teaching AI to think like a travel planner. Giving you
              the optimal routes to travel smart. Providing alternative routes
              and flexibility when things don't work out.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            {/* <img
              className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[466px] object-contain"
              src="/about-hero-image.svg"
              alt="Family planning travel with AI - illustration showing a man, woman, and child with luggage in a colorful travel scene"
            /> */}
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

export default AboutHeroSection;
