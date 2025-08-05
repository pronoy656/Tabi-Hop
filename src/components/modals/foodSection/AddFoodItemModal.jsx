import { useState } from "react";
import ModalLayout from "../ModalLayout";
import ModalHeader from "../ModalHeader";

const AddFoodItemModal = ({ isOpen, onClose, onAddItems }) => {
  const [items, setItems] = useState([{ name: "" }]);

  const handleChange = (index, value) => {
    const updated = [...items];
    updated[index].name = value;
    setItems(updated);
  };

  const addItemField = () => {
    setItems([...items, { name: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItems = items.map((item) => item.name.trim()).filter(Boolean);
    onAddItems(newItems);
    setItems([{ name: "" }]);
    onClose();
  };

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose}>
      <ModalHeader
        title="Add New Items"
        subTitle="Add additional items to this list"
      />
      <form onSubmit={handleSubmit} className="space-y-4 bg-[#FDF0FC] p-4 rounded-lg">
        {items.map((item, index) => (
          <div key={index}>
            <label className="label-class">Item {index + 1}</label>
            <input
              value={item.name}
              onChange={(e) => handleChange(index, e.target.value)}
              type="text"
              placeholder="Write here"
              className="form-input"
              required
            />
          </div>
        ))}

        <div className="flex flex-col lg:flex-row gap-y-4 justify-center gap-x-10 pt-4">
          <button
            type="button"
            onClick={addItemField}
            className="px-4 py-2 bg-[#6E67D5] rounded-lg text-white text-sm font-semibold lg:text-lg w-full"
          >
            Add More Field
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#6E67D5] rounded-lg text-white text-sm font-semibold lg:text-lg w-full"
          >
            Save Items
          </button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default AddFoodItemModal;
