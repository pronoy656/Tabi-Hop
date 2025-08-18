import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { CiYoutube } from 'react-icons/ci';

import animationData from '../../../animations/gps-navigation.json';
import Lottie from 'lottie-react';

const HeroSection = () => {
  return (
    <div className="bg-[#F8DEF1] min-h-screen relative">
      {/* Decorative circles */}
      <div className="absolute top-20 right-2/4 w-32 h-32 ">
        <img src="/Ellipse 5.png" alt="" className="w-full h-full" />
      </div>

      <div className="absolute bottom-50 left-200 w-24 h-24 ">
        <img src="/Ellipse 4.png" alt="" className="w-full h-full" />
      </div>

      <div className="absolute bottom-80 left-1/3 w-16 h-16 ">
        <img src="/Ellipse 5.png" alt="" className="w-full h-full" />
      </div>
      <div className="absolute bottom-90 top-60 left-60 w-16 h-16 ">
        <img src="/Ellipse 1 (1).png" alt="" className="w-full h-full" />
      </div>

      {/* ********* */}
      <div className="max-w-[1320px] mx-auto flex items-center space-x-14">
        <div>
          <p className="text-7xl font-semibold leading-25">
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
          <div className="flex items-center gap-4 mt-6">
            <div className="flex -space-x-2">
              <img
                src="/profile.png"
                alt="User 1"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <img
                src="/profile1.png"
                alt="User 2"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <img
                src="/profile.png"
                alt="User 3"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
            </div>
            <p className="font-medium text-gray-800">2,500+ happy travelers</p>
          </div>
        </div>
        <div>
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-[700px] h-screen"
          ></Lottie>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
