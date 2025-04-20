import React from "react";
import TeamRow from "./TeamRow";
import "./TeamStyle.css";

function TeamSeniorConsultants({
    member1,
    member2,
    member3,
    member4,
    member5,
    member6,
    member7,
    member8,
    member9,
    member10,
}) {
    return (
        <div className="team" style={{ height: "210vh" }}>
            <div className="team-container">
                <div className="team-text">
                    <h2>Senior Consultants</h2>
                </div>
                <div className="team-rows">
                    <TeamRow
                        member2={member1}
                        member3={member2}
                        three={false}
                    />
                    <TeamRow
                        member1={member3}
                        member2={member4}
                        member3={member5}
                        member4={member6}   
                        three={false}
                    />
                    <TeamRow
                        member1={member7}
                        member2={member8}
                        member3={member9}
                        member4={member10}
                        three={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default TeamSeniorConsultants;
