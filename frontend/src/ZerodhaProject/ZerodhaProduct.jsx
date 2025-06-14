import { motion } from "framer-motion";

export default function ZerodhaProject() {
    const screenshots = [
        
            { src: "/Zerodha/Z1.png", desc: "📊 Showing About UI section of projects" },
            { src: "/Zerodha/Z2.png", desc: "📈 Live market watch with real-time stock updates" },
            { src: "/Zerodha/Z3.png", desc: "🔐 Secure Login and Signup Authentication" },
            { src: "/Zerodha/Z4.png", desc: "📉 Individual Stock Page with graphs & insights" },
            { src: "/Zerodha/Z10.png", desc: "🔚 Clean Footer with links & info" },
        
        
    ];

    return (
        <div style={{ color: "#fff", backgroundColor: "#0d1117", minHeight: "100vh" }}>
            {/* Top Section */}
            <div style={{ padding: "2rem 5vw" }}>
                <h2 className="text-info fw-bold mb-3">📈 Zerodha Clone Project</h2>
                <p className="mb-4" style={{ lineHeight: "1.7" }}>
                    A high-performance stock trading platform inspired by <strong>Zerodha</strong>. Built with the robust{" "}
                    <span className="text-warning">MERN Stack</span>, it simulates real-time trading, portfolio management,
                    and market tracking — all in a secure, responsive, and intuitive interface.
                </p>

                {/* Tech Stack + Main Image */}
                <div className="mb-5 d-flex flex-column flex-md-row align-items-start gap-4">
                    {/* Tech Stack List */}
                    <div className="flex-fill" style={{ maxWidth: "450px" }}>
                        <h5 className="text-light mb-3">🚀 Tech Stack Highlights:</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">✅ <strong>Frontend:</strong> React, Bootstrap</li>
                            <li className="mb-2">✅ <strong>Backend:</strong> Node.js, Express</li>
                            <li className="mb-2">✅ <strong>Database:</strong> MongoDB</li>
                            <li className="mb-2">✅ <strong>Authentication:</strong> JWT, Bcrypt</li>
                            <li className="mb-2">✅ <strong>APIs:</strong> Live Stock APIs & Websockets</li>
                        </ul>
                    </div>

                    {/* Main Project Image */}
                    <motion.div
                        style={{
                            maxWidth: "600px",
                            flex: "1",
                            borderRadius: "1rem",
                            overflow: "hidden",
                            boxShadow: "0 0 20px rgba(88, 166, 255, 0.3)"
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="/Zerodha/ZerodhaMain.png"
                            alt="Zerodha Project Main Screenshot"
                            className="img-fluid"
                            style={{ width: "100%", height: "auto", objectFit: "cover" }}
                        />
                    </motion.div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                    <h5 className="text-light mb-3">📌 Key Features:</h5>
                    <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-info text-dark px-3 py-2">📊 Live Market Watch</span>
                        <span className="badge bg-warning text-dark px-3 py-2">🔐 Secure Auth</span>
                        <span className="badge bg-secondary px-3 py-2">📱 Fully Responsive</span>
                        <span className="badge bg-primary px-3 py-2">💰 Instant Fund Transfer</span>
                        <span className="badge bg-success px-3 py-2">📉 Stock Analytics</span>
                    </div>
                </div>

                {/* Links */}
                <div className="d-flex flex-wrap gap-3">
                    <a
                        href="https://github.com/ArnavSirohi657/ZerodhaClone"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-info btn-lg"
                    >
                        🔗 View GitHub Repo
                    </a>
                    <a
                        href="https://zerodhaclone-10ae.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-success btn-lg"
                    >
                        🚀 View Live Project
                    </a>
                </div>
            </div>

            {/* Screenshot Section with Animation */}
            <div className="px-5 pt-3">
                <h4 className="text-light mb-4">🖼️ Project Screenshots</h4>
                <div className="d-flex overflow-auto gap-4 pb-3" style={{ whiteSpace: "nowrap" }}>
                    {screenshots.map((img, index) => (
                        <motion.div
                            key={index}
                            className="bg-dark rounded-4 overflow-hidden shadow"
                            style={{
                                minWidth: "300px",
                                maxWidth: "300px",
                                flex: "0 0 auto",
                                border: "1px solid #2c2f36",
                                transition: "transform 0.3s ease"
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <img
                                src={img.src}
                                alt={`Screenshot ${index + 1}`}
                                className="img-fluid w-100"
                                style={{
                                    height: "200px",
                                    objectFit: "cover"
                                }}
                            />
                            <div className="p-3 text-light small border-top border-secondary">
                                {img.desc}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
