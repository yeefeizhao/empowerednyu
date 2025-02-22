import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import "./TeamRow.css";

function TeamRow({ member1, member2, member3, member4 }) {
    return (
        <div className="team-row">
            <div className="team-row-container">
                <div className="team-row-members">
                    {member1 ? (
                        <TeamMemberCard
                            name={member1.name}
                            photo={member1.photo}
                            position={member1.position}
                            year={member1.year}
                            major={member1.major}
                            hometown={member1.hometown}
                            linkedin={member1.linkedin}
                            email={member1.email}
                        />
                    ) : null}
                    {member2 ? (
                        <TeamMemberCard
                            name={member2.name}
                            photo={member2.photo}
                            position={member2.position}
                            year={member2.year}
                            major={member2.major}
                            hometown={member2.hometown}
                            linkedin={member2.linkedin}
                            email={member2.email}
                        />
                    ) : null}
                </div>
                <div className="team-row-members">
                    {member3 ? (
                        <TeamMemberCard
                            name={member3.name}
                            photo={member3.photo}
                            position={member3.position}
                            year={member3.year}
                            major={member3.major}
                            hometown={member3.hometown}
                            linkedin={member3.linkedin}
                            email={member3.email}
                        />
                    ) : null}
                    {member4 ? (
                        <TeamMemberCard
                            name={member4.name}
                            photo={member4.photo}
                            position={member4.position}
                            year={member4.year}
                            major={member4.major}
                            hometown={member4.hometown}
                            linkedin={member4.linkedin}
                            email={member4.email}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default TeamRow;
