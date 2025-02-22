import React from "react";
import { Link } from "react-router-dom";
import './JoinButton.css'

function JoinButtons() {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="join-buttons">
            <div className="join-buttons-container">
                <Link className="join-button-Link" to="contact" onClick={goToTop}>
                    <button className="join-button join-button-blue">
                        <span className="button-default-text">
                            <span>Partner with us</span>
                        </span>
                        <span className="button-hover-text">
                            <span>Partner with us</span>
                        </span>
                    </button>
                </Link>
                <Link className="join-button-Link" to="join" onClick={goToTop}>
                    <button className="join-button">
                        <span className="button-default-text">
                            <span>Get involved</span>
                        </span>
                        <span className="button-hover-text">
                            <span>Get involved</span>
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default JoinButtons;
