import AmazonProject from "../AmazonProject/AmazonProject";
import ZerodhaProject from "../ZerodhaProject/ZerodhaProduct";
export default function Projects() {
    return (
        <div style={{ backgroundColor: "#0d1117", minHeight: "100vh", padding: "4rem 2rem" }}>
            <div className="text-center mb-5">
                <h1 style={{ fontSize: "3rem", color: "#58a6ff", fontWeight: "bold" }}>
                    🚀 Main Projects
                </h1>
                <p style={{ color: "#c9d1d9", fontSize: "1.2rem" }}>
                    Showcasing full-stack web applications built with passion & precision.
                </p>
                <div
                    style={{
                        height: "4px",
                        width: "100px",
                        backgroundColor: "#58a6ff",
                        margin: "1rem auto",
                        borderRadius: "2px",
                    }}
                />
            </div>

            <AmazonProject />
            <ZerodhaProject/>
        </div>
    );
}
