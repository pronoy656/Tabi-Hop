import { useState } from "react";
import AddDestinationModal from "./AddDestinationModal";


const AddDestination = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [destinations ,setDestination]=useState([
    {
      destination: "Starting Location",
      title: "New York Public Library - Stephen A. Schwarzman Building",
      desc: "476 5th Ave, New York, NY 10018, USA",
    },
  
  ])

  return (
    <div className=" ">
      <div className="sm:flex justify-between items-center mb-6 space-y-4">
        <h2 className="font-semibold text-xl text-[#1F4F53]">
          Step - 02 : Add your location anchor points
        </h2>
        <button  onClick={() => setIsModalOpen(true)} className="bg-[#EE443F] text-white px-4 py-2 rounded-md text-sm ">
          + Add Destination
        </button>
      </div>
  <div className="bg-white md:p-6 rounded-xl p-3 w-full mx-auto ">






         
   <div className="relative md:pl-6">
  {destinations?.map((step, index, array) => (
    <div key={index} className="relative flex justify-self-start z-10">
      {/* Left: Destination label */}
      <div className="md:w-40 w-30 md:text-right md:pr-4 mb-2">
       <p className="md:text-lg font-medium  text-[#1F4F53]">
  {index === 0
    ? "Starting Location"
    : index === array.length - 1
    ? "Ending Location"
    : `Destination - ${index.toString().padStart(2, "0")}`}
</p>

      </div>

      {/* Center: Timeline connector + dot */}
      <div className="relative flex flex-col items-center mx-4 pb-16 pt-[12px]">
        {/* Line: Only render if not the last item */}
        {index !== array.length - 1 && (
          <div className="w-[2px] bg-[#EE443F] h-full absolute top-4 left-1/2 transform z-0"></div>
        )}

        {/* Dot: Increase size for the first and last dot */}
        <div 
          className={`rounded-full z-10 ${index === 0 || index === array.length - 1 ? 'w-5 h-5' : 'w-4 h-4'} bg-[#EE443F] absolute`} 
          style={{
            top: index === 0 || index === array.length - 1 ? '0' : 'auto', // Adjust position for bigger dots
          }}
        />
      </div>

      {/* Right: Content */}
      <div className="flex-1 ">
        <div className="flex items-center gap-2 gap-y-2">
          <p className="md:text-lg md:font-semibold font-medium text-[#1F4F53]">{step.title}</p>
          <img src="/edit-3.png"  className="text-[#EE443F] cursor-pointer h-6 w-6" />
        </div>
        <p className="text-sm text-gray-500">{step.desc}</p>
      </div>
    </div>
  ))}
</div>



          </div>
          
      <AddDestinationModal setDestination={setDestination} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
};

export default AddDestination;
