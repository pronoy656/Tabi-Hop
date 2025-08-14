// import { Button } from "@/components/ui/button"
import { Search, Mic } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeNavbar = () => {
  const [activePage, setActivePage] = useState('home');

  const navItems = [
    { id: '/home', label: 'Home' },
    { id: '/home/resources', label: 'Resources' },
    { id: '/home/about', label: 'About' },
  ];
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-0.5">
          <img className="w-[85px] h-[72px]" src="/logo_image.png" alt="" />
          <img className="w-[124px] h-[32px]" src="/logo_name2.png" alt="" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center ml-12 space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              onClick={() => setActivePage(item.id)}
              className={`px-4 py-2 font-semibold transition-colors duration-200 ${
                activePage === item.id
                  ? 'bg-[#f1ddf1] rounded-3xl font-bold  text-[#E66CE5]'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {/* Search icon */}
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Ask Bunny, how you would like to spend the day"
              className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-full bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {/* Mic icon */}
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <Mic className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Auth Buttons */}

        <div className="flex items-center space-x-6">
          <div className="bg-[#E66CE5] w-[121px] h-11 border-2 border-[#E66CE5]  rounded-bl-md rounded-br-md rounded-tr-lg relative">
            <button className=" h-11  bg-white border-2 border-[#E66CE5] rounded-lg absolute top-[-5px] text-[20px] font-medium w-[127px] -ml-[11px]">
              log in
            </button>
          </div>
          <div className="bg-[#E66CE5] w-[145px] h-11 border-2 border-[#E66CE5]  rounded-bl-md rounded-br-md rounded-tr-lg relative">
            <button className=" h-11 bg-white border-2 border-[#E66CE5] px-2 rounded-lg absolute top-[-5px] text-[20px] font-medium w-[150px] -ml-[10px]">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
