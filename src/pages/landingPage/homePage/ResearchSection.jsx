import React from 'react';

const ResearchSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Heading */}
      <div className="max-w-2xl mx-auto text-center mb-8">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
          Save time on <span className="text-[#6E67D6]">researching</span>
        </p>
        <p className="text-lg sm:text-xl font-medium mt-2">
          Pin it on your vision board
        </p>
      </div>

      <div className="flex items-center justify-center relative">
        <img
          className="
        absolute 
        z-0
        rotate-6 
        translate-y-10
        w-[220px] h-[180px] bottom-38 right-22
         hidden lg:block
      "
          src="/bunny.png"
          alt="Bunny"
        />

        {/* Macbook */}
        <img
          className="
       relative z-10
        h-[280px] sm:h-[380px] md:h-[460px] lg:h-[526px]
        -mt-6 sm:-mt-10 md:-mt-12 lg:-mt-16
      "
          src="/macbook-image.png"
          alt="Macbook"
        />
      </div>
    </div>
  );
};

export default ResearchSection;
