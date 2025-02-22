import React from "react";
import "./ServicesOfferings.css";
import ServicesOption from "./ServicesOption";

const servicesData1 = [
    {
        title: "Market Analysis",
        description:
            "We help education non-profits maximize their impact by analyzing trends and identifying opportunities for growth. Our team believes in the potential of all individuals and works to provide data-driven insights for informed decision-making.",
    },
    {
        title: "Impact Measurement",
        description:
            "Measuring success is key to driving meaningful change. Too often, organizations launch well-intentioned initiatives without robust evaluation systems. As a diverse student team, we help design frameworks to track progress, assess social outcomes, and refine strategies for greater impact.",
    },
];

const servicesData2 = [
    {
        title: "Retention & Recruitment",
        description:
            "Sustaining a nonprofit requires strong volunteer and employee engagement. We assist in developing programs and policies—such as defining company culture, conducting exit interviews, and implementing referral systems—to enhance organizational effectiveness.",
    },
    {
        title: "Financing Strategy",
        description:
            "Technology, culture, and policy continually reshape nonprofit financing. Whether through social media campaigns, grants, crowdfunding, memberships, or strategic partnerships, we help organizations explore funding opportunities to achieve their vision.",
    },
    {
        title: "EdTech Research",
        description:
            "Educational technology is transforming learning experiences. We help nonprofits navigate tools like Khan Academy, Kahoot!, and Flipgrid to identify the best solutions for their needs, ensuring innovative and effective educational strategies.",
    },
];

function ServicesOfferings() {
    return (
        <div className="services-offerings">
            <div className="services-offerings-container">
                <h2>Our services</h2>
                <div className="services-offerings-row">
                    {servicesData1.map((item, index) => (
                        <ServicesOption
                            key={index}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
                <div className="services-offerings-row">
                    {servicesData2.map((item, index) => (
                        <ServicesOption
                            key={index}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesOfferings;
