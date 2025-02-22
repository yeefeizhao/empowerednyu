import React from "react";
import './ServicesOption.css'

function ServicesOption({ title, description }) {
    return (
        <div className="services-option">
            <div className="services-option-container">
                <div className="services-option-circle"><h2>{title}</h2></div>
                <div className="services-option-description">{description}</div>
            </div>
        </div>
    );
}

export default ServicesOption;
