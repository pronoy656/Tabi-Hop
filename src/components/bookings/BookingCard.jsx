



import { Link } from "react-router-dom";

const  BookingCard= ({ acc }) => {
  return (
    <div
      key={acc.id}
      className="xl:flex w-full border-2 border-r-4 border-b-4 border-[#FCB0BA] rounded-xl overflow-hidden shadow-md p-4 gap-4 bg-white mt-4"
    >
     

      <div className="flex flex-col space-y-2 xl:space-y-6 flex-1 mt-4 xl:mt-0">
        <div className="flex justify-between items-start">
       
      
              <h2 className="text-xl font-semibold">{acc.title}</h2>
              
          
      

          <Link
            to={""}
            className=" font-medium"
          >
            <img src="/three-dots.png" className="h-6 " alt="" />
          </Link>
        </div>
  <div className="space-x-1 flex text-sm font-semibold">
          <p>  <img src="/instagram.png" alt="Instagram" className="w-7 h-7" />
          <span></span> Family Events</p>
          <p>Check-Out : {acc.checkOut}</p>
          <p>Contact : {acc.contact}</p>
        </div>
        <p className="text-sm font-medium text-[#4D5461] mt-1">{`Note : ${acc.note}`}</p>

      
      </div>
    </div>
  );
};

export default  BookingCard;
