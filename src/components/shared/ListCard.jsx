export const ListCard = ({
  title,
  todos,
  border,
  titleText,
  text,
  bg,
  border2,
  line,
  onEdit,
}) => {
  const handleEdit = () => {
    if (onEdit) {
      onEdit(title, todos);
    }
  };

  return (
    <div
      className={`border rounded-md shadow-sm p-4 border-b-4 border-r-4`}
      style={{
        backgroundColor: bg,
        borderTopColor: border2,
        borderLeftColor: border2,
        borderBottomColor: border,
        borderRightColor: border,
        borderStyle: 'solid',
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h4
          className={`font-semibold text-[20px]`}
          style={{ color: titleText }}
        >
          {title}
        </h4>
        <button
          onClick={handleEdit}
          className="focus:outline-none hover:opacity-80"
          title="Edit"
        >
          <img src="/edit-pencil.png" className="h-5" alt="Edit" />
        </button>
      </div>

      <ul className="space-y-4 text-sm">
        {todos?.map((task, idx) => (
          <li key={idx}>
            <div className="flex items-center gap-4 pb-2 ">
              <label className="inline-block cursor-pointer w-5 h-5">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-purple-500 cursor-pointer"
                />
              </label>

              <span className="font-medium" style={{ color: text }}>
                {task?.title}
              </span>
            </div>

            {idx !== todos.length - 1 && (
              <div className="border-b " style={{ borderColor: line }} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
