const TodoCard = ({ title, todos, border,
  titleText,
  text,
  bg,
  border2, }) => {
  return (
  <div
      className={`border rounded-xl shadow-sm px-4 sm:px-12 pt-[24px] pb-[20px] border-b-4 border-r-4 `}
      style={{
        backgroundColor: bg,
        borderTopColor: border2,
        borderLeftColor: border2,
        borderBottomColor: border,
        borderRightColor: border,
        borderStyle: "solid",
      }}
    >
      <h4
        className={`font-medium text-xl mb-4`}
        style={{ color: titleText }}
      >
        {title}
      </h4>

      <ul className="space-y-4 text-sm">
        {todos?.map((task, idx) => (
          <li key={idx}>
            <div className="flex items-center gap-4 pb-2 ">
             
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-purple-500 cursor-pointer"
                />
             

              <span className="font-medium text-base" style={{ color: text }}>
                {task?.title}
              </span>
            </div>

            {idx !== todos.length - 1 && (
              <div className="border-b border-b-[#ffffff]" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoCard;
