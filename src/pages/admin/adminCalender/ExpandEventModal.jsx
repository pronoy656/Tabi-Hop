/* eslint-disable no-unused-vars */
import moment from "moment";
import React from "react";

const ExpandEventModal = ({ date, events, onClose, eventsForSelectedDay }) => {
  const fakeEvents = [
    {
      title: "Meeting with Client",
      time: "10:00 AM",
      note: "Discuss project deliverables",
      start: new Date(date),
      end: new Date(date),
    },
    {
      title: "Lunch with Team",
      time: "01:30 PM",
      note: "At the rooftop cafeteria",
      start: new Date(date),
      end: new Date(date),
    },
    {
      title: "Code Review Session",
      time: "03:00 PM",
      note: "Review pull requests",
      start: new Date(date),
      end: new Date(date),
    },
  ];

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/30 p-6">
        <div className="bg-white p-6 rounded-lg max-w-[773px] w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-center items-center mb-4">
            <div>
              <p className="text-4xl font-semibold">
                Events for {new Date(date).toLocaleDateString()}
              </p>
              <p className="font-medium">
                View and add your bookings, plans, and events in one place
              </p>
            </div>
          </div>
          {fakeEvents.length === 0 ? (
            <p className="bg-amber-300">No events for this day</p>
          ) : (
            fakeEvents.map((event, index) => (
              <div
                key={index}
                className="border border-gray-300 bg-[#D8FFE3] rounded-md p-4 mb-3"
              >
                <p className="font-bold text-lg">{event.title}</p>
                <p className="text-sm text-gray-600">{event.time}</p>
                <p className="text-sm text-gray-800">{event.note}</p>
              </div>
            ))
          )}
          <div className="flex items-center space-x-5 mt-4">
            <button
              onClick={onClose}
              className="font-semibold bg-[#6E67D5] text-white px-10 py-4 rounded-lg w-full"
            >
              Add More
            </button>
            <button
              onClick={onClose}
              className="font-semibold bg-[#6E67D5] text-white px-10 py-4 rounded-lg w-full"
            >
              Mark as Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandEventModal;
