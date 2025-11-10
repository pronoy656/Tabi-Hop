import { useState } from "react";
import AddFoodItemModal from "../../../components/modals/foodSection/AddFoodItemModal";
import AddFoodModal from "../../../components/modals/foodSection/AddFoodModal";
import EditFoodItemModal from "../../../components/modals/foodSection/EditFoodItemModal";
import ConfirmDeleteModal from "../../../components/modals/foodSection/ConfirmDeleteModal";
const AdminFoodSection = () => {
  const [foodList, setFoodList] = useState([
    {
      title: "Food items",
      items: [
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
      ],
    },
    {
      title: "Drink items",
      items: [
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
        "Classy Beef Hamburger",
      ],
    },
  ]);

  // Function to add a new food group
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addNewFoodGroup = (newGroup) => {
    setFoodList((prev) => [...prev, newGroup]);
  };

  //   add new item
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const handleAddItemsToCard = (items) => {
    setFoodList((prev) => {
      const updated = [...prev];
      updated[selectedCardIndex].items.push(...items);
      return updated;
    });
  };

  // edit items

  const [editIndex, setEditIndex] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleSaveCardEdit = (updatedCard) => {
    setFoodList((prev) => {
      const updated = [...prev];
      updated[editIndex] = updatedCard;
      return updated;
    });
  };

  // delete card

  const [deleteIndex, setDeleteIndex] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteCard = () => {
    console.log("Deleted card index:", deleteIndex);
    setFoodList((prev) => prev.filter((_, i) => i !== deleteIndex));
    setIsDeleteModalOpen(false);
  };

  return (
    <div>
      <div className="sm:flex justify-between items-center space-y-3 mb-4">
        <h2 className="font-semibold text-lg text-[#1F4F53]">
          Step - 03 : Select how you want to spend your day
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#E66CE5] text-white px-4 py-2 rounded-md text-sm"
        >
          + Add more
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {foodList.map((food, i) => (
          <div
            key={i}
            className="bg-white border border-gray-300 shadow-xl rounded-md p-4 flex flex-col justify-between h-full"
          >
            <div className="flex justify-between">
              <span className="font-medium text-xl text-[#131927]">
                {food.title}
              </span>
              <span className="text-red-500 cursor-pointer flex items-center gap-2">
                <img
                  onClick={() => {
                    setEditIndex(i);
                    setIsEditModalOpen(true);
                  }}
                  src="/edit-pencil.png"
                  className="h-5"
                  alt="Edit"
                />
                <img
                  onClick={() => {
                    setDeleteIndex(i);
                    setIsDeleteModalOpen(true);
                  }}
                  src="/delete.png"
                  className="h-5"
                  alt="Delete"
                />
              </span>
            </div>
            <ul className="text-sm text-gray-600">
              {food.items.map((item, idx) => (
                <li
                  key={idx}
                  className={`py-1.5 cursor-pointer hover:text-[#1F4F53] ${
                    idx !== food.items.length - 1
                      ? "border-b border-gray-300 mb-2"
                      : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex justify-end">
              <button
                onClick={() => {
                  setSelectedCardIndex(i);
                  setIsItemModalOpen(true);
                }}
                className="bg-[#F7D1F7] w-full py-1.5  rounded-full font-medium text-sm mt-2"
              >
                + Add new item
              </button>
            </div>
          </div>
        ))}
      </div>
      <AddFoodItemModal
        isOpen={isItemModalOpen}
        onClose={() => setIsItemModalOpen(false)}
        onAddItems={handleAddItemsToCard}
      />

      <AddFoodModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addFoodGroup={addNewFoodGroup}
      />

      <EditFoodItemModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        initialData={foodList[editIndex]}
        onSave={handleSaveCardEdit}
      />
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteCard}
        title={foodList[deleteIndex]?.title}
      />
    </div>
  );
};

export default AdminFoodSection;
