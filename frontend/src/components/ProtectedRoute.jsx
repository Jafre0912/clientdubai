// --- Protected Route Component ---
// Yeh check karega ki admin logged in hai ya nahi
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const adminInfo = JSON.parse(localStorage.getItem('adminInfo'));

  // Check karein ki token hai aur valid hai (hum yahaan sirf token check kar rahe hain)
  return adminInfo && adminInfo.token ? <Outlet /> : <Navigate to="/admin-login" replace />;
};

export default ProtectedRoute;

