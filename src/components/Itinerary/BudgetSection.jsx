

const BudgetSection = () => {
  return (
    <div>   <div className="sm:flex justify-between items-center mb-4 ">
         <h2 className="font-semibold text-lg mb-4 text-[#1F4F53]">
          Step - 04 : Please write your preferred budget allocation
        </h2>
          <button className="bg-[#4796B5]  text-white px-4 py-2 rounded-md text-sm">
            + Add more
          </button>
       </div>
        <div className="bg-[#FFFFFF] p-6 rounded-xl w-full shadow-md">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-center gap-4 mb-4"
              >
                <label className="w-full md:w-40 font-semibold">
                  Lunch Budget
                </label>

             

                <span className="w-full md:w-40 p-2 font-semibold rounded-xl text-center text-sm bg-[#C7EAED]">
                  Estimate: $12 - $32
                </span>
              </div>
            ))}
        </div>
       
       </div>
  )
}

export default BudgetSection