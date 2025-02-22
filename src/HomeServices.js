import React from "react";
import "./HomeServices.css";
import photo from "./images/home-services.jpg";
import { Link } from "react-router-dom";

function HomeServices() {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    return (
        <div className="home-services">
            <div className="home-services-container">
                <h1 className="home-services-title">Services</h1>
                <div className="home-services-info">
                    <div className="home-services-text">
                        <ul>
                            <li>Market Analysis</li>
                            <li>Impact Measurement</li>
                            <li>Retention and Recruitment</li>
                            <li>Financing Strategy</li>
                            <li>EdTech Research</li>
                        </ul>
                        <Link className="home-join-button-Link" to="services" onClick={goToTop}>
                            <button className="home-join-button">
                                <span className="button-default-text">
                                    <span>Learn more</span>
                                </span>
                                <span className="button-hover-text">
                                    <span>Learn more</span>
                                </span>
                            </button>
                        </Link>
                    </div>
                    <img src={photo} alt="" />
                </div>
            </div>
        </div>
    );
}

export default HomeServices;
