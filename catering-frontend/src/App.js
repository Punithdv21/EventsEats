import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import CatererLayout from './layouts/CatererLayout';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import BookingPage from './pages/BookingPage';
import MenuPage from './pages/MenuPage';
import PaymentPage from './pages/PaymentPage';
import './pages/RegisterPage.css';
import './layouts/MainLayout.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          {/* Add more admin routes here */}
        </Route>

        {/* Caterer Routes */}
        <Route path="/caterer" element={<CatererLayout />}>
          <Route path="/caterer/booking" element={<BookingPage />} />
          <Route path="/caterer/menu" element={<MenuPage />} />
          <Route path="/caterer/payment" element={<PaymentPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
