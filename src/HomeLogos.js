import React from "react";
import "./HomeLogos.css";
import logosImage from "./images/logos.png";

function HomeLogos() {
    return (
		<div className="logos">
            <div className="logos-container">
                <div className="logos-slide">
                    <img src={logosImage} alt="Partner logos" />
                </div>
                <div className="logos-slide">
                    <img src={logosImage} alt="Partner logos" />
                </div>
            </div>
        </div>
    );
}

export default HomeLogos;
