import React from 'react';
import './VacantPlace.css'; // Import the new CSS file

// --- SVG Icons ---
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={20} height={20}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={20} height={20}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);


const VacantPlace = () => {

  // Dummy data for vacant places
  const vacancies = [
    { location: "Jaipur", district: "Jaipur", state: "Rajasthan", type: "Urban", status: "Available" },
    { location: "Patna City", district: "Patna", state: "Bihar", type: "Urban", status: "Available" },
    { location: "Lucknow Main", district: "Lucknow", state: "Uttar Pradesh", type: "Urban", status: "Available" },
    { location: "Bhopal", district: "Bhopal", state: "Madhya Pradesh", type: "Urban", status: "Available" },
    { location: "Arrah", district: "Bhojpur", state: "Bihar", type: "Rural", status: "Available" },
    { location: "Indore", district: "Indore", state: "Madhya Pradesh", type: "Urban", status: "Filled" },
    { location: "Ajmer", district: "Ajmer", state: "Rajasthan", type: "Semi-Urban", status: "Available" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd filter the list based on form inputs
    alert("Searching for vacancies... (This is a demo)");
  };

  return (
    <main className="vacant-page">

      {/* --- Hero Section --- */}
      <section className="vp-hero">
        <div className="vp-hero-content">
          <h1>Find Vacant Locations</h1>
          <p>Search for CSP opportunities in your area.</p>
        </div>
      </section>

      {/* --- Search Filter Section --- */}
      <section className="vp-search-container">
        <form className="vp-search-form" onSubmit={handleSubmit}>
          
          <div className="vp-form-group">
            <label htmlFor="state">Select State</label>
            <select id="state" name="state" className="vp-select" defaultValue="">
              <option value="" disabled>Select State</option>
              <option value="Bihar">Bihar</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
            </select>
          </div>

          <div className="vp-form-group">
            <label htmlFor="district">Select District</label>
            <select id="district" name="district" className="vp-select" defaultValue="">
              <option value="" disabled>Select District</option>
              <option value="Patna">Patna</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Bhopal">Bhopal</option>
            </select>
          </div>

          <div className="vp-form-group">
            <label htmlFor="city">Enter City/Town</label>
            <input type="text" id="city" name="city" className="vp-input" placeholder="e.g., Patna City" />
          </div>

          <button type="submit" className="vp-search-btn">
            <SearchIcon />
            Search
          </button>
        </form>
      </section>

      {/* --- Results Section --- */}
      <section className="vp-results-container">
        <h2>Current Openings</h2>

        {/* --- List Header (Desktop Only) --- */}
        <div className="vp-list-header">
          <span>Location</span>
          <span>District</span>
          <span>State</span>
          <span>Status</span>
          <span></span> {/* Empty for button */}
        </div>

        {/* --- Vacancy List --- */}
        <div className="vp-vacancy-list">
          {vacancies.map((item, index) => (
            <div key={index} className="vp-vacancy-card">
              
              <div className="vp-location">
                <span className="vp-label">Location:</span>
                <h3>{item.location}</h3>
                <p>{item.type}</p>
              </div>

              <div>
                <span className="vp-label">District:</span>
                <span>{item.district}</span>
              </div>
              
              <div>
                <span className="vp-label">State:</span>
                <span>{item.state}</span>
              </div>
              
              <div>
                <span className="vp-label">Status:</span>
                <span className={item.status === 'Available' ? 'vp-status-available' : 'vp-status-filled'}>
                  {item.status}
                </span>
              </div>

              <a href="#" className="vp-apply-btn">Apply Now</a>

            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default VacantPlace;

