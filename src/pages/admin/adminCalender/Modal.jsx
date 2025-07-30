import React, { useState } from "react";

const Modal = ({ onClose, date, onSave }) => {
  const [inputGroups, setInputGroups] = useState([
    { title: "", time: "", note: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...inputGroups];
    updated[index][field] = value;
    setInputGroups(updated);
  };

  const handleAddMore = () => {
    setInputGroups([...inputGroups, { title: "", time: "", note: "" }]);
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
        priority: "low",
      }));

    if (newEvents.length === 0) {
      alert("Please fill at least one task with title and time.");
      return;
    }

    onSave(newEvents);
  };

  if (!date) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[450px] max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">
          Task on {date.toDateString()}
        </h3>

        {inputGroups.map((group, index) => (
          <div key={index} className="mb-4 border p-3 rounded bg-gray-50">
            <div className="mb-2">
              <label className="block font-medium mb-1">Title</label>
              <input
                type="text"
                placeholder="Enter Title"
                value={group.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
                className="border w-full p-2 rounded"
              />
            </div>

            <div className="mb-2">
              <label className="block font-medium mb-1">Time</label>
              <input
                type="time"
                value={group.time}
                onChange={(e) => handleChange(index, "time", e.target.value)}
                className="border w-full p-2 rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Note</label>
              <textarea
                placeholder="Enter Note"
                value={group.note}
                onChange={(e) => handleChange(index, "note", e.target.value)}
                className="border w-full p-2 rounded"
              />
            </div>
          </div>
        ))}

        <button
          onClick={handleAddMore}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          + Add More
        </button>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
