import React from 'react';
import HeroSection from './HeroSection';
import ToolIntroduce from './ToolIntroduce';
import AiPromptSection from './AiPromptSection';
import VideoSection from './VideoSection';
import ResearchSection from './ResearchSection';
import PricingList from './PricingList';
import ReviewSection from './ReviewSection';
import FaqSection from './FaqSection';
import TeamIntroduce from './TeamIntroduce';
import ContactSection from './ContactSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <div className="bg-[#FFF6FA]">
        <ToolIntroduce></ToolIntroduce>
        <AiPromptSection></AiPromptSection>
        <VideoSection></VideoSection>
        <ResearchSection></ResearchSection>
        <PricingList></PricingList>
        <ReviewSection></ReviewSection>
        <FaqSection></FaqSection>
        <TeamIntroduce></TeamIntroduce>
        <ContactSection></ContactSection>
      </div>
    </div>
  );
};

export default HomePage;
