import React from "react";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from "react-headless-accordion";
import './AboutDropDown.css'

function AboutDropDown() {
    const data = [
        { title: "Our beliefs", content: "We believe in students, educational justice, and the power of opportunity. Passion and commitment drive change, and college students can make a meaningful impact by working with educational non-profits." },
        { title: "Our culture", content: "We are passionate about ensuring all students have opportunities to succeed. We embrace inclusivity as a strength, stay committed to educational justice, and maintain a positive mindset to drive change." },
        { title: "Our process", content: "We prioritize empathy by understanding different perspectives, foster creativity to find innovative solutions, take initiative in seeking knowledge and ideas, and embrace teamwork to collaborate effectively and achieve our goals." },
    ];
    return (
        <div className="about-drop">
            <Accordion className="about-drop-container">
                {data.map((item, index) => (
                    <AccordionItem key={index}>
                        {({ open }) => (
                            <>
                                <AccordionHeader className="about-drop-button">
                                    <h3
                                        className={`accordion-title ${
                                            open ? "accordion-active" : ""
                                        }`}
                                    >
                                        <p>{item.title}</p><p>+</p>
                                    </h3>
                                </AccordionHeader>

                                <AccordionBody className="about-drop-body">
                                    <div className="accordion-body">
                                        {item.content}
                                    </div>
                                </AccordionBody>
                            </>
                        )}
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

export default AboutDropDown;
