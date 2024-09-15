import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Sidebar from "../components/shared/Sidebar/Sidebar";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col md:ml-64">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
