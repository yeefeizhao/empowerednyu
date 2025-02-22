import React, { useEffect, useState } from "react";
import "./HomeHeader.css";
import { Link } from "react-router-dom";

function HomeHeader() {
    const [loaded, setLoaded] = useState(false);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        setLoaded(true); // Trigger animation after component mounts
    }, []);
    return (
        <div className="header">
            <div className={`header-container ${loaded ? "loaded" : ""}`}>
                <div className="header-text">
                    <div className="header-top">
                        <h1 className="header-title">
                            Every student deserves{" "}
                            <span className="fair-span">fair</span> <br />
                            and <span className="equal-span">equal</span> access
                            to education.
                        </h1>
                    </div>

                    <div className="header-bottom">
                        <h3 className="header-subtitle">
                            EmpowerED is a student-driven educational
                            development consulting org based out of NYU.
                        </h3>

                        <div className="header-buttons">
                            <Link className="header-button-Link" to="contact" onClick={goToTop}>
                                <button className="header-button header-button-blue">
                                    <span className="button-default-text">
                                        <span>Partner with us</span>
                                    </span>
                                    <span className="button-hover-text">
                                        <span>Partner with us</span>
                                    </span>
                                </button>
                            </Link>
                            <Link className="header-button-Link" to="services" onClick={goToTop}>
                                <button className="header-button">
                                    <span className="button-default-text">
                                        <span>See our services</span>
                                    </span>
                                    <span className="button-hover-text">
                                        <span>See our services</span>
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;
