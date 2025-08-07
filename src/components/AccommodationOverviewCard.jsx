import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaStar, FaRegStar } from "react-icons/fa";
import PrimaryButton from "./shared/PrimaryButton";
import { Link } from "react-router-dom";

const AccomodationOverviewCard = () => {
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const bookingData = [
    {
      title: "Mercure Tokyo Haneda Airport",
      location: "Ota Ward, Tokyo",
      image: "https://i.ibb.co/Pvs6yxF6/Frame.png",
      rating: 3,
      description:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.",
    },
    {
      title: "Hotel Gracery Shinjuku",
      location: "Shinjuku City, Tokyo",
      image: "https://i.ibb.co/Pvs6yxF6/Frame.png",
      rating: 4,
      description:
        "Known for the Godzilla-themed decor and its location near Shinjuku Station.",
    },
    {
      title: "Tokyo Bay Shiomi Prince Hotel",
      location: "Koto City, Tokyo",
      image: "https://i.ibb.co/Pvs6yxF6/Frame.png",
      rating: 5,
      description:
        "A luxury hotel with bay views and excellent hospitality for travelers.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 740);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedItems = isSmallScreen
    ? showAll
      ? bookingData
      : bookingData.slice(0, 1)
    : bookingData;

  return (
    <section className="">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems?.map((item, idx) => (
          <div
            key={idx}
            className="border-2 border-l border-t rounded-xl overflow-hidden shadow-sm w-full bg-white border-b-3 border-[#f8bfc1] border-r-3  flex flex-col p-4 transition hover:shadow-lg hover:scale-[1.01] duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover rounded-xl"
            />

            <div className="mt-3 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>

              <div className="flex items-center text-gray-600 text-sm mt-1">
                <FaMapMarkerAlt className="mr-1 text-[#9b6a49]" />
                {item.location}
              </div>

              <div className="flex items-center mt-2 text-[#F4A259]">
                {Array.from({ length: 5 }, (_, i) =>
                  i < item.rating ? (
                    <FaStar key={i} className="text-[16px] mr-[2px]" />
                  ) : (
                    <FaRegStar key={i} className="text-[16px] mr-[2px]" />
                  )
                )}
              </div>

              <p className="text-sm text-[#131927] mt-2 leading-5 flex-grow">
                <span className="font-semibold">Note:</span> {item.description}
              </p>

              <Link
                to={`/accommodations/details/${idx}`}
                className="mt-4 w-full bg-[#f8bfc1] hover:bg-[#f29ca0] text-gray-800 font-semibold text-sm py-2  flex justify-center rounded-full transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      {isSmallScreen && bookingData.length > 1 && (
        <div className="mt-4 text-center flex justify-center gap-x-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-white border border-[#f29ca0] text-[#f29ca0] rounded-lg font-semibold transition-colors hover:bg-[#f29ca0] hover:text-white"
          >
            {showAll ? "See Less" : "See All"}
          </button>
          <Link to="/accommodations">
            <PrimaryButton
              round
              bgColor="#f29ca0"
              text="Add more"
              textColor="white"
            />
          </Link>
        </div>
      )}
    </section>
  );
};

export default AccomodationOverviewCard;
