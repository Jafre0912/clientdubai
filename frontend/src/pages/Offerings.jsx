import React from "react";
import "./Offerings.css"; // Import the new CSS file

// --- SVG Icons ---
const ServiceProviderIcon = () => (
  <svg
    className="of-card-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    />
  </svg>
);

const RetailerIcon = () => (
  <svg
    className="of-card-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);

const CustomerIcon = () => (
  <svg
    className="of-card-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="of-benefit-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const Offerings = () => {
  // De-duplicated benefit lists from your content
  const providerBenefits = [
    "Enormous increase in sales",
    "No set-up or maintenance cost",
    "Efficient and faster payment realization",
    "Online MIS reports",
    "Enhanced customer convenience",
    "Live transactions and real-time updation",
  ];

  const retailerBenefits = [
    "Earns commission on every transaction",
    "Increased footfall and sale of primary product",
    "No inventory management",
    "Branding, marketing and promotion support",
    "Increased customer loyalty",
    "Enhance & Robust Customer Care Desk",
  ];

  const customerBenefits = [
    "All services under one roof",
    "Easily affordable",
    "High convenience",
    "No queues",
    "Multiple modes of payment",
    "Legally valid receipt",
  ];

  return (
    <main className="offerings-page">
      {/* --- Hero Section --- */}
      <section className="of-hero">
        <div className="of-hero-content">
          <h1>Our Offerings</h1>
          <p>A complete solution for Retailers, Distributors, and Consumers.</p>
        </div>
      </section>

      {/* --- Introduction Section --- */}
      <section className="of-intro-container">
        <p className="of-intro-text">
          Digital India leverages technology to offers a compelling solution
          while adding value to all their stake holders – Retailers,
          Distributors, Consumers, Service providers and Vendors. A consumer
          gets the convenience of accessing a wide array of services at a
          Digital india Shoppe in his neighborhood either free of cost or at a
          nominal fee. A service provider is able to better service their
          current sub-base of consumers and reach millions of prospect consumers
          through thousands of Digital india outlets across the country. A
          retailer earns a substantial income (commission) by facilitating these
          transactions and better connecting the consumers and the service
          providers. Millions of consumers have used the Digital india
          convenience to reach 60+ service providers through over 47,000+
          Digital india Retail outlets.
        </p>
      </section>

      {/* --- Benefits Grid Section --- */}
      <section className="of-benefits-container">
        <div className="of-benefits-grid">
          {/* Card 1: Service Providers */}
          <div className="of-benefit-card">
            <ServiceProviderIcon />
            <h3>Benefits To Service Providers</h3>
            <ul className="of-benefit-list">
              {providerBenefits.map((item, index) => (
                <li key={index}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Retailers */}
          <div className="of-benefit-card">
            <RetailerIcon />
            <h3>Benefits To Retailers</h3>
            <ul className="of-benefit-list">
              {retailerBenefits.map((item, index) => (
                <li key={index}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Customers */}
          <div className="of-benefit-card">
            <CustomerIcon />
            <h3>Benefits To Customers</h3>
            <ul className="of-benefit-list">
              {customerBenefits.map((item, index) => (
                <li key={index}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Offerings;
