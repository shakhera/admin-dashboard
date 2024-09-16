import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Sidebar from "../components/shared/Sidebar/Sidebar";
import Footer from "../components/shared/Footer/Footer";

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
