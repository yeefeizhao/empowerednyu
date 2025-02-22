import React from "react";
import "./AboutValues.css";
import aboutphoto from "./images/about-team.jpg";
import AboutDropDown from "./AboutDropDown";

function AboutValues() {
    return (
        <div className="about-values">
            <div className="about-values-container">
                <img src={aboutphoto} alt="" />
                <div className="about-info">
                    <div className="about-text">
                        <h2>The cause</h2>
                        <p>
                            Educational inequity in the U.S.—especially in New
                            York City, where resource and funding gaps deepen
                            social immobility—remains unresolved despite many
                            proposed solutions. College students, with their
                            firsthand experience, offer unique insights that can
                            drive change, inspiring the creation of EmpowerED
                            Consulting to unite diverse, passionate voices in
                            education.
                        </p>
                    </div>
                    <div className="about-dropdown">
                        <AboutDropDown />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutValues;
