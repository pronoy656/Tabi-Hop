import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { CiYoutube } from 'react-icons/ci';

const HeroSection = () => {
  return (
    <div className="bg-[#F8DEF1]">
      <div className="max-w-[1320px] mx-auto">
        <p className="text-7xl font-semibold">
          Create your{' '}
          <span className="text-7xl font-semibold text-[#E66CE5]">
            dream <br />{' '}
          </span>{' '}
          itinerary
        </p>
        <p className="text-2xl font-normal mt-2">
          Visually plan your next stop with AI technology
        </p>
        <div className="flex items-center space-x-10">
          <div className="bg-[#E66CE5] w-[160px] h-11 border-2 border-[#E66CE5]  rounded-bl-md rounded-br-md rounded-tr-lg relative mt-11">
            <button className="flex items-center justify-center space-x-2.5 px-2.5 h-11  bg-white border-2 border-[#E66CE5] rounded-lg absolute top-[-5px] text-[20px] font-medium w-[165px] -ml-[11px]">
              <p>Try it for free</p>
              <FaArrowRightLong />
            </button>
          </div>
          <div className="bg-[#E66CE5] w-[170px] h-11 border-2 border-[#E66CE5]  rounded-bl-md rounded-br-md rounded-tr-lg relative mt-11">
            <button className="flex items-center justify-center space-x-2.5 px-2.5 h-11  bg-white border-2 border-[#E66CE5] rounded-lg absolute top-[-5px] text-[20px] font-medium w-[175px] -ml-[11px]">
              <CiYoutube />
              <p>Watch a video</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
