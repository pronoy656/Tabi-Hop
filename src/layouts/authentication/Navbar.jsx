import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute w-full backdrop-blur-2xl bg-white/40">
      <div className="h-[84px] flex items-center justify-between py-5 px-4 md:px-0 max-w-[1240px] mx-auto w-full">
        <div
          className="flex items-center space-x-1 hover:cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <div className="py-3">
            <FaArrowLeftLong />
          </div>
          <p className="text-2xl font-semibold">Go Back</p>
        </div>
        <div className="w-[203.78px] h-12">
          <img src="/public/pronoy/websiteName.png" alt="" />
        </div>
        <div>
          <button className="rounded-xl bg-white flex space-x-1.5 items-center px-7 py-[9px]">
            <IoIosCall />
            <p className="text-lg font-semibold">Contact Support</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
