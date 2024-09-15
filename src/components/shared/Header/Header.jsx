import { FaBell, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-white flex justify-between items-center p-4 shadow-md">
      {/* Search Bar */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
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

        <div className="flex items-center">
          <img
            width={500}
            height={500}
            className="size-10 rounded-full bg-slate-500 object-cover"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
            alt="avatar navigate ui"
          />
          <span className="ml-2 font-medium text-sm">Bradly Robin</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
