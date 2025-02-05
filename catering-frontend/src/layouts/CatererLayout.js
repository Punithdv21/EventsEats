import React from 'react';
import { Outlet } from 'react-router-dom';
import CatererSidebar from '../components/Caterer/CatererSidebar';
import CatererHeader from '../components/Caterer/CatererHeader';

const CatererLayout = () => {
  return (
    <div className="flex min-h-screen">
      <CatererSidebar />
      <div className="flex-grow flex flex-col">
        <CatererHeader />
        <main className="p-4">
          <Outlet /> {/* Caterer-specific pages */}
        </main>
      </div>
    </div>
  );
};

export default CatererLayout;
