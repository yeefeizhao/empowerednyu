import React from "react";
import "./TeamMemberCard.css";
import liphoto from './images/linkedin.png'
import emailphoto from './images/mail.png'

function TeamMemberCard({
    name,
    photo,
    position,
    year,
    major,
    hometown,
    linkedin,
    email,
}) {
    return (
        <div className="member-card">
            <div className="member-card-container">
                <img className="member-photo" src={photo} alt={name} />

                <div className="member-card-text1">
                    <h3 className="member-name">{name}</h3>
                    <p className="member-position">{position}</p>
                </div>

                <div className="member-card-text2">
                    <p className="member-year">{year}</p>
                    <p className="member-major">{major}</p>
                    <p className="member-hometown">{hometown}</p>
                </div>
                <div className="member-card-links">
                    <a href={linkedin} target="_blank" rel="noreferrer">
                        <img src={liphoto} alt="linkedin" />
                    </a>
                    <a href={`mailto:${email}`}>
                        <img src={emailphoto} alt="email" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TeamMemberCard;
