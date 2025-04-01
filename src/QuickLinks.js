import React from "react";
import "./QuickLinks.css";
import logo from "./images/empowered-logo.avif";
import linkedin from "./images/quick-links/linkedin.png";
import instagram from "./images/quick-links/instagram.png";
import facebook from "./images/quick-links/facebook.png";
import email from "./images/quick-links/email.png";
import "./Footer.css";

function QuickLinks() {
    return (
        <div className="quick-links">
            <div className="quick-links-container">
                <div className="quick-links-header">
                    <img src={logo} alt="logo" className="quick-links-logo" />
                    <p>Quick Links</p>
                </div>

                <div className="quick-links-buttons">
                    <button className="quick-link-button">
                        <a href="https://www.empowerednyu.org">
                            Official Website
                        </a>
                    </button>
                    <button className="quick-link-button">
                        <a href="https://forms.gle/uiVfAGvVxdj5o1B97">
                            Coffee Chat Form
                        </a>
                    </button>
                    <button className="quick-link-button">
                        <a href="https://www.empowerednyu.org">
                            Consultant Application
                        </a>
                    </button>
                    <button className="quick-link-button">
                        <a href="https://www.empowerednyu.org/contact">
                            Contact Us
                        </a>
                    </button>
                </div>
                <div className="links-contact-info">
                    <a
                        href="https://www.facebook.com/empoweredconsultingny/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/empoweredconsultingny/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedin} alt="linkedin" />
                    </a>
                    <a
                        href="https://www.instagram.com/empowered.nyu"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={instagram} alt="instagram" />
                    </a>
                    <a href="mailto:empoweredconsultingnyu@gmail.com">
                        <img src={email} alt="email" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default QuickLinks;
