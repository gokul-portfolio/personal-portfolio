import React from 'react';
import { Helmet } from 'react-helmet-async';

import Testimonial from '../components/home/Testimonial';
import ContactUs from '../components/contact/ContactUs';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact | Gokul Portfolio — MERN Stack Developer & UI/UX Designer</title>
                <meta
                    name="description"
                    content="Get in touch with Gokul, a MERN Stack Developer & UI/UX Designer. Let's collaborate on modern web projects, UI/UX design, and full-stack applications."
                />
                <meta
                    name="keywords"
                    content="Contact Gokul, MERN Stack Developer Contact, UI/UX Designer Contact, Web Developer Contact, Hire Developer"
                />
                <meta property="og:title" content="Contact | Gokul Portfolio" />
                <meta
                    property="og:description"
                    content="Contact Gokul for MERN development, UI/UX design and modern web application projects."
                />
                <meta property="og:type" content="website" />
            </Helmet>

            {/* Contact Info Section */}
            <ContactUs />

            {/* Contact Form Section */}
            {/* <ContactForm /> */}

            {/* Optional Testimonials */}
            {/* <Testimonial /> */}
        </>
    );
};

export default ContactPage;
