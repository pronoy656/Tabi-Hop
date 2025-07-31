import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const TravelSelector = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const options = [
    "Take it easy, be in the moment.",
    "Take it easy, be in the moment.",
    "Take it easy, be in the moment.",
  ];

  const handleNextClick = () => {
    if (selectedOption === null) {
      setShowError(true);
    } else {
      setShowError(false);
      console.log("✅ Selected option:", options[selectedOption]);
      navigate("/signin/flow-selector"); // navigate to next page
    }
  };

  return (
    <div>
      <div
        className=" bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/travel-selector.jpg')" }}
      >
        <div className="flex justify-center px-4 items-center h-full">
          <div className="w-full max-w-4xl rounded-2xl flex flex-col justify-center items-center backdrop-blur-2xl bg-white/40 p-6 sm:p-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mt-12 sm:mt-20 mb-6 text-black">
              HOW DO YOU LIKE THE TRAVEL?
            </h2>

            <div className="space-y-5 w-full max-w-xl">
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
            </div>

            {showError && (
              <p className="text-red-600 text-base sm:text-lg mt-4 text-center">
                Please select a travel option before continuing.
              </p>
            )}

            <button
              onClick={handleNextClick}
              className="mt-7 mb-12 w-full max-w-xl h-14 bg-[#FFAA00] text-black font-semibold rounded-md hover:bg-yellow-500 transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelSelector;
