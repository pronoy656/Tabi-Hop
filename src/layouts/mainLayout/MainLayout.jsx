import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../mainLayout/Header';
import Sidebar from '../mainLayout/Sidebar';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className="flex min-h-screen max-w-[2000px] overflow-hidden relative"
      style={{
        background:
          'linear-gradient(to bottom, #6E67D633, #E66CE533, #F9EAFB4D)',
      }}
    >
      {/* Header  */}
      <div className="fixed top-0 left-0 w-full max-w-[2000px] bg-[#E2E1F7]  z-50">
        <Header
          toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
          isSidebarOpen={isSidebarOpen}
        />
      </div>

      {/* Sidebar - Starts After Header */}
      <div
        className={`fixed top-[80px] left-0 z-40 h-full w-[300px] transform transition-transform duration-300
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0`}
      >
        <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-30  bg-opacity-30 backdrop-blur-md lg:hidden"
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full ml-0 lg:ml-[268px] pt-[80px]">
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-2 sm:px-6 md:px-8 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
