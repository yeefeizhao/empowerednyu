import React from "react";
import "./GetInvolvedNonprofit.css";
import nonprofitphoto from "./images/nonprofitphoto.jpg";
import GetInvolvedDropDown from "./GetInvolvedDropDown";

const nonprofitData = [
    {
        title: "What are some examples of projects EmpowerED has done?",
        content:
            "Please take a look at the “Our Work” section on our website. Here you can see examples of projects we have completed in the past. Our most popular project topics seem to focus on recruitment, marketing, and fundraising strategies, as well as general SWOT analysis of an organization or impact measurement. However, these are just some examples of projects we have done, and can adapt to best serve the specific needs of your organization. Please reach out and we can further discuss!",
    },
    {
        title: "What is expected from us if we decide to partner with EmpowerED?",
        content:
            "We ask for a maximum time commitment of 2 hours a week from our partners. Usually, the only weeks that will actually reach that maximum are during the initial and final phases of the projects. We need active and consistent communication from our non profit partners so that our consulting teams are best suited to deliver comprehensive and innovative recommendations. After confirming a partnership, EmpowerED sends all partners a “Code of Conduct and Partnership Guideline” document that essentially delineates the responsibilities and structure of the partnership.",
    },
    {
        title: "What does the project timeline look like over the semester?",
        content:
            "After finalizing our consulting teams, the project manager of the team (essentially the team leader) will be in contact with you to schedule the first meeting. From the first meeting, there will be approximately ten weeks until the final deliverables/recommendation will be presented. In between, around the 5 or 6 week mark, there will be a midpoint presentation to highlight the progress made by the consulting team. Throughout the process however, the consulting team will be in contact with the organization with any questions or progress updates.",
    },
    {
        title: "What can we expect to gain from working with EmpowerED?",
        content:
            "EmpowerED serves our clients to address any challenges they might have. We partner with nonprofits to provide recommendations that apply innovative working methods and drive operational improvements. We hope that by delivering our recommendations, we are in turn helping the organization to better serve its student base.",
    },
    {
        title: "What types of clients do you work with?",
        content:
            "We work exclusively with education focused nonprofits based in New York City. The reason is because EmpowerED is dedicated to social impact missions, specifically in the education sector. We aim to work with clients in the New York City area, as having a close proximity is important for in-person meetings and is crucial for the best experience for both our consultants and clients.",
    },
    {
        title: "Can we work with EmpowerED more than once?",
        content:
            "Absolutely! We have had our clients return in the past, working with us consecutively each semester. If you feel that EmpowerED was able to benefit your organization and we are mutually a good fit, we would be happy to work with you again.",
    },
];

function GetInvolvedNonprofit() {
    return (
        <div className="get-involved-nonprofit">
            <div className="get-involved-nonprofit-container">
                <div className="get-involved-nonprofit-info">
                    <div className="get-involved-nonprofit-text">
                        <h2>For nonprofits</h2>
                        <p>
                            For only 60 minutes of time commitment a week, your
                            organization can access the skills and services of a
                            trained and passionate student consulting team.
                        </p>
                        <p>
                            Each semester, we are looking for non-profit
                            partners that we can work with to achieve a shared
                            mission in educational equity.
                        </p>
                    </div>
                    <img src={nonprofitphoto} alt="nonprofitphoto" />
                </div>
                <div className="get-involved-nonprofit-dropdown">
                    <GetInvolvedDropDown data={nonprofitData} />
                </div>
            </div>
        </div>
    );
}

export default GetInvolvedNonprofit;
