import React from 'react';

const AboutHeroSection = () => {
  return (
    <div className="bg-[#F8DEF1] py-24">
      <div className="max-w-[1320px] mx-auto flex items-center space-x-[76px]">
        <div>
          <p className="text-7xl font-medium leading-24">
            Planning your future <br />{' '}
            <span className="text-[#6E67D6]">with AI</span>
          </p>
          <p className="text-xl font-medium mt-4 ">
            An online tool that was built by a former tour guide & content
            creator. Teaching AI to think like a travel planner. Giving you the
            optimal routes to travel smart Providing alternative routes and
            flexibility when things don’t work out
          </p>
        </div>
        <div>
          <img
            className="max-w-[1320px] h-[466px]"
            src="/about-hero-image.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
