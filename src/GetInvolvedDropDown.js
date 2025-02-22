import React from "react";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from "react-headless-accordion";
import "./GetInvolvedDropDown.css";

function GetInvolvedDropDown({ data }) {
    return (
        <div className="get-involved-drop">
            <h2>FAQ</h2>
            <Accordion className="get-involved-drop-container">
                {data?.map((item, index) => (
                    <AccordionItem key={index}>
                        {({ open }) => (
                            <>
                                <AccordionHeader className="get-involved-drop-button">
                                    <h3
                                        className={`accordion-title ${
                                            open ? "accordion-active" : ""
                                        }`}
                                    >
                                        <p>{item.title}</p>
                                        <p>+</p>
                                    </h3>
                                </AccordionHeader>

                                <AccordionBody className="get-involved-drop-body">
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

export default GetInvolvedDropDown;
