import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top nav-scroll">
      <div className="container-fluid">
        <img
          alt=""
          src={require("../images/logo.png")}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        <Link
          to="/"
          className="text-white navbar-brand navtext"
          style={{ textDecoration: "none" }}
        >
          PredicativeTechnology
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0 nav-underline d-inline-flex fw-semibold">
            <li className="nav-item ">
              <Link to="/dashboard" className="nav-link text-white">
                Dashboard
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/upload" className="nav-link text-white">
                Upload Image
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/login" className="nav-link text-white">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
