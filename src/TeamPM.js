import React from "react";
import TeamRow from "./TeamRow";
import "./TeamStyle.css";

function TeamPM({
    member1,
    member2,
    member3,
    member4,
}) {
    return (
        <div className="team" style={{ height: "80vh" }}>
            <div className="team-container">
                <div className="team-text">
                    <h2>Project Managers</h2>
                </div>
                <div className="team-rows">
                    <TeamRow
                        member1={member1}
                        member2={member2}
                        member3={member3}
                        member4={member4}   
                        three={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default TeamPM;
