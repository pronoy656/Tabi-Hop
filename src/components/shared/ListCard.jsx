export const ListCard = ({
  title,
  todos,
  border,
  titleText,
  text,
  bg,
  border2,
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
              <label className="relative inline-block cursor-pointer w-5 h-5">
                <input
                  type="checkbox"
                  className="peer absolute opacity-0 w-0 h-0 cursor-pointer"
                />
                <span
                  className="w-5 h-5 cursor-pointer inline-block border border-red-500 rounded-sm peer-checked:border-green-500
      after:content-[''] after:absolute after:top-1 after:left-1 after:w-3 after:h-3
      peer-checked:after:bg-[url('data:image/svg+xml;utf8,<svg fill=\'%2300C853\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'><path fill-rule=\'evenodd\' d=\'M16.707 5.293a1 1 0 010 1.414l-8.25 8.25a1 1 0 01-1.414 0l-4.25-4.25a1 1 0 111.414-1.414l3.543 3.543 7.543-7.543a1 1 0 011.414 0z\' clip-rule=\'evenodd\'/></svg>')] peer-checked:after:bg-no-repeat peer-checked:after:bg-center peer-checked:after:bg-contain"
                />
              </label>

              <span className="font-medium" style={{ color: text }}>
                {task?.title}
              </span>
            </div>

            {idx !== todos.length - 1 && (
              <div className="border-b" style={{ borderColor: border2 }} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
