// AccommondationCard.jsx (Updated)
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { useState } from "react";

const AccommondationCard = ({ acc, onEdit, onDelete }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      key={acc.id}
      className="xl:flex w-full border-2 border-r-4 border-b-4 border-[#FCB0BA] rounded-xl overflow-hidden shadow-md p-4 gap-4 bg-white mt-4 relative"
    >
      <div className="w-full xl:w-60 rounded-xl">
        <img
          className="w-full h-46 object-cover rounded-xl"
          src={acc.image}
          alt={acc.title}
        />
      </div>

      <div className="flex flex-col space-y-2 xl:space-y-3 flex-1 mt-4 xl:mt-0">
        <div className="md:flex justify-between items-start relative">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">{acc.title}</h2>
              <div className="flex gap-1">
                {Array.from({ length: acc.stars }, (_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
                {Array.from({ length: 5 - acc.stars }, (_, i) => (
                  <CiStar key={i} className="text-gray-900" />
                ))}
              </div>
            </div>
            <h4 className="text-xl font-medium mt-1">{acc.location}</h4>
          </div>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-[#871C1C] underline text-sm mt-4 md:mt-0 font-medium"
            >
              <img src="/three-dots.png" className="h-5 w-5" alt="Options" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-md z-10">
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    onEdit(acc);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    onDelete(acc.id);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>

        <p className=" font-medium text-[#4D5461] mt-1">{`Note : ${acc.note}`}</p>

        <div className="space-y-1 text-sm font-semibold">
          <p>Check-In  : {acc.checkIn}</p>
          <p>Check-Out : {acc.checkOut}</p>
          <p>Contact : {acc.contact}</p>
        </div>
      </div>
    </div>
  );
};

export default AccommondationCard;
