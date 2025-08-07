import { FaMapMarkerAlt, FaStar, FaRegStar, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/shared/PrimaryButton";

const AccommodationDetailPage = () => {
  const data = {
    id: 1,
    image: "/accommodation.png",
    title: "Mercure Tokyo Haneda Airport",
    location: "Ota Ward, Tokyo",
    stars: 3,
    checkIn: "20th May, 2025 – 10:23 AM",
    checkOut: "25th May, 2025 – 10:23 AM",
    contact: "+652 552 5855",
    note: `Lorem Ipsum is that it has a more-or-less normal distribution of
letters, as opposed to using 'Content here, content here', making it
look like readable English.`,
  };

  return (
    <div className="page mx-auto px-4 md:px-8 py-10 rounded-xl shadow-md overflow-hidden">
      <div className=" ">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-[260px] md:h-[400px] rounded-lg object-cover"
        />

        <div className="p-6 md:p-8 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-[#2c3e57]">{data.title}</h1>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <FaMapMarkerAlt className="mr-2 text-[#9b6a49]" />
              {data.location}
            </div>
          </div>

          <div className="flex items-center text-[#F4A259] text-lg">
            {Array.from({ length: 5 }, (_, i) =>
              i < data.stars ? (
                <FaStar key={i} className="text-[18px] mr-[2px]" />
              ) : (
                <FaRegStar key={i} className="text-[18px] mr-[2px]" />
              )
            )}
            <span className="ml-2 text-sm text-gray-600">{data.stars} / 5</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-800">
            <div>
              <span className="font-semibold block mb-1 text-[#2c3e57]">
                Check-In
              </span>
              <p>{data.checkIn}</p>
            </div>
            <div>
              <span className="font-semibold block mb-1 text-[#2c3e57]">
                Check-Out
              </span>
              <p>{data.checkOut}</p>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-800">
            <FaPhoneAlt className="mr-2 text-[#2c3e57]" />
            <span className="font-semibold mr-1">Contact:</span> {data.contact}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#2c3e57] mb-2">Note</h2>
            <p className="text-gray-700 leading-7 whitespace-pre-line">
              {data.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationDetailPage;
