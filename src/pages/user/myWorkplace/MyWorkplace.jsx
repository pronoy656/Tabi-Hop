import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import WorkplaceTab from "../../../components/Workplace/WorkplaceTab";
import ReminderSlider from "./ReminderSlider";

const MyWorkplace = () => {
  return (
    <section className="page">
    
<div className="2xl:max-w-[1500px] xl:max-w-[1000px] lg:max-w-[800px]">
        {/* Reminder Slider */}
        <ReminderSlider />
     </div>

      <div className="flex flex-col-reverse md:flex-row justify-between mx-auto mt-10">
        <div className="flex flex-col w-full">
          <WorkplaceTab />
        </div>
        <div className="mb-6 sm:mb-0 sm:mt-2 mt-0">
              <Link to={'/itinerary/create-itinerary'} className="" >
          <PrimaryButton bgColor={'#4ABBC6'} text={'Create Itinerary'} /></Link>
        </div>
      </div>
    </section>
  );
};

export default MyWorkplace;
