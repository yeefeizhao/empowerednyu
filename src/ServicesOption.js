import React from "react";
import "./ServicesOption.css";

function ServicesOption({ number, title, description }) {
    return (
        <div className="services-option">
            <div className="services-option-container">
                <div className="services-option-number">
                    <h2>{number}.</h2>
                </div>
                <div className="services-option-content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ServicesOption;
