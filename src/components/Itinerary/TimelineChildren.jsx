import image from "../../../public/itinerary/edit.png";

const TimelineChildren = () => {
  return (
    <div>
      <div className="flex gap-2  border border-amber-500 ">
        <h1 className="text-[#333333] text-xl font-semibold">
          New You Public Library - Stephen A. Schwarzman Building
        </h1>
        <button>
          <img src={image} alt="edit image" className="h-6 w-12" />
        </button>
      </div>
    </div>
  );
};

export default TimelineChildren;
