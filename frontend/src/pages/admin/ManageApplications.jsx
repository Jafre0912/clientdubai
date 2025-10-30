// --- frontend/src/pages/admin/ManageApplications.jsx ---
// This page will show the list of all applications.

import React, { useState, useEffect } from 'react';
import './AdminPages.css'; // FIX: Corrected the path to be relative to the current folder

const ManageApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Function to fetch all applications
  const fetchApplications = async () => {
    try {
      const adminInfo = JSON.parse(localStorage.getItem('adminInfo'));
      if (!adminInfo || !adminInfo.token) {
        throw new Error('You are not authorized.');
      }

      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };

      const res = await fetch('http://localhost:5000/api/applications', config);
      if (!res.ok) {
        throw new Error('Failed to fetch applications');
      }
      const data = await res.json();
      setApplications(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch applications when the component loads
  useEffect(() => {
    fetchApplications();
  }, []);

  // --- TODO: Add functions to Delete or Update Status ---
  // (These require updates to your applicationController.js)
  const handleDelete = (id) => {
    console.log("Delete", id);
    // Add logic here to call DELETE /api/applications/:id
  };

  const handleUpdateStatus = (id, newStatus) => {
    console.log("Update Status", id, newStatus);
    // Add logic here to call PUT /api/applications/:id/status
  };

  if (loading) {
    return <div className="admin-container"><h2>Loading Applications...</h2></div>;
  }

  if (error) {
    return <div className="admin-container"><h2>Error: {error}</h2></div>;
  }

  return (
    <div className="admin-container">
      <h2>Manage CSP Applications</h2>

      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Email & Mobile</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id}>
                <td>
                  {/* Note: Update photoPath if needed */}
                  <img 
                    src={`http://localhost:5000/${app.photoPath.replace(/\\/g, '/')}`} 
                    alt={app.name} 
                    className="app-photo"
                  />
                </td>
                <td>{app.name}</td>
                <td>
                  {app.email} <br /> {app.mobile}
                </td>
                <td>
                  {app.district}, {app.state}
                </td>
                <td>
                  <span className={`status status-${app.status || 'pending'}`}>
                    {app.status || 'Pending'}
                  </span>
                </td>
                <td className="actions-cell">
                  {/* TODO: Add onClick handlers */}
                  <button 
                    className="btn-approve" 
                    onClick={() => handleUpdateStatus(app._id, 'Approved')}
                  >
                    Approve
                  </button>
                  <button 
                    className="btn-reject" 
                    onClick={() => handleUpdateStatus(app._id, 'Rejected')}
                  >
                    Reject
                  </button>
                  <button 
                    className="btn-delete"
                    onClick={() => handleDelete(app._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageApplications;
