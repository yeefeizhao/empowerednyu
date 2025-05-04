import React, { useState } from "react";
import logo from "./images/empowered-logo.png";
import "./Nav.css";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="nav">
            <div className="nav-container">
                <div className="nav-logo" href="/">
                    <Link to="/ " onClick={() => setMenuOpen(false)}>
                        <img src={logo} alt="placeholder" />
                    </Link>
                </div>
                <div
                    className="nav-menu-icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </div>
                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <Link
                        className="nav-link"
                        to="/"
                        onClick={() => setMenuOpen(false)}
                    >
                        <p>Home</p>
                    </Link>
                    <Link
                        className="nav-link"
                        to="/about"
                        onClick={() => setMenuOpen(false)}
                    >
                        <p>About</p>
                    </Link>
                    <Link
                        className="nav-link"
                        to="/team"
                        onClick={() => setMenuOpen(false)}
                    >
                        <p>Team</p>
                    </Link>
                    <Link
                        className="nav-link"
                        to="/services"
                        onClick={() => setMenuOpen(false)}
                    >
                        <p>Services</p>
                    </Link>
                    <Link
                        className="nav-link"
                        to="/join"
                        onClick={() => setMenuOpen(false)}
                    >
                        <p>Get Involved</p>
                    </Link>
                    <Link
                        className="nav-link"
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                    >
                        <p>Contact Us</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
