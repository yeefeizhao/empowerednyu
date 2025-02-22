import React from "react";
import linkedin from "./images/footer/linkedin.png";
import instagram from "./images/footer/instagram.png";
import facebook from "./images/footer/facebook.png";
import email from "./images/footer/email.png";
import "./Footer.css";
import FooterHeader from "./FooterHeader";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <FooterHeader />
                </div>
                <div className="footer-bottom">
                    <div className="footer-contact-info">
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
                    <p className="footer-rights">
                        EmpowerED © 2025. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
