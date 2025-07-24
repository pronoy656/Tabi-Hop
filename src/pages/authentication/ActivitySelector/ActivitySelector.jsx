import { useState } from "react";

const ActivitySelector = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    "Sightseeing",
    "Outdoor adventure",
    "Relaxation",
    "Relaxation",
  ];

  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('/activity-selector.jpg')" }}
      >
        <div className=" h-[100vh] flex justify-center items-center ">
          <div className="w-full max-w-full md:max-w-4xl rounded-2xl backdrop-blur-2xl bg-white/40">
            <div className="space-y-3 w-full px-4 md:px-40 mt-6">
              <h2 className="text-[22px] md:text-2xl lg:text-3xl font-semibold text-center mt-16 mb-6 text-black uppercase px-4">
                What types of activities do you enjoy most?
              </h2>
              {options.map((option, index) => (
                <label
                  key={index}
                  className="flex items-center justify-between text-base font-medium px-4 py-3 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-100"
                >
                  <span className="text-[#131927] text-base font-medium">
                    {option}
                  </span>
                  <input
                    type="radio"
                    name="travelOption"
                    checked={selectedOption === index}
                    onChange={() => setSelectedOption(index)}
                    className="form-radio h-5 w-5 text-yellow-500"
                  />
                </label>
              ))}
              <button
                className="mt-7 mb-16   bg-[#FFAA00] text-black font-semibold rounded-md hover:bg-yellow-500 transition w-full py-4"
                disabled={selectedOption === null}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitySelector;
