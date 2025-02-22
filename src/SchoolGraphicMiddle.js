import React from "react";
import "./SchoolGraphicMiddle.css";
import SchoolGraphicHeader from "./SchoolGraphicHeader";
import { Link } from "react-router-dom";

function SchoolGraphicMiddle() {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="school-graphic-middle">
            <div className="school-graphic-middle-container">
                <div className="school-graphic-text1">
                    <SchoolGraphicHeader />
                </div>
                <div className="school-graphic-text2">
                    <p>
                        These two NYC high schools are just 0.5 miles apart, but
                        their public education quality sets them worlds apart.
                    </p>
                </div>
                <div className="school-graphic-button">
                    <Link className="school-graphic-button-Link" to="/about" onClick={goToTop}>
                        <button className="school-graphic-button">
                            <span className="button-default-text">
                                <span>Learn about us</span>
                            </span>
                            <span className="button-hover-text">
                                <span>Learn about us</span>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SchoolGraphicMiddle;
