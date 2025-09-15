import React from "react";
import "./HomeCurrentPartners.css";
import undisclosed from "./images/current/undisclosed.png";
import etm from "./images/current/etm.jpg";
import farm from "./images/current/farm-school.jpg";
import luni from "./images/current/luniemere.png";

function HomeCurrentPartners() {
    return (
        <div className="current-partners">
            <div className="current-partners-container">
                <div className="current-partners-title">
                    <h2>Current Partners</h2>
                </div>
                <div className="current-partners-logos">
                    <div className="current-partners-row">
                        <img src={luni} alt="Luniemere" />
                        <img src={etm} alt="ETM" />
                    </div>
                    <div className="current-partners-row">
                        <img src={farm} alt="Farm School" />
                        <img src={undisclosed} alt="Undisclosed Client" />
                    </div>
                </div>
                <div className="current-partners-end"></div>
            </div>
        </div>
    );
}

export default HomeCurrentPartners;
