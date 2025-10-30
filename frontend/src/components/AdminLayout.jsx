// --- Admin Dashboard Layout (Sidebar + Header) ---
import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './AdminLayout.css'; // Naya CSS

const AdminLayout = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('adminInfo');
    navigate('/admin-login');
  };

  return (
    <div className="admin-layout">
      {/* --- Sidebar --- */}
      <nav className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <ul className="admin-nav-list">
          <li>
            <NavLink to="/admin" end>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/admin/applications">Applications</NavLink>
          </li>
          <li>
            <NavLink to="/admin/blog">Manage Blog</NavLink>
          </li>
          <li>
            <NavLink to="/admin/vacancies">Manage Vacancies</NavLink>
          </li>
        </ul>
        <button onClick={logoutHandler} className="admin-logout-btn">
          Logout
        </button>
      </nav>

      {/* --- Main Content Area --- */}
      <main className="admin-main-content">
        <header className="admin-main-header">
          <h1>Welcome, Admin</h1>
        </header>
        <div className="admin-page-content">
          <Outlet /> {/* Yahaan aapke pages render honge */}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;

