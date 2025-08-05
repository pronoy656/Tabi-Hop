import AddNewButton from "./AddNewButton";


const FoodSectionCard = ({food,key,setFoodList}) => {
  return (
     
      <div  key={key}

  className="bg-white border border-gray-300 shadow-xl rounded-md p-4 flex flex-col justify-between h-full"
>
            <div className="flex justify-between">
              <span className="font-medium text-xl text-[#131927]">
                {food.title}
              </span>
              <span className="text-red-500 cursor-pointer flex items-center gap-2">
                <img   onClick={() => {
    setEditIndex(key);
    setIsEditModalOpen(true);
  }} src="/edit-pencil.png" className="h-5" alt="Edit" />
                <img   onClick={() => {
    setDeleteIndex(key);
    setIsDeleteModalOpen(true);
  }} src="/delete.png" className="h-5" alt="Delete" />
              </span>
            </div>
            <ul className="text-sm text-gray-600">
  {food.items.map((item, idx) => (
    <li
      key={idx}
    
      className={`py-1 cursor-pointer hover:text-[#1F4F53] ${
        idx !== food.items.length - 1 ? "border-b border-gray-300 mb-2" : ""
      }`}
    >
      {item}
    </li>
  ))}
</ul>

<AddNewButton setFoodList={setFoodList} i={key}/>
           
          
          </div>
  )
}

export default FoodSectionCard