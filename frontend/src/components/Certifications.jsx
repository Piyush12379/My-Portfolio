import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Sparkles, Terminal } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            title: "Social Networks",
            issuer: "NPTEL",
            icon: <Share2 size={24} />,
            color: "#38bdf8", // primary cyan
            bgGlow: "rgba(56, 189, 248, 0.15)",
            description: "Completed comprehensive coursework on social network analysis, graph theory, and real-world network dynamics.",
            link: "/NPTEL Social Network.pdf"
        },
        {
            title: "Master Generative AI",
            issuer: "Infosys",
            icon: <Sparkles size={24} />,
            color: "#a855f7", // purple
            bgGlow: "rgba(168, 85, 247, 0.15)",
            description: "Advanced certification covering LLMs, prompt engineering, and the architecture behind modern generative AI models.",
            link: "/Master Generative AI Infosys.pdf"
        },
        {
            title: "Python Programming",
            issuer: "CipherSchools",
            icon: <Terminal size={24} />,
            color: "#22c55e", // green
            bgGlow: "rgba(34, 197, 94, 0.15)",
            description: "In-depth certification focusing on Python fundamentals, data structures, algorithms, and backend development principles.",
            link: "/Cipherschool Python.pdf"
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    };

    return (
        <section id="certifications" className="section-container relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold flex items-center gap-2 mb-12">
                    <span className="text-primary font-mono text-xl">04.5</span> Licenses & Certifications
                    <div className="h-[1px] bg-slate-700 flex-1 ml-4 hidden sm:block"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certs.map((cert, index) => (
                        <motion.a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={cert.title}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -8 }}
                            className="glass-panel p-8 rounded-2xl flex flex-col gap-4 items-start relative overflow-hidden group transition-all duration-500 hover:border-white/20 cursor-pointer"
                            style={{
                                boxShadow: `0 0 0 rgba(0,0,0,0)`
                            }}
                        >
                            {/* Hover glowing background */}
                            <div 
                                className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] -z-10 transition-colors duration-700 blur-2xl opacity-0 group-hover:opacity-100"
                                style={{ backgroundColor: cert.color }}
                            ></div>

                            {/* Icon Box */}
                            <div 
                                className="w-14 h-14 rounded-full flex items-center justify-center mb-2 shadow-inner border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                                style={{ 
                                    backgroundColor: `${cert.color}15`, 
                                    color: cert.color,
                                    borderColor: `${cert.color}30`
                                }}
                            >
                                {cert.icon}
                            </div>
                            
                            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-textLight leading-tight">
                                {cert.title}
                            </h3>
                            <p className="font-mono text-xs tracking-widest uppercase mt-[-8px]" style={{ color: cert.color }}>
                                {cert.issuer}
                            </p>
                            
                            <p className="text-textLight leading-relaxed mt-2 text-sm">
                                {cert.description}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Certifications;
