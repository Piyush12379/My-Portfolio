import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simple simulation of API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="section-container relative flex flex-col items-center max-w-2xl py-32 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full"
            >
                <p className="text-primary font-mono text-base mb-4">06. What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-textMain mb-6">Get In Touch</h2>

                <p className="text-textLight text-lg mb-12">
                    Although I'm currently focused on my studies at LPU, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-mono text-textLight">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-dark border border-slate-700 rounded p-3 text-textMain focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-mono text-textLight">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-dark border border-slate-700 rounded p-3 text-textMain focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm font-mono text-textLight">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-dark border border-slate-700 rounded p-3 text-textMain focus:outline-none focus:border-primary transition-colors resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="mt-4 px-8 py-4 border border-primary text-primary font-mono rounded hover:bg-primary/10 transition-colors mx-auto inline-block"
                    >
                        {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent successfully!' : 'Say Hello'}
                    </button>
                </form>

                <div className="mt-24 text-textLight font-mono text-sm flex flex-col items-center gap-2">
                    <p>Designed & Built by Piyush Raj</p>
                    <div className="flex gap-4">
                        <a href="https://github.com/Piyush12379" className="hover:text-primary transition-colors">GitHub</a>
                        <a href="www.linkedin.com/in/piyush-raj-13802129b" className="hover:text-primary transition-colors">LinkedIn</a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
