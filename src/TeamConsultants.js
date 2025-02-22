import React from "react";
import TeamRow from "./TeamRow";
import "./TeamConsultants.css";

function TeamConsultants({
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
    member11,
    member12,
}) {
    return (
        <div className="consultants">
            <div className="consultants-container">
                <div className="consultants-text">
                    <h2>Consultants</h2>
                </div>
                <div className="consultants-rows">
                    <TeamRow
                        member1={member1}
                        member2={member2}
                        member3={member3}
                        member4={member4}
                    />
                    <TeamRow
                        member1={member5}
                        member2={member6}
                        member3={member7}
                        member4={member8}
                    />
                    <TeamRow 
                        member1={member9}
                        member2={member10}
                        member3={member11}
                        member4={member12}
                    />
                </div>
            </div>
        </div>
    );
}

export default TeamConsultants;
