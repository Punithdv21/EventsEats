import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../layouts/MainLayout.css';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <Outlet /> {/* Renders nested routes */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
