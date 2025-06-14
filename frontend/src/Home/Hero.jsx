import "../CSS/HomeHero.css";
import { useNavigate } from "react-router-dom"; // Import navigation hook

export default function Hero() {
  const navigate = useNavigate();

  const handleWhatsapp = () => {
    window.open("https://wa.me/919560526332", "_blank");
  };

  const handlePricing = () => {
    navigate("/pricing");
  };

  return (
    <div
      className="hero-section text-white"
      style={{
        backgroundColor: "#0d1117",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 2rem 1rem 2rem",
      }}
    >
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/* Text Section */}
        <div className="hero-text col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h1 className="display-4 fw-bold">Hi, I'm Arnav Sirohi</h1>
          <h3 className="text-primary mb-4">Full Stack Developer</h3>
          <p className="text-light mb-4" style={{ maxWidth: "500px" }}>
            I build fast, responsive and scalable web apps using MongoDB, Express, React, and Node.js.
            Let's turn your product idea into a live, working MVP in days—not weeks.
          </p>
          <div>
            <button className="btn btn-primary me-3" onClick={handlePricing}>
              Hire Me
            </button>
            <button className="btn btn-outline-light" onClick={handleWhatsapp}>
              Let's Talk
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="hero-image col-md-5 text-center">
          <div className="image-container">
            <img
              src="/Self1.jpg"
              alt="Arnav Sirohi"
              className="styled-image img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
