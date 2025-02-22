import React, { useEffect, useState } from "react";
import "./SchoolGraphicHeader.css";

function SchoolGraphicHeader() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true); // Trigger animation after component mounts
    }, []);
    return (
        <div className="school-graphic-header">
            <div
                className={`school-graphic-header-container ${
                    loaded ? "loaded" : ""
                }`}
            >
                <h1 className="school-graphic-header-title">
                    Work with us to <br />close the{" "}
                    <span className="distance-span">gap</span>
                </h1>
            </div>
        </div>
    );
}

export default SchoolGraphicHeader;
