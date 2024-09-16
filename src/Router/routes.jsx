import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../Layout/AdminDashboard";
import Dashboard from "../pages/AdminDashboard/Dashboard/Dashboard";
import Purchase from "../pages/AdminDashboard/Purchase/Purchase";
import Supplier from "../pages/AdminDashboard/Supplier/Supplier";
import Inventory from "../pages/AdminDashboard/Inventory/Inventory";
import Customers from "../pages/AdminDashboard/Customers/Customers";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
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
