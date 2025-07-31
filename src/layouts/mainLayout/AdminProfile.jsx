import { FaChevronDown } from "react-icons/fa6"; 
import { useState } from "react";
import { Link } from "react-router-dom";

const AdminProfile = () => {
        const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div>
          <div
           
            className=" flex items-center bg-white px-2 py-1 rounded-md gap-2 border-b-2 border-r-2 border-[#E66CE5] min-w-[50px]"
          >
            <button onClick={() => setDropdownOpen(!dropdownOpen)}  >
            <img
              src="/profile.png"
              alt="Admin"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
             
            /></button>
            <span className="text-black hidden sm:flex font-semibold text-[14px] sm:text-base whitespace-nowrap">
              Cyber Bunny
            </span>
             <button className="hidden sm:flex"
              onClick={() => setDropdownOpen(!dropdownOpen)}
         
            >
              <FaChevronDown size={16} className="text-black" />
            </button>
          </div>
           {dropdownOpen && (
              <div className="absolute top-full right-4 mt-2 w-48 bg-white border border-[#E66CE5] rounded-md shadow-md z-50">
                <Link
                  to="/admin-dashboard"
                  className="block px-4 py-2 text-sm hover:bg-[#EDF8F9] text-black"
                >
                  Dashboard
                </Link>
                <Link
                  to="/signin"
                  className="block px-4 py-2 text-sm hover:bg-[#EDF8F9] text-black"
                >
                  SignIn
                </Link>
                <button
                  className="w-full text-left px-4 py-2 text-sm hover:bg-[#EDF8F9] text-black"
                  onClick={() => {
                  
                    console.log("Logout clicked");
                  }}
                >
                  Logout
                </button>
              </div>
            )}
    </div>
  )
}

export default AdminProfile