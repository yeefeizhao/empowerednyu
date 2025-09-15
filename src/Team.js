import React from "react";
import TeamHeader from "./TeamHeader";
import TeamExecBoard from "./TeamExecBoard";
import TeamConsultants from "./TeamConsultants";
import TeamSeniorConsultants from "./TeamSeniorConsultants";
import TeamPM from "./TeamPM";
import {execBoardData, pmData, seniorConsultantsData, consultantsData} from './utils/TeamInfo'

function Team() {

    return (
        <div>
            <TeamHeader />
            <TeamExecBoard
                member1={execBoardData[0]}
                member2={execBoardData[1]}
                member3={execBoardData[2]}
                member4={execBoardData[3]}
                member5={execBoardData[4]}
                member6={execBoardData[5]}
            />
            <TeamPM 
                member1={pmData[0]}
                member2={pmData[1]}
                member3={pmData[2]}
                member4={pmData[3]}
            />
            <TeamSeniorConsultants 
                member1={seniorConsultantsData[0]}
                member2={seniorConsultantsData[1]}
                member3={seniorConsultantsData[2]}
                member4={seniorConsultantsData[3]}
                member5={seniorConsultantsData[4]}
                member6={seniorConsultantsData[5]}
                member7={seniorConsultantsData[6]}
                member8={seniorConsultantsData[7]}
                member9={seniorConsultantsData[8]}
            />
            <TeamConsultants
                member1={consultantsData[0]}
                member2={consultantsData[1]}
                member3={consultantsData[2]}
                member4={consultantsData[3]}
                member5={consultantsData[4]}
                member6={consultantsData[5]}
                member7={consultantsData[6]}
                member8={consultantsData[7]}
                member9={consultantsData[8]}
                member10={consultantsData[9]}
                member11={consultantsData[10]}
            />
        </div>
    );
}

export default Team;
