import { useState } from "react";
import { FaBell, FaChevronDown, FaSearch } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white flex justify-between items-center p-4 shadow-md ">
      {/* Search Bar */}
      <div className="w flex items-center space-x-2 ml-6">
        <input
          type="text"
          placeholder="Search..."
          className="pl-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-40 md:w-56 lg:w-64 placeholder-gray-400"
          aria-label="Search"
        />
        <FaSearch className="text-gray-400" />
      </div>

      {/* Notification and Profile */}
      <div className="flex items-center space-x-4">
        <button
          aria-label="Notifications"
          className="relative focus:outline-none hover:text-primary transition-colors"
        >
          <FaBell size={24} className="text-gray-500" />
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              width={40}
              height={40}
              className="rounded-full bg-slate-500 object-cover"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
              alt="avatar profile"
            />
            <span className="hidden md:block ml-2 font-medium text-sm">
              Bradly Robin
            </span>
            <span className="ml-1">
              <FaChevronDown
                className={`text-gray-500 duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </span>
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
              <a
                href="#profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="#settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="#logout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-400"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
