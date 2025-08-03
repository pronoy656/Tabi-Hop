export const ListCard = ({
  title,
  todos,
  border,
  titleText,
  text,
  bg,
  border2,
  line
}) => {



  

  return (
    <div
      className={`border rounded-md shadow-sm p-4 border-b-4 border-r-4`}
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
        className={`font-semibold text-[20px] mb-4`}
        style={{ color: titleText }}
      >
        {title}
      </h4>

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
              <div className="border-b " style={{ borderColor: line}} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
