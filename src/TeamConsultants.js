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
                        three={true}
                    />
                    <TeamRow
                        member1={member4}
                        member2={member5}
                        member3={member6}
                        member4={member7}
                        three={false}
                    />
                    <TeamRow 
                        member1={member8}
                        member2={member9}
                        member3={member10}
                        member4={member11}
                        three={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default TeamConsultants;
