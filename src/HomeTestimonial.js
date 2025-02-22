import React, { useState } from "react";
import "./HomeTestimonial.css";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        text: "The EmpowerED team started out by asking probing questions to better understand our organization and priorities. They did an excellent job empathizing with our limitations and capitalizing on our strengths and ultimately recommended a strategy that was easy to implement and helped us meet our ambitious goals. Every interaction with the EmpowerED team was extremely professional and their work products exceeded our expectations.",
        person: "Tabitha Hamon, GO Project",
    },
    {
        text: "The team at EmpowerED was an excellent resource for Oliver Scholars. As a small nonprofit, we genuinely appreciate the time spent analyzing what makes us competitive and honing in on the best way to communicate that to our students, families, and partners. The team was extremely professional and produced excellent work. We look forward to continuing the relationship between Oliver Scholars and EmpowerED!",
        person: "Oliver Scholars",
    },
    {
        text: "360° Skills Academy has worked with EmpowerED on multiple occasions and our organization always benefits tremendously from the dedication of EmpowerED consultants. They’ve helped us launch successful events, enhance our curriculum, and reimagine how we engage with our program participants. EmpowerED has made an extraordinary impact on our organization.",
        person: "360° Skills Academy",
    },
    {
        text: "Our EmpowerED team devised a fundraising strategy for our Star Learning Center program that was thoroughly researched, highly creative and ready for implementation. In just 10 weeks, they worked to gain a deep and realistic understanding of our program’s needs and capacities, and provided a well-crafted plan in their final presentation. The group is a tremendous resource for nonprofits in the education field, especially in this time of intense budget constraints.",
        person: "Goddard Riverside - Star Learning Center",
    },
    {
        text: "EmpowerED were exactly what our organization needed during a tough time and gave us a great first step to attacking a huge fundraising need of ours. Thank you so much!",
        person: "Kids Creative",
    },
    {
        text: "Breakthrough New York is a 10-year academic enrichment and college access/success program that works with low-income students from NYC from middle school to and through college.",
        person: "Breakthrough New York",
    },
];

function Testimonial() {
    const [index, setIndex] = useState(0);

    const nextTestimonial = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <div className="testimonial">
            <div className="testimonial-container">
                <div className="testimonial-top">
                    <h2>What clients say</h2>
                    <div className="testimonial-buttons">
                        <button
                            onClick={prevTestimonial}
                            className="testimonial-button"
                        >
                            <p>← prev</p>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="testimonial-button"
                        >
                            <p>next →</p>
                        </button>
                    </div>
                </div>

                <div className="testimonial-text-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="testimonial-text"
                        >
                            <div className="testimonial-quote">"{testimonials[index].text}"</div>
                            <div className="testimonial-person">
                                - {testimonials[index].person}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
