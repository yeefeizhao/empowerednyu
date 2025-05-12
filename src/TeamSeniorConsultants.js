import React from "react";
import TeamRow from "./TeamRow";
import "./TeamStyles.css";

function TeamSeniorConsultants({
    member1,
    member2,
    member3,
    member4,
    member5,
    member6,
    member7,
    member8,
    member9
}) {
    return (
        <div className="team senior-consultants">
            <div className="team-container">
                <div className="team-text">
                    <h2>Senior Consultants</h2>
                </div>
                <div className="team-rows">
                    <TeamRow
                        member1={member1}
                        member2={member2}
                        member3={member3}
                        member4={member4}
                        three={false}
                    />
                    <TeamRow
                        member1={member5}
                        member2={member6}
                        member3={member7}
                        member4={member8}
                        three={false}
                    />
                    <TeamRow
                        member1={member9}
                        three={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default TeamSeniorConsultants;