import React from "react";
import "./HomeCurrentPartners.css";
import jany from "./images/current/jany.png";
import amal from "./images/current/amal_aliance.jpg";
import access from "./images/current/access_theater.png";

function HomeCurrentPartners() {
    return (
        <div className="current-partners">
            <div className="current-partners-container">
                <div className="current-partners-title">
                    <h2>Current Partners</h2>
                </div>
                <div className="current-partners-logos">
						<img src={jany} alt="JANY" />
						<img src={amal} alt="Amal Aliance" />
						<img src={access} alt="Access Theater" />
				</div>
                <div className="current-partners-end"></div>
            </div>
        </div>
    );
}

export default HomeCurrentPartners;
