import { useState } from "react";
import AddFoodModal from "../modals/foodSection/AddFoodModal";
import AddFoodItemModal from "../modals/foodSection/AddFoodItemModal";
import EditFoodItemModal from "../modals/foodSection/EditFoodItemModal";
import ConfirmDeleteModal from "../modals/foodSection/ConfirmDeleteModal";
import FoodSectionCard from "./foodSection/FoodSectionCard";

const FoodSection = () => {
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
      
    <FoodSectionCard setFoodList={setFoodList}  food={food} key={i} ></FoodSectionCard>
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

export default FoodSection;
