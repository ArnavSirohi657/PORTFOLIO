import { NavLink } from "react-router-dom";
import "../CSS/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white fw-bold fs-4" to="/">
          Arnav Sirohi
        </NavLink>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto gap-4">
            <NavLink className="nav-link text-white" to="/" end>
              Home
            </NavLink>
            <NavLink className="nav-link text-white" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link text-white" to="/projects">
              Projects
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
