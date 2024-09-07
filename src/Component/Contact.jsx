import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulate form submission (replace with actual API call)
        try {
            // Simulate a successful API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setFormStatus('Your message has been sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setFormStatus('There was an error sending your message. Please try again.');
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
                    <u>Contact Me</u>
                </h2>

                <div className="flex flex-col md:flex-row">
                    {/*  Contact Details */}
                    <div className="w-full md:w-2/2 mb-10 md:mb-0 md:mr-10">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
                        <p className="text-lg text-gray-700 mb-6">
                            Feel free to reach out to me via the contact form or through the following details:
                        </p>
                        <ul className="text-lg text-gray-700">
                            <li className="mb-4">
                                <strong>Email:</strong> <a href="mailto:ajitbodkhe2017@gmail.com" className="text-blue-600 hover:underline">ajitbodkhe2017@gmail.com</a>
                            </li>
                            <li className="mb-4">
                                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ajit-bodkhe-full-stack-developer/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/ajit-bodkhe</a>
                            </li>
                            <li className="mb-4">
                                <strong>GitHub:</strong> <a href="https://github.com/abodkhe1/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/ajitbodkhe</a>
                            </li>
                            <li>
                                <strong>Contact No:</strong> 8605149238
                            </li>
                        </ul>
                    </div>
                    {/* </div> */}


                    {/* Contact Form */}
                    {/* <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-800 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-800 font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                        {formStatus && <p className="mt-4 text-green-600">{formStatus}</p>}
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Contact;
