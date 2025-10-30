import React from 'react';
import './Contact.css'; // Import the new CSS file

// --- Icons ---
const CheckIcon = () => (
  <svg className="cr-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const UserIcon = () => (
  <svg className="cr-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg className="cr-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const SparklesIcon = () => (
  <svg className="cr-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);
const DesktopIcon = () => (
  <svg className="cr-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const WifiIcon = () => (
  <svg className="cr-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038C7.226 14.008 7 12.55 7 11c0-1.55.226-3.008 1.288-4.038M15.712 15.038C16.774 14.008 17 12.55 17 11c0-1.55-.226-3.008-1.288-4.038M12 18a.969.969 0 00.969-.969V17.03a.969.969 0 00-.969-.969A.969.969 0 0011.03 17.03v.001A.969.969 0 0012 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.416 18.892a11.04 11.04 0 00-14.832 0M21.71 21.19a15.083 15.083 0 00-19.42 0" />
  </svg>
);
const BatteryIcon = () => (
  <svg className="cr-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h15V15H4.5v-4.5zM3.75 18h16.5v-2.25A1.125 1.125 0 0019.125 15H4.875A1.125 1.125 0 003.75 16.125V18zM3 9.75h18v-3A1.125 1.125 0 0019.875 5.625H4.125A1.125 1.125 0 003 6.75v3z" />
  </svg>
);

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form Submitted! (This is a demo)");
  };

  return (
    <main className="contact-register-page">
      <div className="cr-container">

        {/* --- Sticky Sidebar --- */}
        <aside className="cr-sidebar">
          <h3>Registration Portal</h3>
          <nav className="cr-sidebar-nav">
            <ul>
              <li><a href="#eligibility">Eligiblity</a></li>
              <li><a href="#requirements">Requirements</a></li>
              <li><a href="#register-form">Apply Now</a></li>
              <li><a href="#contact-info">Contact Info</a></li>
            </ul>
          </nav>
          <div className="cr-sidebar-links">
            <p>Quick Links</p>
            <a href="#">Apply Online for CSP</a>
            <a href="#">CSP Bank Mitra Registration</a>
            <a href="#">CSP Registration Details</a>
          </div>
        </aside>

        {/* --- Main Content Area --- */}
        <section className="cr-main-content">
          
          {/* --- Header --- */}
          <div className="cr-header">
            <h1>CSP Online Registration</h1>
            <p>Apply CSP Online 2025</p>
          </div>

          {/* --- Eligibility Section --- */}
          <section id="eligibility" className="cr-section">
            <h2 className="cr-section-title">Eligiblity for Opening & Maintaining of CSP</h2>
            <div className="cr-card-grid">
              <div className="cr-card">
                <CheckIcon />
                <strong>At least 21 Years of Age</strong>
                <p>उम्र कम-से-कम 21 वर्ष</p>
              </div>
              <div className="cr-card">
                <DesktopIcon />
                <strong>Computer Literate</strong>
                <p>कम्प्यूटर का सामान्य ज्ञान</p>
              </div>
              <div className="cr-card">
                <BriefcaseIcon />
                <strong>Willing to Invest</strong>
                <p>कुछ पूंजी लगा सकने की क्षमता</p>
              </div>
              <div className="cr-card">
                <UserIcon />
                <strong>Responsible & Unemployed</strong>
                <p>जिम्मेवार और बेरोजगार ब्यक्ति</p>
              </div>
            </div>
          </section>

          {/* --- Requirements Section --- */}
          <section id="requirements" className="cr-section">
            <h2 className="cr-section-title">Requirements</h2>
            <div className="cr-card-grid-small">
              <div className="cr-card-small">
                <SparklesIcon />
                <p>250 to 300 sq feet outlet</p>
              </div>
              <div className="cr-card-small">
                <DesktopIcon />
                <p>One Laptop or Desktop</p>
              </div>
              <div className="cr-card-small">
                <WifiIcon />
                <p>Internet Connectivity</p>
              </div>
              <div className="cr-card-small">
                <BatteryIcon />
                <p>Electricity Backup</p>
              </div>
            </div>
          </section>
          
          {/* --- Registration Form Section --- */}
          <section id="register-form" className="cr-section">
            <h2 className="cr-section-title">Online Register</h2>
            <form className="cr-form" onSubmit={handleSubmit}>
              
              <div className="cr-form-group">
                <label htmlFor="fullName">Your Full Name</label>
                <input type="text" id="fullName" name="fullName" required />
              </div>
              
              <div className="cr-form-group">
                <label htmlFor="fatherName">Father Name</label>
                <input type="text" id="fatherName" name="fatherName" required />
              </div>

              <div className="cr-form-group">
                <label htmlFor="aadhar">Aadhar Number</label>
                <input type="text" id="aadhar" name="aadhar" required />
              </div>
              
              <div className="cr-form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="cr-form-group">
                <label htmlFor="mobile">Mobile No</label>
                <input type="tel" id="mobile" name="mobile" required />
              </div>

              <div className="cr-form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" required />
              </div>

              <div className="cr-form-group span-2">
                <label htmlFor="qualification">Highest Qualification</label>
                <input type="text" id="qualification" name="qualification" />
              </div>

              <div className="cr-form-group radio-group span-2">
                <label>Social Category / सामाजिक वर्ग</label>
                <div>
                  <input type="radio" id="gen" name="category" value="General" />
                  <label htmlFor="gen">General</label>
                  <input type="radio" id="sc" name="category" value="SC" />
                  <label htmlFor="sc">SC</label>
                  <input type="radio" id="st" name="category" value="ST" />
                  <label htmlFor="st">ST</label>
                  <input type="radio" id="obc" name="category" value="OBC" />
                  <label htmlFor="obc">OBC</label>
                </div>
              </div>

              <div className="cr-form-group radio-group">
                <label>Gender</label>
                <div>
                  <input type="radio" id="male" name="gender" value="Male" />
                  <label htmlFor="male">Male</label>
                  <input type="radio" id="female" name="gender" value="Female" />
                  <label htmlFor="female">Female</label>
                </div>
              </div>

              <div className="cr-form-group radio-group">
                <label>Are You in Job</label>
                <div>
                  <input type="radio" id="jobYes" name="inJob" value="Yes" />
                  <label htmlFor="jobYes">Yes</label>
                  <input type="radio" id="jobNo" name="inJob" value="No" />
                  <label htmlFor="jobNo">No</label>
                </div>
              </div>

              <div className="cr-form-group">
                <label htmlFor="income">Monthly income from all sources</label>
                <input type="text" id="income" name="income" />
              </div>

              <div className="cr-form-group">
                <label htmlFor="propertyType">Type of Property for CSP outlet</label>
                <input type="text" id="propertyType" name="propertyType" />
              </div>

              <div className="cr-form-group">
                <label htmlFor="receiptNo">If cash deposit then Cash Receipt No.</label>
                <input type="text" id="receiptNo" name="receiptNo" />
              </div>

              <div className="cr-form-group">
                <label htmlFor="photo">Upload Your Photo</label>
                <input type="file" id="photo" name="photo" className="cr-file-input" />
              </div>

              <div className="cr-form-group">
                <label htmlFor="village">Village / गांव</label>
                <input type="text" id="village" name="village" required />
              </div>

              <div className="cr-form-group">
                <label htmlFor="panchayat">Panchayat & Block</label>
                <input type="text" id="panchayat" name="panchayat" required />
              </div>

              <div className="cr-form-group">
                <label htmlFor="post">Post / डाक</label>
                <input type="text" id="post" name="post" />
              </div>

              <div className="cr-form-group">
                <label htmlFor="district">District / जिला</label>
                <input type="text" id="district" name="district" required />
              </div>

              <div className="cr-form-group">
                <label htmlFor="state">State / राज्य</label>
                <input type="text" id="state" name="state" required />
              </div>

              <div className="cr-form-group">
                <label htmlFor="pincode">Pin Code / पिन कोड</label>
                <input type="text" id="pincode" name="pincode" required />
              </div>

              <div className="cr-form-group">
                <label htmlFor="nationalBank">Nationalised Bank</label>
                <input type="text" id="nationalBank" name="nationalBank" />
              </div>

              <div className="cr-form-group">
                <label htmlFor="privateBank">Private Sector Banks</label>
                <input type="text" id="privateBank" name="privateBank" />
              </div>

              <button type="submit" className="cr-submit-btn span-2">Submit Application</button>

            </form>
          </section>

          {/* --- Contact Info Section --- */}
          <section id="contact-info" className="cr-section cr-contact-info">
            <h2 className="cr-section-title">Contact Information</h2>
            <div>
              <strong>Digital India Oxigen Private Limited</strong>
              <p>Corporate Office / Correspondent Address</p>
              <p>11/37, R.G. Towers, Above arrow Showroom,</p>
              <p>Bangalore-560038, Karnataka, India</p>
              <br />
              <p>+91-8972476389</p>
              <p>digitalindiacsp@gmail.com</p>
              <p>info@digitalindiacsp.in</p>
            </div>
          </section>

        </section>

      </div>
    </main>
  );
};

export default Contact;

