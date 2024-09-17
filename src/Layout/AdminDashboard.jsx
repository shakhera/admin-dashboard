import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/shared/Sidebar/Sidebar';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';

const AdminDashboard = () => {
  return (
    <div className='flex h-screen  overflow-hidden '>
      <Sidebar />
      <div className='flex flex-1 flex-col w-full '>
        <Header />
        <main className='overflow-y-auto overflow-x-hidden min-h-[calc(100vh-175px)] md:min-h-[calc(100vh-150px)]'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboard;
