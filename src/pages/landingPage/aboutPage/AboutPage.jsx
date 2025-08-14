import React from 'react';
import AboutHeroSection from './AboutHeroSection';
import VisionSection from './VisionSection';
import AboutYoutubePlaylist from './AboutYoutubePlaylist';
import TeamJoining from './TeamJoining';
import TeamIntroduce from './TeamIntroduce';
import GuideUs from './GuideUs';

const AboutPage = () => {
  return (
    <div className="">
      <AboutHeroSection></AboutHeroSection>
      <div className="bg-[#FFF6FA] pb-36">
        <VisionSection></VisionSection>
        <AboutYoutubePlaylist></AboutYoutubePlaylist>
        <GuideUs></GuideUs>
        <TeamIntroduce></TeamIntroduce>
        <TeamJoining></TeamJoining>
      </div>
    </div>
  );
};

export default AboutPage;
