import "../CSS/Resume.css";
import { motion } from "framer-motion";

export default function Resume() {
  const projects = [
    {
      image: "Project01.png",
      title: "E-COMMERCE CLONE (AMAZON)",
      desc: "MADE USING MERN STACK",
      features: ["SIGN IN", "PRODUCT SEARCHING", "ADD TO CART", "PAYMENT GATEWAY"],
    },
    {
      image: "Project03.png",
      title: "BROKER APP (ZERODHA)",
      desc: "MADE USING REACT & API",
      features: ["POLISHED UI", "STOCK DATA", "ORDER LISTING"],
    },
    {
      image: "Project02.png",
      title: "BOOKING APP (ONLY FRONTEND)",
      desc: "MADE USING REACT",
      features: ["REACT BASED FRONTEND", "DESIGNED LAYOUT"],
    },
    {
      image: "Project05.png",
      title: "MOVIE SEARCH APP (MINI)",
      desc: "MADE USING API",
      features: ["REACT BASED", "API SEARCH"],
    },
    {
      image: "Project06.png",
      title: "POKEMON SEARCH APP (MINI)",
      desc: "MADE USING API",
      features: ["REACT BASED", "API SEARCH", "DARK MODE"],
    },
  ];

  return (
    <section className="pt-3 pb-5" style={{ backgroundColor: "#161b22" }}>
      <div className="container">
        <h2 className="text-center text-white fw-bold mb-5">🚀 My Projects</h2>
        <div className="d-flex flex-column gap-5">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`row align-items-center ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              } g-4`}
              key={index}
            >
              {/* Image Section */}
              <div className="col-md-6 text-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid rounded-4 shadow"
                  style={{
                    maxHeight: index >= 2 ? "350px" : "300px",
                    width: index >= 2 ? "100%" : "auto",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Text Section */}
              <div className="col-md-6 text-white">
                <h3 className="text-info fw-bold">{project.title}</h3>
                <p className="text-secondary">{project.desc}</p>
                <ul className="list-unstyled mt-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-light mb-2">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
