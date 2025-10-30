// --- Admin Dashboard (Main Page) ---
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminPages.css'; // Common Admin CSS

const Dashboard = () => {
  // Hum yahaan dummy data use kar rahe hain
  // Asli data ke liye aapko naye API routes banane honge
  const [stats, setStats] = useState({
    applications: 0,
    blogs: 0,
    vacancies: 0,
  });
  
  // Asli data fetch karne ke liye useEffect use karein
  useEffect(() => {
    // Dummy data
    setStats({ applications: 12, blogs: 3, vacancies: 5 });
    
    // Asli Example (Aapko backend mein /api/stats route banana hoga)
    /*
    const fetchStats = async () => {
      const token = JSON.parse(localStorage.getItem('adminInfo')).token;
      const res = await fetch('/api/stats', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setStats(data);
    }
    fetchStats();
    */
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="admin-stats-grid">
        <div className="stat-card">
          <div className="stat-card-title">New Applications</div>
          <div className="stat-card-value">{stats.applications}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-title">Total Blog Posts</div>
          <div className="stat-card-value">{stats.blogs}</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-title">Active Vacancies</div>
          <div className="stat-card-value">{stats.vacancies}</div>
        </div>
      </div>

      <div className="admin-card" style={{marginTop: '2rem'}}>
        <div className="admin-card-header">
          <h2>Quick Actions</h2>
        </div>
        <div className="admin-card-body" style={{display: 'flex', gap: '1rem'}}>
           <Link to="/admin/applications" className="admin-btn">Manage Applications</Link>
           <Link to="/admin/blog" className="admin-btn">Post New Blog</Link>
           <Link to="/admin/vacancies" className="admin-btn">Post New Vacancy</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

