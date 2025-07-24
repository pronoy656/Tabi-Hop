import { useState } from "react";

const FlowSelector = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["I like structure", "Go with the flow ", "Both"];

  return (
    // <div>
    //   <div
    //     className="h-[130vh] bg-cover bg-center"
    //     style={{ backgroundImage: "url('/flow-selector.jpg')" }}
    //   >
    //     <div className="flex justify-center p-48">
    //       <div className=" w-[920px] rounded-2xl flex flex-col justify-center items-center backdrop-blur-2xl bg-white/40">
    //         <h2 className="text-[28px] md:text-3xl font-semibold text-center mt-[135.52px] mb-6 text-black uppercase">
    //           Structured itinerary vs. do you go <br /> with the flow?{" "}
    //         </h2>

    //         <div className="space-y-3 w-[762px] px-[111.35px] mt-6">
    //           {options.map((option, index) => (
    //             <label
    //               key={index}
    //               className="flex items-center justify-between text-base font-medium px-4 py-3 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-100"
    //             >
    //               <span className="text-[#131927] text-base font-medium">
    //                 {option}
    //               </span>
    //               <input
    //                 type="radio"
    //                 name="travelOption"
    //                 checked={selectedOption === index}
    //                 onChange={() => setSelectedOption(index)}
    //                 className="form-radio h-5 w-5 text-yellow-500"
    //               />
    //             </label>
    //           ))}
    //         </div>

    //         <button
    //           className="mt-7 mb-[118px] px-8 py-3 w-[540px] h-14 bg-[#FFAA00] text-black font-semibold rounded-md hover:bg-yellow-500 transition"
    //           disabled={selectedOption === null}
    //         >
    //           Next
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div
        className="min-h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('/flow-selector.jpg')" }}
      >
        <div className=" h-[100vh] flex justify-center items-center ">
          <div className="w-full max-w-full md:max-w-4xl rounded-2xl backdrop-blur-2xl bg-white/40">
            <div className="space-y-3 w-full px-4 md:px-40 mt-6">
              <h2 className="text-[22px] md:text-2xl lg:text-3xl font-semibold text-center mt-16 mb-6 text-black uppercase px-4">
                Structured itinerary vs. do you go with the flow?
              </h2>
              {options.map((option, index) => (
                <label
                  key={index}
                  className="flex items-center justify-between text-base font-medium px-4 py-3 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-100"
                >
                  <span className="text-[#131927] text-base font-medium">
                    {option}
                  </span>
                  <input
                    type="radio"
                    name="travelOption"
                    checked={selectedOption === index}
                    onChange={() => setSelectedOption(index)}
                    className="form-radio h-5 w-5 text-yellow-500"
                  />
                </label>
              ))}
              <button
                className="mt-7 mb-16   bg-[#FFAA00] text-black font-semibold rounded-md hover:bg-yellow-500 transition w-full py-4"
                disabled={selectedOption === null}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowSelector;
