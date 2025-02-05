import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminHeader from '../components/Admin/AdminHeader';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-grow flex flex-col">
        <AdminHeader />
        <main className="p-4">
          <Outlet /> {/* Admin nested routes */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
