import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StressSelector = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const options = [
    "Too many options",
    "Taking time to research",
    "Budgeting",
    "Please describe",
  ];

  // Function to handle the next button click
  const handleNextClick = () => {
    if (selectedOption === null) {
      setShowError(true);
    } else {
      setShowError(false);
      console.log("✅ Selected option:", options[selectedOption]);
      navigate("/signin/selection-preferences"); // navigate to next page
    }
  };

  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('/stress-selector.jpg')" }}
      >
        <div className=" h-[100vh] flex justify-center items-center ">
          <div className="w-full max-w-full md:max-w-4xl rounded-2xl backdrop-blur-2xl bg-white/40">
            <div className="space-y-3 w-full px-4 md:px-40 mt-6">
              <h2 className="text-[22px] md:text-2xl lg:text-3xl font-semibold text-center mt-16 mb-8 text-black uppercase px-4">
                What’s the most stressful thing about travel planning?
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

              {/* 🚫 Conditional Error Message */}
              {showError && (
                <p className="text-red-600 text-lg mt-3.5">
                  Please select a travel option before continuing.
                </p>
              )}
              <button
                onClick={handleNextClick}
                className="mt-7 mb-16   bg-[#FFAA00] text-black font-semibold rounded-md hover:bg-yellow-500 transition w-full py-4"
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

export default StressSelector;
