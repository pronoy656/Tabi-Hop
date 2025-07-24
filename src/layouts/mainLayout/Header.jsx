import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
   <header className="w-full bg-[#EDF8F9] px-4 lg:px-8 py-2 shadow-sm">
  <div className="flex items-center justify-between gap-2 flex-nowrap overflow-hidden">
    
    {/* Left: Toggle + Logo */}
    <div className="flex items-center gap-2 min-w-[120px]">
      {/* Sidebar toggle (mobile only) */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden text-[#E66CE5] bg-white p-2 h-[44px] w-[44px] rounded-lg border-b-2 border-r-2 border-[#E66CE5]"
      >
        {isSidebarOpen ? <MdClose size={24} /> : <RxHamburgerMenu size={24} />}
      </button>

      {/* Logo */}
      <div className="flex items-center justify-center gap-1">
        <img
          src="/logo_image.png"
          className="h-9 w-9 object-contain"
          alt="Logo"
        />
        <img
          src="/logo_name.png"
          className="h-6 w-auto sm:h-7 object-contain"
          alt="Logo Name"
        />
      </div>
    </div>

    {/* Center: Search (hide on small screens) */}
    <div className="hidden md:flex items-center bg-white border-b-4 border-r-4 border-[#E66CE5] rounded-lg px-2 py-1 w-full max-w-[380px] lg:max-w-[484px] xl:max-w-[600px] h-10">
      <SearchOutlined className="text-[#4a4a32]" />
      <Input
        placeholder="Search here"
        bordered={false}
        className="ml-2 focus:outline-none w-full"
      />
    </div>

    {/* Right: Icons + Profile */}
    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 min-w-fit">
      <Link
        to="/gemss"
        className="bg-white p-2 h-[40px] w-[40px] sm:h-[44px] sm:w-[44px] rounded-lg border-b-2 border-r-2 border-[#E66CE5] flex items-center justify-center"
      >
        <img src="/diamond.png" alt="Gems" className="h-5 w-5 sm:h-6 sm:w-6 object-contain" />
      </Link>
      <Link
        to="/notifications"
        className="bg-white p-2 h-[40px] w-[40px] sm:h-[44px] sm:w-[44px] rounded-lg border-b-2 border-r-2 border-[#E66CE5] flex items-center justify-center"
      >
        <img src="/notification.png" alt="Notifications" className="h-5 w-5 sm:h-6 sm:w-6 object-contain" />
      </Link>

      <Link
        to="/admin-profile"
        className=" hidden sm:flex items-center bg-white px-2 py-1 rounded-md gap-2 border-b-2 border-r-2 border-[#E66CE5] min-w-[110px]"
      >
        <img
          src="/profile.png"
          alt="Admin"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
          style={{ border: "2px solid #0B3666" }}
        />
        <span className="text-black font-semibold text-[14px] sm:text-base whitespace-nowrap">
          Cyber Bunny
        </span>
      </Link>
    </div>
  </div>
</header>

  );
};

export default Header;
