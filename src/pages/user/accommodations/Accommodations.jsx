import PrimaryButton from "../../../components/shared/PrimaryButton"
import SectionHeader from "../../../components/shared/SectionHeader"

import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const Accommodations = () => {
  return (
  <div className="page">
<div className="flex justify-between items-center">

 <SectionHeader
        title="To-do List"
        subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
      />
      <PrimaryButton text={"Add more"} bgColor={'#e65ceb'} />
</div>

<div className="flex justify-start w-full max-w-5xl border-2 border-r-4 border-b-4 border-[#FCB0BA] rounded-xl overflow-hidden shadow-md  p-4 gap-4 bg-white">
      <div>
        <img
          className="w-60 h-56 object-cover rounded-xl"
          src="/accammondation.jpg"
          alt="Accommodation"
        />
      </div>
 
     
      <div className="flex flex-col justify-between flex-1">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">
                Mercure Tokyo Haneda Airport
              </h2>
              <div className="flex gap-1">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <CiStar className="text-gray-900" />
                <CiStar className="text-gray-900" />
              </div>
            </div>
            <h4 className="text-xl font-semibold mt-1">Ota Ward, Tokyo</h4>
          </div>
 
          <a
            href="#"
            className="text-[#871C1C] underline text-sm font-medium"
          >
            Edit Details
          </a>
        </div>
 
        <p className="text-sm font-medium text-[#4D5461] mt-1">
          Note : Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
 
        <div className=" space-y-1 text-sm font-semibold">
          <p>
            Check-In : 20th May, 2025 – 10:23 AM
          </p>
          <p>
            Check-Out : 25th May, 2025 – 10:23 AM
          </p>
          <p>
            Contact : +652 552 5855
          </p>
        </div>
      </div>
    </div>
<div className="flex justify-start w-full max-w-5xl border-2 border-r-4 border-b-4 border-[#FCB0BA] rounded-xl overflow-hidden shadow-md  p-4 gap-4 bg-white">
      <div>
        <img
          className="w-60 h-56 object-cover rounded-xl"
          src="/accammondation.jpg"
          alt="Accommodation"
        />
      </div>
 
     
      <div className="flex flex-col justify-between flex-1">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">
                Mercure Tokyo Haneda Airport
              </h2>
              <div className="flex gap-1">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <CiStar className="text-gray-900" />
                <CiStar className="text-gray-900" />
              </div>
            </div>
            <h4 className="text-xl font-semibold mt-1">Ota Ward, Tokyo</h4>
          </div>
 
          <a
            href="#"
            className="text-[#871C1C] underline text-sm font-medium"
          >
            Edit Details
          </a>
        </div>
 
        <p className="text-sm font-medium text-[#4D5461] mt-1">
          Note : Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
 
        <div className=" space-y-1 text-sm font-semibold">
          <p>
            Check-In : 20th May, 2025 – 10:23 AM
          </p>
          <p>
            Check-Out : 25th May, 2025 – 10:23 AM
          </p>
          <p>
            Contact : +652 552 5855
          </p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Accommodations

 

