// import { Button } from "@/components/ui/button"
import { Search, Mic, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeNavbar = () => {
  const [activePage, setActivePage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: '/home', label: 'Home' },
    { id: '/home/resources', label: 'Resources' },
    { id: '/home/about', label: 'About' },
  ];
  return (
    <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-0.5">
          <img
            className="w-[60px] h-[50px] sm:w-[70px] sm:h-[60px] lg:w-[85px] lg:h-[72px]"
            src="/updated-logo.png"
            alt=""
          />
          <img
            className="hidden sm:block w-[90px] h-[24px] sm:w-[110px] sm:h-[28px] lg:w-[124px] lg:h-[32px]"
            src="/updated-name.png"
            alt=""
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center ml-12 space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              onClick={() => setActivePage(item.id)}
              className={`px-4 py-2 font-semibold transition-colors duration-200 ${
                activePage === item.id
                  ? 'bg-[#2213ee29] rounded-3xl font-bold text-[#6E67D6]'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        <div className="sm:flex lg:flex items-center flex-1 max-w-md mx-4 lg:mx-8">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Ask Bunny, how you would like to spend the day"
              className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-full bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <Mic className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Mobile Search Button */}
        <div className="hidden md:flex lg:hidden">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Search className="h-6 w-6" />
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="hidden sm:flex items-center space-x-2 lg:space-x-6">
          <Link to={'/signin/log-in'}>
            <div className="bg-[#6E67D6] hover:bg-[#d5d3f3] w-[100px] lg:w-[121px] h-9 lg:h-11 border-2 border-[#6E67D6] rounded-bl-md rounded-br-md rounded-tr-lg relative">
              <button className="h-9 lg:h-11 bg-white border-2 border-[#6E67D6] hover:bg-[#6E67D6] hover:text-white rounded-lg absolute top-[-5px] text-[16px] lg:text-[20px] font-medium w-[105px] lg:w-[127px] -ml-[8px] lg:-ml-[11px]">
                log in
              </button>
            </div>
          </Link>
          <Link to={'/signin'}>
            <div className="bg-[#6E67D6] w-[120px] lg:w-[145px] h-9 lg:h-11 border-2 border-[#6E67D6] rounded-bl-md rounded-br-md rounded-tr-lg relative">
              <button className="h-9 lg:h-11 bg-white border-2 border-[#6E67D6] px-2 rounded-lg absolute top-[-5px] text-[14px] lg:text-[20px] font-medium w-[125px] lg:w-[150px] -ml-[8px] lg:-ml-[10px]">
                Sign up for free
              </button>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-2 space-y-1">
            {/* Mobile Navigation Links */}
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-4 py-3 font-semibold transition-colors duration-200 rounded-lg ${
                  activePage === item.id
                    ? 'bg-[#2213ee29] text-[#6E67D6]'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Search */}
            <div className="px-4 py-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Ask Bunny..."
                  className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-full bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <Mic className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="px-4 py-3 space-y-6">
              <Link to={'/signin/log-in'}>
                <button className="w-full mb-4 py-2 px-4 bg-white border-2 border-[#6E67D6] text-[#6E67D6] rounded-lg font-medium hover:bg-[#6E67D6] hover:text-white transition-colors">
                  Log in
                </button>
              </Link>
              <Link to={'/signin'}>
                <button className="w-full py-2 px-4 bg-[#6E67D6] text-white rounded-lg font-medium hover:bg-white hover:text-[#6E67D6] hover:border-2 border-[#6E67D6] transition-colors">
                  Sign up for free
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HomeNavbar;
