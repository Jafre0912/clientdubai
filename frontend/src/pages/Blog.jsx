import React, { useState } from 'react';
import './Blog.css'; // Import the new CSS file

// --- Icons ---
const ShareIcon = () => (
  <svg className="bl-share-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
  </svg>
);
const MailIcon = () => (
  <svg className="bl-share-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const LinkIcon = () => (
  <svg className="bl-share-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101" />
  </svg>
);
const ChevronRightIcon = () => (
  <svg className="bl-archive-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);
const ChevronDownIcon = () => (
    <svg className="bl-archive-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

// --- Comments Section Component ---
const CommentsSection = ({ postId, commentsCount }) => {
  if (commentsCount === 0) {
    return (
      <div className="bl-comments-section">
        <h3 className="bl-comments-title">Leave a Comment</h3>
        <form className="bl-comment-form">
          <textarea className="bl-comment-textarea" placeholder="Write your comment..." rows="4"></textarea>
          <input className="bl-comment-input" type="text" placeholder="Your Name" />
          <input className="bl-comment-input" type="email" placeholder="Your Email (Optional)" />
          <button className="bl-comment-submit" type="submit">Post Comment</button>
        </form>
        <p className="bl-comment-meta">Be the first to comment.</p>
      </div>
    );
  }

  // Dummy comments for display
  const dummyComments = [
    { id: 1, author: 'Ramesh Kumar', text: 'Very useful information, thank you!' },
    { id: 2, author: 'Priya Sharma', text: 'How can I apply for this? Please guide.' },
  ];

  return (
    <div className="bl-comments-section">
      <h3 className="bl-comments-title">{commentsCount} Comments</h3>
      <div className="bl-comment-list">
        {dummyComments.map(comment => (
          <div key={comment.id} className="bl-comment">
            <strong className="bl-comment-author">{comment.author}</strong>
            <p className="bl-comment-text">{comment.text}</p>
          </div>
        ))}
        {commentsCount > 2 && <p className="bl-comment-meta">...and {commentsCount - 2} more comments.</p>}
      </div>
      
      <h3 className="bl-comments-title">Leave a Comment</h3>
      <form className="bl-comment-form">
        <textarea className="bl-comment-textarea" placeholder="Write your comment..." rows="4"></textarea>
        <input className="bl-comment-input" type="text" placeholder="Your Name" />
        <input className="bl-comment-input" type="email" placeholder="Your Email (Optional)" />
        <button className="bl-comment-submit" type="submit">Post Comment</button>
      </form>
    </div>
  );
};


// --- Blog Post Component ---
const BlogPost = ({ title, date, content, commentsCount, postId }) => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = (e) => {
    e.preventDefault(); // Stop the link from jumping to '#'
    setShowComments(!showComments); // Toggle visibility
  };

  return (
    <article className="bl-post-card">
      <header>
        <h2 className="bl-post-title"><a href="#">{title}</a></h2>
        <p className="bl-post-meta">
          Posted on <time dateTime={date}>{date}</time>
        </p>
      </header>
      <div className="bl-post-content">
        {content}
      </div>
      <footer className="bl-post-footer">
        <div className="bl-post-comments">
          {/* This is now a clickable link */}
          <a href="#" onClick={toggleComments}>
            {commentsCount} {commentsCount === 1 ? 'comment' : 'comments'}
          </a>
        </div>
        <div className="bl-post-share">
          <a href="#" title="Email"><MailIcon /></a>
          <a href="#" title="Share on X"><svg className="bl-share-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a>
          <a href="#" title="Share on Facebook"><svg className="bl-share-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"></path></svg></a>
          <a href="#" title="Share on Pinterest"><svg className="bl-share-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"></path></svg></a>
        </div>
      </footer>
      {/* This section will now show/hide on click */}
      {showComments && <CommentsSection postId={postId} commentsCount={commentsCount} />}
    </article>
  );
};

// --- Sidebar Archive Component ---
const ArchiveItem = ({ year, count, children }) => {
    const [isOpen, setIsOpen] = useState(year === '2018'); // Default 2018 open
  
    const toggleOpen = (e) => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };
  
    return (
      <li className={`bl-archive-parent ${isOpen ? 'open' : ''}`}>
        <a href="#" onClick={toggleOpen}>
          {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
          {year} ({count})
        </a>
        {isOpen && (
          <ul className="bl-archive-child">
            {children}
          </ul>
        )}
      </li>
    );
};


// --- Main Blog Page ---
const Blog = () => {
  return (
    <main className="blog-page">
      <div className="bl-hero">
        <h1>Digital India CSP Blog</h1>
        <p>News, Updates, and Insights</p>
      </div>

      <div className="bl-container">
        
        {/* --- Main Content Area --- */}
        <div className="bl-main-content">
          <BlogPost
            postId="sbi-csp-registration"
            title="Procedure to become SBI CSP and SBI Kiosk Registration"
            date="Monday, September 3, 2018"
            commentsCount={13}
            content={
              <>
                <p><strong>Digital India CSP</strong> is being authorized as Business Correspondents to State Bank of India for carrying out banking transactions in favor of SBI. It is an Internet-enabled PC based technology and extremely easy to use. Anybody can become a Business Correspondents and open customer accounts at Customer Service Point Kiosk outlet. SBI Kiosk transactions are bio metrically protected. Printed acceptance for each transaction is provided to the customer and has the end-to-end process of account opening & online transactions.</p>
                <p>Digital India CSP helps to Customer Service Points for Business Correspondents to State Bank of India and carry out banking transactions in support of SBI. Become a CSP/ Business Correspondent for State Bank of India Kiosk Banking and rise your earnings. ...</p>
                <p>The Bank’s action of the KIOSK Banking allows customers to undertake different banking transactions without the need for visiting a Bank Branch. Customers may open bank accounts and do all types of bank related transactions at an SBI Kiosk Banking outlet.you can easily apply for CSP through our website <strong>SBI kiosk CSP registration online</strong> link and <strong>SBI CSP online apply</strong> .contact us we will guide you to become a CSP</p>
                <p>Customer Service Point is a scheme under Public Private Partnership Where a Customer Service Point works as a representative or agent of Bank and appointed to provide Banking service to citizens. ... As a CSP you earn some commission on accounts opening, cash deposit, cash withdrawal, Credit Card Payments, Bill Payments etc.,</p>
                <p>To become a Customer Service Point to State Bank of India you must have following things readily available.</p>
                <ul>
                  <li>Computer (Desktop or Laptop)</li>
                  <li>Internet connectivity (Broadband, Modem)</li>
                  <li>Printer, Scanner</li>
                  <li>Minimum 100 square feet office space</li>
                </ul>
              </>
            }
          />
          
          <BlogPost
            postId="array-of-services"
            title="How Digital India helps to get array of services"
            date="Friday, May 25, 2018"
            commentsCount={0}
            content={
              <>
                <p><strong>Digital India</strong> Solution provides a quick and easy, single-stop access for a wide array of services. We provide that facility to the customers through which they can apply online for SBI CSP in India.Here consumers can purchase or make the payments for almost any fast moving consumer services like utilities, travel, cinema, DTH / mobile recharge, banking & financial services.</p>
                <p>We provide services for the existing consumers and reach millions of prospect consumers through thousands of Digital India outlets across the country.</p>
                <p>Digital India is a single stop access for a wide range of services which helps the customer to purchase or make payments.Our services connect to the middle and low-income groups to provide world-class services. We have the vision to be India’s first and largest fast moving consumer services company.</p>
                <p>...Our USP is:</p>
                <ul>
                  <li>Upfront commission on transactions</li>
                  <li>0% downtime</li>
                  <li>Real-time transactions</li>
                  <li>Branding & marketing support</li>
                  <li>Increased customer loyalty & footfall</li>
                  <li>Great offers, deals, and margins</li>
                  <li>Instant Query Resolutions</li>
                </ul>
                <p>One can become CSP agent by applying Bank Mitra for State Bank Of India, Bank of Baroda, Bank Of India and Punjab National Bank. Interested people can apply CSP online and get the benefits associated with this.Interested persons can apply online for SBI CSP in India and through CSP SBI bank.</p>
              </>
            }
          />

          <BlogPost
            postId="benefits-of-digital-india"
            title="Benefits of Digital India"
            date="Tuesday, April 24, 2018"
            commentsCount={36}
            content={
              <>
                <p><strong>Digitalindiacsp Services India Pvt. Ltd</strong> which is powered by 15 years of service excellence in the digital business of micro payments of services and remittances in ‘real time’ environment is one of India’s Largest Payments Solutions Provider. ...</p>
                <p>This provides consumers with a quick and easy solution.It is a single stop access to wide array of services.Through this customer can purchase or make payments for almost any fast moving consumer service like utilities, travel, cinema, DTH / mobile recharge, banking & financial services.</p>
                <p>Digital India has leveraged the technology to offer a compelling solution thus adding value to the retailers, distributors, consumers, service providers and vendors.The benefits to the service provider are that there will be enormous increase in sales, no set-up or maintenance cost, it will be efficient and faster and presence of online MIS reports.</p>
                <p>The benefits to the retailers are that they can earn commission, increase footfall and sale of the primary product, there is no inventory management, enhanced and robust customer care desk. The benefits to the customers are that all the services are provided under one roof, they are easily affordable, high convenience and multiple modes of payment.</p>
                <p>...One can become CSP agent by applying Bank Mitra for State Bank Of India , Bank of Baroda, Bank Of India and Punjab National Bank. Interested people can apply CSP online and get the benefits associated with this.</p>
              </>
            }
          />
          <div className="bl-pagination">
            <a href="#" className="bl-pagination-link active">1</a>
            <a href="#" className="bl-pagination-link">Newer Posts</a>
          </div>
        </div>

        {/* --- Sidebar --- */}
        <aside className="bl-sidebar">
          <div className="bl-sidebar-widget">
            <h3 className="bl-widget-title">Blog Archive</h3>
            <ul className="bl-archive-list">
              <ArchiveItem year="2019" count={3}>
                {/* We can add child links here later */}
              </ArchiveItem>
              <ArchiveItem year="2018" count={3}>
                <li><a href="#">September (1)</a></li>
                <li><a href="#">May (1)</a></li>
                <li><a href="#">April (1)</a></li>
              </ArchiveItem>
            </ul>
          </div>

          <div className="bl-sidebar-widget">
            <h3 className="bl-widget-title">Share This Blog</h3>
            <div className="bl-sidebar-share-links">
              <a href="#" className="bl-share-link-block"><MailIcon /> Email This</a>
              <a href="#" className="bl-share-link-block"><LinkIcon /> Share to X</a>
              <a href="#" className="bl-share-link-block"><LinkIcon /> Share to Facebook</a>
            </div>
          </div>

          <div className="bl-sidebar-widget">
            <h3 className="bl-widget-title">Subscribe</h3>
            <p className="bl-widget-text">Subscribe to receive email updates.</p>
            {/* In a real app, this would be a form */}
            <a href="#" className="bl-subscribe-link">Subscribe to: Comments (Atom)</a>
          </div>
        </aside>

      </div>
    </main>
  );
};

export default Blog;

