import { useState, useEffect } from "react";
import ModalLayout from "../ModalLayout";
import ModalHeader from "../ModalHeader";

const EditFoodModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);

  // Load the current card data into state when modal opens
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setItems(initialData.items || []);
    }
  }, [initialData]);

  const handleItemChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index] = value;
    setItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      title: title.trim(),
      items: items.map((item) => item.trim()),
    });
    onClose();
  };

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose}>
      <ModalHeader
        title="Edit Food Card"
        subTitle="Modify the title and items of this food group"
      />

      <form onSubmit={handleSubmit} className="space-y-4 bg-[#FDF0FC] p-4 rounded-lg">
        {/* Title input */}
        <div>
          <label className="label-class">Title</label>
          <input
            type="text"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Items */}
        {items.map((item, index) => (
          <div key={index}>
            <label className="label-class">Item {index + 1}</label>
            <input
              type="text"
              className="form-input"
              value={item}
              onChange={(e) => handleItemChange(index, e.target.value)}
              required
            />
          </div>
        ))}

        {/* Submit */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-[#6E67D5] rounded-lg text-white text-sm font-semibold"
          >
            Save Changes
          </button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default EditFoodModal;
