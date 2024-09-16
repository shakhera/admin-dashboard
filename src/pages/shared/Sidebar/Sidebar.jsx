import { useState } from "react";
import {
  FaFileInvoice,
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaUsers,
  FaBuilding,
  FaPills,
  FaShoppingCart,
  FaUndo,
  FaBoxes,
  FaUniversity,
  FaBook,
  FaChartBar,
  FaUserTie,
  FaMoneyBill,
  FaServicestack,
  FaSearch,
  FaCogs,
  FaSync,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <FaTachometerAlt /> },
    { name: "Customer", path: "/customers", icon: <FaUsers /> },
    { name: "Supplier", path: "/supplier", icon: <FaBuilding /> },
    { name: "Inventory/Medicine", path: "/inventory", icon: <FaPills /> },
    { name: "Purchash", path: "/purchase", icon: <FaShoppingCart /> },
    { name: "Invoice", path: "/invoice", icon: <FaFileInvoice /> },
    { name: "Return", path: "/return", icon: <FaUndo /> },
    { name: "Stock", path: "/stock", icon: <FaBoxes /> },
    { name: "Bank", path: "/bank", icon: <FaUniversity /> },
    { name: "Accounts", path: "/accounts", icon: <FaBook /> },
    { name: "Reports", path: "/reports", icon: <FaChartBar /> },
    { name: "Human Resource", path: "/human-resource", icon: <FaUserTie /> },
    { name: "Tax", path: "/tax", icon: <FaMoneyBill /> },
    { name: "Services", path: "/services", icon: <FaServicestack /> },
    { name: "Search", path: "/search", icon: <FaSearch /> },
    { name: "Application Setting", path: "/settings", icon: <FaCogs /> },
    { name: "Auto Update", path: "/auto-update", icon: <FaSync /> },
  ];

  return (
    <>
      {/* FAB Icon for Small Devices */}
      <button
        className="fixed top-5 left-0 z-40 p-2  text-black rounded-full md:hidden shadow-lg transition-transform duration-500"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar - Hidden on Small, Toggle-able on Medium */}
      <div
        className={` h-full z-20 transition-transform duration-500 shadow-lg bg-white text-gray-700
            ${isVisible ? "left-0 " : "-left-64"} 
            ${isCollapsed ? "w-0 md:w-20" : "w-64"} md:left-0 
            lg:w-64 lg:left-0 }
        `}
      >
        <div className="p-4 flex justify-between items-center md:border-b border-gray-700">
          <div
            className={`${
              isCollapsed ? "hidden" : "block"
            } lg:block font-poppins text-lg md:text-xl text-gray-900`}
          >
            <h2 className="border-b-2 border-gray-700 pb-1">Pharma</h2>
            {/* Second Part of the Logo */}
            <h2>Solutions</h2>
          </div>
          <button
            className=" hidden md:block lg:hidden text-xl p-2 text-gray-800 duration-500"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <FaBars /> : <FaTimes />}
          </button>
        </div>

        {/* Navigation Links */}

        <ul className="flex flex-col mt-4 pb-10 space-y-2 overflow-y-auto h-full">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-2 hover:bg-gray-200 cursor-pointer overflow-y-hidden ${
                    isActive ? "bg-gray-100 text-black" : ""
                  }`
                }
                onClick={() => setIsVisible(false)}
              >
                <span className="text-lg">{item.icon}</span>
                <span
                  className={`ml-4 ${
                    isCollapsed ? "hidden" : "block"
                  } lg:block`}
                >
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for Small Devices */}

      {isVisible && (
        <div
          className="fixed  inset-y-0 left-0 w-56   bg-white z-30 md:hidden"
          onClick={() => setIsVisible(!isVisible)}
        >
          {/* Logo Section */}
          <div className="flex flex-col items-center py-4 border-b-2 border-gray-300">
            <div className="font-logo text-lg text-gray-900">
              <h2 className="border-b-2 front-logo border-gray-700 pb-1">
                Pharma
              </h2>
              <h2>Solutions</h2>
            </div>
          </div>

          {/* Navigation Menu */}
          <ul className="flex flex-col mt-4  py-10 space-y-2 overflow-y-auto h-full">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center p-2 hover:bg-gray-300 cursor-pointer overflow-y-hidden space-x-3 ${
                      isActive ? "bg-gray-200 text-black" : ""
                    }`
                  }
                  onClick={() => setIsVisible(false)}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
