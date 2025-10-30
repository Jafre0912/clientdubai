import React, { useState, useEffect, useCallback } from "react";
// --- FIX: Link component is used for all 'Apply' buttons ---
import { Link } from "react-router-dom";
import "./Home.css"; // Import the new CSS file

// --- Carousel Images ---
// Using placeholders. Replace with your actual image paths from 'src' or 'public'

// import slide1 from "../images/slide1.png"; // Example: You need to add this image
// import slide2 from "../images/slide2.png"; // Example: You need to add this image
// import slide3 from "../images/slide3.png"; // Example: You need to add this image

// --- SVG Icons ---
const BankIcon = () => (
  <svg
    className="service-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
);
const KioskIcon = () => (
  <svg
    className="service-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);
const TransferIcon = () => (
  <svg
    className="service-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM3 14a5 5 0 015-5h8a5 5 0 015 5v1H3v-1zM3 18h18v-1H3v1z"
    />
  </svg>
);
const UtilityIcon = () => (
  <svg
    className="service-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);
const FinanceIcon = () => (
  <svg
    className="service-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 0V6m0 8v2m-3-3h6m-3-3h0"
    />
  </svg>
);
const ArrowRightIcon = () => (
  <svg
    className="apply-arrow"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);
// Carousel Arrow Icons
const LeftArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);
const RightArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

const Home = () => {
  // --- Carousel State ---
  // Using placeholders for slides. Replace with your actual image paths.
  const slides = [
    // We'll use placeholder images.
    // Replace these with the actual images you uploaded.
    // e.g., import slide1 from 'path/to/your/image.jpg'
    "https://placehold.co/1200x400/333/fff?text=Outreach+Programme",
    "https://placehold.co/1200x400/444/fff?text=Digital+India",
    "https://placehold.co/1200x400/555/fff?text=PM+Modi",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Automatic slide change
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval); // Clean up interval on component unmount
  }, [nextSlide]);

  // --- Placeholder Data ---
  const services = [
    {
      name: "Banking",
      desc: "CSP is a Business Correspondent and Technology Service Provider to numerous banks. It has partnerships with a few of the greatest banks in India.",
      icon: <BankIcon />,
    },
    {
      name: "Csp Kiosk",
      desc: "CSCs offers both private and government services at the citizen’s doorstep all across India.",
      icon: <KioskIcon />,
    },
    {
      name: "Money Transfer",
      desc: "The money transfer service is available at all Outlets from Tier I to Tier III cities and Tier IV Towns. It helps Customers to transfer money anytime anywhere.",
      icon: <TransferIcon />,
    },
    {
      name: "Utility Payments",
      desc: "Utility Payments enables customers to pay any kind of bills like electricity, telephone, mobiles, water etc. with available mode of device(laptop or mobile)",
      icon: <UtilityIcon />,
    },
    {
      name: "Micro Finance",
      desc: "The micro-credit loan cycles are normally shorter than traditional commercial loans with terms typically from six months to a year with installments plus interest.",
      icon: <FinanceIcon />,
    },
  ];

  const infoCards = [
    {
      title: "What is CSP",
      text: "Customer Service Point (CSPs )acts as a mini bank by carrying out limited transactions and sourcing of business. It helps Customers to withdraw and deposit money.",
    },
    {
      title: "Why should I open CSP",
      text: "Bank Mitra or CSP works as a representative or agent of the Bank and get a fixed salary irrespective of the bank/branch. Apart from this, they get a handsome commission.",
    },
    {
      title: "Become a CSP Agent Today",
      text: "Apply today and Grab the great opportunity to become Bank Mitra for State Bank of India, Bank of Baroda, Bank of India and Punjab National Bank.",
      linkText: "Click To Apply",
    },
  ];

  const banks = [
    {
      name: "State Bank of India",
      logo: "https://placehold.co/150x80/eee/333?text=SBI",
    },
    {
      name: "Allahabad Bank",
      logo: "https://placehold.co/150x80/eee/333?text=Allahabad+Bank",
    },
    {
      name: "Bank of Baroda",
      logo: "https://placehold.co/150x80/eee/333?text=BOB",
    },
    { name: "PNB", logo: "https://placehold.co/150x80/eee/333?text=PNB" },
    {
      name: "Bank of India",
      logo: "https://placehold.co/150x80/eee/333?text=BOI",
    },
    {
      name: "Gramin Bank",
      logo: "https://placehold.co/150x80/eee/333?text=Gramin+Bank",
    },
  ];

  const newsItems = [
    {
      title: "Digital india CSP",
      text: "Digital india CSP की तरफ से आपको Printer, Scanner, Micro ATM, Passbook Printer, Fingerprint device, Web camera, Digital banners, Posters, Mini camp kit provide",
    },
    {
      title: "CSP Outlet Verification",
      text: "वार्षिक CSP Outlet Verification और CSP Set-up Management करवाने के लिए Company से सम्पर्क करें।",
    },
    {
      title: "New software Extra Training",
      text: "New software पर Work की Extra Training करने के लिए Company से सम्पर्क करें।",
    },
    {
      title: "AADHAR Link",
      text: "आप सभी CSP को सुचित किया जाता है कि आप New account ADHAR से Link करके Open करें और Old accounts को भी Camp लगाकर ADHAR से Seeding करें।",
    },
    {
      title: "MICRO ATM",
      text: "जिस CSP को Micro ATM Provide करवाया गया है।कृपया वे per Day कम से कम one transaction MICRO ATM से करवाये।अन्यथा Micro ATM Block कर दिया जाएगा।",
    },
    {
      title: "Digital india CSP",
      text: "Digital india CSP द्वारा Open करवाए गए एक साल अथवा उससे अधिक पुराने CSP अपना Performance rank check करने के लिए Customer care से सम्पर्क करें।",
    },
    {
      title: "Code digital india CSP Block",
      text: "यदि कोई CSP से लगातार दिनों तक अपने Code पर Work नहीं होगा अथवा अपना Code बंद रखेंगे तो आपका Code digital india CSP Block कर देगा।",
    },
    {
      title: "आप सभी CSP को सुचित",
      text: "आप सभी CSP को सुचित किया जाता है कि आप Other Bank में Transaction के लिए AEPS Transaction का प्रयोग",
    },
  ];

  return (
    <main className="home-container">
      {/* Hero Carousel Section */}
      <section className="carousel-section">
        <div className="carousel-container">
          <div
            className="carousel-slider"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="carousel-slide" key={index}>
                <img src={slide} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button onClick={prevSlide} className="carousel-arrow left-arrow">
            <LeftArrowIcon />
          </button>

          {/* Right Arrow */}
          <button onClick={nextSlide} className="carousel-arrow right-arrow">
            <RightArrowIcon />
          </button>

          {/* Navigation Dots */}
          <div className="carousel-dots">
            {slides.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`carousel-dot ${
                  currentIndex === slideIndex ? "active" : ""
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Three-Column Info Section */}
      <section className="info-section-container">
        <div className="info-column green">
          <h2>Financial Services</h2>
          <ul>
            <li>Digital india MicroATM</li>
            <li>Digital India SBI Banking</li>
            <li>Distribution</li>
            <li>Digital india MicroATM</li>
            <li>Merchant Partner</li>
            <li>CSP Jana Dhan Accounts</li>
          </ul>
        </div>
        <div className="info-column orange">
          <h2>Scheme</h2>
          <ul>
            <li>Pradhan Mantri Kaushal Vikas Yojana</li>
            <li>Pradhan Mantri Jan-Dhan Yojana (PMJDY)</li>
            <li>Pradhan Mantri Bima Yojana</li>
            <li>GST Yojana</li>
            <li>Easy Loan Scheme</li>
            <li>Jan Dhan Yojana & Accounts</li>
            <li>Gram Parivahan yojana</li>
          </ul>
        </div>
        <div className="info-column purple">
          <h2>Grahak Seva kendra apply Today</h2>
          {/* --- FIX 1: Link to Join Network Page --- */}
          <Link to="/contact" className="apply-button">
            Apply Here
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h2>Welcome To Digital India</h2>
          <h3>15 Years of Service Excellence</h3>
          <p>
            Digitalindiacsp Services India Pvt. Ltd is known for providing great
            administration in Online Payments from the past 15 years. It offers
            the digital business of micro payments of services and remittances
            in a ‘real-time’ environment. It is a India’s Largest Payments
            Solutions Provider.
          </p>
          <p>
            This business offers online payment processing and money transfer
            services with the help of mobile, PoS(point-of-sale) and web. The
            main aim of the business is to serve the nation’s Telecom/DTH
            Operators, multiple Services Providers and Banks, pan India.
          </p>
        </div>
        <div className="warning-content">
          <div className="language-tabs">
            <button className="tab active">Hindi</button>
            <button className="tab">English</button>
          </div>
          <p>
            सावधानः हमारी संस्था (ऑक्सीजन सर्विसेज (इंडिया) प्राइवेट लिमिटेड) का
            एकमात्र अधिकृत वेब साईट / पोर्टलः www.digitalindiacsp.inहै. हमारे
            द्वारा दिये जाने वाले CSP की जानकारी केवल इसी साईट पर उपलब्ध है और
            हमारे द्वारा अधिकृत व्यक्तिओं के नाम भी केवल इसी साईट पर उपलब्ध हैं.
            हमें पता चला है कि (ऑक्सीजन सर्विसेज (इंडिया) प्राइवेट लिमिटेड) के
            मिलता-जुलता नाम से जैसे – DIGITALCSP.ORG, ऑक्सीजन बीसी,
            (DIGITALCSP.BC) ऑक्सीजन सीएसपी (DIGITALCSP CSP), इत्यादि कुछ फ्रॉड
            संस्थायें बेरोजगार लोगों से ऑक्सीजन के नाम से धोखाधड़ी का काम कर रही
            हैं. सावधान रहें और ऐसे फ्रॉड लोगों / संस्थाओं के बारे में नजदीकी
            पुलिस स्टेशन में मामला दर्ज करावें.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <span className="stat-number">5+</span>
          <span className="stat-label">Years in Business</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">2402+</span>
          <span className="stat-label">Successful Cases</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">570+</span>
          <span className="stat-label">Satisfied Clients</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">430+</span>
          <span className="stat-label">Pro Consultants</span>
        </div>
      </section>

      {/* CSP Info Cards Section */}
      <section className="csp-info-section">
        {infoCards.map((card, index) => (
          <div key={index} className="csp-info-card">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            {card.linkText && (
              /* --- FIX 2: Link to Join Network Page --- */
              <Link to="/contact" className="csp-apply-link">
                {card.linkText} <ArrowRightIcon />
              </Link>
            )}
          </div>
        ))}
      </section>

      {/* Apply Banner */}
      <section className="apply-banner">
        <h3>For Grahak Seva Kendra Apply Today</h3>
        {/* --- FIX 3: Link to Join Network Page --- */}
        <Link to="/contact" className="apply-now-button">
          Apply now
        </Link>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="news-content">
          <h2>Latest News</h2>
          <div className="news-marquee">
            {/* Simple list, use CSS animation for marquee effect */}
            <ul>
              {newsItems.map((item, index) => (
                <li key={index}>
                  <strong>{item.title}:</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reference Bank Section */}
      <section className="reference-bank-section">
        <h2>Reference Bank</h2>
        <div className="bank-grid">
          {banks.map((bank, index) => (
            <div key={index} className="bank-card">
              <img src={bank.logo} alt={bank.name} />
              {/* --- FIX 4: Link to Join Network Page --- */}
              <Link to="/contact" className="apply-csp-button">
                apply csp
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services Section */}
      <section className="our-services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              {service.icon}
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
