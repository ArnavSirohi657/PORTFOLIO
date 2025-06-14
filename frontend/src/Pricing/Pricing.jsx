import React, { useEffect } from "react";

export default function Pricing() {
  useEffect(() => {
    const section = document.getElementById("pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const cardStyle = {
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const hoverStyle = `
    .card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 8px 20px rgba(0,0,0,0.15) !important;
    }
  `;

  return (
    <div
      className="container py-5"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      <style>{hoverStyle}</style>

      <h2 className="text-center mb-5 fw-bold">Pricing Plans</h2>

      <div id="pricing" className="row d-flex justify-content-center gap-4">
        {/* E-commerce Website - ₹24,999 -> ₹19,999 */}
        <div className="col-md-4">
          <div className="card border-warning shadow" style={cardStyle}>
            <div className="card-body text-center">
              <h5 className="card-title text-warning fw-bold">E-commerce Website</h5>
              <p className="badge bg-warning text-dark mb-2">🔥 Introductory Offer</p>
              <p className="card-text">Full-featured online store with admin panel</p>
              <ul className="list-unstyled text-start ps-3">
                <li>✔️ Product Management</li>
                <li>✔️ Secure Checkout</li>
                <li>✔️ Payment Gateway</li>
                <li>✔️ Admin Dashboard</li>
              </ul>
              <h6 className="text-muted text-decoration-line-through">₹24,999</h6>
              <h4 className="fw-bold text-success">₹19,999</h4>
            </div>
          </div>
        </div>

        {/* Full Stack Developer - ₹14,999 -> ₹11,999 */}
        <div className="col-md-4">
          <div className="card border-primary shadow" style={cardStyle}>
            <div className="card-body text-center">
              <h5 className="card-title text-primary fw-bold">Full Stack Developer</h5>
              <p className="badge bg-primary text-white mb-2">🚀 Launch Discount</p>
              <p className="card-text">Complete Web App Development (MERN Stack)</p>
              <ul className="list-unstyled text-start ps-3">
                <li>✔️ Responsive Frontend (React)</li>
                <li>✔️ Secure Backend (Node + Express)</li>
                <li>✔️ MongoDB Integration</li>
                <li>✔️ API Development + Auth</li>
              </ul>
              <h6 className="text-muted text-decoration-line-through">₹14,999</h6>
              <h4 className="fw-bold text-success">₹11,999</h4>
            </div>
          </div>
        </div>

        {/* React Developer - ₹9,999 -> ₹7,999 */}
        <div className="col-md-4">
          <div className="card border-success shadow" style={cardStyle}>
            <div className="card-body text-center">
              <h5 className="card-title text-success fw-bold">React Developer</h5>
              <p className="badge bg-success text-white mb-2">🟢 First Client Offer</p>
              <p className="card-text">Frontend Development (React + API Integration)</p>
              <ul className="list-unstyled text-start ps-3">
                <li>✔️ Modern UI with React</li>
                <li>✔️ REST API Integration</li>
                <li>✔️ Responsive Design</li>
                <li>✔️ React Hooks + State Management</li>
              </ul>
              <h6 className="text-muted text-decoration-line-through">₹9,999</h6>
              <h4 className="fw-bold text-success">₹7,999</h4>
            </div>
          </div>
        </div>

        {/* Portfolio Website - ₹4,999 -> ₹3,999 */}
        <div className="col-md-4">
          <div className="card border-secondary shadow" style={cardStyle}>
            <div className="card-body text-center">
              <h5 className="card-title text-secondary fw-bold">Portfolio Website</h5>
              <p className="badge bg-secondary text-white mb-2">💼 Special Offer</p>
              <p className="card-text">Clean and elegant portfolio to showcase your work</p>
              <ul className="list-unstyled text-start ps-3">
                <li>✔️ Personal Branding</li>
                <li>✔️ Project Showcase</li>
                <li>✔️ Contact Form</li>
                <li>✔️ SEO Optimized</li>
              </ul>
              <h6 className="text-muted text-decoration-line-through">₹4,999</h6>
              <h4 className="fw-bold text-success">₹3,999</h4>
            </div>
          </div>
        </div>

        {/* Bug Fixing / API Work - ₹3,999 -> ₹2,999 */}
        <div className="col-md-4">
          <div className="card border-danger shadow" style={cardStyle}>
            <div className="card-body text-center">
              <h5 className="card-title text-danger fw-bold">Bug Fixing / API Work</h5>
              <p className="badge bg-danger text-white mb-2">🛠️ Discounted</p>
              <p className="card-text">Fixes & Integrations for Existing Projects</p>
              <ul className="list-unstyled text-start ps-3">
                <li>✔️ UI Bug Fixes</li>
                <li>✔️ Backend Issue Resolution</li>
                <li>✔️ API Creation / Fixes</li>
                <li>✔️ Code Optimization</li>
              </ul>
              <h6 className="text-muted text-decoration-line-through">₹3,999</h6>
              <h4 className="fw-bold text-success">₹2,999</h4>
            </div>
          </div>
        </div>

        {/* Landing Page Development - ₹2,999 -> ₹2,499 */}
        <div className="col-md-4">
          <div className="card border-info shadow" style={cardStyle}>
            <div className="card-body text-center">
              <h5 className="card-title text-info fw-bold">Landing Page</h5>
              <p className="badge bg-info text-dark mb-2">🎯 New Client Deal</p>
              <p className="card-text">Modern and responsive landing page for your business or product</p>
              <ul className="list-unstyled text-start ps-3">
                <li>✔️ Custom Design</li>
                <li>✔️ Mobile Responsive</li>
                <li>✔️ Fast Loading</li>
                <li>✔️ Conversion Optimized</li>
              </ul>
              <h6 className="text-muted text-decoration-line-through">₹2,999</h6>
              <h4 className="fw-bold text-success">₹2,499</h4>
            </div>
          </div>
        </div>

        {/* Personal Discussion Website - ₹7,999 -> ₹5,999 */}
        <div className="col-md-4">
          <div className="card border-dark shadow" style={cardStyle}>
            <div className="card-body text-center">
              <h5 className="card-title text-dark fw-bold">Personal Discussion Website</h5>
              <p className="badge bg-dark text-white mb-2">🗓️ Intro Deal</p>
              <p className="card-text">Website for client discussion, calendar booking, and updates</p>
              <ul className="list-unstyled text-start ps-3">
                <li>✔️ Client Login System</li>
                <li>✔️ Zoom/Google Meet Integration</li>
                <li>✔️ Discussion Threads</li>
                <li>✔️ Booking Calendar</li>
              </ul>
              <h6 className="text-muted text-decoration-line-through">₹7,999</h6>
              <h4 className="fw-bold text-success">₹5,999</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="fw-bold mb-3 text-danger">🎉 Limited-time launch offer. Get your project started today!</p>
        <a
          href="https://wa.me/919560526332"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success btn-lg px-4 py-2"
        >
          📞 Let's Talk on WhatsApp
        </a>
      </div>
    </div>
  );
}
