import React from "react";

const CreateItinerary = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8 page">

        {/* step-1 */}
      <section>
        <h2 className="font-semibold text-lg mb-4 text-[#1F4F53]">
          Step - 01 : Basic Information
        </h2>

        <div className=" bg-[#FFFFFF] p-8 rounded-xl shadow-lg">
          <div className="flex justify-between items-center">
            <h1 className="text-xl text-[#1F4F53] font-semibold ">
              How many additional people travelling with you on this day?
            </h1>

            <button className="ml-auto text-xs md:text-lg  font-medium">
              Skip for now
            </button>
          </div>

          <div className="space-y-4 my-4">

            <div className="text-[#1F4F53] flex  gap-x-8 items-center">
              <label className="block font-semibold ">Kids</label>
              <input
                type="number"
                className="w-40 border bg-[#EDF8F9] border-[#EDF8F9]   rounded-md px-3 py-2 mt-1 ml-3"
                placeholder=""
              />
              <p className="text-xs text-[#6D717F]">
                Note : Write the whole number, no decimals
              </p>
            </div>
            <div className="text-[#1F4F53] flex  gap-x-8 items-center">
              <label className="block font-semibold ">Adults</label>
              <input
                type="number"
                className="w-40 border bg-[#EDF8F9] border-[#EDF8F9]   rounded-md px-3 py-2 mt-1"
                placeholder=""
              />
              <p className="text-xs text-[#6D717F]">
                Note : Write the whole number, no decimals
              </p>
            </div>
          </div>
        </div>
      </section>

    
      {/* Step 02 */}
      <section className="">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">
            Step - 02 : Add your location anchor points
          </h2>
          <button className="bg-[#E84C4F] text-white px-4 py-2 rounded-md text-sm">
            + Add destination
          </button>
        </div>
        <ul className="space-y-3">
          {[
            "Starting Location",
            "Destination - 01",
            "Destination - 02",
            "Destination - 03",
            "Destination - 04",
            "Destination - 05",
            "Destination - 06",
            "Ending Location",
          ].map((label, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <span className="text-[#E84C4F]">
                {label === "Starting Location" || label === "Ending Location"
                  ? "📍"
                  : "🔴"}
              </span>
              <span className="flex-1">
                {label === "Starting Location" &&
                  "New York Public Library – Stephen A. Schwarzman Building"}
                {label === "Destination - 01" &&
                  "Head southwest on 5th Ave toward E 41st St"}
                {label === "Destination - 02" && "Turn left onto E 36th St"}
                {label === "Destination - 03" && "Continue onto Union Square E"}
                {label === "Destination - 04" &&
                  "Continue straight to stay on Broadway"}
                {label === "Destination - 05" && "Turn right onto Thomas St"}
                {label === "Destination - 06" && "Turn right onto W Broadway"}
                {label === "Ending Location" &&
                  "59 5th Ave, New York, NY 10003, USA"}
              </span>
              {label !== "Starting Location" && label !== "Ending Location" && (
                <span className="text-[#E84C4F] cursor-pointer">✏️</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Step 03 */}
      <section className="">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">
            Step - 03 : Select how you want to spend your day
          </h2>
          <button className="bg-[#E84C4F] text-white px-4 py-2 rounded-md text-sm">
            + Add more
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="bg-white border border-[#ACE0E5] rounded-md p-4 space-y-2"
              >
                <div className="flex justify-between">
                  <span className="font-medium">Food items</span>
                  <span className="text-red-500 cursor-pointer">🗑️</span>
                </div>
                <ul className="text-sm text-gray-600">
                  <li>Classy Beef Hamburger</li>
                  <li>Classy Beef Hamburger</li>
                  <li>Classy Beef Hamburger</li>
                </ul>
                <button className="text-[#AD57E6] font-medium text-sm">
                  + Add new item
                </button>
              </div>
            ))}
        </div>
      </section>

      {/* Step 04 */}
      <section className="">
        <h2 className="font-semibold text-lg mb-4">
          Step - 04 : Please write your preferred budget allocation
        </h2>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center gap-4 mb-4"
            >
              <label className="w-full md:w-40 font-medium">Lunch Budget</label>
              <input type="range" className="flex-grow" />
              <span className="w-full md:w-40 text-right text-sm text-[#00A3C4]">
                Estimate: $12 - $32
              </span>
            </div>
          ))}
      </section>
    </div>
  );
};

export default CreateItinerary;
