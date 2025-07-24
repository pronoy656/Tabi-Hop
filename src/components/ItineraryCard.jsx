export const ItineraryCard = ({ day, date, title, description, image }) => {
  return (
    <div className="border-2 border-gray-300 rounded-xl overflow-hidden shadow-sm w-full bg-white border-b-3 border-b-[#76ADCA] border-r-3 border-r-[#76ADCA] flex flex-col">
      <div className="flex items-center gap-2 p-3 text-sm font-bold text-gray-800">
        <img src="/file.png" className="w-4 h-4" />
        <span>{`Day ${day} : ${date}`}</span>
      </div>

      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover px-3 rounded-2xl"
      />

      <div className="px-4 py-5 text-[#1F4F53] flex-grow">
        <h3 className="font-bold text-lg leading-tight my-2">{title}</h3>
        <p className="text-sm font-bold">{description}</p>
      </div>

      <div className="px-4 pb-4">
        <button className="w-full bg-[#1dbfcc] hover:bg-[#17aab4] font-semibold py-2 rounded-full transition duration-300">
          View
        </button>
      </div>
    </div>
  );
};
