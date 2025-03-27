import React from "react";
import TeamHeader from "./TeamHeader";
import TeamExecBoard from "./TeamExecBoard";
import TeamConsultants from "./TeamConsultants";
import photo from "./images/headshot.png";
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
import krisha from "./images/headshots/krisha_headshot.webp";
import sruti from "./images/headshots/sruti_headshot.webp";
import chloe from "./images/headshots/chloe_headshot.webp";
import akshita from "./images/headshots/akshita_headshot.webp";
import stephanie from "./images/headshots/stephanie_headshot.webp";
import nora from "./images/headshots/nora_headshot.webp";
import tyler from "./images/headshots/tyler_headshot.webp";
import will from "./images/headshots/will_headshot.webp";

function Team() {
    const execBoardData = [
        {
            name: "Victoria Li",
            photo: victoria,
            position: "President",
            year: "Master's",
            major: "Education Studies & Social Policy",
            hometown: "Highland Park, NJ",
            linkedin: "https://www.linkedin.com/in/victoria-li-a6a366257/",
            email: "victoria.li@nyu.edu",
        },
        {
            name: "Akshita Kannan",
            photo: akshita,
            position: "Vice President",
            year: "Sophomore",
            major: "Economics",
            hometown: "North Royalton, OH",
            linkedin: "https://www.linkedin.com/in/akshita-kannan/",
            email: "ak10524@nyu.edu",
        },
        {
            name: "Will Gerber",
            photo: will,
            position: "Director of Outreach",
            year: "Senior",
            major: "Biology",
            hometown: "Baltimore, MD",
            linkedin: "https://www.linkedin.com/",
            email: "wkg2009@nyu.edu",
        },
        {
            name: "Tyler Liu",
            photo: tyler,
            position: "Director of Operations",
            year: "Sophomore",
            major: "Finance",
            hometown: "Taipei, Taiwan",
            linkedin: "https://www.linkedin.com/in/tyler-m-liu/",
            email: "tyler.liu@stern.nyu.edu",
        },
        {
            name: "Krisha Shah",
            photo: krisha,
            position: "Director of Events",
            year: "Sophomore",
            major: "Psychology",
            hometown: "West Lafayette, Indiana",
            linkedin: "https://www.linkedin.com/in/krisha-shah-660222226/",
            email: "kss9291@nyu.edu",
        },
        {
            name: "Chloe Kindangen",
            photo: chloe,
            position: "Director of Media",
            year: "Sophomore",
            major: "Business",
            hometown: "Jakarta, Indonesia",
            linkedin: "https://www.linkedin.com/in/chloekindangen/",
            email: "ck3469@stern.nyu.edu",
        },
        {
            name: "Nora Cummins",
            photo: nora,
            position: "Director of Prof. Development",
            year: "Junior",
            major: "Economics",
            hometown: "Louisville, KY",
            linkedin: "https://www.linkedin.com/in/norajcummins/",
            email: "njc9333@nyu.edu",
        },
        {
            name: "Sruti Jonnalagadda",
            photo: sruti,
            position: "Director of Recruitment",
            year: "Junior",
            major: "Economics & Math",
            hometown: "Pleasanton, California",
            linkedin: "https://www.linkedin.com/in/srutij/",
            email: "sj3721@nyu.edu",
        },
        {
            name: "Yi-Fei Zhao",
            photo: yifei,
            position: "Director of Technology",
            year: "Sophomore",
            major: "Business, Stats, CS",
            hometown: "Pittsburgh, PA",
            linkedin: "https://www.linkedin.com/in/yi-fei-zhao/",
            email: "yi-fei.zhao@stern.nyu.edu",
        },
        {
            name: "Minh Ta",
            photo: photo,
            position: "Senior Advisor",
            year: "Senior",
            major: "major",
            hometown: "hometown",
            linkedin: "https://www.linkedin.com/in/ducminhta/",
            email: "mdt9716@nyu.edu",
        },
    ];

    const consultantsData = [
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
            name: "Vincent Li",
            photo: vincent,
            position: "Consultant",
            year: "Junior",
            major: "Economics",
            hometown: "Los Angeles, CA",
            linkedin: "https://www.linkedin.com/in/vincentli2004/",
            email: "vl2271@nyu.edu",
        },
        {
            name: "Arya Nadella",
            photo: arya,
            position: "Consultant",
            year: "Sophomore",
            major: "Maths & Economics",
            hometown: "Hyderabad, India",
            linkedin: "https://www.linkedin.com/in/arya-nadella-3a4b33230/",
            email: "an4057@nyu.edu",
        },
        {
            name: "Caroline Chan",
            photo: caroline,
            position: "Consultant",
            year: "Sophomore",
            major: "Economics",
            hometown: "Hong Kong",
            linkedin: "https://www.linkedin.com/in/caroline-chan-a98297234/",
            email: "chc9857@nyu.edu",
        },
        {
            name: "Lily Liang",
            photo: lily,
            position: "Consultant",
            year: "Freshman",
            major: "Data Science & Management",
            hometown: "Toronto, Canada",
            linkedin: "https://www.linkedin.com/in/lily-liang1109/",
            email: "jl15890@stern.nyu.edu",
        },
        {
            name: "Anvita Gurumurthy",
            photo: anvita,
            position: "Consultant",
            year: "Sophomore",
            major: "Finance & Management and Organizations",
            hometown: "Basking Ridge, NJ",
            linkedin: "https://www.linkedin.com/in/anvita-gurumurthy/",
            email: "ag9696@stern.nyu.edu",
        },
        {
            name: "Jenny Kim",
            photo: jenny,
            position: "Consultant",
            year: "Sophomore",
            major: "Economics & Strategic Thinking",
            hometown: "Seoul, South Korea",
            linkedin: "https://www.linkedin.com/",
            email: "jennykim@nyu.edu",
        },
        {
            name: "Krisha Shah",
            photo: krisha,
            position: "Consultant",
            year: "Sophomore",
            major: "Psychology",
            hometown: "West Lafayette, Indiana",
            linkedin: "https://www.linkedin.com/in/krisha-shah-660222226/",
            email: "kss9291@nyu.edu",
        },
        {
            name: "Rivkah-Esther Henig",
            photo: rivkah,
            position: "Consultant",
            year: "Sophomore",
            major: "Finance & Accounting",
            hometown: "Brooklyn, NY",
            linkedin: "https://www.linkedin.com/in/rivkah-h-00ba08304/",
            email: "rh3801@stern.nyu.edu",
        },
        {
            name: "Alina Panteleeva",
            photo: alina,
            position: "Consultant",
            year: "Sophomore",
            major: "Math & Economics",
            hometown: "Moscow, Russia",
            linkedin: "https://www.linkedin.com/in/alina-panteleeva/",
            email: "ap8383@nyu.edu",
        },
        {
            name: "Alix Yoon",
            photo: alix,
            position: "Consultant",
            year: "Sophomore",
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
                member7={execBoardData[6]}
                member8={execBoardData[7]}
                member9={execBoardData[8]}
                member10={execBoardData[9]}
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
                member12={consultantsData[11]}
            />
        </div>
    );
}

export default Team;
