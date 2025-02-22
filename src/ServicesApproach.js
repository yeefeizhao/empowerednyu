import React from "react";
import "./ServicesApproach.css";
import groupphoto from "./images/headshots/group.webp";

function ServicesApproach() {
    return (
        <div className="services-approach">
            <div className="services-approach-container">
                <div className="services-approach-text">
                    <h2>The approach</h2>
                    <p>
                        EmpowerED advances educational equity through student
                        consulting, harnessing diverse skills to help education
                        nonprofits operate more effectively. While not everyone
                        can teach or mentor, all can contribute through
                        consulting, making EmpowerED both inclusive and
                        impactful. <br />
                        <br />
                        EmpowerED teams, spanning diverse academic backgrounds,
                        tackle strategic and creative challenges for
                        resource-limited nonprofits. By leveraging recent
                        firsthand experience in public education, students
                        collaborate to deliver tailored, effective solutions
                        that shape the future of education.
                    </p>
                </div>
                <img src={groupphoto} alt="" />
            </div>
        </div>
    );
}

export default ServicesApproach;
