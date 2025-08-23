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
import SignInHome from './SignInHome';
import TravelStories from '../resources/TravelStories';
import StoryShareForm from './StoryShareForm';
import AiVideoTutorial from './AiVideoTutorial';

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <div className="bg-[#F1F0FB]">
        <ToolIntroduce></ToolIntroduce>
        <AiPromptSection></AiPromptSection>
        <AiVideoTutorial></AiVideoTutorial>
        <VideoSection></VideoSection>
        <ResearchSection></ResearchSection>
        <PricingList></PricingList>
        {/* <TravelStories></TravelStories> */}
        <StoryShareForm></StoryShareForm>
        <SignInHome></SignInHome>
        <ReviewSection></ReviewSection>
        <FaqSection></FaqSection>
        {/* <TeamIntroduce></TeamIntroduce> */}
        <ContactSection></ContactSection>
      </div>
    </div>
  );
};

export default HomePage;
