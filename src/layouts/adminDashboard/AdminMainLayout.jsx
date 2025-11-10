import { useState } from "react";
import { Outlet } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdminMainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen overflow-hidden relative">
      {/* Header start after sidebar */}
      <div className="fixed  top-0 left-0 w-full z-50 md:left-[300px] md:w-[calc(100%-300px)]">
        <AdminHeader
          toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
          isSidebarOpen={isSidebarOpen}
        />
      </div>

      {/* Sidebar  */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-[300px] bg-[#131927] transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0`}
      >
        <AdminSidebar closeSidebar={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-30  bg-opacity-30 backdrop-blur-md lg:hidden"
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full lg:ml-[300px] ">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pt-[100px] px-4 sm:px-6 md:px-8 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminMainLayout;
