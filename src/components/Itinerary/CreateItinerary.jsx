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

          <div></div>

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
      <section className="max-w-lg bg-white rounded-xl p-6 shadow-lg mt-10">
        {/* Header */}
        <h2 className="text-2xl text-center font-bold mb-1">Add Traveller</h2>
        <h4 className="text-base text-center text-gray-400 mb-6">
          Add new traveller here to your choice
        </h4>

        {/* Form */}
        <form className="bg-pink-100 rounded-xl p-6 space-y-4">
          {/* Name */}
          <div className="flex flex-col">
            <label className="font-medium text-black">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="mt-1 p-2 rounded-lg bg-white text-black outline-none"
            />
          </div>

          {/* Age */}
          <div className="flex flex-col">
            <label className="font-medium text-black">Age</label>
            <input
              type="number"
              placeholder="Enter age"
              className="mt-1 p-2 rounded-lg bg-white text-black outline-none"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className="font-medium text-black">Gender</label>
            <select className="mt-1 p-2 rounded-lg bg-white text-black outline-none">
              <option value="">Select gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Itinerary Dates */}
          <div className="flex flex-col">
            <label className="font-medium text-black">Itinerary Dates</label>
            <input
              type="date"
              multiple
              className="mt-1 p-2 rounded-lg bg-white text-black outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-cyan-700 text-white px-4 py-2 rounded-xl w-fit"
            >
              Add Traveller
            </button>
          </div>
        </form>
      </section>
<section>

          <div className="sm:flex justify-between items-center mb-4 space-y-4">
       <h2 className="font-semibold text-lg mb-4 text-[#1F4F53]">
          Travellers in Chorotica
        </h2>
        <button  className="bg-[#ee3fd1] text-white px-4 py-2 rounded-md text-sm ">
          + Add more
        </button>
      </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
   <div className="bg-white border border-gray-300 shadow-xl rounded-md p-4 flex flex-col justify-between h-full">
        <div className="flex justify-between">
          <span className="font-medium text-xl text-[#131927]">John</span>
           <span className="text-red-500 cursor-pointer flex items-center gap-2">
                <img
                  onClick={() => {
                    setEditIndex(i);
                    setIsEditModalOpen(true);
                  }}
                  src="/edit-pencil.png"
                  className="h-5"
                  alt="Edit"
                />
                <img
                  onClick={() => {
                    setDeleteIndex(i);
                    setIsDeleteModalOpen(true);
                  }}
                  src="/delete.png"
                  className="h-5"
                  alt="Delete"
                />
              </span>
        </div>
        <ul className="text-sm text-gray-600 mt-4">
          <li className="border-b border-gray-300 mb-2 py-1.5 cursor-pointer hover:text-[#1F4F53]">
            Age : 25
          </li>

          <li className="border-b border-gray-300 mb-2 py-1.5 cursor-pointer hover:text-[#1F4F53]">
           Gender : Male
          </li>

          <li className="border-b border-gray-300 mb-2 py-1.5 cursor-pointer hover:text-[#1F4F53]">
            Interest :  Pokckemon , anime , gaming
          </li>

          <li className="mb-2 py-1.5 cursor-pointer hover:text-[#1F4F53]">
           Times Present : Entire duration of Itinerary
          </li>

         
        </ul>
      </div>   <div className="bg-white border border-gray-300 shadow-xl rounded-md p-4 flex flex-col justify-between h-full">
        <div className="flex justify-between">
          <span className="font-medium text-xl text-[#131927]">John</span>
           <span className="text-red-500 cursor-pointer flex items-center gap-2">
                <img
                  onClick={() => {
                    setEditIndex(i);
                    setIsEditModalOpen(true);
                  }}
                  src="/edit-pencil.png"
                  className="h-5"
                  alt="Edit"
                />
                <img
                  onClick={() => {
                    setDeleteIndex(i);
                    setIsDeleteModalOpen(true);
                  }}
                  src="/delete.png"
                  className="h-5"
                  alt="Delete"
                />
              </span>
        </div>
        <ul className="text-sm text-gray-600 mt-4">
          <li className="border-b border-gray-300 mb-2 py-1.5 cursor-pointer hover:text-[#1F4F53]">
            Age : 25
          </li>

          <li className="border-b border-gray-300 mb-2 py-1.5 cursor-pointer hover:text-[#1F4F53]">
           Gender : Male
          </li>

          <li className="border-b border-gray-300 mb-2 py-1.5 cursor-pointer hover:text-[#1F4F53]">
            Interest :  Pokckemon , anime , gaming
          </li>

          <li className="mb-2 py-1.5 cursor-pointer hover:text-[#1F4F53]">
           Times Present : Entire duration of Itinerary
          </li>

         
        </ul>
      </div>
  </div>
</section>
   

      {/* step-02 */}
      <section>
        <AddDestination />
      </section>

      {/* Step 03 */}
      <section className="my-8">
        <FoodSection />
      </section>

      {/* Step 04 */}

      <section className="my-8">
        <BudgetSection />
      </section>

      {/* step-05 */}

      <section>
        <MessageSection />
      </section>

      <Link
        to={"/itinerary/details-destination"}
        className="flex justify-center mb-4"
      >
        <SeconderyButton text={"Generate"} shadow={"#2DAD9D"}></SeconderyButton>
      </Link>
    </div>
  );
};

export default CreateItinerary;
