// --- Manage Vacancies Page ---
import React, { useState, useEffect } from "react";
import "./AdminPages.css"; // Common Admin CSS

const ManageVacancies = () => {
  const [vacancies, setVacancies] = useState([]);
  const [location, setLocation] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getToken = () => JSON.parse(localStorage.getItem("adminInfo"))?.token;

  const fetchVacancies = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/vacancies");
      if (!res.ok) throw new Error("Failed to fetch vacancies");
      const data = await res.json();
      setVacancies(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVacancies();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/vacancies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ location, state, district }),
      });
      if (!res.ok) throw new Error("Failed to create vacancy");

      setLocation("");
      setState("");
      setDistrict("");
      fetchVacancies(); // List refresh karein
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="admin-card">
        <div className="admin-card-header">
          <h2>Create New Vacancy</h2>
        </div>
        <div className="admin-card-body">
          {error && <p className="error-text">{error}</p>}
          <form className="admin-form" onSubmit={submitHandler}>
            <div className="admin-form-group">
              <label>Location (e.g., Block/Town)</label>
              <input
                type="text"
                className="admin-input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <div className="admin-form-group">
              <label>District</label>
              <input
                type="text"
                className="admin-input"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
              />
            </div>
            <div className="admin-form-group">
              <label>State</label>
              <input
                type="text"
                className="admin-input"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="admin-btn">
              Post Vacancy
            </button>
          </form>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h2>Existing Vacancies</h2>
        </div>
        <div className="admin-card-body">
          {loading && <p className="loading-text">Loading Vacancies...</p>}
          <ul className="admin-list">
            {vacancies.map((vac) => (
              <li key={vac._id} className="admin-list-item">
                <div>
                  <h3>{vac.location}</h3>
                  <p>
                    {vac.district}, {vac.state} | Status: {vac.status}
                  </p>
                </div>
                <button className="admin-btn btn-danger">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ManageVacancies;
