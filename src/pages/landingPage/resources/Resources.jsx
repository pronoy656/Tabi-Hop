import React from 'react';
import TravelStories from './TravelStories';
import ItineraryGuides from './ItineraryGuides';
import TravelBlog from './TravelBlog';
import HelpCenter from './HelpCenter';
import TravelHeroSection from './TravelHeroSection';

const Resources = () => {
  return (
    <div>
      <TravelHeroSection></TravelHeroSection>
      <div className="bg-[#FFF6FA]">
        <TravelBlog></TravelBlog>
        <ItineraryGuides></ItineraryGuides>
        <TravelStories></TravelStories>
        <HelpCenter></HelpCenter>
      </div>
    </div>
  );
};

export default Resources;
