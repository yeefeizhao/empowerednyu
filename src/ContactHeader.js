import React, { useEffect, useState } from "react";
import "./ContactHeader.css";

function ContactHeader() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true); // Trigger animation after component mounts
    }, []);
    return (
        <div className="contact-header">
            <div
                className={`contact-header-container ${loaded ? "loaded" : ""}`}
            >
                <h1 className="contact-header-title">
                    How can we help
                    <br /> you move{" "}
                    <span className="progress-span">forward?</span>
                </h1>

                <h3 className="contact-header-subtitle">
                    Reach out to us. We'd love to hear from you.
                </h3>
            </div>
        </div>
    );
}

export default ContactHeader;
