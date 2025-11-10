import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const InputModal = ({ onClose, date, onSave }) => {
  const [inputGroups, setInputGroups] = useState([
    { title: "", time: "", note: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...inputGroups];
    updated[index][field] = value;
    setInputGroups(updated);
  };

  const handleAddMore = () => {
    setInputGroups([
      ...inputGroups,
      { title: "", time: "", note: "", color: "" },
    ]);
  };

  const handleSubmit = () => {
    const newEvents = inputGroups
      .filter((group) => group.title.trim() && group.time.trim())
      .map((group) => ({
        title: group.title,
        time: group.time,
        note: group.note,
        start: date,
        end: date,
        color: group.color,
      }));

    if (newEvents.length === 0) {
      alert("Please fill at least one task with title and time.");
      return;
    }

    onSave(newEvents);
  };

  if (!date) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/30 p-6">
      <div className="bg-white p-6 rounded-lg max-w-[773px] w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold">Task on {date.toDateString()}</h3>
            <h3>View anf add your bookings, plans and events in one place</h3>
          </div>
          <button onClick={onClose}>
            <ImCross className="text-2xl text-red-500 font-extrabold" />
          </button>
        </div>
        {inputGroups.map((group, index) => (
          <div key={index} className="mb-4 p-3 rounded bg-[#F1F0FB]">
            <div className="mb-2">
              <label className="block font-medium mb-1">Title</label>
              <input
                type="text"
                placeholder="Enter Title"
                value={group.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
                className="bg-white w-full p-2 rounded"
              />
            </div>

            <div className="mb-2">
              <label className="block font-medium mb-1">Time</label>
              <input
                type="time"
                value={group.time}
                onChange={(e) => handleChange(index, "time", e.target.value)}
                className="bg-white w-full p-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Note</label>
              <textarea
                placeholder="Enter Note"
                value={group.note}
                onChange={(e) => handleChange(index, "note", e.target.value)}
                className="bg-white w-full p-2 rounded"
              />
            </div>
            <div className="mb-2">
              <label className="block font-medium mb-1">Select Color</label>
              <input
                type="color"
                value={group.color}
                onChange={(e) => handleChange(index, "color", e.target.value)}
                className="w-12 h-10 border-none cursor-pointer"
              />
            </div>
          </div>
        ))}

        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-2.5">
          <button
            onClick={handleAddMore}
            className="w-full sm:max-w-[330px] px-6 py-3 sm:px-[30px] sm:py-4 bg-[#6E67D5] rounded-2xl text-white text-sm sm:text-base"
          >
            + Add More
          </button>
          <button
            onClick={handleSubmit}
            className="w-full sm:max-w-[330px] px-6 py-3 sm:px-[30px] sm:py-4 bg-[#6E67D5] rounded-2xl text-white text-sm sm:text-base"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputModal;
