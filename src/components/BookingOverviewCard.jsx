import { FaMapMarkerAlt, FaStar, FaRegStar } from "react-icons/fa";

export const BookingOverviewCard = ({ title, location, image, rating = 3, description }) => {
  const totalStars = 5;

  return (
    <div className="border-2 border-gray-300 rounded-xl overflow-hidden shadow-sm w-full bg-white border-b-3 border-b-[#f8bfc1] border-r-3 border-r-[#f8bfc1] flex flex-col p-4">
      {/* Image */}
      <img
        src="/bookingCard.png"
        alt={title}
        className="w-full h-56 object-cover rounded-xl"
      />

      {/* Content */}
      <div className="mt-2">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <FaMapMarkerAlt className="mr-1 text-[#9b6a49]" />
          {location}
        </div>

        {/* Rating */}
        <div className="flex items-center mt-2 text-[#F4A259]">
          {Array.from({ length: totalStars }, (_, i) =>
            i < rating ? (
              <FaStar key={i} className="text-[16px] mr-[2px]" />
            ) : (
              <FaRegStar key={i} className="text-[16px] mr-[2px]" />
            )
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-gray-700 mt-2 leading-5">
          <span className="font-semibold">Note :</span> {description}
        </p>

        {/* Button */}
        <button className="mt-4 w-full bg-[#f8bfc1] hover:bg-[#f29ca0] text-gray-800 font-semibold text-sm py-2 rounded-full transition duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};
