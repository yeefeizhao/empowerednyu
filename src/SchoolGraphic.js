import React, { useState, useEffect } from "react";
import BarGraph from "./BarGraph";
import "./SchoolGraphic.css";
import SchoolGraphicMiddle from "./SchoolGraphicMiddle";
import SchoolGraphicHeader from "./SchoolGraphicHeader";
import { Link } from "react-router-dom";

const bronxData = [
    { title: "Took at Least One AP® Exam", percentage: 94 },
    { title: "Passed at Least One AP® Exam", percentage: 91 },
    { title: "Mathematics Proficiency", percentage: 99 },
    { title: "Reading Proficiency", percentage: 100 },
    { title: "Graduation Rate", percentage: 100 },
];

const dewittData = [
    { title: "Took at Least One AP® Exam", percentage: 43 },
    { title: "Passed at Least One AP® Exam", percentage: 13 },
    { title: "Mathematics Proficiency", percentage: 49 },
    { title: "Reading Proficiency", percentage: 57 },
    { title: "Graduation Rate", percentage: 51 },
];

function SchoolGraphic() {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="school-graphic">
            {!isMobileView ? (
                <div className="school-graphic-info">
                    <div className="school-graphic-graph">
                        <div className="school-graphic-placeholder"></div>
                        <BarGraph
                            className="school-graphic-bar-graph"
                            title="Dewitt Clinton High School"
                            data={dewittData}
                        />
                    </div>
                    <SchoolGraphicMiddle />
                    <div className="school-graphic-graph">
                        <div className="school-graphic-placeholder"></div>
                        <BarGraph
                            className="school-graphic-bar-graph"
                            title="Bronx High School of Science"
                            data={bronxData}
                        />
                    </div>
                </div>
            ) : (
                <div className="school-graphic-info">
                    <div className="school-graphic-text1">
                        <SchoolGraphicHeader />
                    </div>
                    <div className="school-graphic-graphs">
                        <div className="school-graphic-graph no-hover">
                            <div className="school-graphic-placeholder"></div>
                            
                        </div>
                        <div className="school-graphic-graph no-hover">
                            <div className="school-graphic-placeholder"></div>

                        </div>
                    </div>
                    <div className="school-graphic-text2">
                        <p>
                            Dewitt Clinton High School and Bronx School of Science are just 0.5 miles apart,
                            but their public education quality sets them worlds
                            apart.
                        </p>
                    </div>
                    <div className="school-graphic-button">
                        <Link
                            className="school-graphic-button-Link"
                            to="/about"
                        >
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
            )}
        </div>
    );
}

export default SchoolGraphic;
