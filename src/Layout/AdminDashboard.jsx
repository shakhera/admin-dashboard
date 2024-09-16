import { Outlet } from "react-router-dom";
import Sidebar from "../pages/shared/Sidebar/Sidebar";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";

const AdminDashboard = () => {
  return (
    <>
      <div className="flex h-screen w-screen">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden md:ml-20 lg:ml-64">
          <Header />
          <main className="flex-1 p-6 overflow-y-auto overflow-x-auto ">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
