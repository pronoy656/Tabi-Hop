/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const ResearchSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-9 lg:py-7">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <p className="text-3xl sm:text-4xl md:text-7xl font-bold leading-snug">
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
          alt="Running animation"
        />

        {/* Macbook */}
        <img
          className="
       relative z-10
        h-[270px] sm:h-[380px] md:h-[460px] lg:h-[526px]
        -mt-4 sm:-mt-10 md:-mt-12 lg:-mt-16
      "
          src="/macbook-image.png"
          alt="Macbook"
        />
      </div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl h-62 sm:h-80 md:h-66 rounded-lg overflow-hidden">
          <motion.img
            src="https://i.ibb.co.com/m5rbqv38/animated-image-removebg-preview.png"
            alt="bunny"
            className="absolute bottom-5 w-36 sm:w-44 md:w-56" // responsive width
            initial={{ x: '0%', y: 0 }} // start at visible position
            animate={{
              x: [0, 600], // Bunny moves right
              y: [0, -60], // base for sine motion
            }}
            transition={{
              x: { duration: 12, ease: 'linear', repeat: Infinity },
              y: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 0.8, // speed of bounce
                ease: 'easeInOut',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;
