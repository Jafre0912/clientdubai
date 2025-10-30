import React from 'react';
import './About.css'; // Import the new CSS file

// --- SVG Icons for Mission/Vision ---
const MissionIcon = () => (
  <svg className="about-card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-6.75c-.621 0-1.125.504-1.125 1.125V18.75m9 0h-9" />
  </svg>
);

const VisionIcon = () => (
  <svg className="about-card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SolutionIcon = () => (
  <svg className="about-card-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


const About = () => {
  return (
    <main className="about-page">
      
      {/* 1. Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Digital India CSP</h1>
          <p>Connecting millions, empowering a nation.</p>
        </div>
      </section>

      {/* 2. Industry Overview Section */}
      <section className="about-section overview-section">
        <div className="about-container">
          <div className="about-text-content">
            <h2 className="section-title">Industry Overview</h2>
            <p>Every household consumes various mandatory services like electricity, gas, water, landline, banking, mobile phones, etc. apart from these, households also need services with unrestricted spending like DTH, travel, entertainment, remittance/money transfers, financial services, etc.</p>
            <p>India, the largest democracy with over 250 million households, is witnessing huge growth within the services trade. While new services are being introduced, the consumer base of the already offered services is growing at a gentle pace.The process of availing and creating payments for these services is usually inconvenient and long because of the shortage of an efficient and enough service delivery channel.</p>
            <p>Digital India solution capitalizes on this infinite need, which can still grow because of the under-penetration of the recommended services, growth of the service sector and increase in payment power of the common consumer.</p>
          </div>
          <div className="about-image-content">
            {/* Placeholder image related to Indian economy or digital services */}
            <img src="https://placehold.co/500x400/e0f2fe/333?text=Digital+Growth" alt="Digital Growth in India" />
          </div>
        </div>
      </section>

      {/* 3. Our Solution Section */}
      <section className="about-section solution-section">
        <div className="about-container reverse">
          <div className="about-text-content">
            <h2 className="section-title text-green">Our Solution</h2>
            <p>Digital India solution provides consumers a quick and easy, single stop access to a spacious collection of services. Consumers can purchase or make payments for practically any high-speed consumer service, like Utilities, Travel, Cinema, DTH / Mobile Recharge, Banking & Financial Services, etc in their neighborhood.</p>
            <p>Pay Point provides consumers this convenience by creating a franchise network of standard mom and pop stores located in the consumer’s neighborhood. These franchisees are given a multifunctional terminal, that is connected to the service providers’ servers and executes transactions periodically. Digital India has contractual agreements with service providers and is authorized to issue legally sustainable reservations and receipts to consumers.</p>
          </div>
          <div className="about-image-content icon-bg">
            <SolutionIcon />
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision Section */}
      <section className="about-section mission-vision-section">
        <div className="about-container grid">
          
          {/* Mission Card */}
          <div className="about-card">
            <MissionIcon />
            <h3 className="about-card-title">Mission</h3>
            <ul>
              <li>Bring convenience to the consumer's doorstep, enabling them to access a diversified range of services through a vibrant delivery mechanism.</li>
              <li>Leveraging technology - Connecting the middle and low-income groups and providing world-class service.</li>
              <li>Empower consumers with the choice and convenience of making payments, any time - any mode - any where.</li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="about-card">
            <VisionIcon />
            <h3 className="about-card-title">Vision</h3>
            <ul>
              <li>Be India's first and largest "Fast Moving Consumer Services" company.</li>
              <li>Bring inclusive prosperity by partnering with government agencies and financial institutions for citizen centric projects.</li>
              <li>Empower the youth with entrepreneurial opportunities while contributing to the country's growth.</li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
};

export default About;

