import React from "react";

const ExpandEventModal = ({ date, events, eventsForSelectedDay, onClose }) => {
  console.log({ eventsForSelectedDay });
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/30 p-6">
        <div className="bg-white p-6 rounded-lg max-w-[773px] w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-center">
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Events for {new Date(date).toDateString()}
              </h2>
              <p>View anf add your bookings, plans and events in one place</p>
            </div>
          </div>
          {events.length === 0 ? (
            <p className="bg-amber-300">No events</p>
          ) : (
            events.map((event, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-md p-4 mb-3"
              >
                <p className="font-bold text-lg">{event.title}</p>
                <p className="text-sm text-gray-600">{event.time}</p>
                <p className="text-sm text-gray-800">{event.note}</p>
              </div>
            ))
          )}
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ExpandEventModal;
