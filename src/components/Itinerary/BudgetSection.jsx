import { useState } from "react";
import AddBudgetModal from "../modals/foodSection/budgetSection/AddBudgetModal";


const BudgetSection = () => {
  const [budgetList, setBudgetList] = useState([
    { name: "Breakfast Budget", from: 12, to: 32 },
    { name: "Lunch Budget", from: 12, to: 32 },
    { name: "Dinner Budget", from: 15, to: 40 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddBudget = (newBudget) => {
    setBudgetList((prev) => [...prev, newBudget]);
  };

  return (
    <div>
      <div className="sm:flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg mb-4 text-[#1F4F53]">
          Step - 04 : Please write your preferred budget allocation
        </h2>
        <button
          className="bg-[#4796B5] text-white px-4 py-2 rounded-md text-sm"
          onClick={() => setIsModalOpen(true)}
        >
          + Add more
        </button>
      </div>

<div className="bg-[#FFFFFF] p-6 rounded-xl w-full shadow-md flex items-start gap-4">
  <div>
    {budgetList.map((budget, i) => (
      <div
        key={i}
        className="flex flex-col md:flex-row md:items-center gap-4 mb-4"
      >
        <label className="w-full md:w-40 font-semibold">{budget.name}</label>
        <span className="w-full md:w-40 p-2 font-semibold rounded-xl text-center text-sm bg-[#C7EAED]">
          Estimate: ${budget.from} - ${budget.to}
        </span>
      {budget.time && (
  <span className="w-full md:w-32 p-2 font-medium rounded-xl text-center text-sm bg-[#FFE9B1]">
    {budget.time}
  </span>
)}

      </div>
    ))}
  </div>


</div>



      <AddBudgetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddBudget}
      />
    </div>
  );
};

export default BudgetSection;
