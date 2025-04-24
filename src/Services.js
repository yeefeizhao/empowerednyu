import React from "react";
import ServicesHeader from "./ServicesHeader";
import ServicesApproach from "./ServicesApproach";
import ServicesOfferings from "./ServicesOfferings";

function Services() {
    return (
        <div className="services">
            <div className="services-container">
                <ServicesHeader />
                <ServicesApproach />
                <ServicesOfferings />
            </div>
        </div>
    );
}

export default Services;
