// components/shared/BookingListCard.jsx

const BookingListCard = ({
  title,
  todos = [],
  border = "#FFAA00",
  border2 = "#FFC654",
  bg = "#FFFFFF",
  titleText = "#2c3e57",
  text = "#394050",
  line = "#FFE5B0",
}) => {
  const event = todos[0]; 

  return (
    <div
      className="rounded-lg p-6 border-t border-l border-b-3 border-r-3 border-[#FFAA00]  bg-[#FFFFFF]"
    
    >
   
      <h2 className="text-xl font-semibold mb-3" style={{ color: "#131927" }}>
       The Thailand Hostile Land
      </h2>

    
      <div
        className="rounded-md p-3 mb-4 bg-[#FFF7E6]"

      >
        <div className="flex items-center gap-2 font-bold text-sm text-[#2c3e57] mb-2">
          <span className="text-lg font-bold"><img src="/booking.png" alt="" /></span>
          <span >{event?.category || "Family Events"}</span>
        </div>
        <div className="flex items-center gap-2 font-bold text-sm text-[#2c3e57] mb-2">
          <span className="text-lg"><img src="/timer.png" alt="" /></span>
          <span>{event?.date || "12th January, 2025"}</span>
        </div>
        <div className="flex font-bold items-center gap-2 text-sm text-[#2c3e57]">
          <span className="text-lg"><img src="/location-outline.png" alt="" /></span>
          <span>{event?.location || "The Great Place of Offshore"}</span>
        </div>
      </div>

  
      <p className=" leading-relaxed text-[#6D717F] font-medium">
        {event?.description ||
          "Note : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ...."}
      </p>
    </div>
  );
};

export default BookingListCard ;
