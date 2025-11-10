const BucketCard = ({ title, todos }) => {
  return (
    <div className="bg-[#FFE9FF] border-b-3 border-r-3 border-[#6E67D6] rounded-md shadow-sm p-4">
      <h4 className="font-semibold text-purple-900 text-lg mb-4">{title}</h4>
<ul className="space-y-4 text-sm">
  {todos?.map((task, idx) => (
    <li key={idx}>
      <div className="flex items-center gap-4 pb-2">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 text-purple-500"
        />
        <span className="text-gray-800">{task?.title}</span>
      </div>
     
      {idx !== todos.length - 1 && (
        <div className="border-b border-white" />
      )}
    </li>
  ))}
</ul>

    </div>
  );
};

export default BucketCard;
