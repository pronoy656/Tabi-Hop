import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import AdminProfile from "./AdminProfile";

const { Search } = Input;

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="w-full relative bg-[#EDF8F9] px-4 lg:px-8 py-4 shadow-sm ">
      <div className="absolute bottom-0 left-0 h-px bg-[#ACE0E5] w-full md:left-[300px] md:w-[calc(100%-300px)]" />

      <div className="grid grid-cols-3 items-center">
        {/*LEFT SECTION*/}
        <div className="flex items-center gap-2">
          {/* Sidebar toggle  */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-[#E66CE5] bg-white p-2 h-[44px] w-[44px] rounded-lg border-b-2 border-r-2 border-[#E66CE5]"
          >
            {isSidebarOpen ? (
              <MdClose size={24} />
            ) : (
              <RxHamburgerMenu size={24} />
            )}
          </button>

          {/* Logo larger) */}
          <Link to={'/'} className="hidden md:flex items-center gap-1">
            <img
              src="/logo_image.png"
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
            <img
              src="/logo_name.png"
              alt="Logo Name"
              className="h-6 sm:h-7 object-contain"
            />
          </Link>
        </div>

        {/*CENTER SECTION*/}
        <div className="flex  justify-center ">
          {/* Logo  small screens*/}
         
         <div className="absolute top-4 left-19">
           <Link  to={'/'} className="flex items-center gap-1 md:hidden">
            <img
              src="/logo_image.png"
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
            <img
              src="/logo_name.png"
              alt="Logo Name"
              className="h-6 sm:h-7 object-contain"
            />
          </Link>
          </div>

          {/* Search bar (visible on lg and larger) */}
          <div className="hidden lg:flex items-center bg-white border-b-4 border-r-4 border-[#E66CE5] rounded-lg px-2 py-1 w-full max-w-[600px] h-11">
            <SearchOutlined className="text-[#4a4a32]" />
            <Input
              placeholder="Search here"
              bordered={false}
              className="ml-2 focus:outline-none w-full"
            />
          </div>
        </div>

        {/*RIGHT SECTION*/}
        <div className="flex justify-end items-center gap-2 sm:gap-3 lg:gap-4 min-w-fit">
          {/* Gems Link */}
          <Link
            to="/gemss"
            className="bg-white hidden md:flex p-2 h-[40px] w-[40px] sm:h-[44px] sm:w-[44px] rounded-lg border-b-2 border-r-2 border-[#E66CE5]  items-center justify-center"
          >
            <img
              src="/diamond.png"
              alt="Gems"
              className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
            />
          </Link>

          {/* Notifications Link */}
          <Link
            to="/notifications"
            className="bg-white p-2 h-[40px] w-[40px] sm:h-[44px] sm:w-[44px] rounded-lg border-b-2 border-r-2 border-[#E66CE5] flex items-center justify-center"
          >
            <img
              src="/notification.png"
              alt="Notifications"
              className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
            />
          </Link>

          {/* Admin Profile */}
          <AdminProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;
