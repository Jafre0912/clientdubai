import React from 'react';
import './Register.css'; // Import the new CSS file

// --- Icons ---
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.04 11.04 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);
const IdIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h3" />
    </svg>
);

const Register = () => {
  return (
    <main className="register-page">
      <div className="reg-hero">
        <div className="reg-hero-content">
          <h1>CSP Online Registration</h1>
          <p>Apply CSP Online 2025</p>
        </div>
      </div>

      <div className="reg-form-container">
        <form className="reg-form">
          <div className="reg-form-grid">
            
            {/* --- Personal Details --- */}
            <div className="reg-form-group span-2">
              <h3 className="reg-section-title">Personal Details</h3>
            </div>
            
            <div className="reg-form-group">
              <label htmlFor="fullName">Your Full Name</label>
              <input type="text" id="fullName" className="reg-input" placeholder="e.g. Ramesh Kumar" />
            </div>

            <div className="reg-form-group">
              <label htmlFor="fatherName">Father Name</label>
              <input type="text" id="fatherName" className="reg-input" placeholder="e.g. Suresh Kumar" />
            </div>

            <div className="reg-form-group">
              <label htmlFor="aadhar">Aadhar Number</label>
              <input type="text" id="aadhar" className="reg-input" placeholder="XXXX-XXXX-XXXX" />
            </div>

            <div className="reg-form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="reg-input" placeholder="you@example.com" />
            </div>

            <div className="reg-form-group">
              <label htmlFor="mobile">Mobile No</label>
              <input type="tel" id="mobile" className="reg-input" placeholder="+91 XXXXX XXXXX" />
            </div>

            <div className="reg-form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" className="reg-input" />
            </div>

            <div className="reg-form-group">
              <label htmlFor="qualification">Highest Qualification</label>
              <input type="text" id="qualification" className="reg-input" placeholder="e.g. B.Com, 12th Pass" />
            </div>

            <div className="reg-form-group">
              <label htmlFor="photo">Upload Your Photo</label>
              <input type="file" id="photo" className="reg-file-input" />
            </div>

            <fieldset className="reg-form-group">
              <legend>Social Category / सामाजिक वर्ग</legend>
              <div className="reg-radio-group">
                <label><input type="radio" name="category" value="general" /> General</label>
                <label><input type="radio" name="category" value="sc" /> SC</label>
                <label><input type="radio" name="category" value="st" /> ST</label>
                <label><input type="radio" name="category" value="obc" /> OBC</label>
              </div>
            </fieldset>

            <fieldset className="reg-form-group">
              <legend>Gender</legend>
              <div className="reg-radio-group">
                <label><input type="radio" name="gender" value="male" /> Male</label>
                <label><input type="radio" name="gender" value="female" /> Female</label>
              </div>
            </fieldset>

            <fieldset className="reg-form-group">
              <legend>Are You in Job</legend>
              <div className="reg-radio-group">
                <label><input type="radio" name="job" value="yes" /> Yes</label>
                <label><input type="radio" name="job" value="no" /> No</label>
              </div>
            </fieldset>

            <div className="reg-form-group">
              <label htmlFor="income">Monthly income from all sources</label>
              <input type="text" id="income" className="reg-input" placeholder="e.g. 20,000" />
            </div>

            <div className="reg-form-group">
              <label htmlFor="property">Type of Property for CSP outlet</label>
              <input type="text" id="property" className="reg-input" placeholder="e.g. Rented Shop, Own Shop" />
            </div>
            
            <div className="reg-form-group">
              <label htmlFor="receipt">If cash deposit then Cash Receipt No.</label>
              <input type="text" id="receipt" className="reg-input" placeholder="Optional" />
            </div>

            {/* --- Address Details --- */}
            <div className="reg-form-group span-2">
              <h3 className="reg-section-title">Address Details</h3>
            </div>

            <div className="reg-form-group">
              <label htmlFor="village">Village / गांव</label>
              <input type="text" id="village" className="reg-input" />
            </div>

            <div className="reg-form-group">
              <label htmlFor="panchayat">Panchayat & Block</label>
              <input type="text" id="panchayat" className="reg-input" />
            </div>

            <div className="reg-form-group">
              <label htmlFor="post">Post / डाक</label>
              <input type="text" id="post" className="reg-input" />
            </div>
            
            <div className="reg-form-group">
              <label htmlFor="district">District / जिला</label>
              <input type="text" id="district" className="reg-input" />
            </div>

            <div className="reg-form-group">
              <label htmlFor="state">State / राज्य</label>
              <input type="text" id="state" className="reg-input" />
            </div>

            <div className="reg-form-group">
              <label htmlFor="pincode">Pin Code / पिन कोड</label>
              <input type="text" id="pincode" className="reg-input" />
            </div>
            
            {/* --- Bank Details --- */}
            <div className="reg-form-group span-2">
              <h3 className="reg-section-title">Bank Details</h3>
            </div>

            <div className="reg-form-group">
              <label htmlFor="nationalBank">Nationalised Bank</label>
              <select id="nationalBank" className="reg-select">
                <option value="">-- Select Bank --</option>
                <option value="sbi">State Bank of India</option>
                <option value="pnb">Punjab National Bank</option>
                <option value="bob">Bank of Baroda</option>
                <option value="boi">Bank of India</option>
              </select>
            </div>
            
            <div className="reg-form-group">
              <label htmlFor="privateBank">Private Sector Banks</label>
              <select id="privateBank" className="reg-select">
                <option value="">-- Select Bank --</option>
                <option value="icici">ICICI Bank</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="axis">Axis Bank</option>
              </select>
            </div>
            
            {/* --- Submit --- */}
            <div className="reg-form-group span-2">
              <button type="submit" className="reg-submit-btn">SUBMIT</button>
            </div>

          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
