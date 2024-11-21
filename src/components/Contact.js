import React from 'react'
import { useState } from "react";
import emailjs from '@emailjs/browser';
import EmailKeys from './EmailKeys.js'

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        inquiry: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        if (!formData.inquiry.trim()) newErrors.inquiry = "Inquiry is required.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
            const templateParams = {
                from_name: formData.name,
                _inquiry: formData.inquiry,
                _message: formData.message,
                from_email: formData.email,
            };
    
            console.log("Template Params: ", templateParams);
    
            emailjs
                .send(EmailKeys.serviceId, EmailKeys.templateId, templateParams, EmailKeys.publicId)
                .then(
                    () => {
                        setFormData({
                            name: "",
                            email: "",
                            inquiry: "",
                            message: "",
                        });
                        setErrors({});
                        alert('Form submitted successfully! We will get back to you as soon as possible!');
                    },
                    () => {
                        alert('Failed to send email. Please try again later.');
                    }
                );
        }
    };

    return (
        <section className='ContactSection Section'>
            <p className='ContactBody'>
                Prospective clients please email <a href='mailto:Kyle.Weber@webertaxaccounting.com'>kyle.weber@webertaxaccounting.com</a> describing the nature of your inquiry.
                
                If further documents are required to understand the complexity and scope of your request, we will provide you a secure link to our portal to upload necessary documentation. 
                
                If an introductory meeting is requested, please indicate so in your inquiry.
            </p>

            <form className="ContactForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="First and Last Name"
                value={formData.name}
                onChange={handleChange}
                style={{ borderColor: errors.name ? "red" : "" }}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="example@example.com"
                value={formData.email}
                onChange={handleChange}
                style={{ borderColor: errors.email ? "red" : "" }}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}

            <label htmlFor="inquiry">Inquiry:</label>
            <select
                name="inquiry"
                id="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                style={{ borderColor: errors.inquiry ? "red" : "" }}
            >
                <option value="">Select an option</option>
                <option value="A Prospective Client">Prospective Client</option>
                <option value="A Meeting Request">Meeting Request</option>
                <option value="Other - Explained in Message">Other</option>
            </select>
            {errors.inquiry && <span className="error-message">{errors.inquiry}</span>}

            <label htmlFor="message">Message:</label>
            <textarea
                name="message"
                id="message"
                placeholder="Type Here"
                value={formData.message}
                onChange={handleChange}
                style={{ borderColor: errors.message ? "red" : "" }}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}

            <button className="FormBtn" type="submit">
                Submit
            </button>
        </form>
        </section>
    )
}

export default Contact