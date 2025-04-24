import React from "react";
import TeamHeader from "./TeamHeader";
import TeamExecBoard from "./TeamExecBoard";
import TeamConsultants from "./TeamConsultants";
import TeamPM from "./TeamPM";
import TeamSeniorConsultants from "./TeamSeniorConsultants";
import alina from "./images/headshots/alina_headshot.webp";
import alix from "./images/headshots/alix_headshot.webp";
import anvita from "./images/headshots/anvita_headshot.webp";
import arya from "./images/headshots/arya_headshot.webp";
import caroline from "./images/headshots/caroline_headshot.webp";
import jenny from "./images/headshots/jenny_headshot.webp";
import lily from "./images/headshots/lily_headshot.webp";
import rivkah from "./images/headshots/rivkah_headshot.webp";
import vincent from "./images/headshots/vincent_headshot.webp";
import victoria from "./images/headshots/victoria_headshot.webp";
import yifei from "./images/headshots/yifei_headshot.webp";
import sruti from "./images/headshots/sruti_headshot.webp";
import chloe from "./images/headshots/chloe_headshot.webp";
import akshita from "./images/headshots/akshita_headshot.webp";
import stephanie from "./images/headshots/stephanie_headshot.webp";
import nora from "./images/headshots/nora_headshot.webp";


