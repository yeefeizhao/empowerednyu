import React from "react";
import TeamRow from "./TeamRow";
import "./TeamStyle.css";

function TeamExecBoard({
    member1,
    member2,
    member3,
    member4,
    member5,
    member6,
    member7
}) {
    return (
        <div className="team exec">
            <div className="team-container">
                <div className="team-text">
                    <h2>Executive Board</h2>
                </div>
                <div className="team-rows">
                    <TeamRow
                        member1={member1}
                        member2={member2}
                        member3={member3}
                        three={true}
                    />
                    <TeamRow
                        member1={member4}
                        member2={member5}
                        member3={member6}
                        member4={member7}
                        three={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default TeamExecBoard;
