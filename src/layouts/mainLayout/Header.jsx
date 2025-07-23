import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";


const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="flex items-center justify-between h-[80px] bg-[#EDF8F9] px-4 md:px-14 lg:px-20 pt-2">
  
      <>
        <div className="hidden lg:flex ">
         <h1>header</h1>
        </div>
        <div className="lg:hidden flex">
          <h1>logo</h1>
        </div>
      </>

      {/* Right Section */}
      <div className="flex items-center gap-4 lg:gap-6">
        {/* Notification */}
        <Link
          to="/notifications"
          className="relative flex items-center justify-center"
        >
          <img src="/notification.png" alt="Notification" className="h-7 w-7" />
          <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-xs px-1 rounded-full">
            1
          </span>
        </Link>

        {/* Admin Profile */}
        <Link to="/admin-profile" className="flex items-center gap-2 0">
          <img
            src="/admin.jpg"
            alt="Admin"
            className="w-10 h-10 rounded-full    object-cover"
            style={{ border: "4px solid #0B3666  !important" }}
          />
          <h2 className="text-white font-semibold text-base !mt-[5px]">
            Admin baigy
          </h2>
        </Link>

        {/* Mobile Sidebar Toggle */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-3xl !text-white focus:outline-none cursor-pointer"
          aria-label="Toggle Sidebar"
        >
          {isSidebarOpen ? (
            <MdClose size={28} />
          ) : (
            <RxHamburgerMenu size={28} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
