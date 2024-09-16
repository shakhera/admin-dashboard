import { Outlet } from "react-router-dom";
import Sidebar from "../pages/shared/Sidebar/Sidebar";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col ">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboard;
