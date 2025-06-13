import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CSS/Hero.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section py-5" style={{ backgroundColor: "#0d1117", color: "#fff" }}>
      <div className="container">

        {/* Main Heading */}
        <h2 className="text-center text-warning fw-bold mb-5 display-5" data-aos="zoom-in">👨‍💻 About Me</h2>

        {/* Education Section */}
        <h3 className="text-info fw-bold mb-4" data-aos="fade-up">🎓 My Education</h3>
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center mb-4 mb-md-0" data-aos="fade-right">
            <img src="/School.jpeg" alt="Arwachin International School" className="img-fluid rounded-4 shadow" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
            <h5 className="mt-3">Arwachin International School</h5>
            <p className="text-light">My school life shaped my curiosity and love for logic. Here I discovered programming and creative thinking.</p>
          </div>
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img src="/college.jpeg" alt="NSUT" className="img-fluid rounded-4 shadow" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
            <h5 className="mt-3">NSUT, New Delhi</h5>
            <p className="text-light">Currently pursuing B.Tech in Computer Science. NSUT has sharpened my skills in development and startups.</p>
          </div>
        </div>

        {/* Hobbies Section */}
        <h3 className="text-info fw-bold mb-4" data-aos="fade-up">🎯 My Hobbies</h3>
        <div className="row text-center mb-5">
          <div className="col-md-4 mb-4" data-aos="zoom-in">
            <img src="/Hobby01.jpg" alt="Football" className="img-fluid rounded shadow" style={{ height: "250px", objectFit: "cover", width: "100%" }} />
            <h6 className="mt-2">⚽ Football</h6>
            <p className="text-light">CR7 inspired me—“Talent is nothing without hard work.” Football is my passion.</p>
          </div>
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
            <img src="/Hobby02.jpg" alt="Coding" className="img-fluid rounded shadow" style={{ height: "250px", objectFit: "cover", width: "100%" }} />
            <h6 className="mt-2">💻 Coding</h6>
            <p className="text-light">I enjoy building real-world projects and clean UI that works perfectly on any screen.</p>
          </div>
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="400">
            <img src="/Hobby03.jpg" alt="Gaming" className="img-fluid rounded shadow" style={{ height: "250px", objectFit: "cover", width: "100%" }} />
            <h6 className="mt-2">🎮 Gaming</h6>
            <p className="text-light">Gaming helps me unlock creativity and think beyond logic—world-building fascinates me.</p>
          </div>
        </div>

        {/* Skills Section */}
        <h3 className="text-info fw-bold mb-4" data-aos="fade-up">💻 My Skills</h3>
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <p className="text-light"><strong>Prominent in Frontend:</strong></p>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {["React.js", "HTML", "CSS", "JavaScript", "Bootstrap"].map(skill => (
                <span key={skill} className="badge rounded-pill bg-warning text-dark px-3 py-2">{skill}</span>
              ))}
            </div>

            <p className="text-light"><strong>Comfortable in Backend:</strong></p>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {["Node.js", "Express.js", "MongoDB", "SQL"].map(skill => (
                <span key={skill} className="badge rounded-pill bg-info text-dark px-3 py-2">{skill}</span>
              ))}
            </div>

            <p className="text-light"><strong>Tools & Version Control:</strong></p>
            <div className="d-flex flex-wrap gap-2">
              {["Git", "GitHub"].map(skill => (
                <span key={skill} className="badge rounded-pill bg-success text-white px-3 py-2">{skill}</span>
              ))}
            </div>
          </div>
          <div className="col-md-6 text-center mt-4 mt-md-0" data-aos="fade-left">
            <img src="/skill.jpeg" alt="Skills" className="img-fluid rounded-4 shadow" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
          </div>
        </div>

        {/* Achievements Section */}
        <h3 className="text-info fw-bold mt-5 mb-4" data-aos="fade-up">🏆 My Achievements</h3>
        <div className="row">
          <div className="col-12" data-aos="zoom-in">
            <div className="bg-dark rounded-4 p-4 shadow text-center text-light" style={{ width: "100%" }}>
              <h5 className="text-warning mb-3">Highlights</h5>
              <ul className="list-unstyled">
                <li className="mb-2">🚀 Built 2 full-stack projects using MERN stack</li>
                <li className="mb-2">🎖️ Secured 1st position in remoted hackthon</li>
                <li className="mb-2">🌐 1k+ views on my recent working style on youtube</li>
                <li className="mb-2">📢 Shared stage with startup founders during tech events </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
