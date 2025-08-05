import { useState } from "react";
import AddFoodItemModal from "../../modals/foodSection/AddFoodItemModal";


const AddNewButton = ({i,setFoodList}) => {

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

  return (
   
         <div className="flex justify-end">
  <button   onClick={() => {
    setSelectedCardIndex(i);
    setIsItemModalOpen(true);
  }} className="bg-[#F7D1F7] w-full py-1  rounded-full font-medium text-sm mt-2">
              + Add new item
            </button>
                         <AddFoodItemModal
  isOpen={isItemModalOpen}
  onClose={() => setIsItemModalOpen(false)}
  onAddItems={handleAddItemsToCard}
/>
            </div>

 
  )
}

export default AddNewButton