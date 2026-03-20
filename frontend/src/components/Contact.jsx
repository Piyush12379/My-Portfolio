import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

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

    const contactInfo = [
        {
            icon: <Mail size={22} />,
            label: "Email",
            value: "praj1230000@gmail.com",
            href: "mailto:praj1230000@gmail.com",
            color: "#38bdf8"
        },
        {
            icon: <Phone size={22} />,
            label: "Phone",
            value: "+91-7992356070",
            href: "tel:+917992356070",
            color: "#22c55e"
        },
        {
            icon: <Github size={22} />,
            label: "GitHub",
            value: "Piyush12379",
            href: "https://github.com/Piyush12379",
            color: "#f3f4f6"
        },
        {
            icon: <Linkedin size={22} />,
            label: "LinkedIn",
            value: "Piyush Raj",
            href: "https://www.linkedin.com/in/piyush-raj-13802129b",
            color: "#3b82f6"
        }
    ];

    return (
        <section id="contact" className="section-container relative flex flex-col items-center max-w-6xl py-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full"
            >
                <div className="text-center mb-16">
                    <p className="text-primary font-mono text-base mb-4 tracking-widest uppercase">06. What's Next?</p>
                    <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-textLight drop-shadow-md">Get In Touch</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Contact Info */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-textMain mb-4">Let's talk about everything!</h3>
                            <p className="text-textLight text-lg leading-relaxed">
                                Although I'm currently focused on my studies at LPU, my inbox is always open.
                                Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactInfo.map((info, idx) => (
                                <a 
                                    key={idx} 
                                    href={info.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-panel p-6 rounded-2xl flex flex-col gap-3 group hover:-translate-y-1 transition-all duration-300 hover:border-white/20"
                                >
                                    <div 
                                        className="w-12 h-12 rounded-full flex items-center justify-center bg-darker/50 border border-white/5 group-hover:scale-110 transition-transform duration-300"
                                        style={{ color: info.color }}
                                    >
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono text-textLight uppercase tracking-wider mb-1">{info.label}</p>
                                        <p className="text-textMain font-medium truncate" style={{ maxWidth: '100%' }}>{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left bg-slate-800/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl w-full shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-xs font-mono tracking-widest text-textLight uppercase">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-slate-700/50 border-b-2 border-slate-600 p-3 text-textMain focus:outline-none focus:border-primary focus:bg-primary/10 transition-all duration-300 rounded-t-lg"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-xs font-mono tracking-widest text-textLight uppercase">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-slate-700/50 border-b-2 border-slate-600 p-3 text-textMain focus:outline-none focus:border-primary focus:bg-primary/10 transition-all duration-300 rounded-t-lg"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-xs font-mono tracking-widest text-textLight uppercase">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="bg-slate-700/50 border-b-2 border-slate-600 p-3 text-textMain focus:outline-none focus:border-primary focus:bg-primary/10 transition-all duration-300 resize-none rounded-t-lg"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="mt-6 group relative px-10 py-4 font-mono font-medium text-white rounded-full overflow-hidden shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-all duration-300 self-center lg:self-start"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/80 to-secondary/80 transition-all duration-300 ease-out group-hover:scale-105"></span>
                            <span className="absolute inset-0 w-full h-full border border-white/20 rounded-full transition-all duration-300 ease-out group-hover:border-white/50"></span>
                            <span className="relative z-10 flex items-center gap-2 tracking-wide">
                                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent successfully!' : 'Send Message'}
                            </span>
                        </button>
                    </form>
                </div>

                <div className="mt-24 text-textLight font-mono text-sm flex flex-col items-center gap-2 border-t border-slate-700/50 pt-8">
                    <p>Designed & Built by Piyush Raj</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
