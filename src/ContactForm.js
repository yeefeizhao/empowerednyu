import React, { useState } from "react";
import { db } from "./firebase"; // Make sure Firebase is configured
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import axios from "axios";
import "./ContactForm.css";

const sendEmailURL = "https://sendemail-duhf4xgxba-uc.a.run.app/sendEmail";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            await addDoc(collection(db, "mail"), {
                to: "empoweredconsultingnyu@gmail.com",
                message: {
                    subject: formData.subject,
                    text: `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\n${formData.message}`,
                    html: `<p><strong>Name:</strong> ${formData.name}</p>
                           <p><strong>Email:</strong> ${formData.email}</p>
                           <p><strong>Company:</strong> ${formData.company}</p>
                           <p>${formData.message}</p>`,
                },
                createdAt: serverTimestamp(),
            });

            axios.get(sendEmailURL, {
                params: {
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    subject: formData.subject,
                    message: formData.message,
                },
            });

            setSuccess(true);
            setFormData({
                name: "",
                email: "",
                company: "",
                subject: "",
                message: "",
            });
        } catch (err) {
            setError("Something went wrong. Please try again.");
            console.error("Error sending email:", err);
        }

        setLoading(false);
    };

    return (
        <div className="contact-form">
            <div className="contact-form-container">
                <form onSubmit={sendEmail} className="contact-form-fields">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        placeholder="Company (Optional)"
                        value={formData.company}
                        onChange={handleChange}
                    />
                    <label htmlFor="subject">Subject</label>
                    <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button className="contact-submit" type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
                {success && <p>Message sent successfully!</p>}
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default ContactForm;