function Team() {
    const execBoardData = [
        {
            name: "Victoria Li",
            photo: victoria,
            position: "Co-President",
            year: "Master's",
            major: "Education Studies & Social Policy",
            hometown: "Highland Park, NJ",
            linkedin: "https://www.linkedin.com/in/victoria-li-a6a366257/",
            email: "victoria.li@nyu.edu",
        },
        {
            name: "Sruti Jonnalagadda",
            photo: sruti,
            position: "Co-President",
            year: "Senior",
            major: "Economics & Math",
            hometown: "Pleasanton, California",
            linkedin: "https://www.linkedin.com/in/srutij/",
            email: "sj3721@nyu.edu",
        },
        {
            name: "Akshita Kannan",
            photo: akshita,
            position: "Vice President",
            year: "Junior",
            major: "Economics",
            hometown: "North Royalton, OH",
            linkedin: "https://www.linkedin.com/in/akshita-kannan/",
            email: "ak10524@nyu.edu",
        },
        {
            name: "Nora Cummins",
            photo: nora,
            position: "Director of Prof. Development",
            year: "Senior",
            major: "Economics",
            hometown: "Louisville, KY",
            linkedin: "https://www.linkedin.com/in/norajcummins/",
            email: "njc9333@nyu.edu",
        },
        {
            name: "Chloe Kindangen",
            photo: chloe,
            position: "Director of Media",
            year: "Junior",
            major: "Business",
            hometown: "Jakarta, Indonesia",
            linkedin: "https://www.linkedin.com/in/chloekindangen/",
            email: "ck3469@stern.nyu.edu",
        },
        {
            name: "Yi-Fei Zhao",
            photo: yifei,
            position: "Director of Technology",
            year: "Junior",
            major: "Business, Stats, CS",
            hometown: "Pittsburgh, PA",
            linkedin: "https://www.linkedin.com/in/yi-fei-zhao/",
            email: "yi-fei.zhao@stern.nyu.edu",
        },
    ];

    const pmData = [
        {
            name: "Stephanie Tinco",
            photo: stephanie,
            position: "Project Manager",
            year: "Senior",
            major: "Economics",
            hometown: "Bronx, New York",
            linkedin: "https://www.linkedin.com/in/stephanie-tinco/",
            email: "skt9886@nyu.edu",
        },
        {
            name: "Caroline Chan",
            photo: caroline,
            position: "Project Manager",
            year: "Junior",
            major: "Economics",
            hometown: "Hong Kong",
            linkedin: "https://www.linkedin.com/in/caroline-chan-a98297234/",
            email: "chc9857@nyu.edu",
        },
        {
            name: "Leon Dang",
            photo: stephanie,
            position: "Project Manager",
            year: "Junior",
            major: "Finance & Data Science",
            hometown: "Bronx, New York",
            linkedin: "https://www.linkedin.com/in/stephanie-tinco/",
            email: "skt9886@nyu.edu",
        },
        {
            name: "Alex Li",
            photo: stephanie,
            position: "Project Manager",
            year: "Senior",
            major: "Economics",
            hometown: "Bronx, New York",
            linkedin: "https://www.linkedin.com/in/stephanie-tinco/",
            email: "skt9886@nyu.edu",
        },
    ];

    const seniorConsultantsData = [
        {
            name: "Vincent Li",
            photo: vincent,
            position: "Consultant",
            year: "Senior",
            major: "Economics",
            hometown: "Los Angeles, CA",
            linkedin: "https://www.linkedin.com/in/vincentli2004/",
            email: "vl2271@nyu.edu",
        },
        {
            name: "Arya Nadella",
            photo: arya,
            position: "Consultant",
            year: "Junior",
            major: "Maths & Economics",
            hometown: "Hyderabad, India",
            linkedin: "https://www.linkedin.com/in/arya-nadella-3a4b33230/",
            email: "an4057@nyu.edu",
        },
        {
            name: "Lily Liang",
            photo: lily,
            position: "Consultant",
            year: "Sophomore",
            major: "Data Science & Management",
            hometown: "Toronto, Canada",
            linkedin: "https://www.linkedin.com/in/lily-liang1109/",
            email: "jl15890@stern.nyu.edu",
        },
        {
            name: "Anvita Gurumurthy",
            photo: anvita,
            position: "Consultant",
            year: "Junior",
            major: "Finance & Management",
            hometown: "Basking Ridge, NJ",
            linkedin: "https://www.linkedin.com/in/anvita-gurumurthy/",
            email: "ag9696@stern.nyu.edu",
        },
        {
            name: "Jenny Kim",
            photo: jenny,
            position: "Consultant",
            year: "Junior",
            major: "Economics & Strategic Thinking",
            hometown: "Seoul, South Korea",
            linkedin: "https://www.linkedin.com/",
            email: "jennykim@nyu.edu",
        },
        {
            name: "Rivkah-Esther Henig",
            photo: rivkah,
            position: "Consultant",
            year: "Junior",
            major: "Finance & Accounting",
            hometown: "Brooklyn, NY",
            linkedin: "https://www.linkedin.com/in/rivkah-h-00ba08304/",
            email: "rh3801@stern.nyu.edu",
        },
        {
            name: "Alina Panteleeva",
            photo: alina,
            position: "Consultant",
            year: "Junior",
            major: "Math & Economics",
            hometown: "Moscow, Russia",
            linkedin: "https://www.linkedin.com/in/alina-panteleeva/",
            email: "ap8383@nyu.edu",
        },
        {
            name: "Alix Yoon",
            photo: alix,
            position: "Consultant",
            year: "Junior",
            major: "Finance & Data Science",
            hometown: "Fort Lee, New Jersey",
            linkedin: "https://www.linkedin.com/in/jy72/",
            email: "joowon.yoon@stern.nyu.edu",
        },
    ];

    const consultantsData = [
        {
            name: "Vincent Li",
            photo: vincent,
            position: "Consultant",
            year: "Senior",
            major: "Economics",
            hometown: "Los Angeles, CA",
            linkedin: "https://www.linkedin.com/in/vincentli2004/",
            email: "vl2271@nyu.edu",
        },
        {
            name: "Arya Nadella",
            photo: arya,
            position: "Consultant",
            year: "Junior",
            major: "Maths & Economics",
            hometown: "Hyderabad, India",
            linkedin: "https://www.linkedin.com/in/arya-nadella-3a4b33230/",
            email: "an4057@nyu.edu",
        },
        {
            name: "Lily Liang",
            photo: lily,
            position: "Consultant",
            year: "Sophomore",
            major: "Data Science & Management",
            hometown: "Toronto, Canada",
            linkedin: "https://www.linkedin.com/in/lily-liang1109/",
            email: "jl15890@stern.nyu.edu",
        },
        {
            name: "Anvita Gurumurthy",
            photo: anvita,
            position: "Consultant",
            year: "Junior",
            major: "Finance & Management",
            hometown: "Basking Ridge, NJ",
            linkedin: "https://www.linkedin.com/in/anvita-gurumurthy/",
            email: "ag9696@stern.nyu.edu",
        },
        {
            name: "Jenny Kim",
            photo: jenny,
            position: "Consultant",
            year: "Junior",
            major: "Economics & Strategic Thinking",
            hometown: "Seoul, South Korea",
            linkedin: "https://www.linkedin.com/",
            email: "jennykim@nyu.edu",
        },
        {
            name: "Rivkah-Esther Henig",
            photo: rivkah,
            position: "Consultant",
            year: "Junior",
            major: "Finance & Accounting",
            hometown: "Brooklyn, NY",
            linkedin: "https://www.linkedin.com/in/rivkah-h-00ba08304/",
            email: "rh3801@stern.nyu.edu",
        },
        {
            name: "Alina Panteleeva",
            photo: alina,
            position: "Consultant",
            year: "Junior",
            major: "Math & Economics",
            hometown: "Moscow, Russia",
            linkedin: "https://www.linkedin.com/in/alina-panteleeva/",
            email: "ap8383@nyu.edu",
        },
        {
            name: "Alix Yoon",
            photo: alix,
            position: "Consultant",
            year: "Junior",
            major: "Finance & Data Science",
            hometown: "Fort Lee, New Jersey",
            linkedin: "https://www.linkedin.com/in/jy72/",
            email: "joowon.yoon@stern.nyu.edu",
        },
    ];

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
            />
        </div>
    );
}

export default Team;
