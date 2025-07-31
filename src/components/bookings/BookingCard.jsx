

import { Link } from "react-router-dom";

const  BookingCard= ({ acc }) => {
  return (
    <div
      
      className="xl:flex w-full border-2 border-r-4 border-b-4 border-[#6E67D5] rounded-xl overflow-hidden shadow-md p-4 gap-4 bg-white mt-4"
    >
     

      <div className="flex flex-col space-y-2 xl:space-y-6 flex-1 mt-4 xl:mt-0">
        <div className="flex justify-between items-start">
       
      
              <h2 className="text-2xl font-semibold">{acc.title}</h2>
              
          
      

          <Link
            to={""}
            className=" font-medium"
          >
            <img src="/three-dots.png" className="h-6 " alt="" />
          </Link>
        </div>
  <div className="space-x-4 flex text-sm text-[#212936]">
          <p className="flex justify-center items-center text-[16px] font-medium gap-x-1">  <img src="/booking.png" alt="Instagram" className="w-4 h-4" />
          <span></span> Family Events</p>
          <p className="flex justify-center items-center text-[16px] font-medium gap-x-1">  <img src="/timer.png" alt="Instagram" className="w-4 h-4" />
          <span></span> 12th January, 2025</p>
          <p className="flex justify-center items-center text-[16px] font-medium gap-x-1">  <img src="/location-outline.png" alt="Instagram" className="w-4 h-4" />
          <span></span> The Great Place of Offshore</p>

        </div>
        <p className="text-sm font-medium text-[#4D5461] mt-1">{`Note : ${acc.note}`}</p>

      
      </div>
    </div>
  );
};

export default  BookingCard;
