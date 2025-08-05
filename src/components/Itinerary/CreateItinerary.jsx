
import { Link } from "react-router-dom";
import SeconderyButton from "../shared/SeconderyButton";
import AddDestination from "./AddDestination";
import FoodSection from "./FoodSection";
import BudgetSection from "./BudgetSection";
import MessageSection from "./MessageSection";

const CreateItinerary = () => {
  const locations = [
    {
      label: "Starting Location",
      title: "New York Public Library – Stephen A. Schwarzman Building",
      address: "476 5th Ave, New York, NY 10018, USA",
    },
    {
      label: "Destination - 01",
      title: "Head southwest on 5th Ave toward E 41st St",
      address: "476 5th Ave, New York, NY 10018, USA",
    },
    {
      label: "Destination - 02",
      title: "Turn left onto E 36th St",
      address: "476 5th Ave, New York, NY 10018, USA",
    },
    {
      label: "Destination - 03",
      title: "Turn left onto E 36th St",
      address: "476 5th Ave, New York, NY 10018, USA",
    },
    {
      label: "Destination - 04",
      title: "Continue onto Union Square E",
      address: "476 5th Ave, New York, NY 10018, USA",
    },
    {
      label: "Destination - 05",
      title: "Continue straight to stay on Broadway",
      address: "476 5th Ave, New York, NY 10018, USA",
    },
    {
      label: "Destination - 06",
      title: "Turn right onto Thomas St",
      address: "476 5th Ave, New York, NY 10018, USA",
    },
    {
      label: "Ending Location",
      title: "Turn right onto Thomas St",
      address: "476 5th Ave, New York, NY 10018, USA",
    },
  ];


  return (
    <div className=" mx-auto px-4 py-6 space-y-8 page">
      {/* step-1 */}
      <section>
        <h2 className="font-semibold text-xl mb-4 text-[#1F4F53]">
          Step - 01 : Basic Information
        </h2>

        <div className=" bg-[#FFFFFF] p-8 rounded-xl shadow-lg">
          <div className="md:flex justify-between items-center space-y-2">
            <h1 className="text-xl text-[#1F4F53] font-semibold ">
              How many additional people travelling with you on this day?
            </h1>

            <button className="ml-auto text-lg  font-medium">
              Skip for now
            </button>
          </div>

          <div>
            
          </div>

          <div className="space-y-4 my-4">
            <div className="text-[#1F4F53] flex flex-col sm:flex-row gap-2 sm:gap-x-8 items-start sm:items-center">
  <label className="block font-semibold">Kids</label>
  
  <input
    type="number"
    className="w-full sm:w-40 border bg-[#EDF8F9] border-[#EDF8F9] rounded-md px-3 py-2 mt-1 xs:mt-0 xs:ml-3 sm:ml-[14px]"
    placeholder=""
  />

  <p className=" text-[#6D717F] xs:ml-3 mt-1 xs:mt-0">
    Note: Write the whole number, no decimals
  </p>
</div>

           <div className="text-[#1F4F53] flex flex-col sm:flex-row gap-2 sm:gap-x-8 items-start sm:items-center">
  <label className="block font-semibold">Adults</label>

  <input
    type="number"
    className="w-full sm:w-40 border bg-[#EDF8F9] border-[#EDF8F9] rounded-md px-3 py-2 mt-1 sm:mt-0"
    placeholder=""
  />

  <p className=" text-[#6D717F] sm:ml-3 mt-1 sm:mt-0">
    Note: Write the whole number, no decimals
  </p>
</div>

          </div>
        </div>
      </section>

    {/* step-02 */}
 <section>
    <AddDestination/>
 </section>

      {/* Step 03 */}
      <section className="my-8">
      <FoodSection/>
      </section>

      {/* Step 04 */}
      
      <section className="my-8">
    
       <BudgetSection/>
      </section>

      {/* step-05 */}

      <section>
     <MessageSection/>
      </section>

      <Link to={'/itinerary/details-destination'} className="flex justify-center mb-4"><SeconderyButton text={'Generate'} shadow={'#2DAD9D'}></SeconderyButton></Link>
    </div>
  );
};

export default CreateItinerary;
