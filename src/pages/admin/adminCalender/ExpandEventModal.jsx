/* eslint-disable no-unused-vars */
import moment from "moment";
import React, { useState } from "react";

import { RxCross2 } from "react-icons/rx";

const ExpandEventModal = ({
  date,
  events,
  onClose,
  eventsForSelectedDay,
  onAddEvents,
}) => {
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

  const [inputGroups, setInputGroups] = useState([]);

  // Add more input group
  const handleAddMore = () => {
    setInputGroups([...inputGroups, { title: "", time: "", note: "" }]);
  };

  // Input field update handler
  const handleChange = (index, field, value) => {
    const updated = [...inputGroups];
    updated[index][field] = value;
    setInputGroups(updated);
  };

  // Submit the events to Calendar
  const handleSubmit = () => {
    const newEvents = inputGroups.map((event) => ({
      title: event.title,
      time: event.time,
      note: event.note,
      start: new Date(date),
      end: new Date(date),
    }));

    onAddEvents(newEvents); // Pass data to AdminCalendar
    onClose(); // Close the modal
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/30 p-6">
        <div className="bg-white p-6 rounded-lg max-w-[773px] w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-4xl font-semibold">
                Events for {new Date(date).toLocaleDateString()}
              </p>
              <p className="font-medium">
                View and add your bookings, plans, and events in one place
              </p>
            </div>
            <button onClick={onClose}>
              <RxCross2 className="border-2 border-[#6E67D5] w-12 h-12 rounded-full text-lg text-[#6E67D5] p-1.5" />
            </button>
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
          {/* Input Fields */}
          {inputGroups.length > 0 &&
            inputGroups.map((group, index) => (
              <div key={index} className="mb-4 p-3 rounded bg-[#ECF8EF]">
                <div className="mb-2">
                  <label className="block font-medium mb-1">Title</label>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    value={group.title}
                    onChange={(e) =>
                      handleChange(index, "title", e.target.value)
                    }
                    className="bg-white w-full p-2 rounded"
                  />
                </div>

                <div className="mb-2">
                  <label className="block font-medium mb-1">Time</label>
                  <input
                    type="time"
                    value={group.time}
                    onChange={(e) =>
                      handleChange(index, "time", e.target.value)
                    }
                    className="bg-white w-full p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Note</label>
                  <textarea
                    placeholder="Enter Note"
                    value={group.note}
                    onChange={(e) =>
                      handleChange(index, "note", e.target.value)
                    }
                    className="bg-white w-full p-2 rounded"
                  />
                </div>
              </div>
            ))}
          <div className="flex items-center space-x-5 mt-4">
            <button
              onClick={handleAddMore}
              className="font-semibold bg-[#6E67D5] text-white px-10 py-4 rounded-lg w-full"
            >
              Add More
            </button>
            <button
              onClick={handleSubmit}
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
