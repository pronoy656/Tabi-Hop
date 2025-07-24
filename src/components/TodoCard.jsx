const TodoCard = ({ title, todos }) => {
  return (
    <div className="bg-pink-100 border-b-3 border-r-3 border-[#E66CE5] rounded-md shadow-sm p-4">
      <h4 className="font-semibold text-purple-900 text-md mb-2">{title}</h4>
      <ul className="space-y-4 text-sm">
        {todos?.map((task, idx) => (
             <li key={idx} className="flex items-center gap-4 border-b border-white p-[1px]">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-500" />
            <span className="text-gray-800">{task?.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoCard;
