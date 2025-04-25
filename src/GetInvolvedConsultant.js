import React from "react";
import "./GetInvolvedConsultant.css";
import consultantphoto from "./images/consultantphoto.jpg";
import GetInvolvedDropDown from "./GetInvolvedDropDown";

const consultantData = [
    {
        title: "When is the next application period?",
        content:
            "EmpowerED is currently recruiting for Fall 2025! You'll find the application link to the left.",
    },
    {
        title: "Can I still be a consultant if I’m not returning to campus in Fall 2025?",
        content:
            "As of now, we ask that consultants be located on the NYC campus for the Fall 2025 semester in order to be a consultant. A majority of our clients operate in Eastern Standard Time (EST) so we ask that you commit to attending any EmpowerED meetings in EST and be flexible.",
    },
    {
        title: "What is it like to work on a project?",
        content:
            "Every project starts with a perceived problem or opportunity. As consultants, it is our job to recognize the potential for an organization to be different. Over the course of a semester, the team’s role is to see where an opportunity may exist and subsequently build a strategy to capture it. Teams brainstorm, research, and test potential solutions that they recommend or create for the partnering nonprofit. Consulting isn't for everyone, but if you're a problem solver or creative thinker, working on consulting projects can be incredibly rewarding!",
    },
    {
        title: "Can I apply if I do not have consulting experience?",
        content:
            "Yes! The short answer is that your major, year and experience will not limit you during the application process. The longer answer is that we strive for diversity of majors and backgrounds. At EmpowerED, we treat consulting as a creative process as well as a strategic process. We recognize that everyone has something to offer, so if we can successfully bring together a range of perspectives, we can create better and more innovative solutions for our partners.",
    },
    {
        title: "Can I apply if I am a graduate student?",
        content:
            "Yes! We will reach out to you after you apply to discuss the specifics regarding your potential role within EmpowerED.",
    },
    {
        title: "What does the application process consist of?",
        content:
            "For new members, there will be an online application with a few short answer questions and one essay question. After completing this, applicants may be invited to an interview so we can further understand their interest in educational equity and our organization. For returning consultants and project managers, there will be an online application consisting of a few short answer questions. Decisions will be based on the application and previous evaluations.",
    },
    {
        title: "How can I make my application stand out?",
        content:
            "EmpowerED is looking for students who enjoy working in teams and are passionate about making a difference in the field of education. Don’t be afraid to make your application a personal statement. Show us what motivates you and why you believe your unique perspective can contribute to a challenging team project. Also, make sure to use the resources provided to you within the online application!",
    },
    {
        title: "Can I apply to join the Executive Board?",
        content:
            "Absolutely! The Executive Board is what allows EmpowerED Consulting to function as a whole. Please let us know about your interest in joining E-Board in your application and we can further discuss it during the interview.",
    },
];

function GetInvolvedConsultant() {
    return (
        <div className="get-involved-consultant">
            <div className="get-involved-consultant-container">
                <div className="get-involved-consultant-info">
                    <div className="get-involved-consultant-text">
                        <h2>For college students</h2>
                        <p>
                            Apply to join a consulting project team! Your
                            service alongside other passionate students will
                            help nonprofits achieve their full potential.
                        </p>
                        <p>
                            Coffee chat forms open! Sign up{" "}
                            <a
                                className="coffee-chat-link"
                                href="https://forms.gle/uiVfAGvVxdj5o1B97"
                                target="_blank"
                                rel="noreferrer"
                            >
                                here
                            </a>
                            .
                        </p>
                        <div className="consultant-apply">
                            <p>
                                Applications are closed for the Fall 2025 cycle.
                                <br />
                                Follow our updates on Instagram!
                                <br />
                                Applications closed on 4/11/2025 at 11:59 PM EST.
                            </p>
                            <a
                                className="consultant-button-link"
                                href="https://forms.gle/ZBUSmZansgeyPR6J6"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="consultant-button">
                                    Application
                                </button>
                            </a>
                        </div>
                    </div>
                    <img src={consultantphoto} alt="consultantphoto" />
                </div>
                <div className="get-involved-consultant-dropdown">
                    <GetInvolvedDropDown data={consultantData} />
                </div>
            </div>
        </div>
    );
}

export default GetInvolvedConsultant;
