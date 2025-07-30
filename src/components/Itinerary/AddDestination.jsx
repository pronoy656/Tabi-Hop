import { Pencil } from "lucide-react";

const destinations = [
  {
    label: "Starting Location",
    title: "New York Public Library - Stephen A. Schwarzman Building",
    address: "476 5th Ave, New York, NY 10018, USA",
  },
  {
    label: "Destination - 01",
    title: "Head southwest on 5th Ave toward E 41st St",
    address: "476 5th Ave, New York, NY 10018, USA",
  },
  {
    label: "Destination - 02",
    title: "Turn left onto E 36th St",
    address: "476 5th Ave, New York, NY 10018, USA",
  },
  {
    label: "Destination - 03",
    title: "Turn left onto E 36th St",
    address: "476 5th Ave, New York, NY 10018, USA",
  },
  {
    label: "Destination - 04",
    title: "Continue onto Union Square E",
    address: "476 5th Ave, New York, NY 10018, USA",
  },
  {
    label: "Destination - 05",
    title: "Continue straight to stay on Broadway",
    address: "476 5th Ave, New York, NY 10018, USA",
  },
  {
    label: "Destination - 06",
    title: "Turn right onto Thomas St",
    address: "476 5th Ave, New York, NY 10018, USA",
  },
  {
    label: "Ending Location",
    title: "Turn right onto Thomas St",
    address: "476 5th Ave, New York, NY 10018, USA",
  },
];

const AddDestination = () => {
  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-xl text-[#1F4F53]">
          Step - 02 : Add your location anchor points
        </h2>
        <button className="bg-[#EE443F] text-white px-4 py-2 rounded-md text-sm">
          + Add Destination
        </button>
      </div>
  <div className="bg-white p-6 rounded-xl w-full  ">






         
            <div className="relative pl-6">
          
            {[
  {
    destination: "Starting Location",
    title: "New York Public Library - Stephen A. Schwarzman Building",
    desc: "476 5th Ave, New York, NY 10018, USA",
  },
  {
    destination: "Destination - 01",
    title: "Head southwest on 5th Ave toward E 41st St",
    desc: "0.2 mi",
  },
].map((step, index) => (
  <div key={index} className="relative flex z-10">
    
    {/* Left: Destination label */}
    <div className="w-40 text-right pr-4">
      <p className="text-lg font-medium text-[#1F4F53]">{step.destination}</p>
    </div>

    {/* Center: Timeline connector + dot */}
    <div className="relative flex flex-col gap-y-4 items-center mx-4 pb-10">
      {/* Line */}
      <div className="w-[2px]  bg-[#FF6A00] h-full absolute top-0 left-1/2 transform  z-0"></div>

      {/* Dot */}
      <div className="w-4 h-4 pt-10 bg-[#FF6A00] rounded-full z-10" />
    </div>

    {/* Right: Content */}
    <div className="flex-1 pt-10">
      <div className="flex items-center gap-2">
        <p className="text-lg font-semibold text-[#1F4F53]">{step.title}</p>
        <Pencil size={14} className="text-[#EE443F] cursor-pointer" />
      </div>
      <p className="text-sm text-gray-500">{step.desc}</p>
    </div>
  </div>
))}

            </div>
          </div>

    </div>
  );
};

export default AddDestination;
