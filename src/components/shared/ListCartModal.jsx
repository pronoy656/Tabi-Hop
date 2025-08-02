import { useForm } from "react-hook-form";
import ModalLayout from "../modals/ModalLayout";
import ModalHeader from "../modals/ModalHeader";
import { useState } from "react";

const ListCartModal = ({ isOpen, onClose, setTodoGroups }) => {
  const { register, handleSubmit, reset } = useForm();
  const [notes, setNotes] = useState([{ note: "" }]);

  const onSubmit = (data) => {
   
    const newTodoGroup = {
      title: data.title,
      todos: notes.map((note, index) => ({
        id: index + 1,
        title: note.note,
        completed: false,
      })),
    };
   console.log(newTodoGroup)
    // Update the parent component's state with the new todo group
    setTodoGroups((prevGroups) => [...prevGroups, newTodoGroup]);

    // Reset the form and notes after submission
    reset();
    setNotes([{ note: "" }]);
    onClose();
  };

  const addNoteField = () => {
    setNotes([...notes, { note: "" }]);
  };

  const handleNoteChange = (index, value) => {
    const updatedNotes = [...notes];
    updatedNotes[index].note = value;
    setNotes(updatedNotes);
  };

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose}>
      <ModalHeader
        title="Creating List"
        subTitle="View and add your bookings, plans, and events in one place"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="bg-[#FDF0FC] p-4 rounded-lg">
          <div>
            <label className="label-class">Title</label>
            <input
              {...register("title")}
              type="text"
              required
              placeholder="Write here"
              className="form-input"
            />
          </div>

          {notes.map((note, index) => (
            <div key={index}>
              <label className="label-class">Note {index + 1}</label>
              <input
                value={note.note}
                onChange={(e) => handleNoteChange(index, e.target.value)}
                type="text"
                required
                placeholder="Write here"
                className="form-input"
              />
            </div>
          ))}

          <div className="flex flex-col lg:flex-row gap-y-4 justify-center gap-x-10 pt-4">
            <button
              type="button"
              onClick={addNoteField}
              className="px-4 py-2 bg-[#6E67D5] rounded-lg text-white text-sm font-semibold lg:text-lg w-full"
            >
              Add More Note
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#6E67D5] rounded-lg text-white text-sm font-semibold lg:text-lg w-full"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </ModalLayout>
  );
};

export default ListCartModal;
