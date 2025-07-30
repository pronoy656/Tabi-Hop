// import React, { useState } from "react";

// const Modal = ({ onClose, date, onSave }) => {
//   const [title, setTitle] = useState("");
//   const [assignedTo, setAssignedTo] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = () => {
//     if (!title) return alert("Title is required");

//     const newEvent = {
//       title: `${assignedTo} - ${title}`,
//       start: date,
//       end: date,
//       description: description,
//       priority: "low", // default, or you can add a dropdown
//     };

//     onSave(newEvent);
//   };

//   if (!date) return null;

//   return (
//     <div>
//       <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//         <div className="bg-white p-6 rounded-lg w-[400px]">
//           <h3 className="text-xl font-bold mb-4">
//             Task on {date.toDateString()}
//           </h3>
//           <input
//             type="text"
//             placeholder="Task Name"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="border w-full mb-2 p-2 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Assigned To"
//             value={assignedTo}
//             onChange={(e) => setAssignedTo(e.target.value)}
//             className="border w-full mb-2 p-2 rounded"
//           />
//           <textarea
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="border w-full mb-2 p-2 rounded"
//           />
//           <div className="flex justify-end">
//             <button
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-200 rounded mr-2"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSubmit}
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React, { useState } from "react";

const Modal = ({ onClose, date, onSave }) => {
  const [inputGroups, setInputGroups] = useState([
    { title: "", assignedTo: "", description: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...inputGroups];
    updated[index][field] = value;
    setInputGroups(updated);
  };

  const handleAddMore = () => {
    setInputGroups([
      ...inputGroups,
      { title: "", assignedTo: "", description: "" },
    ]);
  };

  const handleSubmit = () => {
    const newEvents = inputGroups
      .filter((group) => group.title.trim() && group.assignedTo.trim())
      .map((group) => ({
        title: `${group.assignedTo} - ${group.title}`,
        start: date,
        end: date,
        description: group.description,
        priority: "low",
      }));

    if (newEvents.length === 0) {
      alert("Please fill at least one task with title and assignee.");
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
            <input
              type="text"
              placeholder="Task Name"
              value={group.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
              className="border w-full mb-2 p-2 rounded"
            />
            <input
              type="text"
              placeholder="Assigned To"
              value={group.assignedTo}
              onChange={(e) =>
                handleChange(index, "assignedTo", e.target.value)
              }
              className="border w-full mb-2 p-2 rounded"
            />
            <textarea
              placeholder="Description"
              value={group.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
              className="border w-full mb-2 p-2 rounded"
            />
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
