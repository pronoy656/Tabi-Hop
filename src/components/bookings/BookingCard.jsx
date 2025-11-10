// BookingCard.jsx
import React from 'react';

const BookingCard = ({ acc, onEdit, onDelete }) => {
  return (
    <div className="relative xl:flex w-full border-2 border-r-4 border-b-4 border-[#6E67D5] rounded-xl overflow-hidden shadow-md p-4 gap-4 bg-white mt-4">
      <div className="flex flex-col space-y-2 xl:space-y-6 flex-1 mt-4 xl:mt-0">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-semibold">{acc.title}</h2>

          <div className="flex gap-2">
            <button
              onClick={() => onEdit(acc)}
              className="focus:outline-none hover:opacity-80"
              title="Edit"
            >
              <img src="/edit-pencil.png" className="h-5" alt="Edit" />
            </button>
            <button
              onClick={() => onDelete(acc.id)}
              className="focus:outline-none hover:opacity-80"
              title="Delete"
            >
              <img src="/delete.png" className="h-5" alt="Delete" />
            </button>
          </div>
        </div>

        <div className="space-x-4 flex text-sm text-[#212936]">
          <p className="flex justify-center items-center text-[16px] font-medium gap-x-1">
            <img src="/booking.png" alt="Event" className="w-4 h-4" />
            {acc.eventType}
          </p>
          <p className="flex justify-center items-center text-[16px] font-medium gap-x-1">
            <img src="/timer.png" alt="Time" className="w-4 h-4" />
            {acc.scheduledTime}
          </p>
          <p className="flex justify-center items-center text-[16px] font-medium gap-x-1">
            <img
              src="/location-outline.png"
              alt="Location"
              className="w-4 h-4"
            />
            {acc.location}
          </p>
        </div>

        <p className="font-medium text-[#4D5461] mt-1">Note : {acc.note}</p>
      </div>
    </div>
  );
};

export default BookingCard;
