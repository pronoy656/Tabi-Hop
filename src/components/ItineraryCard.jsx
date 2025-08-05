import { Link } from "react-router-dom";

export const ItineraryCard = ({ day, date, title, description, image }) => {
  return (
    <div className="border-2  rounded-xl overflow-hidden shadow-sm w-full min-w-xs bg-white border-t border-l border-b-3 border-r-3 border-[#76ADCA] flex flex-col">
      <div className="flex items-center gap-2 p-3 text-sm font-bold text-gray-800">
        <img src="/file.png" className="w-4 h-4" />
        <span>{`Day ${day} : ${date}`}</span>
      </div>

      <img
        src={image}
        alt={title}
        className="w-full  h-60 object-cover px-3 rounded-2xl"
      />

      <div className="px-4 py-5 text-[#1F4F53] flex-grow">
        <h3 className="font-bold text-lg leading-tight my-2">{title}</h3>
        <p className="text-sm font-bold">{description}</p>
      </div>

      <div className="px-4 pb-4">
        <Link to={`/my-workplace/details/${day}`}>
        <button className="w-full text-black font-semibold bg-[#1dbfcc] hover:bg-[#17aab4]  py-2 rounded-full transition duration-300">
          View
        </button></Link>
      </div>
    </div>
  );
};
