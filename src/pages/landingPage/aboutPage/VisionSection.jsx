import React from 'react';

const VisionSection = () => {
  return (
    <div className="max-w-[1193px] mx-auto py-16 px-4">
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl px-2 font-semibold leading-tight">
          How We Turned a Dream Into{' '}
          <span className="text-[#E66CE5]">Something That Matters</span>
        </h2>
        <p className="text-lg sm:text-xl font-medium mt-4 text-gray-700 max-w-4xl mx-auto px-2">
          We started with a vision to make a difference, and along the way, we
          found our purpose.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:space-x-28 space-y-10 lg:space-y-0 mt-8 md:pt-7">
        {/* Right side */}
        <div className="w-full flex justify-center lg:block">
          <div className="bg-[#F5EEFC] w-full max-w-[525px] h-[340px] sm:h-[400px] md:h-[480px] lg:h-[540px] border-2 border-[#6A4388] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl rounded-tr-lg relative mt-11">
            <div className="bg-[#FFF8F3] border-2 border-[#6A4388] rounded-2xl absolute top-[-10px] md:top-[-60px] text-base sm:text-lg md:text-xl lg:text-[20px] text-[#565F6C] font-medium w-full -right-2 md:-right-7">
              <div className="w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-[352px] rounded-tl-xl rounded-tr-xl">
                <img
                  className="rounded-tl-2xl rounded-tr-xl w-full h-full object-cover"
                  src="/Dream-image.png"
                  alt=""
                />
              </div>
              <div className="px-4 mb-9 rounded-2xl max-h-[176px]">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black mt-3">
                  Our Humble Beginnings
                </p>
                <p className="text-sm sm:text-base md:text-lg font-medium text-black mt-4">
                  Tabihop started in 2025 as a small passion project by three
                  friends who shared a love for adventure. What began in a tiny
                  apartment has now grown into a vibrant community of travel
                  enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* left side */}
        <div className="w-full">
          <div className="mt-8">
            <div className="flex items-center space-x-4">
              <img className="w-8 h-8" src="/heartshape.png" alt="" />
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                Inspired by Playfulness
              </p>
            </div>
            <p className="font-medium mt-3 text-sm sm:text-base md:text-lg">
              We believe travel should be as fun and carefree as a bunny hopping
              through a meadow. That's why we infused our brand with playful
              elements that bring joy to every journey.
            </p>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-4">
              <img className="w-8 h-8" src="/compass.png" alt="" />
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                Guided by Purpose
              </p>
            </div>
            <p className="font-medium mt-3 text-sm sm:text-base md:text-lg">
              Our mission has always been to create travel experiences that are
              not just memorable but transformative. We're committed to
              responsible tourism that respects local cultures and environments
            </p>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-3.5">
              <img className="w-9 h-9" src="/groups.png" alt="" />
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                Growing Community
              </p>
            </div>
            <p className="font-medium mt-3 text-sm sm:text-base md:text-lg">
              Today, we're proud to have helped over 50,000 travelers discover
              new destinations with our signature bunny-style approach to
              adventure and exploration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
