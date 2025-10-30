import React from 'react';
import './JoinNetwork.css'; // Import the new CSS file

// --- SVG Icon for feature list ---
const CheckIcon = () => (
  <svg className="jn-feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const JoinNetwork = () => {

  const retailFeatures = [
    "Wide array of services",
    "Upfront commission on transactions",
    "0% downtime",
    "Real time transactions",
    "Branding & marketing support",
    "Increased customer loyalty & footfall",
    "Great offers, deals and margins",
    "Instant Query Resolutions"
  ];

  const channelFeatures = [
    "Great bulk deals & smart money maker products",
    "Revenue maximization with area specific service",
    "Branding & marketing support",
    "Regular training support & orientation programs",
    "Full length support to achieve ROI",
    "Dedicated service desks"
  ];

  return (
    <main className="join-network-page">
      
      {/* --- Hero Section --- */}
      <section className="jn-hero">
        <div className="jn-hero-content">
          <h1>Join Our Network</h1>
          <p>Partner with India's fastest-growing digital services platform.</p>
        </div>
      </section>

      {/* --- Main Content Area --- */}
      <div className="jn-container">
        
        {/* --- Partner Grid --- */}
        <div className="jn-partner-grid">
          
          {/* --- Retail Partner Card --- */}
          <div className="jn-partner-card">
            <h2>Become A Retail Partner</h2>
            <p className="jn-partner-desc">
              Become a part of India’s Fast growing business & get recognized in your area. Provide essential services to your customers through our platform and earn commission on all transactions! Your customers will be able to pay bills, buy recharges, make travel bookings, and avail banking and financial services from your shop!
            </p>
            <ul className="jn-feature-list">
              {retailFeatures.map((feature, index) => (
                <li key={index}>
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="jn-cta-text">
              You are only a few steps away from starting your new business. All you need is a retail shop, PC, Internet & the enthusiasm to make money!
            </p>
          </div>

          {/* --- Channel Partner Card --- */}
          <div className="jn-partner-card">
            <h2>Become A Channel Partner</h2>
            <p className="jn-partner-desc">
              Become a part of India’s Fastest growing business. Get recognized in your area by providing essential services through your retail network. Earn commission on new retailer sign-up + earn margin on all transactions that your retailers make!
            </p>
            <ul className="jn-feature-list">
              {channelFeatures.map((feature, index) => (
                <li key={index}>
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="jn-cta-text">
              We provide full-length support to help you achieve your ROI.
            </p>
          </div>
        </div>

        {/* --- Contact Form Section --- */}
        <section className="jn-form-section">
          <h2>Interested? Get in Touch</h2>
          <p>Please fill in your contact details and we’ll get in touch with you at the earliest.</p>
          <form className="jn-form">
            <div className="jn-form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" className="jn-input" placeholder="Enter your full name" />
            </div>
            <div className="jn-form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" className="jn-input" placeholder="Enter your email" />
            </div>
            <div className="jn-form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" className="jn-input" placeholder="Enter your phone number" />
            </div>
            <div className="jn-form-group">
              <label htmlFor="partnerType">I am interested in</label>
              <select id="partnerType" className="jn-select">
                <option value="retail">Becoming a Retail Partner</option>
                <option value="channel">Becoming a Channel Partner</option>
              </select>
            </div>
            <div className="jn-form-group-full">
              <label htmlFor="message">Message (Optional)</label>
              <textarea id="message" className="jn-textarea" rows="4" placeholder="Tell us more about yourself"></textarea>
            </div>
            <div className="jn-form-group-full">
              <button type="submit" className="jn-submit-btn">Submit Application</button>
            </div>
          </form>
        </section>

      </div>
    </main>
  );
};

export default JoinNetwork;

