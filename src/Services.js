import React from "react";
import ServicesHeader from "./ServicesHeader";
import ServicesApproach from "./ServicesApproach";
import ServicesOfferings from "./ServicesOfferings";
import BufferSection from "./BufferSection";

function Services() {
    return (
        <div className="services">
            <div className="services-container">
                <ServicesHeader />
                <ServicesApproach />
                <BufferSection />
                <ServicesOfferings />
            </div>
        </div>
    );
}

export default Services;
