import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="absolute w-full">
      <div className="h-[84px] flex items-center justify-between py-5 px-16 backdrop-blur-2xl bg-white/40">
        <div className="flex items-center space-x-1.5">
          <div className="w-[16.67px] h-4">
            <FaArrowLeftLong />
          </div>
          <p className="text-2xl font-semibold">Go Back</p>
        </div>
        <div className="w-[203.78px] h-12">
          <img src="/public/pronoy/websiteName.png" alt="" />
        </div>
        <div>
          <button className="w-[200px] h-11 rounded-xl bg-white flex space-x-1.5 items-center px-5 py-[9px]">
            <IoIosCall />
            <p className="text-lg font-semibold">Contact Support</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
