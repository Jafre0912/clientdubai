// --- THIS IS THE CORRECT (EMAIL) VERSION ---
// This version is for your localhost server.

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// --- FIX: Import your external CSS file ---
import './AdminLogin.css'; 

const AdminLogin = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const adminInfo = localStorage.getItem('adminInfo');
    if (adminInfo) {
      navigate('/admin');
    }
  }, [navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // The URL is '/api/admin/login'
      const res = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), 
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      localStorage.setItem('adminInfo', JSON.stringify(data));
      navigate('/admin');

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    // --- FIX: Removed the <AdminLoginCSS /> component ---
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={submitHandler}>
          <h1>Admin Login</h1>
          {error && <p className="login-error">{error}</p>}
          
          <div className="login-form-group">
            <label htmlFor="email">Email</label> 
            <input
              type="email" 
              id="email"
              value={email}
              // --- FIX: Corrected typo (was e.Tira.value) ---
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

// --- FIX: Changed default export back to AdminLogin ---
export default AdminLogin;

