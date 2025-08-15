import React from 'react';
import TravelStories from './TravelStories';
import ItineraryGuides from './ItineraryGuides';
import TravelBlog from './TravelBlog';

const Resources = () => {
  return (
    <div>
      <div className="bg-[#FFF6FA]">
        <TravelBlog></TravelBlog>
        <ItineraryGuides></ItineraryGuides>
        <TravelStories></TravelStories>
      </div>
    </div>
  );
};

export default Resources;
