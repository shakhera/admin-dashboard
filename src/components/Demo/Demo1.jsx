import { useState } from "react";
import {
  FaUser,
  FaCartPlus,
  FaFileInvoice,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // For medium devices
  const [isVisible, setIsVisible] = useState(false); // For small devices

  // Toggle sidebar collapse for medium devices
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  // Toggle sidebar visibility for small devices
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      {/* FAB Icon for Small Devices */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-primary text-black rounded-full md:hidden shadow-lg"
        onClick={toggleVisibility}
      >
        {isVisible ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar - Hidden on Small, Toggle-able on Medium */}
      <div
        className={`fixed h-full z-20 transition-all duration-300 shadow-lg
        ${isVisible ? "left-0" : "-left-64"} md:${
          isCollapsed ? "w-20" : "w-64"
        }lg:w-64  md:left-0 lg:left-0
         
        
        `}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2
            className={`${
              isCollapsed ? "hidden" : "block"
            } font-semibold text-lg`}
          >
            PHARMA
          </h2>
          <button
            className=" hidden md:block lg:hidden text-xl p-2 text-secondary"
            onClick={toggleSidebar}
          >
            {isCollapsed ? <FaBars /> : <FaTimes />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex-1 p-4 space-y-6">
          <li className="py-2 flex items-center hover:bg-gray-300 hover:text-black px-4 rounded-lg transition-colors">
            <FaUser className="inline mr-3 text-lg text-gray-500" />
            {!isCollapsed && <span className="text-sm">Dashboard</span>}
          </li>
          <li className="py-2 flex items-center hover:bg-gray-300 hover:text-black px-4 rounded-lg transition-colors">
            <FaCartPlus className="inline mr-3 text-lg text-gray-500" />
            {!isCollapsed && <span className="text-sm">Customers</span>}
          </li>
          <li className="py-2 flex items-center hover:bg-gray-300 hover:text-black px-4 rounded-lg transition-colors">
            <FaFileInvoice className="inline mr-3 text-lg text-gray-500" />
            {!isCollapsed && (
              <span className="text-sm">Inventory/Medicine</span>
            )}
          </li>
          <li className="py-2 flex items-center hover:bg-gray-300 hover:text-black px-4 rounded-lg transition-colors">
            <FaFileInvoice className="inline mr-3 text-lg text-gray-500" />
            {!isCollapsed && <span className="text-sm">Purchase</span>}
          </li>
        </ul>
      </div>

      {/* Overlay for Small Devices */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleVisibility}
        ></div>
      )}
      <div
        className={`flex-1 ml-20 transition-all duration-300 md:ml-${
          isCollapsed ? "20" : "64"
        } lg:ml-64 p-6`}
      >
        {/* Header */}
        <header className="bg-primary text-white p-4 shadow-md">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </header>

        {/* Outlet or Main Content */}
        <main className="mt-6">
          {/* Your dynamic content goes here */}
          <p>
            This is the main content section. It will automatically adjust
            depending on whether the sidebar is collapsed or expanded.
          </p>
        </main>

        <>
          <ul className="flex-1 p-4 space-y-3">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `py-2 flex items-center px-4 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gray-300 text-black"
                      : "hover:bg-gray-300 hover:text-black"
                  }`
                }
              >
                <FaUser className="inline mr-3 text-lg text-gray-500" />
                {!isCollapsed && <span className="text-sm">Dashboard</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/customers"
                className={({ isActive }) =>
                  `py-2 flex items-center px-4 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gray-300 text-black"
                      : "hover:bg-gray-300 hover:text-black"
                  }`
                }
              >
                <FaCartPlus className="inline mr-3 text-lg text-gray-500" />
                {!isCollapsed && <span className="text-sm">Customers</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/inventory"
                className={({ isActive }) =>
                  `py-2 flex items-center px-4 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gray-300 text-black"
                      : "hover:bg-gray-300 hover:text-black"
                  }`
                }
              >
                <FaFileInvoice className="inline mr-3 text-lg text-gray-500" />
                {!isCollapsed && (
                  <span className="text-sm">Inventory/Medicine</span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/purchase"
                className={({ isActive }) =>
                  `py-2 flex items-center px-4 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gray-300 text-black"
                      : "hover:bg-gray-300 hover:text-black"
                  }`
                }
              >
                <FaFileInvoice className="inline mr-3 text-lg text-gray-500" />
                {!isCollapsed && <span className="text-sm">Purchase</span>}
              </NavLink>
            </li>
          </ul>
        </>
      </div>
    </>
  );
};

export default Sidebar;
