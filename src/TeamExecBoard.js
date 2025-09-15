import React, { useEffect, useState } from "react";
import TeamRow from "./TeamRow";
import "./TeamStyles.css";

function TeamExecBoard({
    member1,
    member2,
    member3,
    member4,
    member5,
    member6,
}) {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="team exec">
            <div className="team-container">
                <div className="team-text">
                    <h2>Executive Board</h2>
                </div>
                <div className="team-rows">
                    {mobile ? (
                        <>
                            <TeamRow
                                member1={member1}
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
                        </>
                    ) : (
                        <>
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
                                three={true}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TeamExecBoard;
