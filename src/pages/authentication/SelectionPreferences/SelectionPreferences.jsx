import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const images = [
  { url: "/stress-selector.jpg", title: "Calm Mood" },
  { url: "/stress-selector.jpg", title: "Focus Booster" },
  { url: "/stress-selector.jpg", title: "Peaceful Nature" },
  { url: "/stress-selector.jpg", title: "Mindful Moment" },
  { url: "/stress-selector.jpg", title: "Creative Spark" },
  { url: "/stress-selector.jpg", title: "Relaxed Mind" },
  { url: "/stress-selector.jpg", title: "Energy Shift" },
  { url: "/stress-selector.jpg", title: "Inspired State" },
  { url: "/stress-selector.jpg", title: "Inspired State" },
  { url: "/stress-selector.jpg", title: "Inspired State" },
  { url: "/stress-selector.jpg", title: "Inspired State" },
];

const SelectionPreferences = () => {
  const navigate = useNavigate();
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const handleImageClick = (index) => {
    console.log("Selected Image ID:", index);

    setSelectedIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // deselect if already selected
          : [...prev, index] // otherwise add to selection
    );
  };

  const handleConfirm = () => {
    if (selectedIndexes.length === 0) {
      alert("Please select one destination");
      return;
    }
    console.log("Final Selected IDs:", selectedIndexes);
    navigate("/signin/date-location-selection");
  };

  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/preference-selection.jpg')" }}
      >
        <div className="flex items-center justify-center py-24 md:py-44">
          <div className=" max-w-7xl w-full rounded-2xl backdrop-blur-2xl bg-white/40 py-8 px-[60px]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Text Section */}
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-semibold leading-snug">
                  Congratulation! Now Select Your Preference
                </p>
                <p className="font-medium text-sm sm:text-base mt-2">
                  Select all that seem attractive to you. Based on that your
                  moodboard will be organized.
                </p>
              </div>

              {/* Buttons Section */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <button className="w-full sm:w-28 py-3 px-10 outline rounded-xl text-lg font-semibold">
                  Skip
                </button>
                <button
                  onClick={handleConfirm}
                  className="w-full sm:w-auto h-12 py-3 px-[40px] bg-[#FFAA00] rounded-xl text-lg font-semibold"
                >
                  Confirm Selection
                </button>
              </div>
            </div>

            {/* Desktop Grid Layout */}
            <div className="lg:grid lg:grid-cols-8 lg:grid-rows-12 lg:gap-4 lg:gap-y-12 lg:h-[1200px] block columns-1 sm:columns-2 gap-4 px-1 space-y-4 mt-9 mb-6">
              {images.map((item, index) => {
                const spanMap = [
                  "row-span-5",
                  "row-span-3",
                  "row-span-4",
                  "row-span-4",
                  "row-span-5",
                  "row-span-3",
                  "row-span-5",
                  "row-span-3",
                  "row-span-3",
                  "row-span-3",
                  "row-span-4",
                ];
                const isSelected = selectedIndexes.includes(index);

                return (
                  <div
                    key={index}
                    className={`lg:col-span-2 ${
                      spanMap[index] || ""
                    } cursor-pointer`}
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={item.url}
                      alt={`img-${index}`}
                      className={`w-full h-full object-cover rounded-xl ${
                        isSelected
                          ? "border-4 border-yellow-400 rounded-2xl"
                          : ""
                      }`}
                    />
                    <div className="text-left text-black mt-2 mx-1 sm:mx-2 md:mx-4">
                      <p className="text-lg font-semibold">{item.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionPreferences;
