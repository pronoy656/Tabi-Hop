import { Link } from "react-router-dom";
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
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('/dislike-selector.jpg')" }}
      >
        <div className="flex items-center justify-center py-40">
          <div className=" max-w-7xl w-full rounded-2xl backdrop-blur-2xl bg-white/40 py-8 px-[60px]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[32px] font-semibold">
                  Congratulation! Now Select Your Preference
                </p>
                <p className="font-medium">
                  Select all that seem attractive to you. Based on that your the
                  moodboard will be organized{" "}
                </p>
              </div>
              <div className="flex space-x-4">
                <button className="w-28 py-3 px-10 outline rounded-xl text-lg font-semibold">
                  Skip
                </button>
                <button className="w-65 h-12 py-3 px-[50px] bg-[#FFAA00] rounded-xl text-lg font-semibold">
                  Confirm Selection
                </button>
              </div>
            </div>
            {/* Desktop Grid Layout */}
            <div className="hidden lg:grid grid-cols-8 grid-rows-12 gap-4 h-[1200px] gap-y-12 mt-10">
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
                return (
                  <div key={index} className={`col-span-2 ${spanMap[index]}`}>
                    <img
                      src={item.url}
                      alt={`img-${index}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <p className="text-center cursor-pointer text-black flex justify-between mt-2 mx-8">
                      <p className="text-lg">{item.title} </p>
                      <Link to={`/moodboard/details/${index}`}>
                        <img src="/dots.png" className="h-6" alt="" />
                      </Link>
                    </p>
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
