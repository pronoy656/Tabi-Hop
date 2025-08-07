import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { Input } from "antd";

import AdminAvatar from "./AdminAvatar";

const { Search } = Input;

const AdminHeader = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="w-full   relative bg-[#FFFFFF] px-4 py-4 lg:px-8  ">


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
  <h1 className="hidden md:flex items-center gap-1 text-2xl font-semibold">
          Admin Dashboard
          </h1>
          
         
        </div>
            
        <div>
    
            <Link  to={'/admin-dashboard'} className="flex items-center justify-center gap-1 md:hidden">
            <img
              src="/logo_image.png"
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
            <img
              src="/logo_name2.png"
              alt="Logo Name"
              className="h-6 sm:h-7 object-contain"
            />
          </Link>
        </div>


        {/*RIGHT SECTION*/}
        <div className="flex justify-end items-center gap-2 sm:gap-3 lg:gap-4 min-w-fit">
         

          {/* Notifications Link */}
          <Link
            to="/admin-dashboard/admin-notification"
            className="bg-[#F3F4F6] p-2 h-[40px] w-[40px] sm:h-[44px] sm:w-[44px] rounded-lg flex items-center justify-center"
          >
            <img
              src="/admin-notification.png"
              alt="Notifications"
              className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
            />
          </Link>

          {/* Admin Profile */}
          <AdminAvatar />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
