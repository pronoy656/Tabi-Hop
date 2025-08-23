import React from 'react';

const TravelHeroSection = () => {
  return (
    <div>
      <div className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/travel-hero.jpg')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Travel Resources &amp; Guides
          </h1>
          <p className="text-2xl md:text-xl lg:text-2xl font-semibold text-white leading-relaxed">
            Discover expert tips, itineraries, and travel stories to plan your
            perfect journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelHeroSection;
