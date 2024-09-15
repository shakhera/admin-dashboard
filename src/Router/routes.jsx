import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../Layout/AdminDashboard";
import Dashboard from "../components/AdminDashboard/Dashboard/Dashboard";
import Purchase from "../components/AdminDashboard/Purchase/Purchase";
import Customers from "../components/AdminDashboard/Customers/Customers";
import Inventory from "../components/AdminDashboard/Inventory/Inventory";
import Supplier from "../components/AdminDashboard/Supplier/Supplier";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AdminDashboard />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "purchase",
        element: <Purchase />,
      },
      {
        path: "supplier",
        element: <Supplier />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
    ],
  },
]);

export default routes;
